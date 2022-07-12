const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const router = new Router();

module.exports = router;

//Models
const Rating = require("../models").rating;
const Category = require("../models").category;

// Add a New Star Value
router.post("/", async (req, res, next) => {
  try {
    const { stars, categoryId, catId } = req.body;

    const newStarValue = await Rating.create({
      stars,
      categoryId,
      catId,
    });

    res.send(newStarValue);
  } catch (e) {
    next(e);
  }
});

//Get all categories (rating/)
router.get("/", async (req, res, next) => {
  try {
    const all = await Category.findAll();
    res.send(all);
  } catch (e) {
    next(e);
  }
});
