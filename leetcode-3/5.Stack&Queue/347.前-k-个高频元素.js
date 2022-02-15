/*
 * @Description:
 * @Autor: Blueheart
 * @Date: 2022-02-16 00:22:23
 * @LastEditTime: 2022-02-16 00:55:06
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\5.Stack&Queue\347.前-k-个高频元素.js
 */
/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// 要统计元素出现频率
// 对频率排序
// 找出前K个高频元素
// var topKFrequent = function (nums, k) {
//     let res = [];
//     const map = new Map();
//     for (const num of nums) {
//         map.set(num, (map.get(num) || 0) + 1);
//     }
//     // 回一个数组的迭代对象，该对象包含数组的键值对(key,value)
//     // 按照频率降序排列
//     let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);

//     for (let i = 0; i < k; i++) {
//         res.push(sortedArray[i][0]);
//     }
//     return res;

// };

var topKFrequent = function (nums, k) {
    let res = [];
    const map = new Map();
    nums.forEach(num => map.set(num, (map.get(num) || 0) + 1));

    return [...map.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(x => x[0])
        .slice(0, k);

}
// @lc code=end



