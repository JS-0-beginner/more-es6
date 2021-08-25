// difference-map-foreach.js \\


const heroesArray = ['Hulk', 'Thor', 'Wolverine'];

heroesArray.map(heroes => console.log(heroes+' is a Avenger'));
heroesArray.forEach(heroes => console.log(heroes+' is a Avenger')); 


///// Difference between forMap and forEach /////

//Behind the scene of array-forMap()

const heroesArray = ['Hulk', 'Thor', 'Falcon'];

//Without Iteration
for(heroes of heroesArray) 
{
    console.log(heroes+' is an Avenger');
} 


//Behind the scene of array-forEach()

//// Behind the scene of array-forEach() With normal function
const heroesArray = ['Hulk', 'Thor', 'Wolverine'];

function avengers(heroes)
{
    console.log(heroes+' is an Avenger');
}

heroesArray.forEach(avengers); 

//// Behind the scene of array-forEach() With anonymous function
heroesArray.forEach(function(heroes)
{
    console.log(heroes+' is an Avenger');
}
); 
