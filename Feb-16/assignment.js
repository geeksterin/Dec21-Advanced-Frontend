console.log("hello");

const matrixOne = [
  [4, 3, 2, 4],
  [9, 1, 5, 6],
  [2, 7, 9, 8],
  [8, 5, 2, 0],
];

// n*n
// print the difference between the sum of left and right diagonal
// (4+1+9+0) - (4+5+7+8)

const x = [
  [1, 2, 3, 4],
  [4, 5, 6, 7],
  [5, 6, 9, 2],
  [3, 6, 4, 1],
];

// console.log(x[i][j]);
// console.log(x[0][0]);
// console.log(x[1][1]);
// console.log(x[2][2]);
// console.log(x[3][3]);

let sum = 0;

for (let i = 0; i < x.length; i++) {
  const y = x[i];
  for (let j = 0; j < y.length; j++) {
    if (i === j) {
      //   console.log(x[i][j]);
      sum = sum + x[i][j];
    }
  }
}

console.log(sum);
