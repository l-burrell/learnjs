//Inheritance
//Lets learn about prototypes and constructors

//Object literal
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher',
};

//Function constructor
//NOTE: Function constructors should start with capital letter.
var Person = function(name, yearOfBirth, job){
    //attach variables
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

//create the Prototype Property
//Note: all instance objects of Person will have access to this.
Person.prototype.calculateAge = function() {
    console.log(2018-this.yearOfBirth);
}

//this property is now inherited to all instance objects
Person.prototype.lastName = 'Smith';

//Lets create an object using the constructor Person
//instantiate our john object
var john = new Person('John', 1990, 'teacher')

//Lets do more tests
var jane = new Person('Jane', 1969, 'designer')
var mark = new Person('Mark', 1948, 'retired')


//lets check if the prototype properties worked
john.calculateAge();
jane.calculateAge();
mark.calculateAge();

//lets also check our properties in the prototype property worked
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);


/* Notes:
So we initially had a object literal to create the john object. 
But we decided that in the future we want to make more objects with 
the same kind of data. We decide to make a 'class' or constructor 
which will handle that. 

So we created the Person 'class' or constructor. Its job is to be 
a blueprint for future objects of the same type. It will provide 
default methods and parameters that we want set of every object 
of this type. It acts similar to a "class" in java.

Note 2: About Prototype Property
Notice that we did Person.prototype.calculateAge = function(). 
The reason we did this is so that we wont have to attach the 
actual method to all the instance objects. But they will still 
have access to this method, due to the prototype property, which 
puts it in their prototype. This is useful for keeping the constructor 
light, but also adding functionality to all its instance objects. */

