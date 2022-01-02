const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

function instructions() {

    const userOptions = ` _________________________________________\n\n Type A to add a book to your reading list \n Type S to search again \n Type L to retreive your Reading List \n Type E to exit \n__________________________________________\n\n `

    rl.question(userOptions, (userInput) => {

        let validStringArr = ['s', 'l', 'a', 'e'];
        if (!validStringArr.includes(userInput)) {


            rl.setPrompt('\n\n Please type a valid option...\n');
            rl.prompt();
            //console.error('\n\n Please type a valid instruction (A | S | L | E):');
            return instructions();


        }
    });
}



module.exports = { instructions }; 