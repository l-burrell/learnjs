//functions returning other functions

function interviewQuestion(job){
    if (job === 'designer'){
        //return an anonymous function
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher'){
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name){
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

//lets test the function
/*Note: the teacherQuestion variable will become the function 
that is returned by the interviewQuestion function. */
var teacherQuestion = interviewQuestion('teacher');

/*Now we will call teacherQuestion, which is the inner function of interviewQuestion, and 
then pass in the value 'John'. Essentially passing in a name into 
the function. Now we have called both functions, and will get our 
result from the teacherQuestion(name) portion. */
teacherQuestion('John');


//more  testing
var designerQuestion = interviewQuestion('designer');
designerQuestion('Jane');
designerQuestion('Dean');

//Lets do the function, and its return in one line.
var teacherQuestion2 = interviewQuestion('teacher')('Jamie');


/*
What did we learn:

Remember that functions in JS are considered to be objects. So you can 
think of us as returning an object. In these examples we returned 
anonymous functions, but we could have just as easily returned a 
callback function instead. Depends on whats most efficient.

We can also think of "interviewQuestion" as a generic function, and the 
inner function as a more specific function in our variable.
 */

