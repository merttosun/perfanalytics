const router = require("express").Router();
let Analysis = require("../models/analysis.model");

router.route("/").get((request, response) => {
  console.log(request.query);
  // const fromDate = manipulateDate(request.query.fromDate);
  // const toDate = manipulateDate(request.query.toDate);
  // console.log("be", fromDate, toDate);
  Analysis.find({
    targetURL: request.query.siteUrl,
    createdAt: { $gte: request.query.fromDate, $lte: request.query.toDate },
  })
    .then((analyzes) => response.json(analyzes))
    .catch((error) =>
      response.status(400).useChunkedEncodingByDefault("Error: " + error)
    );
});

const manipulateDate = (date) => {
  const tzoffset = new Date().getTimezoneOffset() * 60000;
  const dateWithOffset = new Date(date.getTime() - tzoffset);
  return dateWithOffset.toISOString().slice(0, -5);
};

router.route("/save").post((request, response) => {
  const targetURL = request.body.targetURL;
  const payload = request.body.payload;
  const newAnalysis = new Analysis({ targetURL: targetURL, payload: payload });

  newAnalysis
    .save()
    .then(() => {
      response.json("Analysis Added Successfully");
      console.log("respasdonse");
      console.log("targetURL : ", targetURL);
    })
    .catch((error) => response.status(400).json("Error: " + error));
});

module.exports = router;
