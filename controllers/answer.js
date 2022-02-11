const express = require("express");

//const app = express();
//app.use(express.urlencoded({ extended: true }));

const read_a = (request, response) => {
  console.log(request.body);
  response.end(JSON.stringify(request.body));
};

module.exports = {
  read_a,
};
