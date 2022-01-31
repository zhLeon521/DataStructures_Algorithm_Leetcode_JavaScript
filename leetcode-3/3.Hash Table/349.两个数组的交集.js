/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-01-31 17:43:21
 * @LastEditTime: 2022-01-31 18:19:19
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\3.Hash Table\349.两个数组的交集.js
 */
/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    // return [...new Set(nums1)].filter(n => nums2.includes(n))

    let solution = nums1.filter(n => nums2.includes(n));
    let res = new Set(solution);
    return [...res];

    // const set1 = new Set(nums1);
    // const set2 = new Set(nums2);

    // const res = [];

    // for (let value of set1) {
    //     if (set2.has(value)) {
    //         res.push(value)
    //     }
    // }

    // return res;
};
// @lc code=end

