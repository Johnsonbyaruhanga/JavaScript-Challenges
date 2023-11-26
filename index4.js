const nums = [2, 7, 11, 14, 17];
const target = 18;

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];

    const otherNum = target - currentNum;

    const otherIndex = nums.indexOf(otherNum);

    if (otherIndex !== -1 && otherIndex !== i) {
      return [otherIndex, i];
    }
  }
  //Return indices of two numbers that add upto the target 18
}

const resultTwoSum = twoSum(nums, target);
console.log(resultTwoSum);
