var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

function last(){
  return threeItems[2];
}

alert (last());



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even
var evenArray = [1,2,3,6,22,98,45,23,22,12];

let evenValues = []

for (let i = 0; i < evenArray.length; i++) {
  if (evenArray[i] % 2 === 0){
    evenValues.push (evenArray[i]);
  }
}

console.log(evenValues);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



/*below you're given a function that will return a random number
between 0 and 30 and an array full or numbers 'randomArray'.
Your job is to write a function that will get a random number,
then loop through the array to see if that random number is in the array.
If it is, alert true, if it's not, alert false*/

var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

for (let i = 0; i < 30; i++){
  if (randomArray.includes(getRandomArbitrary())) {
    alert("true");
  } else {
    alert("false");
  }
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



/*Create a copy of first and save it into second.
Then, add 6 and 7 to the end of second. When you run this,
first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7]
if you created your copy correctly.*/

var first = [1,2,3,4,5];
var second;

var copy = first.slice(0);
second = copy;

var add = second.push(6,7);


alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



/*write a function called longest that takes in
our sentence variable, and returns the longest word in that sentence.*/
var sentence = "Dev Mountain is the best"

function findLongestWord() {
  var splitSentence = sentence.split(' ');
  var longest = 0;
  var word = null;

  for (let i = 0; i < splitSentence.length; i++){
    if(splitSentence[i].length > longest){
      longest = splitSentence[i].length;
      var word = splitSentence[i];
    }
  }
  return word;

}

findLongestWord()

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

myPoem.capitalize();



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
/*Write a function called vowelCounter that takes in a string (theOdyssey)
and returns how many vowels are in that string.*/


const countVowels = sentence => Array.from(sentence)
  .filter(letter => 'aeiou'.includes(letter)).length;

countVowels(theOdyssey);
