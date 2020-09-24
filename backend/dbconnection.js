const mongoose = require("mongoose");
require("dotenv").config(); //config objesi alıp içinde path alabiliyor
const uri = process.env.ATLAS_URI;

function connect() {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      })
      .then((res, err) => {
        if (err) {
          console.log("db connection failed");
          return reject(err);
        } else {
          console.log("connected db successfully");
          resolve();
        }
      });
  });
}

function close() {
  return mongoose.disconnect();
}

module.exports = { connect, close };
