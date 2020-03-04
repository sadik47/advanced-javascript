/*
const numbers = [3,4,5,6,7,8,9];
const output = [];
for(let i = 0 ;i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);
*/

// const numbers = [3,4,5,6,7,8,9];
// function square(element){
//     return element * element;
// }


// const result = numbers.map(function(element){
//     return element * element;

// })
// console.log(result);

const numbers = [3,4,5,6,7,8,9];
const result = numbers.map(element => element * element);
console.log(result);

//Filter

const numbers1 = [3,4,5,6,7,8,9];
const bigger = numbers1.filter(x => x > 5);
const bigger1 = numbers1.find(x => x > 5);
console.log(bigger);
console.log(bigger1);