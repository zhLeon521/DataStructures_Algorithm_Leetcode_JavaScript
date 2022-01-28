/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-01-29 00:50:20
 * @LastEditTime: 2022-01-29 01:08:38
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\1.Array\27.移除元素.js
 */
/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let slow = 0;
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== val) {
            // 如果此时右指针指向的元素不等于val，那么它一定是输出数组的一个元素，我们就将右指针指向的元素复制到左指针位置，然后将左右指针同时右移；
            nums[slow] = nums[fast]
            slow++;
        }
    }
    return slow;

};
// @lc code=end

