const router = require("express").Router();
let Analysis = require("../models/analysis.model");

router.route("/").get((request, response) => {
  Analysis.find()
    .then((analyzes) => response.json(analyzes))
    .catch((error) =>
      response.status(400).useChunkedEncodingByDefault("Error: " + error)
    );
});
router.route("/save").post((request, response) => {
  const targetURL = request.body.targetURL;
  const payload = request.body.payload;
  const newAnalysis = new Analysis({ targetURL: targetURL, payload: payload });

  newAnalysis
    .save()
    .then(() => response.json("Analysis Added Successfully"))
    .catch((error) => response.status(400).json("Error: " + err));
});

module.exports = router;
