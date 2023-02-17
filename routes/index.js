const express = require("express");
const router = express.Router();

router.use("/user", require("./user"));
router.use("/products", require("./products"));
router.use("/admin", require("./admin"));

module.exports = router;
