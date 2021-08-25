//General Loop Element Pushing 

/* 
const numbers = [2, 4, 6, 8]
const output = [];
for(const number of numbers)
{
    const multiplying = number * 2;
    output.push(multiplying);
}

console.log(output);
 */

//Loop Element Pushing with Arrow Function

const numbers = [2, 4, 6, 8]
// const output = [];

// const multiplying = number => number*2;

// const output = numbers.map(multiplying); //With array.map( ) - Arrow Function

// const output = numbers.map(number => number*2); //With array.map( ) - Arrow Function's value/operation

//Both can be used above


//With any variable
// const output = numbers.map(x => x*2); 
const output = numbers.map(x => x*x); 


console.log(output); 

