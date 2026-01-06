let spreadsheet = [
    [100, 104, 105],
    [144, 110, 109],
    [105, 107, 111]
];

let sumRow1 = 0;
let sumRow2 = 0;
let sumRow3 = 0;

for (let i = 0; i < spreadsheet[0].length; i++) {
    sumRow1 += spreadsheet[0][i];
}

for (let i = 0; i < spreadsheet[1].length; i++) {
    sumRow2 += spreadsheet[1][i];
}

for (let i = 0; i < spreadsheet[2].length; i++) {
    sumRow3 += spreadsheet[2][i];
}

console.log(`De som van rij 1 is ${sumRow1}`);
console.log(`De som van rij 2 is ${sumRow2}`);
console.log(`De som van rij 3 is ${sumRow3}`);