const express = require("express");
const mongoose = require("mongoose");
const Auction = require("../models/Auction");

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const { product, startingPrice, startTime, endTime } = req.body;
    if (!mongoose.Types.ObjectId.isValid(product)) {
      return res.status(400).json({ msg: "Invalid product ID format" });
    }

    const auction = new Auction({ product, startingPrice, startTime, endTime });

    await auction.save();
    res.status(201).json({ msg: "Auction created successfully", auction });
  } catch (err) {
    console.error("Error creating auction:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
