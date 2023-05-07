function func(department, [name, surname], [year, month, day]) {
    console.log(`Департамент: ${department}, Сотрудник: ${name} ${surname}, Дата найма: ${day}.${month}.${year}`);
}

func('development', ['John', 'Smit'], [2018, 12, 31])
