//Create a Animal Constructor that has the following parameters.
// species, name, legs, color, food (which is an array of foods they can eat).

function Animal(species, name, legs, color, food) {
  this.species = species,
  this.name = name,
  this.legs = legs,
  this.color = color,
  this.food = food
}

var lion = new Animal("feline", "lion", 4, "yellow", ["meat", "vegetables", "fruit"]);
}

console.log(lion);

//Now create a person function that creates an object and returns it (not in constructor form)
//that has the following parameters. name, age, height, gender

function Person(name, age, height, gender) {
  this.name = name,
  this.age = age,
  this.height = height,
  this.gender = gender
}

var joey = new Person("Joey", 30, 180, "male");

console.log(joey);



//Create a animal array and a person array.

let animal = ["tiger", "crocodile", "dog", "elephant"];
let person = ["Grace", "Louis", "Luke", "Billy"];


//Create two instances of Animal and push those into your animal array

animal.push ("giraffe", "cow");


//Create two instances of person and push those into your person array.

person.push ("Nora", "Edward");


//Now we want every instance of Animal to have a eat method.
//This method will choose a random item in that instances food array,
//then alert "(name) ' ate ' (whichever food was chosen)".

Animal.prototype.eat = function(food) {
  let randomFood = food[Math.floor(Math.random() * food.length)];
  return randomFood;
}
let dog = new Animal ("mammal", "dog", 4, "brown", ["apple", "bananas", "meat"]);
let random = dog.eat(dog.food);
alert(dog.name.concat(" ate ").concat(random));



//At this point, if we wanted to add something to every istance of person could we?

/* Yes, it's possible. We can treat Person as we treated Animal, creating a custom
prototype that refers to Person */



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
    It creates a new object and sets the prototype of the newly created object
    to the constructor function's prototype.

  2) What's a good way to describe the keyword 'this'
    It refers to the "owner" of the function that is being executed or to the Object
    the function is a method of, so its meaning depends on the different situations.
    In a function it refers to the global object, in a method it refers to the owner object,
    in an event it refers to the element that is receiving the event.


  3) Can a normal function which creates an object and then returns that object use the prototype?
    To create an object with a function that is not a constructor or a factory,
    we can use the Object.create method, but it's going to inherit the prototype
    from another object.


  4) What happens if you forget to use 'new' when calling a constructor?
  If you forget it, you will be calling the object constructor as a regular function.
*/
