const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let isValidInput = true;

function instructions() {
    isInSearch = false; 
    let userOptions = '';

    if (isValidInput) {
        userOptions = ` _________________________________________\n\n Type A to add a book to your reading list \n Type S to search again \n Type L to retreive your Reading List \n Type E to exit \n__________________________________________\n\n `
    } if (!isValidInput) {
        userOptions = '\n\n Please type a valid instruction (A | S | L | E):';
    }

    rl.question(userOptions, (userInput) => {

        let validStringArr = ['s', 'l', 'a', 'e'];
        if (!validStringArr.includes(userInput)) {

            isValidInput = false;
            return instructions();
        }else{
            isValidInput = true; 
        }
    });
}



module.exports = { instructions }; 