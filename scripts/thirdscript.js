//Operator precedence

var now = 2018;
var yearJohn = 1900;
var fullAge = 66;

//Multiple operators
var isFullAge = now - yearJohn >= fullAge; 
console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = y = (3+5)*4-6;//8 * 4 - 6 // 32 - 6 // 26
console.log(y);
console.log(x);

//more operators
x *= 2;
console.log(x);
x += 10; // x = x + 10;
console.log(x);
x = x + 1;
x += 1;
x++;
console.log(x);