jest.mock('./main');
const { mockInput } = require("./main");


describe('tests for adding book path', () => {
  test('should go to addToList module', () => {
    const result1 = mockInput('A');
    expect(result1).toBe('Add');
  });
  test('should go to addToList module', () => {
    const result2 = mockInput('a');
    expect(result2).toBe('Add');

  });

});


describe('tests for search for book path', () => {
  test('should go to searchBook module', () => {
    const result1 = mockInput('S');
    expect(result1).toBe('Search');
  });

  test('should go to searchBook module', () => {
    const result2 = mockInput('s');
    expect(result2).toBe('Search');
  });
});


describe('tests for retrieving reading list path', () => {
  test('should go to getList module', () => {
    const result1 = mockInput('L');
    expect(result1).toBe('List');
  });

  test('should go to getList module', () => {
    const result2 = mockInput('l');
    expect(result2).toBe('List');
  });
});



describe('tests for exit path', () => {
  test('should go to exit module', () => {
    const result1 = mockInput('E');
    expect(result1).toBe('Exit');
  });

  test('should go to exit module', () => {
    const result2 = mockInput('e');
    expect(result2).toBe('Exit');
  });
});



describe('tests for invalid input after instructions prompt', () => {
  test('invalid input should throw error', () => {
    expect(() => {
      mockInput('z');
    }).toThrowError('invalid input');
  });

  test('invalid input should throw error', () => {
    expect(() => {
      mockInput('5');
    }).toThrowError('invalid input');
  });

  test('invalid input should throw error', () => {
    expect(() => {
      mockInput('Thanks');
    }).toThrowError('invalid input');

  });
});




