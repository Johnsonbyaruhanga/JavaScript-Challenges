//Number 1
const string1= "Kanzu";
const string2="Coder";
function fizzBuzz(string1,string2){
  const combinedLength=string1.length + string2.length;
  //check divisibility
  
    if(combinedLength%3===0){
    return "fizz";

  } else if(combinedLength%5===0){
    return "Buzz";
  }


  else if(combinedLength%3===0 && combinedLength%5===0){
    return "fizzBuzz";
  }

  
}
const result=fizzBuzz("Kanzu","Coder");
console.log(result);