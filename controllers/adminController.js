let soldProduct = [];

const getSoldProduct = (req, res) => {
  try {
    console.log("Here  = ====>", req.body);
    return res.status(200).send(soldProduct);
  } catch (error) {
    return error;
  }
};
const placeOrder = (req, res) => {
  try {
    if (req.body) {
      console.log("Here", req.body);
      soldProduct.push(req.body);
      return res.status(200).send("Order Placed Successfully ");
    }
  } catch (error) {
    return error;
  }
};

module.exports = {
  placeOrder,
  getSoldProduct,
};
