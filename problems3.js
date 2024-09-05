// Maximum in Array: Find the maximum value in an array of integers.

var numbers = [10, 30, 40, 50,20,100,99,145,208, 60, 70, 80, 90, 55];

var max = numbers[0];
for (var i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
    console.log("Max Number:", max);
  }
} console.log("Final Max Number:", max);
