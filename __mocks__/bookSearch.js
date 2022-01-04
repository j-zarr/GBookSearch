const https = require('https');

function mockGetRequest(searchQuery) {

    https.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&fields=items/volumeInfo(title)&orderBy=relevance&maxResults=1`, (res) => {
        if (res.statusCode != 200) {
            throw new Error('search unsuccessful');
        }
    });
}


module.exports = { mockGetRequest }; 