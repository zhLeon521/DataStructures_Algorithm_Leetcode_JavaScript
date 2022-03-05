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
    map.set('(', ')');
    map.set('{', '}');
    map.set('[', ']');


    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) { //左括号
            stack.push(map.get(s[i]));
        } else if (stack.pop() !== s[i]) { //右括号，不相等
            return false;
        }
    }

    // 最后里面还有的话，也是不匹配的
    if (stack.length !== 0) {
        return false;
    }

    // 其他情况，就是真的了
    return true;

};
// @lc code=end

