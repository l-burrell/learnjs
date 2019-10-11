//Understanding closures 

 /* lets say we want a function, that returns a function to 
 calculate how many years we have till retirement */

 //generic function
 function retirement(retirementAge){
     var a = ' years left until retirement.';
     return function(yearOfBirth){
        var age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
     }
 }

 //2 line approach
 var retirementUS = retirement(66);
 retirementUS(1990);
//1 line approach (same thing)
// var retirementUS = retirement(66)(1990);
var retirementGermany = retirement(65)(1990);
var retirementIceland = retirement(67)(1990);


/* What are closures? 
In short, a closure is when inner functions have access to 
variables and parameters of its outer function, even after 
the outer function has returned.

Note: Closures happen automatically in JS.
*/


// Lets do a mini-challenge
// Re-write the interviewQuestions function again, with the power of closures
function interviewQuestions(job){
    /* the change is in this line, because we now know how closures work 
    we know that we can access the job variable even when the function returns. 
    This enables use to have all the other conditions wrapped inside 
    the inner function, instead of doing multiple individual return inner functions. 
    
    So in short: Our code has become more concise, and clean. Thanks to having 
    just one return inner function, and making use of closures to access the job variable. */
    
    return function(name) {
        if(job === 'designer'){
            var message = ', can you explain what UX design is?'
            console.log((name) + message);
        } else if(job === 'teacher'){
            var message = 'What subject do you teach. ';
            console.log((message+name)+"?");
        } else {
            var message = ', what do you do?';
            console.log('Hello ' + (name + message));
        }
    }
}
interviewQuestions('teacher')('John')