async function main() {
  console.log('start');
  try {
    const readConfig = await import('./modules/readConfig.js');
    const doQuery = await import('./modules/doQuery.js');
    const httpGet = await import('./modules/httpGet.js');
    const readFile = await import('./modules/readFile.js');

    await readConfig.default('myConfig');
    await doQuery.default('select * from cities');
    await httpGet.default('http://google.com');
    await readFile.default('README.md');

    console.log('It is done!');
  } catch (err) {
    console.error(err);
  }
  console.log('end');
}

main();  