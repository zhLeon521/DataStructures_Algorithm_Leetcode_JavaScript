/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-02-01 22:13:47
 * @LastEditTime: 2022-02-01 22:23:19
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\4.String\151.翻转字符串里的单词.js
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
    const res = [];
    let word = [];

    //字母往后推push，单词往前推 unshift
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === ' ') {
            // 遇到空格，把结果单词word，往ret前面推，
            word.length > 0 && res.unshift(word.join(''));
            // 塞进res之后就把当前word清空
            word = [];
        } else {
            // 把字符 push进word
            word.push(s.charAt(i))
        }
    }
    // 把最后一个push进去
    word.length > 0 && res.unshift(word.join(''));

    return res.join(' ');


};
// @lc code=end

