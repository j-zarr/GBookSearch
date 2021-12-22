const https = require('https');
const readline = require('readline');
const { search } = require('./bookSearch');
const { getList } = require('./getList');
const { addToList } = require('./addToList');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});


const booksAPI = 'https://www.googleapis.com/books/v1/volumes?q=';
const limitSearch = '&fields=items/volumeInfo(title, authors, publisher)&orderBy=relevance&maxResults=5'

let bookResults = '';
let booksArr = [];

rl.question('Enter a book to search: ', (query) => {


    console.log(booksAPI + query + "&fields=items/volumeInfo(title, authors, publisher)&orderBy=relevance&maxResults=5");

    https.get(booksAPI + query + limitSearch, (res) => {
        console.log('statusCode:', res.statusCode);

        res.on('data', (d) => {
            bookResults += d;

            //console.log(bookResults.items[0].volumeInfo);  
            //   process.stdout.write(bookResults);

        }).on('end', () => {
            bookResults = JSON.parse(bookResults);

            for (let i = 0; i < bookResults.items.length; i++) {
                booksArr.push({
                    Title: `${bookResults.items[i].volumeInfo.title}`,
                    Authors: `${bookResults.items[i].volumeInfo.authors} `,
                    Publisher: `${bookResults.items[i].volumeInfo.publisher}`

                });
                //   console.log(booksArr);

                console.log(
                    ` \n ${i + 1}: \n Title: ${bookResults.items[i].volumeInfo.title} \n Authors: ${bookResults.items[i].volumeInfo.authors} \n Publisher: ${bookResults.items[i].volumeInfo.publisher}\n`);
            }


            rl.setPrompt(` Type A to add a book to your reading list, \n Type S to search again, \n Type L to retreive your Reading List, \n Type E to exit \n\n`)
            rl.prompt();

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
                    rl.close();
                    console.log(`\n Happy reading! \n`);
                    rl.on('close', () => {

                        process.exit();
                    });
                }
            });



        }).on('error', (e) => {
            console.error(e);
        });




    });

});







