function moveZeroes(nums) {
    let left = 0;
  
    // Move non-zero elements to the beginning
    for (let right = 0; right < nums.length; right++) {
      if (nums[right] !== 0) {
        if (left !== right) {
          nums[left] = nums[right];
          nums[right] = 0;
        }
        left++;
      }
    }
  }
  