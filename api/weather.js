const express = require("express");
const router = express.Router();
const cors = require("cors");
const fetch = require("node-fetch");


const corsOptions = {
  // origin: "http://localhost:3000"
  origin: "https://weather-app-two-ecru.vercel.app/"
}

router.get('/search/location/:query',cors(corsOptions), async function(req, res){
  let params = req.params.query;
  const requestEndpoint = `https://www.metaweather.com/api/location/search/?query=${params}`;
  const fetchOptions = {
    method: 'GET'
  }

  const response = await fetch(requestEndpoint, fetchOptions);
  const jsonResponse = await response.json();
  res.json(jsonResponse);
})

router.get('/search/lattlong/:lattlong',cors(corsOptions), async function(req, res){
  let params = req.params.lattlong;
  const requestEndpoint = `https://www.metaweather.com/api/location/search/?lattlong=${params}`;
  const fetchOptions = {
    method: 'GET'
  }

  const response = await fetch(requestEndpoint, fetchOptions);
  const jsonResponse = await response.json();
  res.json(jsonResponse);
})

router.get('/location/:woeid',cors(corsOptions), async function(req, res){
  let params = req.params.woeid;
  const requestEndpoint = `https://www.metaweather.com/api/location/${params}`;
  const fetchOptions = {
    method: 'GET'
  }

  const response = await fetch(requestEndpoint, fetchOptions);
  const jsonResponse = await response.json();
  res.json(jsonResponse);
})

module.exports = router;