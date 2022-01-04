
let filledList = [
    {
        Title: "The Very Hungry Caterpillar",
        Authors: ["Eric Carle"],
        Publisher: "no information"
    },
    {
        Title: "Where the Wild Things Are",
        Authors: "Maurice Sendak",
        Publisher: "Harper & Row"
    }
];

function mockGetList(list) {

    if (!list) {
        const message = 'Your Reading List is Empty';
        return message;
    }
    return list; 
    
}

module.exports = { mockGetList , filledList}; 