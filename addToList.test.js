jest.mock('./addToList');
const { mockIsValidChoice } = require("./addToList");


describe('test adding book to Reading List', () => {

    test('should successfully add a book to reading list', () => {
        const addedBook = mockIsValidChoice('1');
        expect(addedBook).toEqual({
            Title: "Harry Potter: The Complete Collection (1-7)",
            Authors: ["J.K. Rowling"],
            Publisher: "Sphere"
        })

    })

    test('should successfully add a book to reading list', () => {
        const addedBook = mockIsValidChoice('3');
        expect(addedBook).toEqual({
            Title: "Harry Potter: The Wand Collection (Book)",
            Authors: ["Monique Peterson"],
            Publisher: "Insight Editions"
        })

    })

    test('should return message on invalid book choice', () => {
        const bookSelection = mockIsValidChoice('9');
        expect(bookSelection).toBe('invalid input');

    })

    test('should return message on invalid book choice', () => {
        const bookSelection = mockIsValidChoice('a');
        expect(bookSelection).toBe('invalid input');

    })

});


