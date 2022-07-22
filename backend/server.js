const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

dotenv.config({ path: "backend/config/config.env" });

connectDatabase();
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is working on port`);
});
