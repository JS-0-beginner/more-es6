// node destructuring-array.js \\

//destructuring Array
const [fullname, age] = ['Avishek Ataur', 23];

console.log(fullname, age);

//Optinal-chaining ?(mark)

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

console.log(company.product.other.watch.phone?.case); 

console.log(company?.product?.other?.watch);





