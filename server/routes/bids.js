const express = require("express");
const Bid = require("../models/Bid");
const Auction = require("../models/Auction");

const router = express.Router();
router.post("/place", async (req, res) => {
  try {
    const { auction, bidder, amount } = req.body;

    const auctionDetails = await Auction.findById(auction);
    if (!auctionDetails || auctionDetails.status !== "ongoing") {
      return res.status(400).json({ msg: "Auction is not available for bidding" });
    }

    if (amount <= auctionDetails.highestBid) {
      return res.status(400).json({ msg: "Bid must be higher than current highest bid" });
    }

    const bid = new Bid({ auction, bidder, amount });
    await bid.save();

    auctionDetails.highestBid = amount;
    auctionDetails.highestBidder = bidder;
    await auctionDetails.save();

    res.json({ msg: "Bid placed successfully", bid });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
