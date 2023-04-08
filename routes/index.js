const express = require("express");
const router = express.Router();
const messages = require("../data/messages.json");

// router.use((req, res, next) => {
//   console.log(messages);
//   next();
// });

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Complex Place", messages });
});

module.exports = router;
