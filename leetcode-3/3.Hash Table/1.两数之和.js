/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-01-31 18:29:54
 * @LastEditTime: 2022-01-31 18:36:48
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\3.Hash Table\1.两数之和.js
 */
/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map.has(diff)) {
            return [i, map.get(diff)];
        } else {
            map.set(nums[i], i)
        }
    }


};
// @lc code=end

