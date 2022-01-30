/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-01-30 12:11:00
 * @LastEditTime: 2022-01-30 12:51:08
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\1.Array\209.长度最小的子数组.js
 */
/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    if (nums.length === 0) return 0;
    let minLength = Infinity;
    let sum = 0;
    let i = j = 0;
    while (j < nums.length) {
        sum += nums[j]
        while (sum >= target) {
            minLength = Math.min(minLength, j - i + 1);
            sum -= nums[i]
            i++; // 不断变更子数组的起始位置
        }
        j++;
    }
    return minLength === Infinity ? 0 : minLength;

};
// @lc code=end

