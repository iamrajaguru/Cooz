var express = require("express");
var app = express();
var body = require("body-parser");
var cors = require("cors");
var mongoose = require("mongoose");

///cross connection
const corsObj = {
  orign: "http://localhost:3000",
  optionSucessStatus: 200
};

app.use(cors(corsObj));

app.use(body.json());

mongoose.connect(
  "mongodb://localhost:27017/cook",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("Server connected")
);
app.listen(4000, () => console.log("node waiting to request response"));

var myColl = mongoose.model("mycollection", {
  item: String
});

// app.get("/", (req, res) => {
//   console.log("works");
//   var myCollObj = new myColl();
//   myCollObj.name = "raja";
//   myCollObj.age = 21;
//   myCollObj.save((err, doc) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(doc);
//     }
//   });
// });

app.get("/post/:id", (req, res) => {
  console.log("post");
  console.log(req.params.id);
  let a = req.params.id;
  myColl.find({ item: { $regex: "^" + a } }, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
      console.log(docs);
    }
  });
});
app.delete("/post/:id", (req, res) => {
  console.log("post");
  console.log(req.params.id);
  let a = req.params.id;
  myColl.deleteOne({ item: { $regex: "^" + a } }, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
      console.log(docs);
    }
  });
});

app.delete("/deleteitem", (req, res) => {
  console.log("deleteAll");
  myColl.remove({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
      console.log(docs);
    }
  });
});

app.get("/display", (req, res) => {
  console.log("display");
  myColl.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
      console.log(docs);
    }
  });
});