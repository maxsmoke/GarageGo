const router = require("express").Router();
const articleRoutes = require("./articles");
const nytRoutes = require("./nyt");

// NYT routes
router.use("/articles", articleRoutes);

router.use("/nyt", nytRoutes);

module.exports = router;
