
// // Question 1
// // Given an integer array nums of length n and an integer target, find three integers
// // in nums such that the sum is closest to the target.
// // Return the sum of the three integers.

// // You may assume that each input would have exactly one solution.

// // Answer-
// function threeSumClosest(nums, target) {
//     nums.sort((a, b) => a - b); // Sort the array in ascending order
//     const n = nums.length;
//     let closestSum = nums[0] + nums[1] + nums[2]; // Initialize closestSum with the sum of the first three elements
    
//     for (let i = 0; i < n - 2; i++) {
//       let left = i + 1;
//       let right = n - 1;
      
//       while (left < right) {
//         const currentSum = nums[i] + nums[left] + nums[right];
        
//         if (currentSum === target) {
//           return target;
//         } else if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
//           closestSum = currentSum;
//         }
        
//         if (currentSum < target) {
//           left++;
//         } else {
//           right--;
//         }
//       }
//     }
    
//     return closestSum;
//   }
  


// // Question 2
// // Given an array nums of n integers, return an array of all the unique quadruplets
// // [nums[a], nums[b], nums[c], nums[d]] such that:
// //            ● 0 <= a, b, c, d < n
// //            ● a, b, c, and d are distinct.
// //            ● nums[a] + nums[b] + nums[c] + nums[d] == target

// // You may return the answer in any order.

// // Answer-

// function fourSum(nums, target) {
//     nums.sort((a, b) => a - b); // Sort the array in ascending order
//     const n = nums.length;
//     const quadruplets = [];
    
//     for (let a = 0; a < n - 3; a++) {
//       if (a > 0 && nums[a] === nums[a - 1]) {
//         continue;
//       }
      
//       for (let b = a + 1; b < n - 2; b++) {
//         if (b > a + 1 && nums[b] === nums[b - 1]) {
//           continue;
//         }
        
//         let left = b + 1;
//         let right = n - 1;
        
//         while (left < right) {
//           const currentSum = nums[a] + nums[b] + nums[left] + nums[right];
          
//           if (currentSum === target) {
//             quadruplets.push([nums[a], nums[b], nums[left], nums[right]]);
            
//             while (left < right && nums[left] === nums[left + 1]) {
//               left++;
//             }
//             left++;
            
//             while (left < right && nums[right] === nums[right - 1]) {
//               right--;
//             }
//             right--;
//           } else if (currentSum < target) {
//             left++;
//           } else {
//             right--;
//           }
//         }
//       }
//     }
    
//     return quadruplets;
//   }

//   Question-3
// 💡 A permutation of an array of integers is an arrangement of its members into a
// sequence or linear order.

// For example, for arr = [1,2,3], the following are all the permutations of arr:
// [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].

// The next permutation of an array of integers is the next lexicographically greater
// permutation of its integer. More formally, if all the permutations of the array are
// sorted in one container according to their lexicographical order, then the next
// permutation of that array is the permutation that follows it in the sorted container.

// If such an arrangement is not possible, the array must be rearranged as the
// lowest possible order (i.e., sorted in ascending order).

// ● For example, the next permutation of arr = [1,2,3] is [1,3,2].
// ● Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
// ● While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not
// have a lexicographical larger rearrangement.

// Given an array of integers nums, find the next permutation of nums.
// The replacement must be in place and use only constant extra memory.

// Answer-
function nextPermutation(nums) {
    const n = nums.length;
    let i = n - 2;
    
    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }
    
    if (i >= 0) {
      let j = n - 1;
      while (j > i && nums[j] <= nums[i]) {
        j--;
      }
      swap(nums, i, j);
    }
    
    reverse(nums, i + 1, n - 1);
  }
  
  function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  
  function reverse(nums, start, end) {
    while (start < end) {
      swap(nums, start, end);
      start++;
      end--;
    }
  }
  



// Question 4
// Given a sorted array of distinct integers and a target value, return the index if the
// target is found. If not, return the index where it would be if it were inserted in
// order.

// You must write an algorithm with O(log n) runtime complexity.


// Answer-
function searchInsert(nums, target) {
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
    
    return left;
  }

// Question 5
// You are given a large integer represented as an integer array digits, where each
// digits[i] is the ith digit of the integer. The digits are ordered from most significant
// to least significant in left-to-right order. The large integer does not contain any
// leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Answer-

function plusOne(digits) {
    const n = digits.length;
    
    for (let i = n - 1; i >= 0; i--) {
      if (digits[i] === 9) {
        digits[i] = 0;
      } else {
        digits[i]++;
        return digits;
      }
    }
    
    // If the loop completes without returning, it means all digits were 9
    digits.unshift(1);
    return digits;
  }
  



// Question 6
// Given a non-empty array of integers nums, every element appears twice except
// for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only
// constant extra space.

// Answer-
function singleNumber(nums) {
    let result = 0;
    
    for (const num of nums) {
      result ^= num;
    }
    
    return result;
  }
  

  
// Question 7
// You are given an inclusive range [lower, upper] and a sorted unique integer array
// nums, where all elements are within the inclusive range.

// A number x is considered missing if x is in the range [lower, upper] and x is not in
// nums.

// Return the shortest sorted list of ranges that exactly covers all the missing
// numbers. That is, no element of nums is included in any of the ranges, and each
// missing number is covered by one of the ranges.

// Answer-
function findMissingRanges(nums, lower, upper) {
    const result = [];
    let start = lower;
    
    for (const num of nums) {
      if (num > start) {
        result.push(getRange(start, num - 1));
      }
      start = num + 1;
    }
    
    if (start <= upper) {
      result.push(getRange(start, upper));
    }
    
    return result;
  }
  
  function getRange(start, end) {
    return start === end ? [start.toString()] : [start.toString(), end.toString()];
  }
  

// Question 8
// Given an array of meeting time intervals where intervals[i] = [starti, endi],
// determine if a person could attend all meetings.

// Answer-
function canAttendMeetings(intervals) {
    intervals.sort((a, b) => a[0] - b[0]); // Sort intervals based on start time
    
    for (let i = 1; i < intervals.length; i++) {
      if (intervals[i][0] < intervals[i - 1][1]) {
        return false; // Overlapping intervals found
      }
    }
    
    return true; // No overlapping intervals
  }
  




