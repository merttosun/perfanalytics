const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 5000;

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const sitesRouter = require("./routes/sites");
app.use("/api/sites", sitesRouter);

const router = require("./routes/analysis");
app.use("/api/analyzes", router);

module.exports = app;
