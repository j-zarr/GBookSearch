const fs = require('fs');
const readline = require('readline');
const { instructions } = require('./instructions');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false

});

global.isInAdd = false; 

function addToList() {

    isInAdd = true; 

    rl.question('\nEnter the number of the book you want to add: ', (numSelected) => {

        const validNumArr = ['1', '2', '3', '4', '5'];

        if (!validNumArr.includes(numSelected)) {
            console.log('\nInvalid entry. Answer must be a number from 1 - 5.');
            return addToList();
        }


        if (!fs.existsSync('./assets')) {
            fs.mkdir('./assets', (err) => {
                if (err) {
                    console.log(err);
                }
            })
        }

        const selectedBook = booksArr[numSelected - 1];
        const selectedBookString = JSON.stringify(selectedBook);

        fs.appendFile('./assets/readingList.txt', `${selectedBookString}\n`, (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(`\n"${selectedBook.Title}" added to Reading List\n`);
            isInAdd = false; 
            instructions();

        });

    });


}

module.exports = { addToList };