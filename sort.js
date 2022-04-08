let numbers = [3, 85, 25, 1, 99, 9, 10, 4, 6, 7,-1];

function sortNumber(numbers) {
  let bajarish = false;
  while (!bajarish) {
    bajarish = true;
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i - 1] > numbers[i]) {
        bajarish = false;
        let temp = numbers[i - 1];
        numbers[i - 1] = numbers[i];
        numbers[i] = temp;
      }
    }
  }

  return numbers;
}
sortNumber(numbers);

console.log(numbers);
