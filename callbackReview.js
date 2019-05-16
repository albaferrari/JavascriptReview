/* Declare and Define the functions here that will make the function calls below work properly */



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function first (array, func){
let name = array[0];
func(name);
}

first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function last (array, func){
let name = array[6];
func(name);
}

last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//have the contains function return a boolean value for if the name is in the array or not.


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function contains (string, array, func) {
  let positive = array.includes(string);
  func(positive);
}

contains('Colt', names, function(yes){
  if(yes){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});


  

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through
//a transformation function

function map(array, func) {
  let newArray = []
  for (let i = 0; i < array.length; i++){
    newArray.push(func(array[i]));
  }
  return newArray;
}

map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function uniq (array, func) {
  let uniqArr = [];
  for (let i = 0; i < array.length; i++){
    if (uniqArr.indexOf(array[i]) == -1){
      uniqArr.push(array[i]);
    }
  }
  func(uniqArr);
  return uniqArr
}

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

function each(array, func){
  for (let i = 0; i < array.length; i++){
    let indice = array.indexOf(array[i]);
    let item = array[i];
    func(item, indice);
  }
}


each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];

function getUserById(value, array, func){
  var sixteenT = array.filter( function(array){return (array.id=="16t");} );
  var x = 0;
  var user = sixteenT[x];
  func(user);
}

getUserById('16t', users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




//Looks through each value in the list, returning the first one that passes a truth test
var numbers  = [1, 2, 3, 4, 5, 6];


function find(array, func) {
  for (let i = 0; i < array.length; i++){
    if (array[i] % 2 == 0){
      return array[i];
    }
  }
}


find(numbers, function(num){
  return num % 2 == 0; //should return 2
})
