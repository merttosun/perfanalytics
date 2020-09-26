const router = require("express").Router();
let Sites = require("../models/sites.model");
// console.log(Sites);

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
