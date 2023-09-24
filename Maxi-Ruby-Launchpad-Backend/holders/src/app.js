const express = require('express');
const cheerio = require('cheerio');
const fs = require('fs');
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require('axios');
const { Holder, Statistics } = require('./models/Holder');
const { User } = require('./models/Users');
const { getTier } = require('./helper/getTier');

const app = express();
const corsOptions = {
    origin: ["http://localhost:3000", "http://localhost:3002", "https://test.maxiruby.com/"],
};
app.use(express.json(corsOptions));
app.use(cors());




async function fetchBSCHolders(tokenAddress) {
    const baseURL = `https://bscscan.com/token/generic-tokenholders2?m=dark&a=${tokenAddress}&s=200000000000000000000000000&sid=38886f7d2aa1414db4335fcaa8843ae2&p=`;


    let allHolders = [];
    let pageNumber = 1;

    while (true) {
        const response = await axios.get(baseURL + pageNumber);
        if (!response.data) break;

        const $ = cheerio.load(response.data);
        const rows = $('.table-responsive tbody > tr');

        if (rows.length === 0) break;

        for (let row of rows) {
            const columns = $(row).find('td');
            const addressLink = $(columns[1]).find('a').attr('href');
            const address = addressLink ? addressLink.split('?a=')[1] : 'Unknown';
            const currentQuantity = $(columns[2]).text().trim();

            // Veritabanına kaydedelim
            let holder = await Holder.findOne({ address: address });
            if (holder) {
                holder.lastQuantity = holder.quantity;
                holder.quantity = currentQuantity;
                holder.quantityDifference = (parseFloat(currentQuantity.replace(',', '')) - parseFloat(holder.lastQuantity.replace(',', ''))).toString();
                holder.lastSeen = Date.now();
                holder.timesSeen++;
            } else {
                holder = new Holder({
                    address: address,
                    quantity: currentQuantity
                });
            }
            await holder.save();

            allHolders.push(holder);
        }


        pageNumber++;
    }

    // Burada tüm holderları işleyin
    for (let holder of allHolders) {
        const userAddress = holder.address;
        const user = await User.findOne({
            "wallets.address": { $regex: new RegExp('^' + userAddress + '$', "i") },
            "wallets.isActive": true
        });;


        if (user) {
            const userTier = await getTier(userAddress);

            user.tier = userTier;
            await user.save();
        }
    }

    // İstatistikleri güncelleyelim
    const statistics = new Statistics({
        totalHolders: allHolders.length
    });
    await statistics.save();

    return allHolders;
}

app.get('/api/holder/:id', async (req, res) => {
    try {

        fetchBSCHolders(req.params.id).then(data => {
            res.status(200).json({ data: data });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})


mongoose
    .connect("mongodb://localhost:27017/launch")
    .then(() => console.log("database connected successfully"))
    .catch((err) => console.log("error connecting to mongodb", err));

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}..`);
});
