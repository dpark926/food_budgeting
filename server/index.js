const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const next = require("next");
var cors = require("cors");
const bodyParser = require("body-parser");
const transactions = require("./routes/api/transactions");
const PORT = process.env.PORT || 3005;
const dev = process.env.NODE_DEV !== "production"; //true false
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler(); //part of next config
const mongoose = require("mongoose");

nextApp.prepare().then(() => {
  const app = express();
  const db = mongoose
    .connect(
      process.env.mongoURI,
      { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api/transactions", transactions);
  app.get("*", (req, res) => {
    return handle(req, res); // for all the react stuff
  });
  app.listen(PORT, err => {
    if (err) throw err;
    console.log(`ready at http://localhost:${PORT}`);
  });
});
