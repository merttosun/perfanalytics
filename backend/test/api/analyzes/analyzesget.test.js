process.env.ENV = "test";

const expect = require("chai").expect;
const request = require("supertest");
const app = require("../../../app");
const conn = require("../../../dbconnection");
//www.youtube.com/watch?v=7VNgjfmv_fE

describe("get /api/analyzes", () => {
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

  const siteUrl = "http://localhost:3000/";
  const fromDate = "2020-09-20T10:20:30.000Z";
  const toDate = "2020-09-24T23:00:00.123Z";

  it("OK, getting analyzes work", (done) => {
    request(app)
      .get("/api/analyzes")
      .query({ siteUrl, fromDate, toDate })
      .then((res) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
  });

  it("OK, getting analyzes throwing error", (done) => {
    request(app)
      .get("/api/analyzes")
      .query({ siteUrl: null, fromDate: null, toDate })
      .then((res) => {
        expect(res.statusCode).to.equal(500);
        done();
      });
  });
});
