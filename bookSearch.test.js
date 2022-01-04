jest.mock('./bookSearch');
const { mockGetRequest } = require("./bookSearch");



test('should successfully get response from API', () => {
  expect(() => {
    mockGetRequest('Harry Potter');
  }).not.toThrowError();
});



test('should throw error if fails to fetch from API', () => {
  try {
    mockGetRequest('');
  }
  catch (error) {
    expect(error).toEqual('search unsuccessful');
  }
});