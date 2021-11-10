"use strict";

var axios = require("axios");

function getCryptoData() {
  return regeneratorRuntime.async(function getCryptoData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(axios("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=eur&days=1&interval=Minutely") // respones handlers and function callers
          .then(function (res) {
            var cryptoData = res.data.prices; // convert array to th object

            var cleanDataObj = new Array();
            cleanDataObj = cryptoData.map(function (item) {
              return {
                date: item[0],
                value: item[1]
              };
            }); // 1 cleandecimals

            cleanDataObj = setDecimals(cleanDataObj); // 2 convert to dates

            cleanDataObj = setDates(cleanDataObj); // logger

            console.log(cleanDataObj);
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

function setDecimals(cleanDataObj) {
  return cleanDataObj.map(function (obj) {
    obj.value = (Math.round(obj.value * 100) / 100).toString();
    return obj;
  });
}

function setDates(cleanDataObj) {
  // const unixTimestamp = 1575909015
  // const milliseconds = 1575909015 * 1000 // 1575909015000
  // const dateObject = new Date(milliseconds)
  // const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15
  return cleanDataObj.map(function (obj) {
    obj.date = new Date(obj.date).toLocaleString().slice(0, 9);
    return obj;
  });
}

getCryptoData();