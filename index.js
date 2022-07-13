const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const usertest = require("./routes/user");
const auth = require("./routes/auth")
const { json } = require("body-parser");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/api/auth", auth);
app.use("/api/user", usertest);

app.listen(process.env.port || 5000, () => {
  console.log("hello");
});

// var http = require('http');
// var temp = `
// <h1>Hello</></br>
// <input type='text'/>`
// http.createServer(function(req,res){
//   res.writeHead(200,{'Content-Type':"text/html"})
//   res.write(temp)
//   res.end();
// }).listen(5000);