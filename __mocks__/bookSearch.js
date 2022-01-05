const https = require('https');



function mockGetRequest(searchQuery) {
    
    let booksArr = [];
    let bookResults = '';

    const url = `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&fields=items/volumeInfo(title,authors,publisher)&orderBy=relevance&maxResults=5`;

    return new Promise(resolve => {
        https.get(url, (res) => {

            res.on('data', (d) => {
                bookResults += d;

            }).on('end', () => {
                bookResults = JSON.parse(bookResults);

                for (let i = 0; i < bookResults.items.length; i++) {

                    let title = `${bookResults.items[i].volumeInfo.title}`;
                    let authors = `${bookResults.items[i].volumeInfo.authors}` == "undefined" ? "information unavailable" : `${bookResults.items[i].volumeInfo.authors}`;
                    let publisher = `${bookResults.items[i].volumeInfo.publisher}` == "undefined" ? "information unavailable" : `${bookResults.items[i].volumeInfo.publisher}`;

                    booksArr.push([`${i + 1}`, {
                        Title: title,
                        Authors: authors,
                        Publisher: publisher
                    }
                    ]);
                }

                resolve(booksArr);

            }).on('error', (e) => {
                console.error(e);
            });

        });
    });


}


module.exports = { mockGetRequest }; 