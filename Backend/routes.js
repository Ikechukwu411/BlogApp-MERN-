const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello From The server side");
});

router.get("/news", (req, res) => {
  res.send(`<h1>News Page</h1>`);
});
router.get("/music", (req, res) => {
  res.send(`<h1>Music Page</h1>`);
});
router.get("/entertainment", (req, res) => {
  res.send(`<h1>Entertainment Page</h1>`);
});
router.get("/contact-us", (req, res) => {
  res.send(`<h1>Contact us  Page</h1>`);
});
module.exports = router;
