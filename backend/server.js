const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//TODO ES6 CLASS'A ÇEVİR

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//db connection
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("## database connection established successfully...");
});
connection.on("error", () => {
  console.log("## couldn not connect to database");
});

const analysisRouter = require("./routes/analysis");
app.use("/analyzes", analysisRouter);

//run server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
