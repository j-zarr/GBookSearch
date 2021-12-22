const fs = require('fs');

//need to add number chosen for list and the n=book details - will be from exported file slected books

let selectedBook = '\n' + 'testbook'; //need to update this to take data from number selected -change to object

if (!fs.existsSync('./assets')) {
    s.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('assets folder created');
    })
}

function addToList(selected) {
  //  selectedBook = selected;
    fs.appendFile('./assets/readingList.txt', selectedBook, (err, data) => {
        if (err) {
            console.log(err);
        }
        console.log('book added');
    });
}

module.exports = { addToList };