//Challenge 1

/*
Mark and John are trying to compare their BMI, with formula
BIM = mass / height^2 = mass / (height * height);
with mass in kg and height in meter.

1. get mark and johns mass and height
2. calculate their BMI
3. compare their BMI to see if marks bmi is higher than johns.
4. print a string
*/
var mark_mass, mark_height;
mark_mass = 86;
mark_height = 6.5;

var john_mass = 95, john_height = 6.8;

var markBMI = mark_mass / mark_height**2;
var johnBMI = john_mass / john_height**2;
var calculation = markBMI > johnBMI;
console.log("Is mark's BMI higher than johns?" + calculation);
