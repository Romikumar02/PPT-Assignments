
// Question 1

// Given two strings s and t, determine if they are isomorphic*.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Answer-
function isIsomorphic(s, t) {
    if (s.length !== t.length) {
      return false;
    }
  
    const mapS = new Map();
    const mapT = new Map();
  
    for (let i = 0; i < s.length; i++) {
      const charS = s[i];
      const charT = t[i];
  
      if ((mapS.has(charS) && mapS.get(charS) !== charT) ||
          (mapT.has(charT) && mapT.get(charT) !== charS)) {
        return false;
      }
  
      mapS.set(charS, charT);
      mapT.set(charT, charS);
    }
  
    return true;
  }
  




// Question 2

// Given a string num which represents an integer, return true if num is a strobogrammatic number.

// A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).

// Answer-

function isStrobogrammatic(num) {
    const map = new Map([
      ["0", "0"],
      ["1", "1"],
      ["6", "9"],
      ["8", "8"],
      ["9", "6"],
    ]);
  
    let left = 0;
    let right = num.length - 1;
  
    while (left <= right) {
      const charLeft = num[left];
      const charRight = num[right];
  
      if (!map.has(charLeft) || map.get(charLeft) !== charRight) {
        return false;
      }
  
      left++;
      right--;
    }
    return true;
  }
  
//  Question 3

// Given two non-negative integers, num1 and num2 represented as string, return *the sum of* num1 *and* num2 *as a string*.

// You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

// Answer-
function addStrings(num1, num2) {
    let i = num1.length - 1;
    let j = num2.length - 1;
    let carry = 0;
    let sum = "";
  
    while (i >= 0 || j >= 0 || carry > 0) {
      const digit1 = i >= 0 ? Number(num1[i]) : 0;
      const digit2 = j >= 0 ? Number(num2[j]) : 0;
  
      const currentSum = digit1 + digit2 + carry;
      const digitSum = currentSum % 10;
      carry = Math.floor(currentSum / 10);
  
      sum = digitSum + sum;
  
      i--;
      j--;
    }
  
    return sum;
  }
  

// Question 4

// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Answer-
function reverseWords(s) {
    const words = s.split(" ");
  
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].split("").reverse().join("");
    }
  
    return words.join(" ");
  }
  

// Question 5
// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// Answer-

function reverseStr(s, k) {
    const chars = s.split("");
  
    for (let i = 0; i < chars.length; i += 2 * k) {
      let start = i;
      let end = Math.min(i + k - 1, chars.length - 1);
  
      while (start < end) {
        const temp = chars[start];
        chars[start] = chars[end];
        chars[end] = temp;
        start++;
        end--;
      }
    }
  
    return chars.join("");
  }


//   Question 6

// Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

// A shift on s consists of moving the leftmost character of s to the rightmost position.

// Answer-
function canShiftString(s, goal) {
    const concatenated = s + s;
    return concatenated.includes(goal);
  }
  


// Question 7

// Given two strings s and t, return true *if they are equal when both are typed into empty text editors*. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.

// Answer-
function backspaceCompare(s, t) {
    const stackS = [];
    const stackT = [];
  
    for (const char of s) {
      if (char !== '#') {
        stackS.push(char);
      } else if (stackS.length > 0) {
        stackS.pop();
      }
    }
  
    for (const char of t) {
      if (char !== '#') {
        stackT.push(char);
      } else if (stackT.length > 0) {
        stackT.pop();
      }
    }
  
    return stackS.join('') === stackT.join('');
  }
  

// Question 8

// You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

//   Answer-
function checkStraightLine(coordinates) {
    const [x0, y0] = coordinates[0];
    const [x1, y1] = coordinates[1];
    const initialSlope = (y1 - y0) / (x1 - x0);
  
    for (let i = 2; i < coordinates.length; i++) {
      const [x, y] = coordinates[i];
      const slope = (y - y0) / (x - x0);
  
      if (slope !== initialSlope) {
        return false;
      }
    }
  
    return true;
  }
  
