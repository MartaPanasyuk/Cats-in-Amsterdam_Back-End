const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const router = new Router();

module.exports = router;

// Model

const Cat = require("../models").cat;
const Comment = require("../models").comment;
const Image = require("../models").image;
const Rating = require("../models").rating;
const User = require("../models").user;

//Get All Cats with Commnets, Rating, Images

router.get("/", async (req, res, next) => {
  try {
    const allCats = await Cat.findAll({
      include: [Image, Comment, Rating],
    });
    res.send(allCats);
  } catch (e) {
    next(e);
  }
});

//Get One Cat by ID with Comment, Images and Rating { model: Comment, include: [User] },
router.get("/:id", async (req, res, next) => {
  try {
    const catId = parseInt(req.params.id);
    const oneCat = await Cat.findByPk(catId, {
      include: [Image, { model: Comment, include: [User] }, Rating],
    });
    res.send(oneCat);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//Get Comments with Cat
router.get("/comment/:id", async (req, res, next) => {
  try {
    const commentId = parseInt(req.params.id);
    const oneComment = await Comment.findByPk(commentId, {
      include: [User, Cat],
    });
    res.send(oneComment);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

//PUT  Increasing  Likes
router.put("/:id", async (req, res, next) => {
  try {
    const catId = parseInt(req.params.id);

    const catToUpdate = await Cat.findByPk(catId, {
      include: [Image, Comment, Rating],
    });
    const updaytedCat = await catToUpdate.increment(
      { like: 1 },
      { where: { id: catId } }
    );
    res.send(updaytedCat);
  } catch (e) {
    next(e);
  }
});

// Add a New Cat
router.post("/addCat", authMiddleware, async (req, res, next) => {
  try {
    const { name, picture, description, latitude, longitude } = req.body;

    if (!name || !description || !picture) {
      return res.status(400).send("Please fill in the form");
    }
    const newCat = await Cat.create({
      name,
      picture,
      description,
      latitude,
      longitude,
    });

    res.send(newCat);
  } catch (e) {
    next(e);
  }
});

//Add Image and Location to the existing Cat
router.post("/:id", authMiddleware, async (req, res, next) => {
  try {
    const { url, latitude, longitude, userId, catId } = req.body;

    const addImgLocation = await Image.create({
      url,
      latitude,
      longitude,
      userId,
      catId,
    });

    res.send(addImgLocation);
  } catch (e) {
    next(e);
  }
});

//Add a new Comment
router.post("/comment/:id", authMiddleware, async (req, res, next) => {
  try {
    const { text, userId, catId } = req.body;
    if (!text) {
      return res.status(400).send("Please add a text");
    }
    const newComment = await Comment.create({
      text,
      userId,
      catId,
    });

    const fullComment = await Comment.findByPk(newComment.id, {
      include: [User],
    });
    // comment findbypk include user

    // { id, text, userId, catId, user: {} }
    res.send(fullComment);
  } catch (e) {
    next(e);
  }
});
