// Objects and properties

//define object, Object Literal
var john = {
    //key:value pairs
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    //objects can even hold arrays of data.
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
};

//print entire object "john"
console.log(john);

//access data in the object with dot notation
console.log(john.birthYear);

//alternative to access data in object, use the key as an index.
console.log(john['birthYear']);

//access data using a variable as the key, note keys must be strings.
var x = 'birthYear';
console.log(john[x]);


//mutate objects like usual, or by the objects key
john.job = 'designer';
john['isMarried'] = true;

console.log(john);

//initialize a new object, new Object syntax
var jane = new Object();
jane.firstName = 'Jane'; 
jane.birthYear = 1969;
jane['lastName'] = 'Smith';

console.log(jane);