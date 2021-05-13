/*
 * @Description: 旋转数组
 * @Autor: Blueheart
 * @Date: 2021-05-13 12:15:09
 * @LastEditTime: 2021-05-13 15:00:55
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\lesson3\189.旋转数组.js
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
var rotate = function(nums, k) {

    // 使用额外数组
    const n = nums.length;
    const newArr = new Array(n);
    for (let i = 0; i < n; i++){ //循环n次
        newArr[(i + k) % n] = nums[i];        
    }
    //把新建的数组里的值复制到原数组nums中去
    for (let i = 0; i < n; i++){ 
        nums[i] = newArr[i];
    }

};
// @lc code=end

