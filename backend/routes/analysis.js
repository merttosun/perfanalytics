const router = require("express").Router();
let Analysis = require("../models/analysis.model");

router.route("/").get((request, response) => {
  Analysis.find({
    targetURL: request.query.siteUrl,
    createdAt: { $gte: request.query.fromDate, $lte: request.query.toDate },
  })
    .then((analyzes) => response.json(analyzes).send(analyzes))
    .catch((error) => response.status(500).send(error));
});

router.route("/save").post((request, response) => {
  const targetURL = request.body.targetURL;
  const payload = request.body.payload;
  const newAnalysis = new Analysis({ targetURL, payload });

  newAnalysis
    .save()
    .then((analysis) => response.status(201).send(analysis))
    .catch((error) => response.status(400).send(err));
});

module.exports = router;
