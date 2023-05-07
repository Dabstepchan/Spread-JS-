function func () {
    return ['John', 'Smit', 'development', 'programmer', 2000];
}

let [name, surname, department, position, salary] = func();

console.log(`Имя: ${name}, Фамилия: ${surname}, Отдел: ${department}, Должность: ${position}, Зарплата: ${salary}`);
