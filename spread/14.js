function func([name, surname, department, position = 'джуниор']) {
    console.log(`Имя: ${name}, Фамилия: ${surname}, Отдел: ${department}, Должность: ${position}`);
}
  
func(['John', 'Smit', 'development']);
  