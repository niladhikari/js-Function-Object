function add(num1 , num2 ,num3) {
    var sum = num1 + num2 +num3;
    return sum;
}

var result1 = add(20, 20, 20);
var result2 = add(20, 20, 18);
var result3 = add(20, 20, 20);
var finalResult = add(result1, result2, result3);
console.log('Final result:',finalResult);