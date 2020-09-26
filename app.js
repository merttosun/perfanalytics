require("./global-setter");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ErrorMiddleware = require("./middlewares/error-handle-middleware");
const AugmentHandlerMiddleware = require("./middlewares/augment-handle-middleware");

const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let augmentMiddleware = new AugmentHandlerMiddleware();

app.use(augmentMiddleware.augmentHandle);

const sitesRouter = require("./routes/sites");
app.use("/api/sites", sitesRouter);

const router = require("./routes/analysis");
app.use("/api/analyzes", router);

app.use(express.static("./perfanalyticjs"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("perfanalyticsdashboard/build"));
  app.get("*");
}

let middleware = new ErrorMiddleware();

app.use(middleware.handleError);

module.exports = app;
