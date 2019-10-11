
// Bind, call, and apply

/* Remember that functions are a special kind of object.
Functions get special methods they inherit from the function constructor. */

var john = {
    name: 'John',
    age: 26, 
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if(style == 'formal'){
            console.log('Good ' + timeOfDay + ", Ladies and Gentlemen! I am " 
            + this.name + ", and I am a " + this.job);
        } else if (style === 'friendly'){
            console.log('Hey! What\'s up? I\'m ' + this.name + " and I am a " + this.job);
        }
    }
};

var emily = {
    name: 'Emily',
    job: 'designer',
};

//So lets call the method presentation, on the john object
john.presentation('formal', 'evening');

/*what if we want emily to use john's presentation method?
Then we will use the call method, which will change the 'this' 
from john into emily. Thus allowing us to use the same method, 
as if it were also in the emily object. 

Essentially, we borrowed the presentation method, using the 
built-in call method. 

Note: the call method requires the other object as a parameter, 
and then add the other parameters if there are any.*/
john.presentation.call(emily, 'friendly', 'afternoon');

//similar to the call method, but this works with arrays
// john.presentation.apply(emily, ['friendly', 'afternoon']);

//similar to the call method, but this makes a copy of the data
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('morning');

//testing concept again
// var a = {
//     name: 'apple',
//     color: 'red',
//     eat: function(){
//         console.log('You eat the tasty ' + this.color + ", " + this.name);
//     }
// }
// var b = {
//     name: 'banana',
//     color: 'yellow',
// }
// a.eat();
// a.eat.call(b);


//Lets do a mini-challenge with a real world example
//we will once again us a function we already made, this time 
//lets use the arrayCalc method from returning functions lecture.
var years = [1990, 1965, 1937, 2005, 1998];
function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2018 - el;
}

//note: limit = age limit to be considered an adult
//note: el = age we accept
function isFullAge(limit, el){
    return el >= limit;
}

/*notice we want to use the fullAge method, but it only
accepts 1 parameter. But we want to use 2 parameters. 

Thankfully, we just learned the bind method, which allows us 
to make a copy of the data while also setting a predefined 
parameter. */
var ages = arrayCalc(years, calculateAge);

//we call the function as usual, but for the isFullAge callback, 
//we bind it, so that we can add a default parameter.
//note: this = that object, 20 = the limit, el is given during arrayCalc as usual. 
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
