
function add(a, b){
    return a + b;
}

var multiply = function(a, b) {
    return a * b;   
}

var subtract = (a, b) => a - b;

var age = 10;
switch(age){
    case 5:
        console.log('heh, age 5')
        break;
    case 10:
        console.log('finally age 10');
        break;
    default:
        console.log('not age 5 or 10.')
}

if(age > 5){
    console.log('Older than 5 yrs')
} else if(age < 5 && age > 0){
    console.log('Hes so young, even younger than 5 yrs.')
} else {
    console.log('aint even possible');
}

for(var i = 0; i < 3; i++){
    console.log('for has run')
}
var i = 2;
while(i < 2){
    console.log('while has run')
    i++;
}

do {
    console.log('do has run: ' + i);
}while(i < 3);

var array1 = ['a','c','d'];
var array2 = [['a', 'b','c','d','e','f','g'], [1, 2, 3, 4, 5, 6, 7]];
console.log(array2);