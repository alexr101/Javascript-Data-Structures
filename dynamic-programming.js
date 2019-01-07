function minSum(nums, s) {
  mem = [];
  mem[0] = 0;

  for(var i = 1; i <= s; i++) {
    const sum = i;
    var min = Number.MAX_SAFE_INTEGER;
    for(var j = 0; j < nums.length; j++) {
      if(nums[j] > sum) break;
      min = Math.min(min, mem[sum-nums[j]] + 1);
    }
    mem[sum] = min;
  }
  console.log(mem)
  return mem[s];
}

let res = minSum([1, 5, 3], 10)
console.log(res);

// min[1] = 1; // 1
// min[2] = 1; // min[1] + 1 && 2
// min[3] = 1; // min[2] + 1 && 3
// min[4] = 2; // min[3] + 1 && min[2] + 2
// min[5] = 2; // min[4] + 1 && min[2] + 3
// min[6] = 2; // min[5] + 1 (3) && min[3] + 3
// min[7] = 3; // min[6] + 1 (4) && min[5] + 2 (3) && min[4] + 3 (3) 
// min[8] = 3; // min[7] + 1 (4) && min[6] + 2
// min[9] = 3; // min[8] + 1 (4) && min[]
