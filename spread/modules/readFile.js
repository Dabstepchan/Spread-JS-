const delay = require('./delay');

async function readFile(path) {
    await delay();
    console.log('(4) Readme file from ' + path + ' loaded');
}

module.exports = readFile;
