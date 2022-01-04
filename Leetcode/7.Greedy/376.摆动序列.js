/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * 思路：贪心策略，只选择波峰、波谷。不在上升下降过程中选点
 * 当前数 > 前数，本轮趋势上升。如果上轮趋势下降。找到波谷
 * 当前数 < 前数，本轮趋势下降。如果上轮趋势上升。找到波峰
 * 
 * 
 */
var wiggleMaxLength = function (nums) {
    if (nums.length < 2) return nums.length;
    let res = 1;  // 记录峰值的个数，默认序列最右有一个峰值
    let prevDiff = 0;  // 记录前一对的差值
    let currDiff = 0;  // 当前一对的差值
    for (let i = 0; i <= nums.length; i++) {
        currDiff = nums[i + 1] - nums[i];
        //出现波谷或波峰
        if ((currDiff > 0 && prevDiff <= 0) || (currDiff < 0 && prevDiff >= 0)) {
            res++;
            prevDiff = currDiff;
        }
    }
    return res;

};
// @lc code=end

