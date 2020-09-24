const router = require("express").Router();
let Analysis = require("../models/analysis.model");

//mongodbde cektigim alanları indexlemem lazım
//performans artırıyormuş
//compound index -> hep  aynı parametrelerle sorgu attıgımız için üç parametreyi aynı anda indexliyoruz,
router.route("/").get((request, response) => {
  Analysis.find({
    targetURL: request.query.siteUrl,
    createdAt: { $gte: request.query.fromDate, $lte: request.query.toDate },
  })
    .then((analyzes) => response.json(analyzes))
    .catch((error) =>
      response.status(500).useChunkedEncodingByDefault("Error: " + error)
    );
});

router.route("/save").post((request, response) => {
  const targetURL = request.body.targetURL;
  const payload = request.body.payload;
  const newAnalysis = new Analysis({ targetURL: targetURL, payload: payload });

  newAnalysis
    .save()
    .then((analysis) => response.status(201).send(analysis))
    .catch((error) => response.status(400));
});

module.exports = router;
