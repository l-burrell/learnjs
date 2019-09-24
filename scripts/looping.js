//Looping and iteration (Also covers: Break & Continue)

//for loop
for(var i = 0; i < 3; i++){
    console.log(i);
}

//lets use an array
var john = ['John', 'Smith', 1990, 'designer', false];

//imagine we want to see all elements in the john array
for(var i = 0; i < john.length; i++){
    console.log(john[i]);
}

//while loop
var value = 0;
while(value < 2){
    console.log('while loop: running')
    value++;
}

//continue and break statements
var jane = ['Jane', 'Smith', 1990, 'astronaut', false];
for(var i = 0; i < john.length; i++){
    //use continue to quit current iteration of loop
    //notice the one line if statement
    if(typeof jane[i] !== 'string') continue;
    /*if this is not a string, then the continue break this iteration
    which essentially skips this iteration into the next, EX: i=2 into i=3 immediately. */
    console.log(jane[i]);
}

/* 
NOTES on continue and break
    continue - will break out a iteration of the loop.
    break - will break out the entire loop.
*/
