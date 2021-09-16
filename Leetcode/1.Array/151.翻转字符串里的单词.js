/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-16 20:39:50
 * @LastEditTime: 2021-09-16 20:41:06
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\151.翻转字符串里的单词.js
 */
/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.trim().split(/\s+/).reverse().join(' ');

};
// @lc code=end

