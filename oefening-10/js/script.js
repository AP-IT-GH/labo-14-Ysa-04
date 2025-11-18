"use strict";

function nameFromEmail(email) {
    let endIndex = email.indexOf("@");
    let fullName = email.substring(0,endIndex).replace(".", " ").toUpperCase();
    console.log(`${fullName}`);
}
nameFromEmail(prompt("Enter ur email-address:"));




