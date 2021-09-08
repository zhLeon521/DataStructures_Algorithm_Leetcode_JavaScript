/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-08 14:50:29
 * @LastEditTime: 2021-09-08 15:04:09
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

    const total = nums.reduce((a, b) => a + b, 0);
    let sum = 0;
    for (let i = 0; i < nums.length; i++){
        if (sum * 2 + nums[i] === total) {
            return i;
        }
        sum += nums[i];
    }
    return -1;

    

};
// @lc code=end

