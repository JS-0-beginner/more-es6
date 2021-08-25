// node find-filter.js \\

/* 
const randomOne = Math.random()*100;
console.log(',',parseInt(randomOne)); 
*/

//Filter Array \\\\\\\\\\\\\\\\\\

/* 
console.log('');

const numbers = [20, 78, 41, 92, 15, 31, 56, 99, 55];

const largeNumbers = numbers.filter(number => number >50);
const smallNumbers = numbers.filter(number => number <50);

console.log(smallNumbers);
console.log(largeNumbers);
 */

//Filter String Array
console.log('');
const heroes =
[
    {name: 'Wolverine', power: 'Claws', strength: 70 },

    {name: 'Thor', power: 'Thunderbolt', strength: 100 },

    {name: 'Hulk', power: 'Smash', strength: 100},

    {name: 'Spider-Man', power: 'webshooter', strength: 10},
    
    {name: 'Deadpool', power: 'bullets', strength: 40},

    {name: 'Falcon', power: 'bullets', strength: 20},

];

//Calling Property
const powerfull = heroes.filter(hero => hero.strength > 50);

console.log(powerfull);

//Calling Property-Value
const shooter = heroes.filter(hero => hero.power == 'bullets');

// Find Array \\\\\\\\\\\\\\\\\\
const shooters = heroes.find(hero => hero.power == 'bullets');

console.log(shooters);