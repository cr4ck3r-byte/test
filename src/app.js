const express = require("express");
require("./database.js");
const cors = require("cors");
const morgan = require("morgan");
const { errorHandler } = require("./middlewares/errorHandler.js");
const { router } = require("./components/indexRoutes.js");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api", router);

app.use(errorHandler);

module.exports = { app };
