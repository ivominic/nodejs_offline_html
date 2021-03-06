/*const http = require("http");
const fs = require("fs");

function onRequest(request, response) {
  response.setHeader("Content-Type", "text/html");
  let path = "./views/";
  console.log(request.url);
  switch (request.url) {
    case "/":
      path += "index.html";
      response.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      response.statusCode = 200;
      break;
    case "/about-me":
      response.statusCode = 301;
      response.setHeader("Location", "about");
      response.end();
      break;
    default:
      path += "404.html";
      response.statusCode = 404;
      break;
  }
  fs.readFile(path, null, (error, data) => {
    if (error) {
      response.end();
    } else {
      //response.write(data);
      response.end(data);
    }
  });
}

http.createServer(onRequest).listen(3000);
*/
const express = require("express");
const router = require("./routes/routes");

const app = express();

app.listen(3000);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //to get json response

app.use(router);

app.use((reqest, response) => {
  response.status(404).sendFile("./views/404.html", { root: __dirname });
});

console.log("object", express.static("public"));
