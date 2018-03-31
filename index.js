require("dotenv").config();
require("./helpers/connect");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes/index");
const { globalError } = require("./helpers/error");
const logger = require("./helpers/logger");

// express configs
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);
// routes
app.use("/", routes);

// error handler
app.use(globalError);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("app listening on port 3000!"));
