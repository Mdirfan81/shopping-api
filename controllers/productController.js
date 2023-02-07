const data = require("../data/allProducts");
const coupons = require("../data/coupons");
let userShoppingArr = [];

const getAllProducts = (req, res) => {
  try {
    return res.status(200).send(data);
  } catch (error) {
    return error;
  }
};

const addElementToCard = (req, res) => {
  try {
    if (req.body) {
      userShoppingArr.push(req.body);
    }

    return res.status(201).send("Item added successfully");
  } catch (error) {
    return error;
  }
};

const allItemsInCard = (req, res) => {
  try {
    return res.status(200).send(userShoppingArr);
  } catch (error) {
    return error;
  }
};

const getCoupons = (req, res) => {
  try {
    return res.status(200).send(coupons);
  } catch (err) {
    return err;
  }
};
const validateCoupon = (req, res) => {
  try {
    let coup = req.params.coupon;
    if (coup === coupons.coupons[0].code) {
      userShoppingArr =[]
      return res.status(200).send("Valid");
    } else {
      return res.status(200).send("Coupon is not valid");
    }
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllProducts,
  addElementToCard,
  allItemsInCard,
  getCoupons,
  validateCoupon,
};
