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

var myCol = mongoose.model("mycollection", {
  item: String
});

app.get("/post/:id", (req, res) => {
  console.log("post");
  console.log(req.params.id);
  let a = req.params.id;
  myCol.find({ item: { $regex: "^"+a, $options: "i" } }, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
      console.log(docs);
    }
  });
});
app.delete("/post/:id", (req, res) => {
  console.log("post delete");
  console.log(req.params.id);
  let a = req.params.id;
  myCol.deleteOne({ item: { $regex: "^" + a } }, (err, docs) => {
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
  myCol.remove({}, (err, docs) => {
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
  myCol.find({}, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      res.send(docs);
      console.log(docs);
    }
  });
});
app.get("/insert/:value", (req, res) => {
  console.log("insert");
  let inst = req.params.value;
  console.log(inst);

  var myCollObj = new myCol();
  myCollObj.item = inst;

  myCollObj.save((err, doc) => {
    if (err) {
      console.log(err);
    } else {
      res.send(doc);
      console.log(doc);
    }
  });
});
