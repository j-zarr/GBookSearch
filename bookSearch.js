const https = require('https');
const readline = require('readline');
const { instructions } = require('./instructions');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false

});


const booksAPI = 'https://www.googleapis.com/books/v1/volumes?q=';
const limitSearch = '&fields=items/volumeInfo(title, authors, publisher)&orderBy=relevance&maxResults=5';




function search() {
    console.clear();

    booksArr = [];
    let bookResults = '';


    rl.question('Welcome to Google Book Search.\nHere you can search for books, add books to a Reading List and retrive your Reading List.\n5 results will be displayed for every search.\n\nTo get started, enter a book to search: ', (query) => {

        https.get(booksAPI + query + limitSearch, (res) => {
            // console.log('statusCode:', res.statusCode);

            res.on('data', (d) => {
                bookResults += d;

            }).on('end', () => {
                bookResults = JSON.parse(bookResults);

                for (let i = 0; i < bookResults.items.length; i++) {

                    let title = `${bookResults.items[i].volumeInfo.title}`;
                    let authors = `${bookResults.items[i].volumeInfo.authors}` == "undefined" ? "information unavailable" : `${bookResults.items[i].volumeInfo.authors}`;
                    let publisher = `${bookResults.items[i].volumeInfo.publisher}` == "undefined" ? "information unavailable" : `${bookResults.items[i].volumeInfo.publisher}`;

                    booksArr.push({
                        Title: title,
                        Authors: authors,
                        Publisher: publisher
                    });


                    console.log(
                        ` \n${i + 1}: \n Title: ${title} \n Authors: ${authors} \n Publisher: ${publisher}\n`);
                }

                instructions(); 

            }).on('error', (e) => {
                console.error(e);
            });

        });

    });


}


module.exports = { search };