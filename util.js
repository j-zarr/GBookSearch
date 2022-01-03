const https = require('https');



function mockInput(str) {
    let route = '';
    str = str.toLowerCase();

    if (str == 'a') {
        route = "Add";
        return route;
    }
    else if (str == 's') {
        route = "Search";
        return route;
    }
    else if (str == 'l') {
        route = "List";
        return route;
    }
    else if (str == 'e') {
        route = "Exit";
        return route;
    } else {
        throw 'invalid input';
    }
}




function mockGetRequest(searchQuery) {

    https.get(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&fields=items/volumeInfo(title)&orderBy=relevance&maxResults=1`, (res) => {
        if (res.statusCode != 200) {
            throw 'search unsuccessful';
        }
    });
}




module.exports = { mockInput, mockGetRequest }; 