// packages
const colors = require("colors");
const axios = require("axios").default;
require("dotenv").config();
// let api = require("./cryptoApi")

// console.log(api.url);
// cleaned data sets
let newPercentages = [];
let newLastUpdatedDates = [];

const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h";

// async function with axios
// async function getUser() {
//     try {
//         const response = await axios.get(url);
//         return response
//     } catch (error) {
//         console.error(error);
//     }
// }

getData();

async function getData() {
  await axios(url) // respones handlers and function callers
    .then(function (response) {
      let lastUpdatedDates = response.data.map((data) => data.last_updated);
      getlastUpdated(lastUpdatedDates)

      let marketChangePercentages = response.data.map(
        (data) => data.market_cap_change_percentage_24h
      );
      getPercentage(marketChangePercentages);

      // let coinIds = response.data.map((data) => data.id);
      // getIds(coinIds);
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getlastUpdated(data) {
  data.forEach((data) => {
    newLastUpdatedDates.push(
      data.slice(0, 19).replace("T", "  UTC: "));
  });
  console.log(newLastUpdatedDates);
}

// less decimals
function getPercentage(data) {
  data.forEach((data) => {
    newPercentages.push(
      (Math.round(data * 100) / 100).toString().replace(" ", "$")
    );
    // new percentage logger
    newPercentages.forEach((percentage) => {
      if (percentage < 0) {
        // console.log(colors.red(percentage).toString());
      } else {
        // console.log(colors.green(percentage));
      }
    });
  });
}

// to uppercase

// function cleanData(data) {
//     //  all data
//     let datas = data.map((data) => camelCase(data["Wat is je oogkleur?"]));
//     console.log(datas);
//     // cleaning
//     let cleanedColor = datas.map(
//         (data) =>
//         data.charAt(0).toUpperCase() +
//         data
//         .substring(1)
//         .replace(/([A-Z])/g, " $1")
//         .trim()
//     )

//  data parts
// let percentage = datas.map((data) => (data.market_cap_change_percentage_24h));

// async function questions(data) {
//     // percentages filteren
//     const marketChangePercentages = await data.map((data) => (data.market_cap_change_percentage_24h));
//     getPercentage(marketChangePercentages);

//     // id's filteren
//     const coinIds = await data.map((data) => (data.id));
//     getId(coinIds);
// }