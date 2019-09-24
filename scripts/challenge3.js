/* Challenge 3

John and his family went on a holiday and went to 3 resturants. The bills were 124, 48, and 268 dollars.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He 
likes to tip 20% of the bill when the bill is less than 50, 
15% when the bill is between 50 and 200, and 10% if the bill is more 
than 200 dollars.

In the end, John would like to have 2 arrays:
1) containing all three tips (one for each bill)
2) containing all three final paid amounts (bill + tip)

NOTE: to calculate 20% of a value, just multiply 20/100 = 0.2 */

var bills = [124, 48, 268];
var totalFee = [], individualTips = [];

function calculateTip(bills){
    for(i = 0; i < bills.length; i++){
        if(bills[i] < 50){
            individualTips[i] = Number(((20/100) * bills[i]).toFixed(2));
        }
        else if(bills[i] >= 50 && bills[i] <= 200){
            individualTips[i] = Number(((15/100) * bills[i]).toFixed(2));
        }
        else {
            individualTips[i] = Number(((10/100) * bills[i]).toFixed(2));
        }
        totalFee[i] = bills[i] + individualTips[i];
    }
}

calculateTip(bills);

console.log(individualTips);
console.log(totalFee);