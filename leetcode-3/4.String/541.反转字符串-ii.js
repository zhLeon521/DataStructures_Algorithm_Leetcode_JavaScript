/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-02-01 21:54:27
 * @LastEditTime: 2022-02-01 22:12:41
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\4.String\541.反转字符串-ii.js
 */
/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    const res = Array.from(s);
    for (let i = 0; i < s.length; i += 2 * k) {
        // 每次前进2k，但是只交换前k个字符
        // 下标从0开始，所以前k个是 k-1;
        reverse(res, i, Math.min(i + k - 1, s.length - 1))
    }
    return res.join("");
};

const reverse = (s, i, j) => {
    while (i < j) {
        [s[i], s[j]] = [s[j], s[i]];
        i++;
        j--;
    }
}
// @lc code=end

