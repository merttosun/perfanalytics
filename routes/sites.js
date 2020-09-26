const router = require("express").Router();
const AppError = require("../errors/app-error");
let Sites = require("../models/sites.model");

router.route("/").get((request, response) => {
  Sites.aggregate([
    { $group: { _id: "$siteURL" } },
    {
      $project: {
        _id: 0,
        siteURL: "$_id",
      },
    },
  ])
    .then((res) => response.status(200).send(res))
    .catch((err) => response.status(400).send(err));
});

router.route("/save").post((request, response) => {
  if (!request.body.siteUrl) {
    next(new AppError("SiteURL can not be null || undefined"));
  }
  const siteURL = request.body.siteUrl;
  const newSite = new Sites({
    siteURL,
  });
  newSite
    .save()
    .then((site) => response.status(201).send(site))
    .catch((error) => response.status(400).send(error));
});

module.exports = router;
