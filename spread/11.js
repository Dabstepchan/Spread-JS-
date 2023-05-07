let arr = ['John', 'Smit', 'development'];
let [name, surname, department, position = 'trainee'] = arr;

console.log(`Имя: ${name}, Фамилия: ${surname}, Департамент: ${department}, Должность: ${position}`);
