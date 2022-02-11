const express = require("express");
const router = express.Router();
const answerController = require("../controllers/answer");

let path = require("path");

//res.sendFile(path.resolve("temp/index.html"));

router.get("/", (reqest, response) => {
  let htmlPage = path.join(__dirname, "../views/index.html");
  response.sendFile(htmlPage);
});

router.get("/about", (reqest, response) => {
  //response.sendFile("../views/about.html", { root: __dirname });
  let htmlPage = path.join(__dirname, "../views/about.html");
  response.sendFile(htmlPage);
});

router.get("/about-me", (reqest, response) => {
  response.redirect("/about");
});

router.get("/podaci", (reqest, response) => {
  console.log("podaci");
  response.write("podaci");
  response.end();
});

router.get("/read_a", answerController.read_a);

/*router.use((reqest, response) => {
  let htmlPage = path.join(__dirname, "../views/404.html");
  response.status(404).sendFile(htmlPage);
});*/

module.exports = router;
