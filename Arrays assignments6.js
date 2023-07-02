
// Question 1

// A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

// - s[i] == 'I' if perm[i] < perm[i + 1], and
// - s[i] == 'D' if perm[i] > perm[i + 1].
// Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.


// Answer-
function reconstructPermutation(s) {
    const n = s.length;
    let low = 0;
    let high = n;
    const perm = new Array(n + 1);
  
    for (let i = 0; i < n; i++) {
      perm[i] = s[i] === 'I' ? low++ : high--;
    }
  
    perm[n] = low; // or perm[n] = high since low == high at this point
    return perm;
  }
  
  const s = 'IDID';
  const reconstructedPermutation = reconstructPermutation(s);
  console.log(reconstructedPermutation);
  



// Question 2

// You are given an m x n integer matrix matrix with the following two properties:

// - Each row is sorted in non-decreasing order.
// - The first integer of each row is greater than the last integer of the previous row.

// Given an integer target, return true *if* target *is in* matrix *or* false *otherwise*.

// You must write a solution in O(log(m * n)) time complexity.

// Answer-
function searchInMatrix(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let low = 0;
    let high = m * n - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const val = matrix[Math.floor(mid / n)][mid % n];
  
      if (val === target) {
        return true;
      } else if (val < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  
    return false;
  }
  
  const matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ];
  const target = 16;
  const found = searchInMatrix(matrix, target);
  console.log(found);
  
//   Question 3
// Given an array of integers arr, return *true if and only if it is a valid mountain array*.

// Recall that arr is a mountain array if and only if:

// - arr.length >= 3
// - There exists some i with 0 < i < arr.length - 1 such that:
//     - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
//     - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

// Answer-

function isValidMountainArray(arr) {
    const n = arr.length;
  
    if (n < 3) {
      return false;
    }
  
    let i = 0;
  
    while (i < n - 1 && arr[i] < arr[i + 1]) {
      i++;
    }
  
    if (i === 0 || i === n - 1) {
      return false;
    }
  
    while (i < n - 1 && arr[i] > arr[i + 1]) {
      i++;
    }
  
    return i === n - 1;
  }
// Question 4

// Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.

// Answer-function findMaxLength(nums) {
  const map = new Map();
  map.set(0, -1); // Initial sum is 0 at index -1
  let maxLength = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    count += nums[i] === 0 ? -1 : 1;

    if (map.has(count)) {
      maxLength = Math.max(maxLength, i - map.get(count));
    } else {
      map.set(count, i);
    }
  }

  return maxLength;




// Question 5
// The product sum of two equal-length arrays a and b is equal to the sum of a[i]  b[i] for all 0 <= i < a.length (**0-indexed**).

// - For example, if a = [1,2,3,4] and b = [5,2,3,1], the product sum would be 1*5 + 2*2 + 3*3 + 4*1 = 22.

// Given two arrays nums1 and nums2 of length n, return the minimum product sum if you are allowed to rearrange the order** of the elements in* nums1.

// Answer-
function minProductSum(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => b - a);
  
    let sum = 0;
    const n = nums1.length;
  
    for (let i = 0; i < n; i++) {
      sum += nums1[i] * nums2[i];
    }
  
    return sum;
  }
  
// Question 6

// An integer array original is transformed into a doubled array changed by appending twice the value of every element in original, and then randomlshuffling the resulting array.

// Given an array changed, return original if changed is a doubled array. If changed is not a doubled array, return an empty array. The elements in originalmay be returned in any orde.


// answer-
function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      return [];
    }
  
    const frequency = new Map();
  
    for (const num of changed) {
      frequency.set(num, (frequency.get(num) || 0) + 1);
    }
  
    const original = [];
  
    changed.sort((a, b) => a - b);
  
    for (const num of changed) {
      if (frequency.get(num) === 0) {
        continue;
      }
  
      if (frequency.get(num * 2) === 0) {
        return [];
      }
  
      original.push(num);
      frequency.set(num, frequency.get(num) - 1);
      frequency.set(num * 2, frequency.get(num * 2) - 1);
    }
  
    return original;
  }
  



// Question 7

// Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

// Answer-
function generateMatrix(n) {
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let num = 1;
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
  
    while (num <= n * n) {
      for (let i = left; i <= right; i++) {
        matrix[top][i] = num++;
      }
      top++;
  
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = num++;
      }
      right--;
  
      for (let i = right; i >= left; i--) {
        matrix[bottom][i] = num++;
      }
      bottom--;
  
      for (let i = bottom; i >= top; i--) {
        matrix[i][left] = num++;
      }
      left++;
    }
  
    return matrix;
  }
// Question 8

// Given two [sparse matrices](https://en.wikipedia.org/wiki/Sparse_matrix) mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.

//   Answer-
function multiplySparseMatrices(mat1, mat2) {
    const m = mat1.length;
    const k = mat1[0].length;
    const n = mat2[0].length;
  
    const result = new Array(m).fill(0).map(() => new Array(n).fill(0));
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < k; j++) {
        const val = mat1[i][j];
        if (val !== 0) {
          for (let l = 0; l < n; l++) {
            result[i][l] += val * mat2[j][l];
          }
        }
      }
    }
  
    return result;
  }
  