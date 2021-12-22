const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false

});

if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
    })
}


function addToList() {

    rl.question('Enter the number of the book you want to add: \n', (numSelected) => {

        const selectedBook = booksArr[numSelected - 1];
        const selectedBookString = JSON.stringify(selectedBook);
        
        fs.appendFile('./assets/readingList.txt', `${selectedBookString}\n`, (err, data) => {
            if (err) {
                console.log(err);
            }
            console.log(`\n "${selectedBook.Title}" added to Reading List\n`);
           
        });

    });


}

module.exports = { addToList };