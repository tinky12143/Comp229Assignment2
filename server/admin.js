const express = require("express");
const router = express.Router();
const Admin = require("./adminModel");
const Business = require("./businessModel");

router.post("/credential", (req, res, next) => {
  Admin.findOne({ name: req.body.name, password: req.body.password })
    .then((admin) => {
      if (!admin) {
        return res.status(404).json({
          message: "Error",
        });
      }
      res.status(200).json({ message: "Login" });
    })
    .catch((err) => {
      return res.status(404).json({
        err: err,
      });
    });
});

router.post("/add-admin", (req, res, next) => {
  const { name, password, email } = req.body;
  const admin = new Admin({
    name,
    password,
    email,
  });
  admin
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Success",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

router.post("/business", (req, res, next) => {
  const business = new Business({
    _id: req.body._id,
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
  });
  business
    .save()
    .then((result) => {
      res.status(201).json({
        message: "business created!",
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

router.get("/business/contact/", (req, res, next) => {
  Business.find().then((data) => {
    res.status(200).json({
      businessContact: data,
    });
  });
});

router.get("/business/contact/:id", (req, res, next) => {
  Business.findById(req.params.id).then((business) => {
    if (business) {
      res.status(200).json(business);
    } else {
      res.status(404).json({ message: "no business" });
    }
  });
});

router.put("/business/contact/:id", async (req, res, next) => {
  const business = {
    _id: req.body._id,
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
  };

  try {
    const result = await Business.findByIdAndUpdate(req.params.id, business, {
      new: true,
    });
    res.status(200).json({
      business: result,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/business/contact/:id", (req, res, next) => {
  Business.deleteOne({ _id: req.params.id }).then((result) => {
    res.status(200).json({
      message: "deleted",
    });
  });
});

module.exports = router;
