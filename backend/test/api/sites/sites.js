process.env.ENV = "test";
const expect = require("chai").expect;
const request = require("supertest");
const app = require("../../../app");
const conn = require("../../../dbconnection");

describe("POST /sites/save ", () => {
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

  const siteUrl = "http://qwxeqqqwqwweweeqweqw";

  it("OK, creating a new sites works", (done) => {
    console.log("app", app);
    request(app)
      .post("/api/sites/save")
      .send({ siteUrl })
      .then((res) => {
        const body = res.body;
        console.log("body", body);
        expect(body).to.contain.property("_id");
        expect(body).to.contain.property("siteURL");
        expect(body.siteUrl).to.not.equal("");
        done();
      })
      .catch((error) => done(error));
  });
});
