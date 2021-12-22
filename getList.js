const fs = require('fs');




function getList() {

    if (!fs.existsSync('./assets/readingList.txt')) {
        console.log('Reading List is Empty');
        return;
    }

    const stream = fs.createReadStream('./assets/readingList.txt', { encoding: 'utf8' });

    stream.on('data', (booksStream) => {
        console.log(booksStream);
    });
}

module.exports = { getList };