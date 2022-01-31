/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-01-31 18:38:53
 * @LastEditTime: 2022-02-01 00:04:58
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\3.Hash Table\454.四数相加-ii.js
 */
/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */

// 本题是找出几种组合，返回的是次数
var fourSumCount = function (nums1, nums2, nums3, nums4) {

    const twoSumMap = new Map();
    let res = 0; // 统计 n1+n2+n3+n4=0出现的次数

    for (let n1 of nums1) {
        for (let n2 of nums2) {
            const sum = n1 + n2;
            // key: n1+n2的数值
            // value: n1+n2出现的次数
            // 遍历nums1、nums2，统计两个元素之和及出现的次数
            twoSumMap.set(sum, (twoSumMap.get(sum) || 0) + 1);
        }
    }

    // 在遍历nums3、nums4数组中，如果0-(c+d)在map中出现过，就统计map中key对应的value,及两数之和出现的次数。
    for (let n3 of nums3) {
        for (let n4 of nums4) {
            const sum = n3 + n4;
            res += (twoSumMap.get(0 - sum) || 0);
        }
    }
    return res;
};

// @lc code=end

