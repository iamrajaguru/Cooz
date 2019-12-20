const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
//Connecting database
var corsObject = {
  origin: "http://localhost:3000",
  optionSuccessState: 200
};
mongoose.connect("mongodb://localhost:27017/cook", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
let db = mongoose.connection;

db.once("open", () => {
  console.log("Connected to mongo");
});

//check db error
db.on("error", err => {
  console.log(err);
});

app.use(bodyParser.json());


app.use(cors(corsObject));

const mycollection = mongoose.model("mycollection", {
  item: String
});
app.get("/", (req, res) => {
  console.log(req.body);
  var mycollectionObj = new mycollection();
  mycollectionObj.item = "haii";
  mycollectionObj.save((err, docs) => {
    if (err) {
      console.log(err);
    } else {
      console.log(docs._id);
    }
  });
});
app.get("/poost", (req, res) => {
  console.log("comes");
  res.send("hai");
});
app.get("/cook", (req, res) => {
  mycollection.find({ item: { $regex: "^c" } }, (err, res) => {
    console.log(res);
  });
});
app.listen(3001, () => {
  console.log("Server Started");
});
