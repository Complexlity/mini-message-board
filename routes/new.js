const express = require("express");
const router = express.Router();
const messages = require("../data/messages.json");

const dayjs = require("dayjs");
dayjs.extend(relativeTime);
const relativeTime = require("dayjs/plugin/relativeTime");
const fs = require("fs");

const logger = (req, res, next) => {
  console.log("The request url is " + req.url);
  next();
};

// router.use(logger);

router.get("/", (req, res) => {
  res.render("form");
});

router.post("/", (req, res) => {
  const text = req.body.messageText;
  const user = req.body.username;
  const added = dayjs(req.body.added).fromNow();

  messages.push({
    text,
    user,
    added,
  });
  console.log(messages);

  const messagesJSON = JSON.stringify(messages);

  fs.writeFile("./data/messages.json", messagesJSON, (err) => {
    if (err) {
      console.log(err.message);
    }
    res.redirect("/");
  });
});

module.exports = router;
