const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false

});



function exit() {
    rl.close();
    console.clear(); 
    console.log(`\n Happy reading! \n`);

    if (fs.existsSync('./assets/readingList.txt')) {
        fs.unlinkSync('./assets/readingList.txt');
    }

    rl.on('close', () => {

        process.exit();
    });
}


module.exports = { exit }