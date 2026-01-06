function printMaaltafel(multiplier, iterations) {
    let multiplications = "";
    
    for (let i=1; i<=iterations; i++) {
        multiplications += `${multiplier * i}, `;
    }
    multiplications = multiplications.substring(0, (multiplications.length-2));
 
    console.log(multiplications) ;
}

printMaaltafel(1,10);
printMaaltafel(2,10);
printMaaltafel(3,10);
printMaaltafel(4,10);
printMaaltafel(5,10);
printMaaltafel(6,10);
printMaaltafel(7,10);
printMaaltafel(8,10);
printMaaltafel(9,10);
printMaaltafel(10,10);