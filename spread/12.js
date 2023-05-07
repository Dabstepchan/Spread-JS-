function func() {
    return new Date().getDate();
}

let arr = [];
let [year = new Date().getFullYear(), month = new Date().getMonth() + 1, day = func()] = arr;

console.log(`${year}\n${month}\n${day}`);
