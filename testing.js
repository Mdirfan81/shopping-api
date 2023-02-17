const { addListener } = require("nodemon");
const { addElementToCard } = require("./controllers/productController");

let obj = [
  { id: 1, name: "irfan" },
  { id: 2, name: "22" },
  { id: 3, name: "33" },
  { id: 4, name: "444444" },
];
let res = { id: 1, name: "irfan" };

// console.log(obj.some((ele) => ele.id === res.id));
// // console.log([1, 2, 3, 4, 5].includes(3));
// let a = [1, 2, 3, 4, 5];
// a.map((e) => {
//   if (e % 2 == 0) {
//     e = "Hello";
//   }
//   return e;
// });
// console.log(a);

function addExtra(obj) {
  obj.map((ele) => {
    if (ele.id === 2) {
      ele.age = 25;
    }
  });
}
console.log("Before", obj);
addExtra(obj);
console.log("After", obj);
