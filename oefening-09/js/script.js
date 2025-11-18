"use strict";

function printTextBox(text = "trump <3 epstein") {
    let border = "//" + "*".repeat(text.length +1) + "\\";
    console.log(`${border}\n| ${text} |\n${border}`);
}
printTextBox();
printTextBox("Matthias is gay");
printTextBox("I <3 JS");
printTextBox("wake up grab a brush and put on a little makeup");