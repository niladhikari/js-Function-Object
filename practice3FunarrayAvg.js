function array_avg(array) {
  var sum = 0;
  var average;
  for (let i = 0; i < array.length; i++) {
    var element = array[i];
    var sum = sum + element;
  }
  average = sum / array.length;
  return average;
}
var numbers = [12, 10, 20, 14];
var arrayAverage = array_avg(numbers);
console.log(arrayAverage);
