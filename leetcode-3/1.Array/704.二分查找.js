/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-01-29 00:25:43
 * @LastEditTime: 2022-01-29 00:43:25
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\1.Array\704.二分查找.js
 */
/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (target === nums[mid]) {
            return mid;
        } else if (target > nums[mid]) {
            left = mid + 1;
        } else if (target < nums[mid]) {
            right = mid - 1;
        }
    }
    return -1;
};
// @lc code=end

