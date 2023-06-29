
// Question 1
// Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array of **only** the integers that appeared in **all** three arrays.

// Answer-
function commonElements(arr1, arr2, arr3) {
    let i = 0;
    let j = 0;
    let k = 0;
    const result = [];
  
    while (i < arr1.length && j < arr2.length && k < arr3.length) {
      if (arr1[i] === arr2[j] && arr1[i] === arr3[k]) {
        result.push(arr1[i]);
        i++;
        j++;
        k++;
      } else if (arr1[i] < arr2[j]) {
        i++;
      } else if (arr2[j] < arr3[k]) {
        j++;
      } else {
        k++;
      }
    }
  
    return result;
  }
  
  // Example usage:
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2, 5, 7, 9];
  const arr3 = [1, 3, 4, 5, 8];
  const common = commonElements(arr1, arr2, arr3);
  console.log(common); // Output: [1, 5]
  

// Question 2

// Given two 0-indexed integer arrays nums1 and nums2, return a list answer *of size* 2 *where:*

// - answer[0] *is a list of all **distinct** integers in* nums1 *which are **not** present in* nums2*.*
// - answer[1] *is a list of all **distinct** integers in* nums2 *which are **not** present in* nums1.

// Note that the integers in the lists may be returned in any order.

// Answer-
function findDisjoint(nums1, nums2) {
    const set_nums1 = new Set(nums1);
    const set_nums2 = new Set(nums2);
  
    const nums1_not_in_nums2 = [...set_nums1].filter(num => !set_nums2.has(num));
    const nums2_not_in_nums1 = [...set_nums2].filter(num => !set_nums1.has(num));
  
    return [nums1_not_in_nums2, nums2_not_in_nums1];
  }
  
  // Example usage:
  const nums1 = [1, 2, 3];
  const nums2 = [2, 4, 6];
  const disjoint = findDisjoint(nums1, nums2);
  console.log(disjoint); // Output: [[1, 3], [4, 6]]

  

  
// Question 3
// Given a 2D integer array matrix, return *the **transpose** of* matrix.

// The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

// Answer-function transpose(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const transposed = new Array(columns).fill(0).map(() => new Array(rows).fill(0));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      transposed[j][i] = matrix[i][j];
    }
  }

  return transposed;


// Example usage:
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const transposed1 = transpose(matrix);
console.log(transposed1); // Output: [[1, 4, 7], [2, 5, 8], [3, 6, 9]]




// Question 4
// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is **maximized**. Return *the maximized sum*.

// Answer-
function arrayPairSum(nums) {
    nums.sort((a, b) => a - b);
    let sum = 0;
  
    for (let i = 0; i < nums.length; i += 2) {
      sum += Math.min(nums[i], nums[i + 1]);
    }
  
    return sum;
  }
  
  // Example usage:
  const nums = [1, 4, 3, 2];
  const maxSum = arrayPairSum(nums);
  console.log(maxSum); // Output: 4
  


  
// Question 5
// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.

// Given the integer n, return *the number of complete rows of the staircase you will build.

// Answer-

function arrangeCoins(n) {
    let left = 0;
    let right = n;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const sum = (mid * (mid + 1)) / 2;
  
      if (sum <= n) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return left - 1;
  }
  
  // Example usage:
  const n = 5;
  const completeRows = arrangeCoins(n);
  console.log(completeRows); // Output: 2
  

// Question 6
// Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

// Answer-
function sortedSquares(nums) {
    const squared = nums.map(num => num ** 2);
    squared.sort((a, b) => a - b);
    return squared;
  }
  
  // Example usage:
  const nums4 = [-4, -1, 0, 3, 10];
  const squaredSorted = sortedSquares(nums4);
  console.log(squaredSorted); // Output: [0, 1, 9, 16, 100]



// Question 7
// You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.

// Count and return the number of maximum integers in the matrix after performing all the operations

// Answer-
function maxCount(m, n, ops) {
    let minRow = m;
    let minCol = n;
  
    for (let i = 0; i < ops.length; i++) {
      minRow = Math.min(minRow, ops[i][0]);
      minCol = Math.min(minCol, ops[i][1]);
    }
  
    return minRow * minCol;
  }
  
  // Example usage:
  const m = 3;
  const o = 3;
  const ops = [[2, 2], [3, 3]];
  const maxIntegers = maxCount(m, o, ops);
  console.log(maxIntegers); // Output: 4
  



// Question 8
// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

// Answer-
function shuffle(nums, n) {
    const result = [];
  
    for (let i = 0; i < n; i++) {
      result.push(nums[i]);
      result.push(nums[i + n]);
    }
  
    return result;
  }
  
  // Example usage:
  const nums5 = [2, 5, 1, 3, 4, 7];
  const p = 3;
  const rearranged = shuffle(nums5, p);
  console.log(rearranged); // Output: [2, 3, 5, 4, 1, 7]
  