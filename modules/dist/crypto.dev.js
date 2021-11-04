"use strict";

// packages
var colors = require("colors");

var axios = require("axios")["default"];

var api = require("./cryptoApi");

require("dotenv").config(); // let api = require("./cryptoApi")
// console.log(api.url);
// cleaned data sets


var newPercentages = [];
var newLastUpdatedDates = []; // const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h";

getData();

function getData() {
  return regeneratorRuntime.async(function getData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios(process.env.API_URL) // respones handlers and function callers
          .then(function (res) {
            var lastUpdatedDates = res.data.map(function (data) {
              return data.last_updated;
            });
            getlastUpdated(lastUpdatedDates);
            var marketChangePercentages = res.data.map(function (data) {
              return data.market_cap_change_percentage_24h;
            });
            getPercentage(marketChangePercentages);
          })["catch"](function (err) {
            console.log(err);
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

function getlastUpdated(data) {
  data.forEach(function (data) {
    newLastUpdatedDates.push(data.slice(0, 19).replace("T", " UTC "));
  });
  console.log(newLastUpdatedDates);
} // less decimals


function getPercentage(data) {
  data.forEach(function (data) {
    newPercentages.push((Math.round(data * 100) / 100).toString()); // new percentage logger

    newPercentages.forEach(function (percentage) {
      if (percentage < 0) {// console.log(colors.red(percentage).toString());
      } else {// console.log(colors.green(percentage));
        }
    });
  });
}