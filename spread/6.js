function merge(...arrs)
{
    for (let arr of arrs) {
        if (!Array.isArray(arr)) {
            console.log(`Bad argument type: ${arr}`);
            return;
        }
    }
    return [].concat(...arrs);
}

console.log(merge([1, 2, 3], [4, 5, 6], [7, 8, 9]))
console.log(merge([1, 2, 3], [4, 5], '6', [7, 8, 9]));
