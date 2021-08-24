// node destructuring.js \\

const fish = {
    
    name: 'hilsha',
    weight: '3kg',
    price: '4000',
    color: 'bright-silver',
    availability: 'river',
    speciality: 'very-tasty'
}

/* const name = fish.name;
const color = fish.color;
const weight = fish.weight;
const price = fish.price;
const availability = fish.availability;
const speciality = fish.speciality;

console.log(name);
console.log(color);
console.log(price); */

/* 
const {name, price, weight} = fish;
console.log(name, price, weight); 
*/

//Object under object
const company = 
{
    name: 'addidas',

    product: 
    {
    shoe:'sports', 
    jersey:'national-teams',
    deodrant: 'players',

    other: //Object under object
    {
        tracksuit: 'winter',
        watch: 'waterproof',
        waterbottle: 'hygienic'
    },

    },

    location: 'USA',
    hr: 'David Beckham'

}

// const deodrant = company.product.deodrant;

const {shoe, jersey, deodrant} = company.product;

const {watch, waterbottle} = company.product.other;

console.log(shoe, jersey, deodrant);
console.log(watch, waterbottle);