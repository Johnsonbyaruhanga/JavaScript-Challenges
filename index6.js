//Number 6
let num = 42;
//write a function whose input is the number num that adds its component digits
//first check if the number is a single digit already, if yes return it.
function addDigits(num){
  if(num<10){
    return num;
  }
  //we have to convert num to string format to be able to add the digits
  const numString = num.toSring();
  const Sum =numString.Sum

  if (Sum<10){
    return Sum;
  }
}
const result = addDigits(42);
console.log(result);

