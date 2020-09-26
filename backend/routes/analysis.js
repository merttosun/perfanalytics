const router = require("express").Router();
const AppError = require("../errors/app-error");
let Analysis = require("../models/analysis.model");

router.route("/").get((request, response, next) => {
  console.log("from date", request.query.fromDate);
  console.log("to date", request.query.toDate);
  console.log("url ", request.query.targetURL);
  if (
    !request.query.fromDate ||
    !request.query.toDate ||
    !request.query.siteUrl
  ) {
    next(new AppError("SiteURL || fromDate || toDate can not be null"));
  }
  Analysis.find({
    targetURL: request.query.siteUrl,
    createdAt: { $gte: request.query.fromDate, $lte: request.query.toDate },
  })
    .then((analyzes) => response.send(analyzes))
    .catch((error) => {
      next(new Error(error.message));
    });
});

router.route("/save").post((request, response) => {
  const targetURL = request.body.targetURL;
  const payload = request.body.payload;
  const newAnalysis = new Analysis({ targetURL, payload });

  newAnalysis
    .save()
    .then((analysis) => response.status(201).send(analysis))
    .catch(new Error(error.message));
});

module.exports = router;
