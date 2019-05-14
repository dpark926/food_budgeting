require("dotenv").config();
const express = require("express");
const next = require("next");
const cors = require("cors");
const bodyParser = require("body-parser");
const transactions = require("./routes/api/transactions");
const PORT = process.env.PORT || 3005;
const dev = process.env.NODE_DEV !== "production"; //true false
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler(); //part of next config
const mongoose = require("mongoose");

const routes = require("./routes");
const routerHandler = routes.getRequestHandler(nextApp);
const glob = require("glob");

const { config } = require("../config/config");

nextApp.prepare().then(() => {
  const app = express();
  const db = mongoose
    .connect(
      process.env.MONGODB_URI,
      { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.use("/api/transactions", transactions);
  // app.get("*", (req, res) => {
  //   return handle(req, res); // for all the react stuff
  // });
  // app.listen(PORT, err => {
  //   if (err) throw err;
  //   console.log(`ready at http://localhost:${PORT}`);
  // });

  // REST API routes
  // const rootPath = require("path").join(__dirname, "/..");
  // glob.sync(rootPath + "/server/routes/api/*.js").forEach(controllerPath => {
  //   if (!controllerPath.includes(".test.js")) require(controllerPath)(app);
  // });

  // Next.js page routes
  app.get("*", routerHandler);

  // Start server
  app.listen(config.serverPort, () =>
    console.log(
      `${config.appName} running on http://localhost:${config.serverPort}/`
    )
  );
});
