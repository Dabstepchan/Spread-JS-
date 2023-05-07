const delay = require('./delay');

async function httpGet(url) {
    await delay();
    console.log('(3) Page retrieved: ' + url);
}

module.exports = httpGet;
