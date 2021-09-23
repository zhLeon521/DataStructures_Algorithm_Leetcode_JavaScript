/*
 * @Description
 * @Autor: Blueheart
 * @Date: 2021-09-22 09:12:57
 * @LastEditTime: 2021-09-22 09:15:05
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\485.最大连续-1-的个数.js
 */
/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let count = 0, maxCount = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 1) {
            count++;
        }else {
            maxCount = Math.max(count, maxCount)
            count = 0;
        }
    }
    maxCount = Math.max(count,maxCount)
    return maxCount

};
// @lc code=end

