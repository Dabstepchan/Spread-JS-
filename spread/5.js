function unite(...arrays) {
  let result = [];

  for (let i = 0; i < arrays.length; i++) {
    if (!Array.isArray(arrays[i])) {
      console.log(`Bad argument type: ${arrays[i]}`);
      continue;
    }
    result.push([...arrays[i]]);
  }

  return result;
}

let result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);

console.log(result);
console.log(unite([1, 2, 3], [4, 5], '6', [7, 8, 9]));
