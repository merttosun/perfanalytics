const { expect } = require("chai");
const conn = require("../dbconnection");

describe("connect db", () => {
  it("db connection done", (done) => {
    conn.connect(process.env.ATLAS_URI).then((res) => {
      expect(res[0]).to.equal("db connection done");
      done();
    });
  });
});
