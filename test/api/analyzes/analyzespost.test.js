process.env.ENV = "test";

const expect = require("chai").expect;
const request = require("supertest");
const app = require("../../../app");
const conn = require("../../../dbconnection");
//www.youtube.com/watch?v=7VNgjfmv_fE

describe("POST /api", () => {
  before((done) => {
    conn
      .connect(process.env.ATLAS_URI)
      .then(() => done())
      .catch((err) => done(err));
  });

  after((done) => {
    conn
      .close()
      .then(() => done())
      .catch((err) => done(err));
  });

  const payload = {
    ttfb_data: 1.223345,
    fcp_data: 2.456,
    domLoad: 1.789,
    windowLoad: 1.101123,
    resource_data: [
      {
        url: "http://testurl.com/bundle.js",
        type: "script",
        duration: 1.45678,
        transferSize: 100234, // in octets
      },
    ],
  };

  const targetURL = "http://testarnqweewurl.com";

  it("OK, creating a new analysis works", (done) => {
    request(app)
      .post("/api/analyzes/save")
      .send({ targetURL, payload })
      .then((res) => {
        expect(res.statusCode).to.equal(201);
        done();
      })
      .catch((error) => done(error));
  });

  it("Fail, required params (targetURL)", (done) => {
    request(app)
      .post("/api/analyzes/save")
      .send({ payload })
      .then((res) => {
        expect(res.statusCode).to.equal(500);
        done();
      });
  });
});
