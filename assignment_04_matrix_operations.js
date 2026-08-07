// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
const readlineSync = require('readline-sync');

// Function to display a matrix in grid format
function displayMatrix(matrix) {
  for (let row of matrix) {
    console.log(row.map(val => String(val).padStart(6)).join(' '));
  }
  console.log();
}

// PART A: Transpose a Matrix
function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const transposed = [];
  
  for (let i = 0; i < cols; i++) {
    const newRow = [];
    for (let j = 0; j < rows; j++) {
      newRow.push(matrix[j][i]);
    }
    transposed.push(newRow);
  }
  
  return transposed;
}

// PART B: Add Two Matrices
function addMatrices(matrixA, matrixB) {
  const rows = matrixA.length;
  const cols = matrixA[0].length;
  const result = [];
  
  for (let i = 0; i < rows; i++) {
    const newRow = [];
    for (let j = 0; j < cols; j++) {
      newRow.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(newRow);
  }
  
  return result;
}

// PART C: Multiply Two Matrices
function multiplyMatrices(matrixA, matrixB) {
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const colsB = matrixB[0].length;
  const result = [];
  
  for (let i = 0; i < rowsA; i++) {
    const newRow = [];
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      newRow.push(sum);
    }
    result.push(newRow);
  }
  
  return result;
}

// Helper function to read a matrix
function readMatrix(rows, cols) {
  const matrix = [];
  for (let i = 1; i <= rows; i++) {
    const rowInput = readlineSync.question(`Enter row ${i}: `);
    const row = rowInput.split(' ').map(Number);
    matrix.push(row);
  }
  return matrix;
}

// Main program
function main() {
  let choice = readlineSync.question('\nChoose operation:\n1. Transpose\n2. Add\n3. Multiply\nEnter choice (1-3): ');
  
  if (choice === '1') {
    const rows = parseInt(readlineSync.question('Enter number of rows: '));
    const cols = parseInt(readlineSync.question('Enter number of columns: '));
    const matrix = readMatrix(rows, cols);
    
    console.log('\nOriginal Matrix:');
    displayMatrix(matrix);
    
    const transposed = transposeMatrix(matrix);
    console.log('Transposed Matrix:');
    displayMatrix(transposed);
    
  } else if (choice === '2') {
    const rows = parseInt(readlineSync.question('Enter number of rows: '));
    const cols = parseInt(readlineSync.question('Enter number of columns: '));
    
    console.log('\nMatrix A:');
    const matrixA = readMatrix(rows, cols);
    console.log('\nMatrix B:');
    const matrixB = readMatrix(rows, cols);
    
    console.log('\nMatrix A:');
    displayMatrix(matrixA);
    console.log('Matrix B:');
    displayMatrix(matrixB);
    
    const sum = addMatrices(matrixA, matrixB);
    console.log('Sum (A + B):');
    displayMatrix(sum);
    
  } else if (choice === '3') {
    const rowsA = parseInt(readlineSync.question('Enter rows for Matrix A: '));
    const colsA = parseInt(readlineSync.question('Enter columns for Matrix A: '));
    const colsB = parseInt(readlineSync.question('Enter columns for Matrix B: '));
    
    console.log('\nMatrix A:');
    const matrixA = readMatrix(rowsA, colsA);
    console.log('\nMatrix B:');
    const matrixB = readMatrix(colsA, colsB);
    
    console.log('\nMatrix A:');
    displayMatrix(matrixA);
    console.log('Matrix B:');
    displayMatrix(matrixB);
    
    const product = multiplyMatrices(matrixA, matrixB);
    console.log('Product (A × B):');
    displayMatrix(product);
  }
}

main();



const readlineSync = require('readline-sync');

