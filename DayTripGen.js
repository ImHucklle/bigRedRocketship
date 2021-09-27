"use strict"

 let destinations = ['Cleveland', 'Cincinnati', 'Columbus', 'Sandusky'];
 console.log(destinations) 

let userDestinations = prompt("Choose a number between 0 and 3")


//function getDestination(userDestinations)
    
   for(let index = 0; index , destinations.length;){ 
       if (userDestinations[index] === 0) {
           console.log ('You will be traveling to Cleveland')
       }
       if (userDestinations[index] === 1) {
           console.log ('You will be traveling to Cincinnati')
       }
       if (userDestinations[index] === 2) {
           console.log ('You will be traveling to Columbus')
       }
       if (userDestinations[index] ===3) {
           console.log (' You will be traveling to Sandusky')
        }
   } 
        

let restaurants = ['Pizza', 'Street Tacos', 'Hibachi', 'Mongolian'];
console.log(restaurants)

let userRestaurants = prompt("Choose another number between 0 and 3")

for(let index = 0; index , restaurants.length;){ 
    if (userRestaurants[index] === 0) {
        console.log ('You will be having Pizza')
    }
    if (userRestaurants[index] === 1) {
        console.log ('You will be having Street Tacos')
    }
    if (userRestaurants[index] === 2) {
        console.log ('You will be having Hibachi')
    }
    if (userRestaurants[index] ===3) {
        console.log (' You will be having Mongolian')
     }
} 

let transportation = ['Uber', 'Limo', 'RV', 'Private Jet'];
console.log(transportation)

let userTransportation = prompt("Choose another number between 0 and 3")

for(let index = 0; index , transportation.length;){ 
    if (userTransportation[index] === 0) {
        console.log ('You will be taking an Uber')
    }
    if (userTransportation[index] === 1) {
        console.log ('You will be taking an Limo')
    }
    if (userTransportation[index] === 2) {
        console.log ('You will be taking an RV')
    }
    if (userTransportation[index] ===3) {
        console.log (' You will be taking an Private Jet')
     }
} 

let entertainment = ['local concert', 'local sporting event', 'bar/arcade', 'Oktoberfest'];
console.log(entertainment)

let userEntertainment = prompt("Choose another number between 0 and 3")

for(let index = 0; index , entertainment.length;){ 
    if (userEntertainment[index] === 0) {
        console.log ('You will be going to a local concert')
    }
    if (userEntertainment[index] === 1) {
        console.log ('You will be going to a local sporting event')
    }
    if (userEntertainment[index] === 2) {
        console.log ('You will be going to a bar/arcade')
    }
    if (userEntertainment[index] ===3) {
        console.log (' You will be going to an Oktoberfest')
     }
} 

//Math.random()