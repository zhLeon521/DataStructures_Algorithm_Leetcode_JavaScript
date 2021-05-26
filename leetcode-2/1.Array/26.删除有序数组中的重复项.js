/*
 * @Description: 删除有序数组重复项
 * @Autor: Blueheart
 * @Date: 2021-05-26 23:23:38
 * @LastEditTime: 2021-05-26 23:36:47
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-2\1.Array\26.删除有序数组中的重复项.js
 */
/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    if (nums.length === 0) {
        return nums;
    }
    let fast = 1;
    let slow = 1;
    for (let i = 1; i < nums.length; i++){
        if(nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast]
            ++slow;
        }++fast;
    }

    return slow;


};
// @lc code=end

