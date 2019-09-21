
//if statements
var name = "hamsters";
if (name.length > 7){
    console.log('interestingly, long name')
} else {
    console.log('nice name.')
}

var isMarried = false;
if(isMarried){
    console.log('how has the marriage been?')
} else {
    console.log('maybe in the future')
}

var age = 50;
age >= 18 ? console.log('can have beer') : console.log('can have juice');

switch(true){
    case 10:
        console.log('You just a little kid');
        break;
    case 20: 
        console.log('You hit a milestone at 20, bravo kid');
        break;
    default:
        console.log('this aint a milestone so try again.');
}

var height = 23;
if(height == '23'){
    console.log('the == says (23 == "23") they are equal. Thanks to type coercion  ')
}
if(height === '23'){
    console.log('the === is equal')
} else {
    console.log('the strict === says that (23 === "23") is false! Because no type coercion.')
}