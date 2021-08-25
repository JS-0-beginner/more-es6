// node string-map.js \\
console.log('---');

//String Array
console.log('Heroes Name Length');

const superHeroes = 
[
    'Iron Man',
    'Captain America',
    'Thor',
    'Hulk'
]

const nameLength = superHeroes.map(hero => hero.length);

console.log(nameLength);

//Object in Array
console.log('Powers---');

const heroes =
[
    {name: 'Wolverine', power: 'Claws', strength: '50percent' },

    {name: 'Thor', power: 'Thunderbolt', strength: '100percent' },

    {name: 'Hulk', power: 'Smash', strength: 'Infinity'}
];

const heroNames = heroes.map(hero => hero.name);

const heroPowers = heroes.map(hero => hero.power);

console.log(heroNames);
console.log(heroPowers);

//Entire Array
console.log('Heroes---');
heroes.map(hero => console.log(hero));

console.log('For Each---');
heroes.forEach(hero => console.log(hero));


