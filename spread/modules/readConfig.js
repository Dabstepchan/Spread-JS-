const delay = require('./delay');

async function readConfig(name) {
    await delay();
    console.log('(1) config from ' + name + ' loaded');
}

module.exports = readConfig;
