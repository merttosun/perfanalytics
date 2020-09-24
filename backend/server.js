const app = require("./app.js");
const db = require("./dbconnection");

const PORT = process.env.PORT || 5000;

db.connect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
