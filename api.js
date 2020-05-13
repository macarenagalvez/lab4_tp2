const https = require("https");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const Country = require("../nodejs/country.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



async function getCountry() {
  //for (let i = 0; i < 54; i++) {
    let request = https_request(54)
    if(request){
      let Country = new Country(request)
      console.log("New country inserted => ", Country);
    }
}

function https_request(i) {
  try {
    let country = {};
    https
      .get(`https://restcountries.eu/rest/v2/callingcode/${i}`, (res) => {
        //console.log("statusCode:", res.statusCode);
        if (res.statusCode === 200) {
          let data = "";

          res.on("data", (d) => {
            data += d;
          });

          res.on("end", () => {
            country = JSON.parse(data)[0];
            return country;
          });
        } else {
          console.log(`Calling code (${i}) not found`);
        }
      })
      .on("error", (e) => {
        console.error("Resquest error -> ", e);
      });
  } catch (error) {
    console.log("ERROR https_request", error);
  }
}

getCountry();

// port 3000
app.listen(3000, () => {
  console.log("App running in port 3000");
});
