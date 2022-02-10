const express = require("express");

const app = express();

app.listen(3000);

app.get("/", (reqest, response) => {
  response.send("./views/index.html", { root: __dirname });
});

app.get("/about", (reqest, response) => {
  response.send("./views/about.html", { root: __dirname });
});
