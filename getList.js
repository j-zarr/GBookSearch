const fs = require('fs');
const { instructions } = require('./instructions');





function getList() {

    if (!fs.existsSync('./assets/readingList.txt')) {
        console.log('\n Your Reading List is Empty');
        return instructions();
    }

    const stream = fs.createReadStream('./assets/readingList.txt', { encoding: 'utf8' });

    stream.on('data', (booksStream) => {
        console.log('\nYour Reading List:\n');
        console.log(booksStream);
    }).on('end', () => {
        instructions();

    });
}

module.exports = { getList };