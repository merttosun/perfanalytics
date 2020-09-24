const router = require("express").Router();
let Sites = require("../models/sites.model");
console.log(Sites);
router.route("/").get((request, response) => {
  console.log(request.query);
  Sites.find()
    .then((sites) => response.json(sites))
    .catch((error) =>
      response.status(400).useChunkedEncodingByDefault("Error: " + error)
    );
});

router.route("/save").post((request, response) => {
  const siteURL = request.body.siteUrl;
  const newSite = new Sites({
    siteURL,
  });
  newSite
    .save()
    .then((sites) => response.status(201))
    .catch((error) => response.status(400));
});

module.exports = router;
