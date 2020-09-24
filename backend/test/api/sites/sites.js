const expect = require("chai").expect;
const request = require("supertest");
const app = require("../../../app");
const conn = require("../../../dbconnection");

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

  const targetURL = "http://qweqxxxxqweqqweweeqweqw";

  it("OK, creating a new sites works", (done) => {
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
