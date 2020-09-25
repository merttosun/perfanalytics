const mongoose = require("mongoose");
require("dotenv").config(); //config objesi alıp içinde path alabiliyor

function connect(URI) {
  return new Promise((resolve, reject) => {
    // if (process.env.ENV === "test") {
    //   console.log("test env");
    //   const Mockgoose = require("mockgoose").Mockgoose;
    //   const mockgoose = new Mockgoose(mongoose);
    //   mockgoose.prepareStorage().then(() => {
    //     mongoose.connect
    //       .connect(uri, {
    //         useNewUrlParser: true,
    //         useCreateIndex: true,
    //         useUnifiedTopology: true,
    //       })
    //       .then((res, err) => {
    //         if (err) {
    //           console.log("db connection failed");
    //           return reject(err);
    //         } else {
    //           console.log("connected db successfully");
    //           resolve();
    //         }
    //       });
    //   });
    // } else {
    mongoose
      .connect(URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      })
      .then((res, err) => {
        if (err) {
          reject(err);
        } else {
          resolve(["db connection done", res]);
        }
      });
    // }
  });
}

function close() {
  return mongoose.disconnect();
}

module.exports = { connect, close };
