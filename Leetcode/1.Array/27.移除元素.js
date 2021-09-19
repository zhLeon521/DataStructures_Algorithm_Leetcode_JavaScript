/*
 * @Description
 * @Autor: Blueheart
 * @Date: 2021-09-19 20:32:05
 * @LastEditTime: 2021-09-19 20:42:11
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\27.移除元素.js
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

//快慢指针
var removeElement = function (nums, val) {
    const n = nums.length;
    let slow = 0;
    for (let fast = 0; fast < n; fast++){
        if (nums[fast] !== val) { //如果快指针不等于val,将值赋值给slow
            nums[slow] = nums[fast];
            slow++; //slow指针向后移
        }
    }
    return slow; //返回长度


};
// @lc code=end

