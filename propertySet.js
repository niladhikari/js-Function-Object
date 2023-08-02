//  property value set the 3 way

var shoppingCart = {
  book: 3,
  sunglass: 2,
  mouse: 1,
  keyborde: 5,
  pen: 15,
};
// console.log(shoppingCart);

//type 1 set the value
var mouseCount = (shoppingCart.mouse = "15");
console.log(shoppingCart);

//type 2 set the value
var mouseCount = (shoppingCart["mouse"] = "25");
console.log(shoppingCart);

//type 3 set the value
var propertyName = "mouse";
shoppingCart[propertyName] = 40;
console.log(shoppingCart);

