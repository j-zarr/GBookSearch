
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







module.exports = { mockInput }; 