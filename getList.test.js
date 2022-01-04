jest.mock('./getList');
jest.mock('./addToList');
const { mockGetList , filledList} = require("./getList");



describe('test getList function', () => {

    let nonExistList;
    
    test('should return message if list is empty', () => {
        const result = mockGetList(nonExistList);
        expect(result).toBe('Your Reading List is Empty')

    });

    
    test('should return reading list', () => {
        const result = mockGetList(filledList);
        expect(result).toEqual(filledList);
    });

}); 