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
  // let payload = JSON.parse(req.body);
  try {
    if (req.body) {
      userShoppingArr.push(req.body);
      return res.status(200).send("Item added successfully");
    }
  } catch (error) {
    return error;
  }
};
const removeElementToCard = (req, res) => {
  // let payload = JSON.parse(req.body);
  try {
    if (req.body) {
      let found = userShoppingArr.filter((ele) => {
        if (ele.id === req.body.id) {
          return true;
        }
        return false;
      });
      // userShoppingArr.push(req.body);
      if (found) {
        let fil = userShoppingArr.filter((ele) => ele.id != req.body.id);
        userShoppingArr = [];
        userShoppingArr = fil;
        return res.status(200).send("Removed successfully");
      } else {
        return res.status(404).send("Item is not Present");
      }
    }
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
      // userShoppingArr = [];
      return res.status(200).send(true);
    } else {
      return res.status(200).send(false);
    }
  } catch (err) {
    return err;
  }
};

const deleteAllProduct = (req, res) => {
  try {
    userShoppingArr = [];
    return res.status(200).send("Remove all item from card");
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
  removeElementToCard,
  deleteAllProduct,
};
