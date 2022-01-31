/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-01-31 16:53:52
 * @LastEditTime: 2022-01-31 17:42:41
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\3.Hash Table\242.有效的字母异位词.js
 */
/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    // return s.split('').sort().join('') === t.split('').sort().join('');

    // return s.split('').sort().toString() === t.split('').sort().toString()

    // return Array.from(s).sort().join('') === Array.from(t).sort().join('');


    // chatCodeAt: 指定 index 处字符的 UTF-16 代码单元值的一个数字；如果 index 超出范围，charCodeAt() 返回 NaN。

    if (s.length !== t.length) return false;
    const hash = new Array(26).fill(0);
    for (let c of s) {
        // 不需要记住字符a的ASCII值，只需记住相对数值即可
        let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        hash[i]++;  //对应位置加一；
    }

    for (let c of t) {
        let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
        if (hash[i] > 0) {
            hash[i]--;
        } else {
            return false;
        }
    }

    return true;


};
// @lc code=end

