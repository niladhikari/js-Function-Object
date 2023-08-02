//  property value get the 3 way

var shoppingCart = {
  book: 3,
  sunglass: 2,
  mouse: 1,
  keyborde: 5,
  pen: 15,
};
// console.log(shoppingCart);

//type 1 get the value
// console.log('Pen quantity:',shoppingCart.pen);

//type 2 get the value
// console.log('Pen quantity:',shoppingCart['pen']);

//type 2 get the value when the property in the variable

var propertyName = 'sunglass';
var propertyValue = shoppingCart[propertyName];
console.log('sunglass quantity:',propertyValue);


//extra thing
//when you don't know about the which property are in the object,,how to find out:
var proparty = Object.keys(shoppingCart);
console.log('Kyes are:',proparty);

//when you don't know about the properties values are in the object,,how to find out:
var propartyValue = Object.values(shoppingCart);
console.log('Proparty Values are:',propartyValue);