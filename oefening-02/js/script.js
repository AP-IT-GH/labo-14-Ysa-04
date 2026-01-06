let firstNames = ["Emma", "Liam", "Sophie", "Noah", "Jeff"];
let lastNames = ["Pietersen", "de Vries", "Bakker", "Legrand", "Vermeulen"];

if (firstNames.length === lastNames.length) {
    for (let i = 0; i < firstNames.length; i++) {
        console.log(`${firstNames[i]} ${lastNames[i]}`);
    }
} else {
    console.log("De arrays zijn niet even lang");
}