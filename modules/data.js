const axios = require("axios").default;

// import axios from "axios";


async function petData() {
    try {
        const response = await axios('https://raw.githubusercontent.com/cmda-tt/course-21-22/main/tech-track-dataset.json');
        console.log(response);
    } catch (error) {
        console.log("ERROR:" + error);
    }
}
petData()

// async function petData()

// try {
//     let data = await axios({
//             url: "https://raw.githubusercontent.com/cmda-tt/course-21-22/main/tech-track-dataset.json",
//             method: "GET",
//         })
//         .then((response) => {
//             return response;
//         })
//         .catch(function (error) {
//             console.log("ERROR:" + error);
//         });

//     console.log(data.data);
// }

// petData()







// async function fetchText() {
//     let response = await fetch('/readme.txt');
//     let data = await response.text();
//     console.log(data);
// }