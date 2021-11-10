// packages
const colors = require("colors");
const axios = require("axios").default;
require("dotenv").config();
// let data = [];
// console.log(data);
// https://github.com/axios/axios
async function getData() {
  await axios(process.env.API_URL) // respones handlers and function callers
    .then(function (res) {
      cryptoCurrencies = res.data;
      // cryptoCurrencies wordt overschreven door de nieuwe array die is gemaakt in de functie getlastupdated
      // 1.
      cryptoCurrencies = getLastUpdated(cryptoCurrencies);
      //  2.
      cryptoCurrencies = getPercentage(cryptoCurrencies);

      console.log(cryptoCurrencies);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getLastUpdated(cryptoCurrencies) {
  // .map() maakt een nieuwe, lege array aan
  return cryptoCurrencies.map((currency) => {
    currency.last_updated = currency.last_updated
      .slice(0, 19)
      .replace("T", " UTC ");
    //  return currency, omdat de nieuwe array die map aanmaakt deze ook nodig heeft
    return currency;
  });
}

function getPercentage(cryptoCurrencies) {
  return cryptoCurrencies.map((currency) => {
    currency.price_change_percentage_24h_in_currency = (
      Math.round(currency.price_change_percentage_24h_in_currency * 100) / 100
    ).toString();
    return currency;
  });
}


// function aanroepen
getData();