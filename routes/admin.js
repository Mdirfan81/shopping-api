const express = require("express");
const route = express.Router();
const controller = require("../controllers/adminController");

route.get("/check", controller.getSoldProduct);

route.post("/check", controller.placeOrder);

// route.post("/addItem", controller.addElementToCard);

module.exports = route;
