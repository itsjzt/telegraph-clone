// configs and database
require("dotenv").config();
require("./model/connect");

const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const Blog = require("./model/blog");

// express configs
app.set("views", "./views");
app.set("view engine", "pug");
app.use("/static", express.static(path.join(__dirname, "static")));
app.use(bodyParser.urlencoded({ extended: true }));

// const first = new Blog({ title: "cool", username: "hi", post: "hi" });
// first.save((err, res) => {
//   if (err) console.error("error", err);
//   else console.log("done");
// });

app.get("/", (req, res) =>
  res.render("index", { title: "Hey", message: "Hello there!" })
);

app.post("/post", (req, res) => {
  res.send(req.body);
});

app.listen(3000, () => console.log("app listening on port 3000!"));
