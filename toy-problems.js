/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns
the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/

function plusOneSum(arr) {    
    var sum = arr.length;
    for (var index = 0; index < arr.length; index++) {
      sum += arr[index];
    }    
    return sum;
  }
  
  plusOneSum([1, 2, 3, 4])
  





/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/

function flatten(array) {
    return array.reduce(function(a, b) {
      if (Array.isArray(b)) {
        return a.concat(flatten(b));
        }
      else {
        return a.concat(b);
        }
    }, []);
  }
  
  
  flatten([1, 2, [3, [4], 5, 6], 7])








/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN]
convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/


let arr = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];

function reorder(){
  var reverseArr = [];
for (let i = 0; i < arr.length; i++) {
   var splitString = arr[i].split("");
   var reversed = splitString[1] + splitString[0];
   reverseArr.push(reversed);
}
 let newArr = reverseArr.sort();

var reverseNewArr = [];
 for (let j = 0; j < arr.length; j++) {
   var splitNewString = newArr[j].split("");
   var newReversed = splitNewString[1] + splitNewString[0];
   reverseNewArr.push(newReversed);
}
 return reverseNewArr;
}

reorder();







/*
There is an array of non-negative integers. A second array is formed
by shuffling the elements of the first array and deleting a random element.
Given these two arrays, find which element is missing in the second array.

*/
var myArray = ['1','2','3','4','5','6','7','8','9'];
var myArrayCopy = myArray.slice(0);
let newArray = myArrayCopy.sort((a,b) => 0.5 - Math.random());

var rand = newArray[Math.floor(Math.random() * newArray.length)];

for (let i = 0; i < newArray.length; i++){
  if (rand == newArray[i]){
    delete newArray[i];
  }
}

console.log (myArray);
console.log(newArray);
console.log(rand);








/*

Write a function that returns the longest word(s) from a sentence.
The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/


function longestWord(string){
    var str = string.split(" ");
    var wordLength = [];
    for (let i = 0; i < str.length; i++) {
      var word = str[i]
      wordLength.push(word.length);
    }
    var maxWordLength = Math.max.apply(null, wordLength);
    var result = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i].length == maxWordLength){
        result.push(str[i]);
      }
    }
    return result;
  }
  
  
  console.log(longestWord("I gave a present to my parents"));








/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/


let i = 0;
let sum = 0;
for (i = 1; i < 1000;i = i + 1){
  if (i % 3 == 0 || i % 5 == 0) {
    sum = sum + i;
  }
}








/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/

var string = "tree traversal"


function split(){
  let split = string.split("")
  let result = split.filter(function(x, n, s){
    return s.indexOf(x) == n
  }).join("")

  return result;
}

split()








/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/

function sum(b) {
    if (arguments.length == 2) {
      return arguments[0] + arguments[1];
    } else {
      return function(a) { return b + a; };
    }
  }