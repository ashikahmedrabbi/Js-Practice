// Sum of Array Elements: Write a program to calculate the sum of all numbers in an array using a loop.

// 1. Array Declier

var numbers=[10,20,30,40,50,60,70,80,90,100];

var sum =0;


for (var i =0;i<numbers.length;i++){
    sum +=numbers[i];
    console.log("every Number of sum:",sum);
} 

console.log("Total =",sum);