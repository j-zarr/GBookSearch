jest.mock('./addToList');
jest.mock('./getList');
const { filledList } = require('./getList');


const booksFromSearch = [{
    Title: "Harry Potter: The Complete Collection (1-7)",
    Authors: ["J.K. Rowling"],
    Publisher: "Sphere"
},
{
    Title: "Harry Potter and the Cursed Child",
    Authors: [
        "J. K. Rowling",
        "Jack Thorne",
        "John Tiffany"
    ],
    Publisher: "Sphere"
},
{
    Title: "Harry Potter: The Wand Collection (Book)",
    Authors: ["Monique Peterson"],
    Publisher: "Insight Editions"
}
];




function mockAddToList(num) {
    const chosenBook = booksFromSearch[num-1];
    filledList.push(chosenBook);
    return filledList[filledList.length - 1];
}



function mockIsValidChoice(num) {
    const validNumArr = ['1', '2', '3'];
    if (!validNumArr.includes(num)) {
        const message = "invalid input"
        return message;
    }
   return mockAddToList(num);
}



module.exports = { mockAddToList, mockIsValidChoice, booksFromSearch };