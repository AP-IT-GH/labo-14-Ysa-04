let pokemon = [
    "Bulbasaur",
    "Ivysaur",
    "Venusaur",
    "Charmander",
    "Charmeleon",
    "Charizard",
    "Squirtle",
    "Wartortle",
    "Blastoise",
    "Caterpie",
    "Metapod",
    "Butterfree",
    "Weedle",
    "Kakuna",
    "Beedrill",
    "Pidgey",
    "Pidgeotto",
    "Pidgeot",
    "Rattata",
    "Raticate",
    "Spearow",
];

for (let index = 0; index < pokemon.length; index++) {
    console.log(`${index+1}. ${pokemon[index]}`); 
}

let team = [];
let input;
    do {
        input = prompt("Welke Pokémon wil je in je team? [1-21] (Typ 'STOP' om te eindigen):");

        if (input !== null) {
            const index = parseInt(input);

            if (!isNaN(index) && index > 0 && index <= pokemon.length) {
                const chosenPokemon = pokemon[index - 1];

                if (team.includes(chosenPokemon)) {
                    alert(`Deze Pokémon zit al in je team.`);
                } else {
                    team.push(chosenPokemon);
                    alert(`"${chosenPokemon}" is toegevoegd aan je team.`);
                }
            } else if (input.toLowerCase() !== "stop") {
                alert(`Deze Pokémon ken ik niet.`);
            }
        }
    } while (input !== null && input.toLowerCase() !== "stop");

alert("Jouw team bestaat uit:");
for (const item of team) {
        alert(item);    
}
