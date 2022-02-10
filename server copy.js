const http = require("http");
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
      response.writeHead(404);
      response.write("File not found");
      response.end();
    } else {
      //response.write(data);
      response.end(data);
    }
  });
}

http.createServer(onRequest).listen(8000);
