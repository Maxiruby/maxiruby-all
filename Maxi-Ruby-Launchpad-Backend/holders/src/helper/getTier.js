const { Holder } = require("../models/Holder");

const tiers = [
    {
        name: 'Diamond',
        minQuantity: 85000,
        weight: 465.5
    },
    {
        name: 'Platinum',
        minQuantity: 37500,
        weight: 95
    },
    {
        name: 'Gold',
        minQuantity: 10000,
        weight: 40
    },
    {
        name: 'Silver',
        minQuantity: 3000,
        weight: 7
    },
    {
        name: 'Bronze',
        minQuantity: 750,
        weight: 3.2
    }, {
        name: 'None',
        minQuantity: 0,
        weight: 1
    }
];

async function getTier(email) {
    console.log(email);
    const holder = await Holder.findOne({ address: email }); // Eğer holder modelinizde email değil de başka bir şeyi kullanıyorsanız, ona göre bu kısmı güncelleyin.
    console.log(holder);
    if (!holder) {
        return "None"; // Eğer bu kullanıcı bir holder değilse, null dönebilirsiniz. Ya da varsayılan bir tier belirleyip onu döndürebilirsiniz.
    }

    let userTier = null;
    for (let tier of tiers) {

        if (parseFloat(holder.quantity.replace(',', '')) >= tier.minQuantity) {
            userTier = tier.name;
            break;
        }
    }
    console.log(userTier);
    return userTier || 'None'; // Kullanıcının tier bilgisi bulunmazsa, varsayılan olarak 'Bronze' döndürülüyor.
}

exports.getTier = getTier;