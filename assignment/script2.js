//Other ways to create objects and inheritance

//create the prototype property
var personProto = {
    calculateAge: function(){
        console.log(2018-this.yearOfBirth);
    }
}

//Object.create (requires use to pass the prototype property)
//Essentially, this creates a new Object with default data in prototype.
var john = Object.create(personProto);

//put more data into the object
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

/* Notice: we had to create the prototype property and then 
place it inside an empty object. But that object only contained 
the method calculateAge. The object is essentially empty at its 
creation, so we had to pass data into it. 

We set the name, yearOfBirth, and job, for the object.
Good, now our object has some data / properties in it. 

But there is an even faster way to do this demonstrated below.*/


/*Lets create an object, but pass data into it immediately on 
its creation. This is achieved by using the Object.create's second 
parameter. */
var jane = Object.create(personProto, {
    name: {value: 'Jane'},
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' },
});

/*
This time we will create objects that inherit from the prototype. 
First we will define an Object that will act as our prototype.
Then we will create an Object that will use that prototype.
If we also use the second parameter, we can immediately 
insert data into the object.

Whats the difference object.create and the function constructor pattern?
    Object.create builds an object that inherits directly from the one 
    that we passed into the first argument. While the function constructor has the 
    newly created object inherit from the constructor's prototype property. 

TIP: What is so useful about the using object.create instead of function constructor?
    The biggest benefit of object.create is that it lets us implement complex 
    inheritance structures in an easier way. Because we can directly specify which 
    object should be a prototype.
    
Note: function constructor is still most popular approach
*/