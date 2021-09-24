"use strict"

 let destinations = ['Cleveland', 'Cincinnati', 'Columbus', 'Sandusky'];
 console.log(destinations) 

let userDestinations = prompt("Choose a number between 0 and 3")


//function getDestination(userDestinations)
    
   for(let i = 0; i < destinations.length; i++){
       if (userDestinations[i] === 'Cleveland') {
           console.log('You will be traveling to Cleveland')
       }
   } 
        


//let restaurants = ['Pizza', 'Street Tacos', 'Hibachi', 'Mongolian'];
//console.log(restaurants)

//let transportation = ['Uber', 'Limo', 'RV', 'Private Jet'];
//console.log(transportation)

//let entertainment = ['local concert', 'local sporting event', 'bar/arcade', 'Oktoberfest'];
//console.log(entertainment)
