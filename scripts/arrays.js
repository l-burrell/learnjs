//arrays

//initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1999, 1993, 2000, 1948);

console.log(names[0]); // arrays are zero based
console.log(names.length); //elements in array

//mutate array data
names[1] = "Ben";
names[5] = 'Mary';
console.log(names);

// different data types in array
var john = ['John', 'Smith', 1980, 'teacher', false]

//add to end of array
john.push('blue');
console.log(john);

//add to start of array
john.unshift('Mr.');
console.log(john)

//remove element from end of array
john.pop();
console.log(john);

//remove element from start of array
john.shift();
console.log(john);

//find position of "1980" in the john array, return index
console.log(john.indexOf(1980));

