/** lets see how the 'this' keyword works in JS */
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016-this.yearOfBirth);
        function innerFunction(){
            //notice this is not a direct descendent of the object
            console.log(this);
        }
        innerFunction();
    }
};

john.calculateAge();

//lets make another object
var mike = {
    name: 'Mike',
    yearOfBirth: 1984,
};

//method borrowing
/* Notice we set mike's calculateAge equal to johns calculateAge function 
this will essentially make it where mike has the same calculateAge 
function without having to rewrite the code. This happens because we are 
treating john.calculateAge as a variable, and just assigning it. */
mike.calculateAge = john.calculateAge;


/*
Also Notice:
When mike.calculateAge is invoked, we see that the this keyword 
inside the function is referencing the mike object. That is because 
the 'this' keyword is only invoked the moment a function is called.
 */