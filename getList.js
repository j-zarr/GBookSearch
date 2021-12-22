const fs = require('fs');


/*fs.readFile('./assets/readingList.txt', (err, data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});
*/

const stream = fs.createReadStream('./assets/readingList.txt', { encoding: 'utf8' });

function getList() {
    stream.on('data', (booksStream) => {
        // booksStream = booksStream.toString();
        console.log(booksStream);
    });
}

module.exports = { getList };