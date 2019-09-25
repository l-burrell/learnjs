/* 
Coding Challenge 5 - Final of section 2

Remember the tip calculator challenge? Lets create a more advanced 
version using everything we learned!

This time, John and his family went to 5 different resturants. The 
bills were 124, 48, 268, 180, and 42 dollars. John likes to tip 
20 percent of the bill when the bill is less than 50 dollars,
15 percent when the bill is between 50 and 200 dollars, and 
10 percent if the bill is more than 200 dollars.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid 
bills and do the tip calculations.
4. As an output, create 1) a new array containing all tips, and 
2) an array containing final paid amounts ( bill + tip). 

HINT: Start with two empty arrays [] as properties and then fill 
them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going 
to 4 different resturants. The bills were 77, 375, 110, and 
45 dollars. Mark likes to tip 20 percent of the bill when the bill 
is less than 100 dollars, 10 percent when the bill is between 
100 dollars and 300 dollars, and 25 percent if the bill is more 
than 300 dollars.

5. Implement the same functionality as before, this time using 
Mark's tipping rules.
6. Create a function (not a method) to calculate the average of a 
given array of tips. HINT: Loop over the array, and in each 
iteration store the current sum in a variable (starting from 0). 
After you have the sum of the array, divide it by the number of 
elements in it (that's how you calculate the average). 
7. Calculate the average tip for each family.
8. Log to the console which family paid the highest tips on average.

*/


mark = {
    fullName : "Mark",
    bills : [77, 375, 110, 45],
    calcTip: function(bills){
        var tips = [], finalBill = [];
        for(var i = 0; i < bills.length; i++){
            if(bills[i] < 50){
                tips[i] = Number((.20 * bills[i]).toFixed(2));
            } else if(bills[i] >= 50 && bills[i] <= 200){
                tips[i] = Number((.15 * bills[i]).toFixed(2));
            } else {
                tips[i] = Number((.10 * bills[i]).toFixed(2));
            }
            finalBill[i] = tips[i] + bills[i];
        }
        this.finalBill = finalBill;
        this.tips = tips;
    },
}

john = {
    fullName : "John",
    bills : [124, 48, 268, 180, 42],
    calcTip: function(bills){
        var tips = [], finalBill = [];
        for(var i = 0; i < bills.length; i++){
            if(bills[i] < 100){
                tips[i] = Number((.20 * bills[i]).toFixed(2));
            } else if(bills[i] >= 100 && bills[i] <= 300){
                tips[i] = Number((.10 * bills[i]).toFixed(2));
            } else {
                tips[i] = Number((.25 * bills[i]).toFixed(2));
            }
            finalBill[i] = tips[i] + bills[i];
        }
        this.finalBill = finalBill;
        this.tips = tips;
    },
}

function calcTipAverage(tips){
    var average = 0;
    for(var i = 0; i < tips.length; i++){
        average += tips[i];
    }
    return (average / tips.length);
}

console.log(mark, john);

//Calculations
mark.calcTip(mark.bills);
john.calcTip(john.bills);
mark.average = calcTipAverage(mark.tips);
john.average = calcTipAverage(john.tips);

function largestTipAverage(){
    if(john.average > mark.average){
        console.log('John on average tipped more than Mark. His average was $' + john.average.toFixed(2));     
    } else if(mark.average > john.average){
        console.log('Mark on average tipped more than John. His average was $' + mark.average.toFixed(2));
    } else {
        console.log('Both had the same average of tips.')
    }
}
largestTipAverage();
