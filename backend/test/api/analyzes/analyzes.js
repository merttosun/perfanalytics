const expect = require("chai").expect;
const request = require("supertest");
const app = require("../../../app");
const conn = require("../../../dbconnection");
//www.youtube.com/watch?v=7VNgjfmv_fE

describe("POST /api", () => {
  before((done) => {
    conn
      .connect()
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
        url: "http://testurl.com/scrqwewipt.js",
        type: "script",
        duration: 1.45678,
        transferSize: 100234, // in octets
      },
    ],
  };

  const targetURL = "http://qweqxxxxqweqweeqweqw";

  it("OK, creating a new analysis works", (done) => {
    console.log("app", app);
    request(app)
      .post("/api/analyzes/save")
      .send({ targetURL, payload })
      .then((res) => {
        const body = res.body;
        console.log("body", body);
        expect(body).to.contain.property("_id");
        done();
      })
      .catch((error) => done(error));
  });
});

describe("POST /apqweqwi", () => {
  before((done) => {
    conn
      .connect()
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
    windowLoad: 1.123301123,
    resource_data: [
      {
        url: "http://testurl.com/asdasscrqwewipt.js",
        type: "script",
        duration: 1.45678,
        transferSize: 100234, // in octets
      },
    ],
  };

  const targetURL = "http://qweqxxxxqweqqweweeqweqw";

  it("OK, creating a new analysis works", (done) => {
    console.log("app", app);
    request(app)
      .post("/api/analyzes/save")
      .send({ targetURL, payload })
      .then((res) => {
        const body = res.body;
        console.log("body", body);
        expect(body).to.contain.property("_id");
        done();
      })
      .catch((error) => done(error));
  });
});
