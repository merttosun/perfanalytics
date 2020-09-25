process.env.ENV = "test";

const expect = require("chai").expect;
const request = require("supertest");
const app = require("../../../app");
const conn = require("../../../dbconnection");

describe("get /api/sites", () => {
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

  const targetURL = "http://localhost:3000/";
  const fromDate = "2020-09-20T10:20:30.000Z";
  const toDate = "2020-09-24T23:00:00.123Z";

  it("OK, getting sites work", (done) => {
    request(app)
      .get("/api/sites")
      .then((res) => {
        expect(res.statusCode).to.equal(200);
        done();
      })
      .catch((error) => done(error));
  });
});
