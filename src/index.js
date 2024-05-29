const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const { City } = require("./models/index");

const setupAndStartServer = async () => {
  const app = express();
  app.use(bodyParser);
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log(`server running at ${PORT}`);
    await City.create({
      name: "saurabh",
    });
  });
};

setupAndStartServer();
