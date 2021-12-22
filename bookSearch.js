const https = require('https');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false

});


const booksAPI = 'https://www.googleapis.com/books/v1/volumes?q=';
const limitSearch = '&fields=items/volumeInfo(title, authors, publisher)&orderBy=relevance&maxResults=5'


global.booksArr = [];


function search() {
    console.clear();

    booksArr = [];
    let bookResults = '';


    rl.question('Enter a book to search: ', (query) => {

        https.get(booksAPI + query + limitSearch, (res) => {
            // console.log('statusCode:', res.statusCode);

            res.on('data', (d) => {
                bookResults += d;

            }).on('end', () => {
                bookResults = JSON.parse(bookResults);

                for (let i = 0; i < bookResults.items.length; i++) {
                    booksArr.push({
                        Title: `${bookResults.items[i].volumeInfo.title}`,
                        Authors: `${bookResults.items[i].volumeInfo.authors} `,
                        Publisher: `${bookResults.items[i].volumeInfo.publisher}`

                    });

                    console.log(
                        ` \n ${i + 1}: \n Title: ${bookResults.items[i].volumeInfo.title} \n Authors: ${bookResults.items[i].volumeInfo.authors} \n Publisher: ${bookResults.items[i].volumeInfo.publisher}\n`);
                }

                rl.setPrompt(` Type A to add a book to your reading list, \n Type S to search again, \n Type L to retreive your Reading List, \n Type E to exit \n\n`)
                rl.prompt();

            }).on('error', (e) => {
                console.error(e);
            });

        });

    });


}


module.exports = { search };