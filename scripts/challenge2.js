/*
john and mike play basketball on different teams.
john team got 89, 120, 103 points. 
mike team got 116, 94, 123 points.
1.calculate average score
2. decide which team wins (team with highest average)
3. print winner + scores
4. bonus:
    jenny also plays basketball on a different team.
    jenny team got 97, 134, 105 points.
    like before log average winner, compare mary as well.
5. handle case of a draw
*/

var mikeTeam, johnTeam, jennyTeam;
mikeTeam = (116 + 94 + 123) / 3;
johnTeam = (89, 120, 103) / 3;
jennyTeam = (97, 134, 105) / 3;

if(johnTeam > mikeTeam && johnTeam > jennyTeam){
    console.log('John team won with ' + johnTeam + " points.")
} else if(mikeTeam > johnTeam && mikeTeam > jennyTeam){
    console.log('Mike team work with ' + mikeTeam + " points.")
} else if(jennyTeam > mikeTeam && jennyTeam > johnTeam){
    console.log('Jenny team won with ' + jennyTeam + " points.")
} else {
    console.log('No clear winner, there was a tie.')

    if(jennyTeam == johnTeam == mikeTeam){
        console.log('all teams tied')
    } else if(jennyTeam == johnTeam){
        console.log('jenny and john tied')
    } else if(jennyTeam == mikeTeam){
        console.log('jenny and mike tied')
    } else if(johnTeam == mikeTeam){
        console.log('john and mike tied')
    }
}