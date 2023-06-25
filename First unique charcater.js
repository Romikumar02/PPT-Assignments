function firstUniqChar(s) {
    const charCount = new Map();
  
    // Count the occurrences of each character
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charCount.set(char, (charCount.get(char) || 0) + 1);
    }
  
    // Find the first non-repeating character
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (charCount.get(char) === 1) {
        return i;
      }
    }
  
    // No non-repeating character found
    return -1;
  }
  