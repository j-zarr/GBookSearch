jest.mock('./bookSearch');
const { mockGetRequest} = require("./bookSearch");



test('should return modified parsed results', () => {
  expect.assertions(1);
  return mockGetRequest('Harry').then(data => expect(data).toEqual([
    [
      '1',
      {
        Title: 'Harry',
        Authors: 'Angela Levin',
        Publisher: 'information unavailable'
      }
    ],
    [
      '2',
      {
        Title: 'Playing Harry Potter',
        Authors: 'Lisa S. Brenner',
        Publisher: 'McFarland'
      }
    ],
    [
      '3',
      {
        Title: 'Finding Freedom',
        Authors: 'Omid Scobie,Carolyn Durand',
        Publisher: 'HarperCollins'
      }
    ],
    [
      '4',
      {
        Title: 'Meghan and Harry',
        Authors: 'Lady Colin Campbell',
        Publisher: 'information unavailable'
      }
    ],
    [
      '5',
      {
        Title: 'Wild About Harry',
        Authors: 'Linda Lael Miller',
        Publisher: 'Harlequin'
      }
    ]
  ]))
});
