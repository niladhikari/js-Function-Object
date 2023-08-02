//has parameter no retuen
function odd_even(number) {
   number % 2 == 0? console.log('Number is even'):console.log('Number is odd')
}
// odd_even(12); 

//has parameter has retuen return "Even";

function odd_even(number) {
    if (number % 2 == 0) {
         return "Even";
    }
    else{
        return "Odd";
    }
 }
  var result =  odd_even(12); 
  console.log('Number is:',result);