// const router = require("express").Router();
const mongoose = require("mongoose");
express = require("express");
router = express.Router();
let studentsSchema = require("../modal/student");

router.post("/userpost", (req, res, next) => {
  studentsSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// router.get("/", (req, res, next) => {
//   studentsSchema.find(req.body, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       console.log(data);
//       res.json(data);
//     }
//   });
// });

router.get("/", async (req, res) => {
  try {
    const findAll = await studentsSchema.find();
    return res.send({
      status: 200,
      message: "get all student",
    });
  } catch (error) {
    return res.send({
      status: 200,
      message: "error",
    });
  }
});

// router.get("/userget", (req, res) => {
//   res.send("Test Succesful done");
// });

router.post("/userpost2", (req, res) => {
  const name = req.body.name;

  res.send("Name is " + name);
  console.log(name);
});

router.put("/userput", (req, res) => {
  const name = req.body.name;

  res.send("Name is " + name);
  console.log(name);
});

module.exports = router;
