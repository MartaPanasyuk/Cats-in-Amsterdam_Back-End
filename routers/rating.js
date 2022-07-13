const { Router } = require("express");
const authMiddleware = require("../auth/middleware");
const router = new Router();

module.exports = router;

//Models
const Rating = require("../models").rating;
const Category = require("../models").category;
const Cat = require("../models").cat;

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
    const all = await Category.findAll({
      include: Rating,
    });
    res.send(all);
  } catch (e) {
    next(e);
  }
});

//Get One Category with Rating
router.get("/:id", async (req, res, next) => {
  try {
    const categoryId = parseInt(req.params.id);
    const all = await Category.findByPk(categoryId, {
      include: [{ model: Rating, include: [Cat] }],
    });

    const cleanRatings = all.get({ plain: "true" });

    const processRatings = cleanRatings.ratings.reduce((acc, r) => {
      const isCatInArray = acc.find((c) => r.cat.id === c.id);

      if (isCatInArray) {
        const newAcc = acc.map((c) => {
          const { cat, ...cleanRating } = r;
          return c.id === r.cat.id
            ? { ...c, ratings: [...c.ratings, cleanRating] }
            : c;
        });
        return newAcc;
      } else {
        const { cat, ...cleanRating } = r;
        const newAcc = [...acc, { ...r.cat, ratings: [cleanRating] }];
        return newAcc;
      }
    }, []);

    const idealResponse = {
      title: all.title,
      cats: processRatings,
    };

    res.send(idealResponse);
  } catch (e) {
    next(e);
  }
});

/*
const ideal = {
    title: 'fluffiness',
    cats: [
        { name: 'garfield', ratings: [{}, {}, {}]}
    ]
}

*/

/*
test = [
{
"id": 1,
"title": "Ffluffiness",
"createdAt": "2022-07-12T08:31:37.719Z",
"updatedAt": "2022-07-12T08:31:37.719Z",
"ratings": [
{
"id": 1,
"stars": 3,
"createdAt": "2022-07-12T08:31:37.812Z",
"updatedAt": "2022-07-12T08:31:37.812Z",
"catId": 2,
"categoryId": 1
},
{
"id": 3,
"stars": 5,
"createdAt": "2022-07-12T18:13:09.425Z",
"updatedAt": "2022-07-12T18:13:09.425Z",
"catId": 9,
"categoryId": 1
}
]
}
]

const res = test.map((t)=> t.ratings)

const a = res.map((r)=>r.sort((a,b)=>{return b.stars - a.stars}))



*/
