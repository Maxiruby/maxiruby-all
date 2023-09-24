const mongoose = require("mongoose");

const holderSchema = new mongoose.Schema({
  address: { type: String, unique: true },
  quantity: { type: String },
  lastQuantity: String,
  quantityDifference: String,
  firstSeen: { type: Date, default: Date.now },
  lastSeen: { type: Date, default: Date.now },
  timesSeen: { type: Number, default: 1 },
});

const statisticsSchema = new mongoose.Schema({
  timestamp: { type: Date, default: Date.now },
  totalHolders: Number,
});

const Holder = mongoose.model("Holder", holderSchema);
const Statistics = mongoose.model("Statistics", statisticsSchema);

export { Holder, Statistics };
