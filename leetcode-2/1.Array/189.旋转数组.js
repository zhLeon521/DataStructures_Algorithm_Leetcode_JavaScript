/*
 * @Description: 旋转数组
 * @Autor: Blueheart
 * @Date: 2021-05-26 23:37:31
 * @LastEditTime: 2021-05-26 23:59:48
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-2\1.Array\189.旋转数组.js
 */
/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const reverse = (nums,start,end) => {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start += 1;
        end -= 1;
    }
}

var rotate = function (nums, k) {
    k %= nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length-1);
    return nums;

};
// @lc code=end

