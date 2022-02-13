/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-02-14 00:27:22
 * @LastEditTime: 2022-02-14 00:46:21
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\4.String\459.重复的子字符串.js
 */
/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */

function getNext(s) {
    let next = [];
    let j = -1;
    next[0] = -1;
    for (let i = 1; i < s.length; i++) {
        while (j >= 0 && s[i] !== s[j + 1]) {
            j = next[j];
        }
        if (s[i] === s[j + 1]) {
            j++;
        }
        next[i] = j;
    }
    return next;
}

var repeatedSubstringPattern = function (s) {
    if (s.length === 0) {
        return false;
    }
    let next = getNext(s);
    let len = s.length;
    // 数组长度-最长相等前后缀的长度，正好可以被数组的长度整除，则说明有重复的子字符串
    if (next[len - 1] !== -1 && len % (len - (next[len - 1] + 1)) === 0) {
        return true;
    }
    return false;

};
// @lc code=end

