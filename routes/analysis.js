const router = require("express").Router();
const AppError = require("../errors/app-error");
let Analysis = require("../models/analysis.model");

router.route("/").get((request, response, next) => {
  if (
    !request.query.fromDate ||
    !request.query.toDate ||
    !request.query.siteUrl
  ) {
    next(new AppError("SiteURL || fromDate || toDate || type can not be null"));
  }
  let now = new Date();
  let fromDate =
    request.query.type === "last-thirty"
      ? new Date(now.setMinutes(now.getMinutes() - 30))
      : new Date(request.query.fromDate);
  let toDate =
    request.query.type === "last-thirty"
      ? new Date()
      : new Date(request.query.toDate);
  Analysis.find({
    targetURL: request.query.siteUrl,
    createdAt: { $gte: fromDate, $lte: toDate },
  })
    .then((analyzes) => response.status(201).send(analyzes))
    .catch((error) => {
      next(new Error(error.message));
    });
});

router.route("/save").post((request, response, next) => {
  if (!request.body.targetURL || !request.body.targetURL) {
    next(new AppError("targetURL || targetURL  can not be null"));
  }
  const targetURL = request.body.targetURL;
  const payload = request.body.payload;
  const newAnalysis = new Analysis({ targetURL, payload });
  newAnalysis
    .save()
    .then((res) => response.status(201).send(res))
    .catch((error) => new Error(error.message));
});

module.exports = router;
