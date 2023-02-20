# shopping-api with coupon codes
# I have deployed also You can use this URL : https://shopping-fake-api-with-coupon-code.onrender.com/products/getAllProducts
# For Local
## Url for local = http://localhost:3000/admin/check
## Url for local = http://localhost:3000/products/getAllProducts

# Having 3 main API
## 1. Products
## 2. User 
## 3. Admin

#Doc
## Main URL : https://shopping-fake-api-with-coupon-code.onrender.com/products/

## 1. Products
https://shopping-fake-api-with-coupon-code.onrender.com/products

### 1.1.  GET => /getAllProducts => fetching all products
### 1.2. GET =>   /getCard => Fetch all products which added to card.
### 1.3. GET => /coupons => Fetch all coupons
### 1.4. GET => /validCoupon/:coupon => Check the coupon is valid or not
### 1.5 GET => /remove => Remove element from the card, can use this API at checkout time which will delete all products from the user-bucket.

### 1.7. POST => /addItem => This is a Post request where the payload is a product object, can use this when user add the item to there card.
### 1.8. POST => /removeItem => This will remove a single item from the card, in the body share the product Id or the single product object.

## 2. User
https://shopping-fake-api-with-coupon-code.onrender.com/user

### 2.1. POST => /auth => This chek the user is admin or not.
Ex: Paylod =  {
    "username":"admin",
    "password":"test"
}

## 3. Admin
https://shopping-fake-api-with-coupon-code.onrender.com/admin

### 3.1. GET => /check => Fetch all product which are sold.

### 3.2. POST => /check => Used for add the items to sold array for monitoring the total Porduct and price
Ex: Payload : {
    products: [], // all item which the user added to their card.
    realPrice: 0, // real price before applying the coupon.
    discount: "", // here can see the discount percentage Ex: 10%.
    discountCode: "", // applied code will be shown.
    discountPrice: 0, // Here the discount Price Ex: realPrice - 10%.
  }

