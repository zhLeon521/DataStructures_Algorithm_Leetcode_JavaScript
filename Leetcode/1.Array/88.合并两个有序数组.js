/*
 * @Description: 合并两个有序数组
 * @Autor: Blueheart
 * @Date: 2021-05-17 10:35:04
 * @LastEditTime: 2021-05-17 11:33:12
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\lesson3\88.合并两个有序数组.js
 */
/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// ===================白板模式===================
// let nums1 = [1, 2, 4, 5, 0, 0, 0, 0, 0]
// let nums2 = [1, 3, 4, 8,10]
// m = 4;
// n = 5;

// // Array.prototype.splice(从第几个元素开始删，删几个，追加什么元素)
// let merge = (m,nums1,nums2) => {
//     nums1.splice(m, nums1.length - m, ...nums2)
//     nums1.sort((a, b) => a - b);
//     console.log(nums1)  
// }

// merge(m,nums1,nums2);

@lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
    // // 方法1：直接添加，然后排序
    // nums1.splice(m, nums1.length - m, ...nums2);
    // nums1.sort((a, b) => a - b);




    // 方法2:从后面操作
    // 因为是有序数组，所以对应位置进行比较。返回的是nums1
    // 如果nums比较完之后，nums2还有元素，就是直接追加就好
    
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
        nums1[k--] = nums2[j--]
    }
    
    
    
    
    
};
// @lc code=end







