process.env.ENV = "test";
const expect = require("chai").expect;
const request = require("supertest");
const app = require("../../../app");
const conn = require("../../../dbconnection");

describe("POST /sites/save ", () => {
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

  const siteUrl = "http://qwxeqqqwqwweweeqweqw";

  it("OK, creating a new sites works", (done) => {
    request(app)
      .post("/api/sites/save")
      .send({ siteUrl })
      .then((res) => {
        const body = res.body;
        expect(body).to.contain.property("_id");
        expect(body).to.contain.property("siteURL");
        expect(body.siteUrl).to.not.equal("");
        done();
      })
      .catch((error) => done(error));
  });

  it("Fail, required params (siteURL)", (done) => {
    request(app)
      .post("/api/sites/save")
      .send({})
      .then((res) => {
        expect(res.statusCode).to.equal(500);
        done();
      })
      .catch((error) => done(error));
  });
});
