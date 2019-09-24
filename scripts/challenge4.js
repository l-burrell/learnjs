/*
Coding Challenge 4

Remember the first coding challenge where Mark and John compared 
their BMIs. Let's now implement the same functionality with objects 
and methods.
1. For each of them, create an object with properties
for their full name, mass, and height.
2. Then, add a method to each object to calculate the BMI. Save the 
BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, 
together with the full name and the respective BMI. Don't forget 
they might have the same BMI.

Remember: BMI = mass / height^2. Mass in kg, height in meter.
*/


var mark = {
    firstName: 'Mark',
    lastName: 'Unknown',
    mass: 90,
    height: 6.5,
    calcBMI: function(){
        this.BMI = this.mass / (this.height** 2);
    },
}

var john = {
    firstName: 'John',
    lastName: 'Unknown',
    mass: 120,
    height: 5.8,
    calcBMI: function(){
        this.BMI = this.mass / (this.height**2);
    },
}

john.calcBMI();
mark.calcBMI();
console.log(mark);
console.log(john);

//who has the highest BMI?
if(john['BMI'] > mark['BMI']){
    console.log('John has the bigger BMI with a score of ' + john.BMI.toFixed(2));
} else if(john.bmi < mark.bmi) {
    console.log('Mark has the bigger BMI with a score of ' + mark.BMI.toFixed(2));
} else {
    console.log('They have the same BMI with a score of ' + mark.BMI.toFixed(2));
}