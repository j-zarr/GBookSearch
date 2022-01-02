const readline = require('readline');
const { search } = require('./bookSearch');
const { getList } = require('./getList');
const { addToList } = require('./addToList');
const { exit } = require('./exit');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


search();


rl.on('line', (userInput) => {

    if (userInput.toLowerCase().trim() == 's') {
        search();
    }
    if (userInput.toLowerCase().trim() == 'l') {
        getList();
    }
    if (userInput.toLowerCase().trim() == 'a') {
        addToList();
    }
    if (userInput.toLowerCase().trim() == 'e') {
        exit();
    }

});







