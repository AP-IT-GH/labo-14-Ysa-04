const NUMBERS = [1,2,3,4,5,6];
let sum = 0;

for (let index = 0; index <= NUMBERS.length; index++) {
    sum = sum + index;
}

console.log(`De som van de getallen is ${sum}`);