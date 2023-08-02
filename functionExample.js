function getAverage(ass1 , ass2 , ass3) {
    var total = ass1 + ass2 + ass3;
    var average = total / 3;
    return average;
}

var myAverage = getAverage(60,58,60);
myAverage.toFixed(2);
console.log('My Assignment Mark is:',parseInt(myAverage));