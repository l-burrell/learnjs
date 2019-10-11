//Passing functions as arguments

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    //array for result
    var arrRes = [];
    //traverse array
    for(var i = 0; i < arr.length; i++){
        //push to end of arrRes, the function result of function(arr[i]). 
        arrRes.push(fn(arr[i]));
    }
    //return array
    return arrRes;
}

function calculateAge(el){
    return 2015 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if (el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAges);
console.log(rates);

/*
So what happened here?

Recall that a function called inside an argument is essentially a 
call back function. Because we dont run it immediately on our own, we 
instead have the function do the work of calling the other function.

So we have 3 individual functions, that we can use as callback functions.*/