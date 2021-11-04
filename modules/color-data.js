var toHex = require('colornames')
const camelCase = require("camelcase");
// const data = require("../data.json");
const axios = require('axios').default

// https://github.com/axios/axios
async function petData() {
  await axios({
      url: "https://raw.githubusercontent.com/cmda-tt/course-21-22/main/tech-track-dataset.json",
      method: "GET",
    })
    .then((response) => {
      cleanData(response.data);
    })
    .catch(function (error) {
      console.log("ERROR:" + error);
    });
}

// COLORS CLEANING
function cleanData(data) {
  //  all data
  let datas = data.map((data) => camelCase(data["Wat is je oogkleur?"]));
  console.log(datas);
  // cleaning
  let cleanedColor = datas.map(
    (data) =>
    data.charAt(0).toUpperCase() +
    data
    .substring(1)
    .replace(/([A-Z])/g, " $1")
    .trim()
  )

  // console.log(cleanedColor)
  console.log(cleanedColor);
  cleanedColor = cleanedColor.sort()


  let newColors = [];
  cleanedColor.forEach(color => {
    newColors.push(changeIt(color))
  })

  // Uitgelegd door Juul Vrasdonk. Zelf toegepast. 
  function changeIt(cleanedColor) {
    switch (cleanedColor) {
      case 'Bruin':
        return 'sienna'
      case 'Blauw':
        return 'deepskyblue'
      case 'Grijs':
        return 'gray'
      case 'Groen':
        return 'green'
      case 'Donkerbruin':
        return 'saddlebrown'
      case 'Groen Grijs':
        return 'darkseagreen'
      case 'Groen Grijs':
        return 'darkseagreen'
      case 'Groen Blauw':
        return 'mediumaquamarine'
    }
  }
  console.log(newColors);

  let colorInfo = [];
  newColors.forEach(colorName => {
    colorInfo.push(toHex.get(colorName))
  })

  for (let i = 0; i < colorInfo.length; i++) {
    colorInfo[i] = objects(colorInfo[i]);
  }

  function objects(obj) {
    return {
      title: "Eye Color",
      value: obj.value,
      name: obj.name
    }
  }

  console.log(colorInfo)
  // console.log(colorInfo);
  exports.colorInfo = colorInfo;
};



















// let counts = {};
// cleaned.forEach((data) => {
//   counts[data] = (counts[data] || 0) + 1;
// });


petData()















//   // filtering
//   function test(data) {
//     let testArray = [];
//     cleaned.forEach((data) => {
//       if (data === inputColor) {
//         testArray.push(data);
//       }
//     });
//     return testArray;
//   }
//   console.log(test(data).length);

//   test();
// }