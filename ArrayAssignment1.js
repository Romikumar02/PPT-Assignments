
// Q1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


// Answer1 -
function twoSum(nums, target) {
  const complementMap = new Map(); // Map to store complements
  
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    
    if (complementMap.has(complement)) {
      return [complementMap.get(complement), i];
    }
    
    complementMap.set(num, i); // Store current number and its index as complement
  }
  
  return []; // No solution found
}

//  usage
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result);

// Q2-Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

// - Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// - Return k.

// **Example :**
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]

// Explanation: Your function should return k = 2, with the first two elements of nums being 2. It does not matter what you leave beyond the returned k (hence they are underscores)[


// Answer


function removeElement(nums, val) {
  let k = 0; // Count of elements not equal to val

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[k] = nums[j];
      k++;
    }
  }

  return k;
}

// Example usage
const nums1 = [3, 2, 2, 3];
const val = 3;
const result1 = removeElement(nums, val);
console.log(result1); // Output: 2
console.log(nums1); // Output: [2, 2, _, _] (underscores denote irrelevant values)


// 💡 Q3. Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.


// Answer-3

function searchInsert(nums3, target3) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums3[mid] < target3) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

// Example usage
const nums3 = [1, 3, 5, 6];
const target3 = 5;
const result3 = searchInsert(nums3, target3);
console.log(result3); // Output: 2



// Q4. You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Answer-

function plusOne(digits) {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + carry;
    digits[i] = sum % 10;
    carry = Math.floor(sum / 10);

    if (carry === 0) {
      // No more carry, early exit
      return digits;
    }
  }

  if (carry !== 0) {
    digits.unshift(carry);
  }

  return digits;
}

// Example usage
const digits = [1, 2, 3];
const result4 = plusOne(digits);
console.log(result4); // Output: [1, 2, 4]



// Q5. You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.


// Answer-


function merge(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
}

// Example usage
const nums5 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

merge(nums5, m, nums2, n);
console.log(nums1); 




// Q6. Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Answer-

function merge(nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }

  while (p2 >= 0) {
    nums1[p] = nums2[p2];
    p2--;
    p--;
  }
}


// Q7. Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.

// Note that you must do this in-place without making a copy of the array.


// answer-

function moveZeroes(nums) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // Swap nonzero element with the element at j
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    }
  }

  // Fill remaining positions with zeros
  while (j < nums.length) {
    nums[j] = 0;
    j++;
  }
}


// Q8. You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.


// Answer-

function findErrorNums(nums) {
  const numSet = new Set();
  let duplicate = 0;
  let missing = 0;

  for (const num of nums) {
    if (numSet.has(num)) {
      duplicate = num;
    } else {
      numSet.add(num);
    }
  }

  const expectedSum = (nums.length * (nums.length + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  missing = expectedSum - actualSum;

  return [duplicate, missing];
}

// Example usage
const nums8 = [1, 2, 2, 4];
const result8 = findErrorNums(nums8);
console.log(result8); // Output: [2, 3]

