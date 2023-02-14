const express = require("express");
const route = express.Router();
const controller = require("../controllers/productController");

route.get("/getAllProducts", controller.getAllProducts);
route.get("/getCard", controller.allItemsInCard);
route.get("/coupons", controller.getCoupons);
route.get("/validCoupon/:coupon", controller.validateCoupon);

route.post("/addItem", controller.addElementToCard);
route.post("/removeItem", controller.removeElementToCard);
// route.get("/user/:id", controller.getUser);
// route.post("/createUser", controller.createUser);

module.exports = route;
