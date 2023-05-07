const delay = require('./delay');

async function doQuery(statement) {
    await delay();
    console.log('(2) SQL query executed: ' + statement);
}

module.exports = doQuery;
