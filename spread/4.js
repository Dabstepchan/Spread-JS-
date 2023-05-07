function mean(...numbers) {
  let sum = 0;
  let count = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number') {
      sum += numbers[i];
      count++;
    } else {
      console.log(`Bad argument type: ${numbers[i]}`);
    }
  }
  
  return count ? sum / count : undefined;
}

console.log(mean(1, 2, 3, 4, 5));
console.log(mean(1, '2', 3, 4, 5));
console.log(mean());
