const express = require("express");
const router = express.Router();
const axios = require("axios");

/* GET home page */
/* router.get("/", (req, res, next) => {
  res.json();
}); */


//CALL THE API FOR THE INFO

router.get("/list", (req, res, next) => {
  const apiOptions = {
    baseURL: "http://www.recipepuppy.com/api/",
    headers: { "cache-control": "no-cache" }
  };
  let recipes = [];
  let prom = [];
  for (let i = 1; i <= 100; i++) {
    prom.push(axios.get(`?p=${i}`, apiOptions));
  }
  Promise.all(prom)
  .then(value => {
    for (let i = 0; i < value.length; i++) {
        recipes = [...recipes, ...value[i].data.results];
      }
      res.json(recipes);
    })
    .catch(error => res.json(error));
  });
  
  module.exports = router;