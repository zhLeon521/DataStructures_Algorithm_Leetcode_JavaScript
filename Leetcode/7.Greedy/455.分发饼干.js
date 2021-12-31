/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

// 思路一: 优先考虑胃口，先喂饱大胃口
// 现将饼干数组和孩子数组排序，然后从后往前遍历【孩子】数组，
// 用大饼干优先满足胃口大的孩子，并统计被满足的孩子数量。
var findContentChildren = function (g, s) {
    // g是孩子， s是饼干
    g.sort((a, b) => a - b)
    s.sort((a, b) => a - b)

    let res = [];  //记录结果：满足孩子的数量
    let index = s.length - 1;  // 饼干数组的下标
    // 遍历孩子胃口
    for (let i = g.length - 1; i >= 0; i--) {
        if (index >= 0 && s[index] >= g[i]) {
            res++;
            index--;
        }
    }
    return res;
};
// @lc code=end

