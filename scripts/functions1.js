function calculateAge(birthYear){
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMary = calculateAge(1948);
var ageJane = calculateAge(1969);

function yearsUntilRetirement(year, name){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement < 0){
        console.log(name + " has already retired " + Math.abs(retirement) + " years ago.")
    } else {
        console.log(name + " retires in " + retirement + " years.");
    }
}

yearsUntilRetirement(1990, 'John')
yearsUntilRetirement(1948, 'Mary')
yearsUntilRetirement(1969, 'Jane')