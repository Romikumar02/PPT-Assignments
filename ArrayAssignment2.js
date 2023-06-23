
// Question 1
// Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2),..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.


// Answer-

function arrayPairSum(nums) {
    nums.sort((a, b) => a - b);
    let maxSum = 0;
  
    for (let i = 0; i < nums.length; i += 2) {
      maxSum += nums[i];
    }
  
    return maxSum;
  }
  
  // Example usage
  const nums = [1, 4, 3, 2];
  const result = arrayPairSum(nums);
  console.log(result); // Output: 4
  




// Question 2
// Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor. 
// The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice. 
// Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.

// Answer-


function distributeCandies(candyType) {
    const uniqueCandies = new Set();
  
    for (const candy of candyType) {
      uniqueCandies.add(candy);
    }
  
    const maxLimit = candyType.length / 2;
    const maxCandies = Math.min(uniqueCandies.size, maxLimit);
  
    return maxCandies;
  }
  
  // Example usage
  const candyType = [1, 1, 2, 2, 3, 3];
  const result2 = distributeCandies(candyType);
  console.log(result2); // Output: 3


  
// Answer
function findLHS(nums) {
    const numFreq = new Map();
    let maxLen = 0;
  
    for (const num of nums) {
      numFreq.set(num, (numFreq.get(num) || 0) + 1);
    }
  
    for (const [num, freq] of numFreq) {
      if (numFreq.has(num + 1)) {
        const curLen = freq + numFreq.get(num + 1);
        maxLen = Math.max(maxLen, curLen);
      }
    }
  
    return maxLen;
  }
  
  // Example usage
  const nums3= [1, 3, 2, 2, 5, 2, 3, 7];
  const result3 = findLHS(nums3);
  console.log(result3); // Output: 5
  


// Question 4
// You have a long flowerbed in which some of the plots are planted, and some are not.
// However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

// answer
function canPlaceFlowers(flowerbed, n) {
    let count = 0;
  
    for (let i = 0; i < flowerbed.length; i++) {
      if (
        flowerbed[i] === 0 &&
        (i === 0 || flowerbed[i - 1] !== 1) &&
        (i === flowerbed.length - 1 || flowerbed[i + 1] !== 1)
      ) {
        flowerbed[i] = 1;
        count++;
      }
    }
  
    return count >= n;
  }
  
  // Example usage
  const flowerbed = [1, 0, 0, 0, 1];
  const n = 1;
  const result4 = canPlaceFlowers(flowerbed, n);
  console.log(result4); // Output: true

  
  

// Question 5
// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Answer-
function maximumProduct(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
  
    const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    const product2 = nums[0] * nums[1] * nums[n - 1];
  
    return Math.max(product1, product2);
  }
  
  // Example usage
  const nums5 = [1, 2, 3];
  const result5 = maximumProduct(nums5);
  console.log(result5); // Output: 6
  


// Question 6
// Given an array of integers nums which is sorted in ascending order, and an integer target,
// write a function to search target in nums. If target exists, then return its index. Otherwise,
// return -1.

// Answer-
function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
  }
  
  // Example usage
  const nums6 = [-1, 0, 3, 5, 9, 12];
  const target = 9;
  const result6 = search(nums6, target);
  console.log(result6); // Output: 4


  
//  Question 7
// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
// monotone decreasing if for all i <= j, nums[i] >= nums[j].

// Given an integer array nums, return true if the given array is monotonic, or false otherwise.

// Answer
function isMonotonic(nums) {
    let isIncreasing = true;
    let isDecreasing = true;
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[i - 1]) {
        isDecreasing = false;
      }
      if (nums[i] < nums[i - 1]) {
        isIncreasing = false;
      }
    }
  
    return isIncreasing || isDecreasing;
  }
  
  // Example usage
  const nums7 = [1, 2, 2, 3];
  const result7 = isMonotonic(nums7);
  console.log(result7); // Output: true
  

// Question 8
// You are given an integer array nums and an integer k.
// In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.
// The score of nums is the difference between the maximum and minimum elements in nums.
// Return the minimum score of nums after applying the mentioned operation at most once for each index in it.


// Answer-


function minScore(nums, k) {
    let minNum = nums[0];
    let maxNum = nums[0];
  
    for (let i = 1; i < nums.length; i++) {
      minNum = Math.min(minNum, nums[i]);
      maxNum = Math.max(maxNum, nums[i]);
    }
  
    let minScore = maxNum - minNum;
  
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const potentialMin = num - k;
      const potentialMax = num + k;
  
      minNum = Math.min(potentialMin, minNum);
      maxNum = Math.max(potentialMax, maxNum);
  
      minScore = Math.min(minScore, maxNum - minNum);
    }
  
    return minScore;
  }
  
  // Example usage
  const nums8 = [1];
  const k = 0;
  const result8 = minScore(nums8, k);
  console.log(result8); // Output: 0
  
