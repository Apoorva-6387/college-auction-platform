const express = require("express");
const Product = require("../models/Product");

const router = express.Router();
router.post("/create", async (req, res) => {
  try {
    const { name, description, startingPrice, image, seller } = req.body;
    const product = new Product({ name, description, startingPrice, image, seller });
    
    await product.save();
    res.status(201).json({ msg: "Product listed successfully", product });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().populate("seller", "name email");
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
