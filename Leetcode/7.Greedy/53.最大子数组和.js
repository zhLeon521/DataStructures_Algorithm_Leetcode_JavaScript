/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// // 方法一暴力法；不大行了，测试过不去
// var maxSubArray = function (nums) {
//     let res = 0;
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         let count = 0;
//         for (let j = i; j < nums.length; j++) {
//             count += nums[j]
//             res = Math.max(count, res)
//         }
//     }
//     return res;
// };

// 贪心算法
var maxSubArray = function (nums) {
    let res = -Infinity;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        count += nums[i];
        if (count > res) { // 取区间累计的最大值
            res = count;
        }
        if (count < 0) { // 相当于重置最大子序起始位置，因为遇到负数一定是拉低总和
            count = 0;
        }
    }
    return res;
}
// @lc code=end

