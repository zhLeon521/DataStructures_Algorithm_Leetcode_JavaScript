/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 * 
 * 假设每天都买卖，收集每天利润为正的就可以了,最后得到的一定是最大利润
 * 
 */
var maxProfit = function (prices) {
    let res = 0;
    for (let i = 1; i < prices.length; i++) {
        res += Math.max(prices[i] - prices[i - 1], 0);
    }
    return res;
};
// @lc code=end

