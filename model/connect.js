const mongoose = require("mongoose");

const uri = (dbuser, dbpassword) =>
  `mongodb://${dbuser}:${dbpassword}@ds019634.mlab.com:19634/telegraph-clone`;

mongoose.connect(uri(process.env.dbuser, process.env.dbpassword));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("DB connected!");
});
