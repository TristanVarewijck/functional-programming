require('dotenv').config()
//  Get the data
async function cryptoPrices() {
    await axios({
            url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h",
            method: "GET",
        })
        .then((response) => {
            console.log(response.data)
            cleanData(response.data);
        })
        .catch(function (error) {
            console.log("ERROR:" + error);
        });
}

cryptoPrices()