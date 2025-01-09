export function findSumOfThree(nums, target) {
    let i, j, k;
    i = 0;
    j = 1;
    k = nums.length - 1;
  
    nums.sort((a, b) => a - b);
  
    while (i < nums.length - 2) { 
      while (j !=  k) {
        if (nums[i] + nums[j] + nums[k] === target) {
          return true;
        }
  
        if (nums[i] + nums[j] + nums[k] < target) {
          j++;
          continue;
        }
  
        if (nums[i] + nums[j] + nums[k] > target) {
          k--;
          continue;
        }
      }
      i++;
      j = i + 1;
      k = nums.length - 1;
    }
  
    return false;
}