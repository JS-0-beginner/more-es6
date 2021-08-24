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

/* 
for(const number of numbers) //number can be defined above
{
    const result = multiplying(number);
    output.push(result);
} 
*/

// const output = numbers.map(multiplying); //With Arrow Function

// const output = numbers.map(number => number*2); //With Arrow Function's Operation


//With any variable
// const output = numbers.map(x => x*2); 
const output = numbers.map(x => x*x); 


console.log(output); 

