const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//TODO ES6 CLASS'A ÇEVİR
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

const analysisRouter = require("./routes/analysis");
app.use("/api/analyzes", analysisRouter);

module.exports = app;
