let numberOfFriends = parseInt(prompt("Hoeveel vrienden wil je toevoegen?"));

let friendsFirstNames = [];
let friendsLastNames = [];

for (let index = 0; index < numberOfFriends; index++) {
    friendsFirstNames.push(prompt(`Geef de voornaam van vriend ${[index+1]}`));
    friendsLastNames.push(prompt(`Geef de achternaam van vriend ${[index+1]}`));
}

for (let index = 0; index < friendsFirstNames.length; index++) {
    console.log(`${friendsFirstNames[index]} ${friendsLastNames[index]}`);   
}