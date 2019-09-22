//function statements and expressions

//function declaration
/*delcarations immediately return a result*/
function demonstration(num, num2){
    return num + num2;
}
console.log(demonstration(10, 6));


//function expression / anonymous
/*expressions hold the result in a variable */
var whatIsYourJob = function(num, num2){
    return num + num2;
}

console.log(whatIsYourJob(5, 6));