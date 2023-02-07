const express = require("express");
const route = express.Router();
const controller = require("../controllers/userController")


route.post("/auth",controller.authUser)


module.exports = route;
