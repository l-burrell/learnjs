
//IIFE (Immediately Invoked FunctioNE xpressions)

//iamgine we have a little game where you win if your value is greater than 5.
//suppose we want the score to remain hidden. 
function game() {
    //this makes the score hidden, because scoping makes it only visible to the inner function. 
    var score = Math.random() * 10;
    console.log(score >= 5);
}
// game();

/* Notice: 
The above, game() function can in fact make the data hidden by scoping it into a 
function. But its not our best approach. */



//Now think:
//we shouldn't declare a whole function, to make a private variable. 
//Instead we want to use IIFE (the better approach).
(function() {
    //the score is effectively hidden in our IIFE.
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

// since score is hidden, thus treated like it doesn't exist
//console.log(score); 

//Did you know an IIFE can have multiple parameters too? Lets test it. 
(function(goodLuck) {
    var score = Math.random() * 10;
    //so notice we have parameter goodLuck, to help us win. 
    console.log(score >= 5 - goodLuck);
})(3); //notice (3); is how we insert arguments into the function when called 



/* Summary of what we did:
We wrap the entire function into parenthesis () to turn the declaration 
into an expression. This is required due to the function having no name. 
We then invoke it immediately after creating it with (); because all 
IIFE will have no way of calling them (due to having no name). So it 
must be immediately invoked, always. */