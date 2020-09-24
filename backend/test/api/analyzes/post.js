const expect = require("chai").expect;
const request = require("supertest");
const app = require("../../../app");
const conn = require("../../../dbconnection");
//www.youtube.com/watch?v=7VNgjfmv_fE
https: describe("POST /notes", () => {
  before((done) => {
    conn
      .connect()
      .then(() => done())
      .catch((err) => done(err));
  });

  after((done) => {
    conn
      .connect()
      .then(() => done())
      .catch((err) => done(err));
  });

  const payload = {
    ttfb_data: 1.2345,
    fcp_data: 2.456,
    domLoad: 1.789,
    windowLoad: 1.101123,
    resource_data: [
      {
        url: "http://testurl.com/script.js",
        type: "script",
        duration: 1.45678,
        transferSize: 100234, // in octets
      },
    ],
  };

  const targetURL = "http://testurl.comqaasdassdsdwe";

  it("OK, creating a new analysis works", (done) => {
    console.log("app", app);
    request(app)
      .post("/api/analyzes/save")
      .send({ targetURL, payload })
      .then((res) => {
        // console.log(body);
        setTimeout(done, 10000);
        console.log(res.status);
        expect(res.body).to.contain.property("_id");
        done();
      })
      .catch((error) => done(error));
  });
});
