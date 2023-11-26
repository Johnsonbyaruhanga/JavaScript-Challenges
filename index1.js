//Number 4
//need to create an array of  word strings
//need to check if a string is palindromic
//when i split a string and reverse splitted strings, if it still reads the same,pass
//otherwise dont pass
const wordArray=["code","eat","OMO","pie","level"]
function isitPalindromic(string){
  let reversedString = string.split("").reverse().join("");
  return string === reversedString;
} 
//Create the main function to iterate through string array and check for the first palindromr
function firstPalindrome(words){
  for(let i=0;i<words.length;i++){
    let word=words[i];
    if(isitPalindromic(word)){
      return word;
    }
  }
  
  
  
    return "";
  }
  

console.log(firstPalindrome(wordArray));
