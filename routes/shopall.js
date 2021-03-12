const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

// /admin/product => GET
router.get("/product", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "showall.ejs"));
});

// /admin/product => POST
router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;