function add(num1 , num2) {
    var sum = num1 + num2;
    return sum;
}

var total = add(12,14);
// console.log('Total value:',total);

function bringpotatos(money) {
    var potatoPrice = 10;
     var quantity = money / potatoPrice;
    return quantity;
}

var potatos = bringpotatos(150);
console.log('Potato kina holo',potatos,'ti');