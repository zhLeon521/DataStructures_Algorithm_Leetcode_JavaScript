/*
 * @Description: 有效的括号
 * @Autor: Blueheart
 * @Date: 2021-05-24 11:24:28
 * @LastEditTime: 2021-05-24 11:32:16
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\3.Stack\20.有效的括号.js
 */
/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const map = new Map();
    map.set("(", ")")
        .set("[", "]")
        .set("{", "}");
    
    const stack = [];
    for (let i = 0; i < s.length; i++){
        if (map.has(s[i])) {
            stack.push(map.get(s[i]));
        } else {
            if (stack.pop() !== s[i]) {
                return false;
            }
        }
    }

    if (stack.length !== 0) {
        return false;
    }
    return true;

};
// @lc code=end

