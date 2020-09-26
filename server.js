const app = require("./app.js");
const db = require("./dbconnection");

const PORT = process.env.PORT || 5000;

db.connect(process.env.ATLAS_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch(() => {
    console.log(`Server could not run`);
  });
