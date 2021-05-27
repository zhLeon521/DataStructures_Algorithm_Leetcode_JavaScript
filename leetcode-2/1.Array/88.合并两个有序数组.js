/*
 * @Description: 合并两个有序数组
 * @Autor: Blueheart
 * @Date: 2021-05-27 16:48:05
 * @LastEditTime: 2021-05-27 17:07:55
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-2\1.Array\88.合并两个有序数组.js
 */
/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // nums1.splice(m, nums1.length - m, ...nums2);
    // nums1.sort((a, b) => a - b);
    // return nums1;

    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }

    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
 


};
// @lc code=end

