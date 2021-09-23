/*
 * @Descriptioreturn
 * @Autor: Blueheart
 * @Date: 2021-09-23 17:19:34
 * @LastEditTime: 2021-09-23 19:42:47
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\153.寻找旋转排序数组中的最小值.js
 */
/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 方法一： 直接排序，输出第一个就可以
var findMin = function (nums) {
    nums.sort((a,b)=>a-b)
    return nums[0]

};
// @lc code=end

