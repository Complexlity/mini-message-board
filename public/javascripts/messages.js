const moment = require("moment");
let date = moment().startOf("day").fromNow();
let date2 = moment().startOf("hour").fromNow();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: date,
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: date2,
  },
];

module.exports = messages;
