//Make a 'favoriteThings' object that contains the following keys:
//band, food, person, book, movie, holiday.
//Have the values to those keys be your favorite thing in that category.

let favoriteThings = {
  band: "Rammstein",
  food: "Cha siu bao",
  person: "Patrik",
  book: "Hyperbole and a half",
  movie: "Forrest Gump",
  holiday: "Laos"
}

//After you've made your object, add another key named 'car' with the value
//being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = "DB5"
favoriteThings.brand = "Aston Martin"

//Now change the food key in your favoriteThings object to be 'Lettuce'
//and change the book key in your favoriteThings object to be '50 Shades of Gray'.

favoriteThings.food = "Lettuce";
favoriteThings.book = "50 Shades of Gray";

//Now, alert your favorite person, then alert your favorite book.

alert(favoriteThings.person);
alert(favoriteThings.book);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object
//checking to make sure that each value is truthy.
//If it's not truthy, remove it from the object. hint: 'delete'.


let truthy = function(obj){
  for (let i in obj) {
      if (obj[i] === null || obj[i] === 0 || obj[i] === " " || obj[i] === undefined || obj[i] === false){
      delete obj[i];
      }
  }
  return obj; 
}

truthy(user);

/*Once you get your truthy object, Change the remaining values in the object to be specific to you
(name: 'your name', username: 'your username'), rather than my information.*/

user.name = "Alba";
user.username = "albaferrari"

//Now console.log your object and make sure it looks right.

console.log(user);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection.
var methodCollection = {
  /*Now add two methods (functions that are properties on objects)
  to your methodCollection object. One called 'alertHello' which alerts
  'hello' and another method called logHello which logs 'hello' to the console.*/

  alertHello : function () {
    alert('hello');
  },

  logHello : function () {
    console.log('hello');
  }
}

//Now call your alertHello and logHello methods.

methodCollection.alertHello();
methodCollection.logHello();




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



/*write a function called voweler that accepts a string, and returns
an object with the keys being all the vowels in that string,
and the values being how many times that particular vowel was in the string.
voweler("This is a test") --> {i: 2, a: 1, e: 1};*/



function voweler(input) {
  var result = {
      a: 0, e: 0, i: 0, o: 0, u: 0
  };

  for (var i = 0; i < input.length; i++) {
      var char = input.charAt(i).toLowerCase();

      if (result.hasOwnProperty(char)) {
          result[char] ++;
      }
  }

  for (var i = 0; i < input.length; i++) {
  if (result.a == 0) {
    delete result.a
  } else if (result.e == 0) {
    delete result.e
  } else if (result.i == 0) {
    delete result.i
  } else if (result.o == 0) {
    delete result.o
  } else if (result.u == 0) {
    delete result.u
  }
};

return result;
}

voweler("This is a test")