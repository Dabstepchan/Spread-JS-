let arr = ['John', 'Smit', 'development', 'programmer', 2000];
let [name, surname, ...info] = arr;

console.log(`Имя: ${name}, Фамилия: ${surname}, Информация: ${info}`);
