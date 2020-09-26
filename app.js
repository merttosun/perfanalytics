require("./global-setter");
const express = require("express");
const bodyParser = require("body-parser");
const ErrorMiddleware = require("./middlewares/error-handle-middleware");
const AugmentHandlerMiddleware = require("./middlewares/augment-handle-middleware");
const path = require("path");
const routes = express.Router();
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

let augmentMiddleware = new AugmentHandlerMiddleware();

app.use(augmentMiddleware.augmentHandle);

app.use("/", routes);

const sitesRouter = require("./routes/sites");
app.use("/api/sites", sitesRouter);

const router = require("./routes/analysis");
app.use("/api/analyzes", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("./perfanalyticjs"));

  app.use(express.static("perfanalyticsdashboard/build"));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "perfanalyticsdashboard", "build", "index.html")
    );
  });
}
let middleware = new ErrorMiddleware();

app.use(middleware.handleError);

module.exports = app;
