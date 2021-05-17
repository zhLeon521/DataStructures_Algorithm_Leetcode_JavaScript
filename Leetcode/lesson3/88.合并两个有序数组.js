/*
 * @Description: 合并两个有序数组
 * @Autor: Blueheart
 * @Date: 2021-05-17 10:35:04
 * @LastEditTime: 2021-05-17 11:02:43
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\lesson3\88.合并两个有序数组.js
 */
/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// ===================白板模式===================
let nums1 = [1, 2, 4, 5, 0, 0, 0, 0, 0]
let nums2 = [1, 3, 4, 8,10]
m = 4;
n = 5;

// Array.prototype.splice(从第几个元素开始删，删几个，追加什么元素)
let merge = (m,nums1,nums2) => {
    nums1.splice(m, nums1.length - m, ...nums2)
    nums1.sort((a, b) => a - b);
    console.log(nums1)  
}

merge(m,nums1,nums2);

// @lc code=start
// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */

// var merge = function (nums1, m, nums2, n) {
//     // 方法1：直接添加，然后排序
//     nums1.splice(m, nums.length-m, ...nums2)

// };
// // @lc code=end







