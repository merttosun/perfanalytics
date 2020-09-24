const router = require("express").Router();
const { request, response } = require("express");
let sites = require("../models/sites.model");

router.route("/").get((request, response) => {
  console.log(request.query);
  sites
    .find()
    .then((sites) => response.json(sites))
    .catch((error) =>
      response.status(400).useChunkedEncodingByDefault("Error: " + error)
    );
});

router.route("/save").post((request, response) => {
  const targetURL = request.body.siteUrl;
  const newAnalysis = new Analysis({
    targtURL: targetURL,
  });
  newAnalysis
    .save()
    .then(() => {
      response.json("Analysis Added Successfully");
      console.log("respasdonse");
      console.log("targetURL : ", targetURL);
    })
    .catch((error) => response.status(400).json("Error: " + error));
});
