/*
Sum of Minimums
by Aizaz_Ahmad 

Given a 2D array of size m * n. Your task is to find the sum of minimum value in each row.

For Example:

[
  [1, 2, 3, 4, 5],       // minimum value of row is 1
  [5, 6, 7, 8, 9],       // minimum value of row is 5
  [20, 21, 34, 56, 100]  // minimum value of row is 20
]
*/

function sumOfMinimums(arr) {
  let newArr = arr.map(item => Math.min(...item))
  return newArr.reduce((a, b) => a+b)
}