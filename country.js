const dbConnection = require("../nodejs/database.js");

const Country = (country) => {
  this.nombrePais = country.name;
  this.capitalPais = country.capital;
  this.region = country.region;
  this.poblacion = country.population;
  this.latitud = country.latlng[0];
  this.longitud = country.latlng[1];
};

Country.create = (newCountry, result) => {
  try {
    dbConnection.query(
      `INSERT into pais SET ?`,
      newCountry,
      (error, res) => {
        if (error) {
          console.log("Error saving country :(", error);
          result(err, null);
          return;
        }
        console.log("Country sucessfully saved :)", res.name);
        result(null, {id : res.insertId, ... newCountry})
      }
    );
  } catch (error) {
    console.log("INSERT Error", error);
  }
};
