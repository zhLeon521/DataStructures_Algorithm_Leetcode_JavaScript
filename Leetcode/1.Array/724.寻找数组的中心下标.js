/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-08 14:50:29
 * @LastEditTime: 2021-09-08 15:06:57
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\724.寻找数组的中心下标.js
 */
/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    // 求和， reduce
    const total = nums.reduce((a, b) => a + b, 0);
    let sum = 0;
    // 左边的2倍 + 中间的这个 等于 total，中间的这个就是要找的
    for (let i = 0; i < nums.length; i++){
        if (sum * 2 + nums[i] === total) {
            return i;
        }
        sum += nums[i]; // 否则就右移
    }
    return -1;

    

};
// @lc code=end

