
// Question 1

// Convert 1D Array Into 2D Array

// You are given a **0-indexed** 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with  m rows and n columns using **all** the elements from original.

// The elements from indices 0 to n - 1 (**inclusive**) of original should form the first row of the constructed 2D array, the elements from indices n to 2 * n - 1 (**inclusive**) should form the second row of the constructed 2D array, and so on.

// Return *an* m x n *2D array constructed according to the above procedure, or an empty 2D array if it is impossible*.

// Answer-

function convert1DTo2D(original, m, n) {
    if (original.length !== m * n) {
      return []; // Return an empty 2D array if it's impossible
    }
  
    const result = [];
    for (let i = 0; i < m; i++) {
      const row = [];
      for (let j = 0; j < n; j++) {
        row.push(original[i * n + j]);
      }
      result.push(row);
    }
  
    return result;
  }
  
  
// Question 2

// You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.

// Given the integer n, return *the number of complete rows of the staircase you will build.

// Answer-

function completeRows(n) {
    let k = 1;
    while (k * (k + 1) / 2 <= n) {
      k++;
    }
    return k - 1;
  }
  
  console.log(completeRows(14));




// Question 3

// Given an integer array nums sorted in non-decreasing order, return *an array of the squares of each number sorted in non-decreasing order.

// Answer-

function sortedSquares(nums6) {
    const result = [];
    let left = 0;
    let right = nums6.length - 1;
  
    while (left <= right) {
      const leftSquare = Math.pow(nums6[left], 2);
      const rightSquare = Math.pow(nums6[right], 2);
  
      if (leftSquare >= rightSquare) {
        result.unshift(leftSquare);
        left++;
      } else {
        result.unshift(rightSquare);
        right--;
      }
    }
  
    return result;
  }
  
  const nums6 = [-4, -1, 0, 3, 10];
  console.log(sortedSquares(nums6));
  

  



// Question 4

// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// - answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// - answer[1] is a list of all distinct integers in nums2 which are not present in nums1.

// Answer-
function findDisjoint(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
  
    const answer1 = nums1.filter(num => !set2.has(num));
    const answer2 = nums2.filter(num => !set1.has(num));
  
    return [answer1, answer2];
  }
  
  const nums1 = [1, 2, 3];
  const nums2 = [2, 4, 6];
  console.log(findDisjoint(nums1, nums2));
  




// Question 5

// Given two integer arrays arr1 and arr2, and the integer d, return the distance value between the two arrays.

// The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.

// Answer-

function distanceValue(arr1, arr2, d) {
    let distance = 0;
  
    for (let i = 0; i < arr1.length; i++) {
      let found = false;
  
      for (let j = 0; j < arr2.length; j++) {
        if (Math.abs(arr1[i] - arr2[j]) <= d) {
          found = true;
          break;
        }
      }
  
      if (!found) {
        distance++;
      }
    }
  
    return distance;
  }
  
  const arr1 = [4, 5, 8];
  const arr2 = [10, 9, 1, 8];
  const d = 2;
  console.log(distanceValue(arr1, arr2, d));
  

// Question-6
//   Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears **once** or **twice**, return *an array of all the integers that appears **twice***.

// You must write an algorithm that runs in O(n) time and uses only constant extra space.

// Answer-
function findDuplicates(nums) {
    const result = [];
  
    for (let i = 0; i < nums.length; i++) {
      const index = Math.abs(nums[i]) - 1;
  
      if (nums[index] < 0) {
        result.push(index + 1);
      } else {
        nums[index] = -nums[index];
      }
    }
  
    return result;
  }
  
  const nums = [4, 3, 2, 7, 8, 2, 3, 1];
  console.log(findDuplicates(nums));
  


// Question 7

// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

// - [4,5,6,7,0,1,2] if it was rotated 4 times.
// - [0,1,2,4,5,6,7] if it was rotated 7 times.

// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.

// Answer-
function findMin(nums5) {
    let left = 0;
    let right = nums5.length - 1;
  
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums5[mid] > nums5[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    return nums5[left];
  }
  
  const nums5 = [4, 5, 6, 7, 0, 1, 2];
  console.log(findMin(nums5));





// Question 8

// An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.

// Given an array changed, return original *if* changed *is a **doubled** array. If* changed *is not a **doubled** array, return an empty array. The elements in* original *may be returned in **any** order*.

// Answer-

function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      return [];
    }
  
    const freqMap = new Map();
    for (const num of changed) {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
  
    const result = [];
    for (const num of changed) {
      if (freqMap.get(num) > 0) {
        const double = num * 2;
        if (!freqMap.has(double) || freqMap.get(double) === 0) {
          return [];
        }
  
        result.push(num);
        freqMap.set(num, freqMap.get(num) - 1);
        freqMap.set(double, freqMap.get(double) - 1);
      }
    }
  
    return result;
  }
  
  const changed = [1, 3, 4, 2, 6, 8];
  console.log(findOriginalArray(changed));
  
  