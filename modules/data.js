var toHex = require('colornames')
const camelCase = require("camelcase");
const data = require("../data.json");

// const scale = data.map(data => data[2]);

// COLORS CLEANING
function cleanData() {
  //  all data
  let datas = data.map((data) => {
    return camelCase(data["Wat is je oogkleur?"]);
  });

  // cleaning
  let cleanedColor = datas.map(
    (data) =>
    data.charAt(0).toUpperCase() +
    data
    .substring(1)
    .replace(/([A-Z])/g, " $1")
    .trim()
  )

  console.log(cleanedColor)
  cleanedColor = cleanedColor.sort()


  let newColors = [];
  cleanedColor.forEach(color => {
    newColors.push(changeIt(color))
  })

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

  console.log(colorInfo);

};











// let counts = {};
// cleaned.forEach((data) => {
//   counts[data] = (counts[data] || 0) + 1;
// });


cleanData();















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