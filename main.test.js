const { mockInput } = require("./util");



test('should go to addToList module', () => {
  const result1 = mockInput('A');
  expect(result1).toBe('Add');

  const result2 = mockInput('a');
  expect(result2).toBe('Add');

});


test('should go to searchBook module', () => {
  const result1 = mockInput('S');
  expect(result1).toBe('Search');

  const result2 = mockInput('s');
  expect(result2).toBe('Search');
});



test('should go to getList module', () => {
  const result1 = mockInput('L');
  expect(result1).toBe('List');

  const result2 = mockInput('l');
  expect(result2).toBe('List');
});



test('should go to exit module', () => {
  const result1 = mockInput('E');
  expect(result1).toBe('Exit');

  const result2 = mockInput('e');
  expect(result2).toBe('Exit');
});


test('should throw error', () => {
  expect(() => {
    mockInput('z');
  }).toThrowError('invalid input');

  expect(() => {
    mockInput('5');
  }).toThrowError('invalid input');

  expect(() => {
    mockInput('Thanks');
  }).toThrowError('invalid input');

})