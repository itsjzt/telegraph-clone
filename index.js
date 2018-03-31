// configs and database
require("dotenv").config();
require("./model/connect");

const express = require("express");
const app = express();
const Blog = require("./model/blog");

// const first = new Blog({ title: "dope", username: "hi", post: "hi" });
// first.save((err, res) => {
//   if (err) console.error("error", err);
//   else console.log("done");
// });

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(3000, () => console.log("app listening on port 3000!"));
