const express = require("express");

const bodyParse = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const http = require("http");
const port = process.env.PORT || 3000;
const adminRouter = require("./admin");

mongoose
  .connect("mongodb+srv://tinky12143:h1Kix1UoTya53bbd@cluster0.ixrkktj.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Success");
  })
  .catch((error) => {
    console.log("Error:", error);
  });

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));
app.use(adminRouter);
app.use(express.static("./dist/angular"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X_Requested-With, Content-Type, Accept, authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS, PUT"
  );
  next();
});

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/angular/" })
);

module.exports = app;