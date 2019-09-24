//Objects and methods

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    //Objects can even hold functions! Lets try:
    //create a function expression that calculates johns age.
    calcAge: function(birthYear){
        return 2018 - birthYear;
    },

    //this keyword will access the current object, in this case John
    calcAgeImproved: function(){
        return 2018 - this.birthYear;
    },

    //lets improve even further, and store the data into age variable
    calcAgeImprovedAgain: function(){
        this.age = 2018 - this.birthYear;
    },
};

//now we can calculate johns age using his birthyear.
//But theres a better way to access his birthyear. using the 
//"this" keyword. Lets write an improved calcAge method above.
console.log(john.calcAge(john.birthYear));

//notice we get the same result, and dont have to worry about parameters.
console.log(john.calcAgeImproved());

//lets see if our newest method will create the age property
john.calcAgeImprovedAgain();
console.log(john);