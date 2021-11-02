// require
const ejs = require("ejs");
const axios = require("axios");
const path = require("path");
const colorsInfo = require("./modules/color-data.js");
require('dotenv').config();

// server 
const express = require("express"),
  app = express(),
  port = 3000,
  engine = require("ejs-mate");


// app settings
app.use("/", express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.engine("ejs", engine);

// ROUTES

// Color sort
app.get("/color", (req, res) => {
  let colors = colorsInfo.colorInfo;
  res.render("index", {
    colors
  });
});

// Crypto data
app.get("/crypto", (req, res) => {

  res.render("crypto");
});




// PORT

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});