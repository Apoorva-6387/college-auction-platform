const mongoose = require("mongoose");

const AuctionSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  startingPrice: { type: Number, required: true },
  highestBid: { type: Number, default: 0 },
  highestBidder: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["ongoing", "completed"], default: "ongoing" },
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
});

module.exports = mongoose.model("Auction", AuctionSchema);
