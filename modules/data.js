var carNames = require('car-names');
var allNames = carNames.all;
console.log(allNames)
const data = require('../data.json');

// const scale = data.map(data => data[2]);

function cleanData(){
    let datas = data.map(function (data) {
        return data["Als je later een auto zou kopen, van welk merk zou deze dan zijn?"]; 
      });

    // const audi = data.filter(function (data) {
    //   return data["Als je later een auto zou kopen, van welk merk zou deze dan zijn?"] === "Audi";
    //   });

      const cleaned = datas.map(data => 
      data.charAt(0).toUpperCase() + data.substring(1).toLowerCase().split(" ")[0]); 

       

      console.log(cleaned)
}



cleanData(); 

 