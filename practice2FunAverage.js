function make_avg(num1 , num2 ,num3) {
    var sum = num1 + num2 +num3;
    var average = sum/3;
    return average;
}

var result = make_avg(20, 20, 20);
console.log('Final result:',result);