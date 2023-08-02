//object declare

var student = {
  Name: "Hridoy",
  id: 192,
  age: 23,
  department: 'cse'
};
// console.log(student);

var phone = {
    Name: "Vivo",
    price: 19000,
    stroge: '128gb',
    color: 'black'
  };

  console.log(phone);

  //get only one proparty value for phone
  console.log('phone price:',phone.price);

  //change the proparty price value
  phone.price = 26000;
  console.log(phone);