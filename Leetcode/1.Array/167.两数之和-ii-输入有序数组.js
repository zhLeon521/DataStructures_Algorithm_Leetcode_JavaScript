/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-19 17:45:57
 * @LastEditTime: 2021-09-19 17:50:50
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\167.两数之和-ii-输入有序数组.js
 */
/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
//暴力法
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] + nums[j] === target) {
                return [i + 1, j + 1];
            }
        }
    }

};
// @lc code=end

