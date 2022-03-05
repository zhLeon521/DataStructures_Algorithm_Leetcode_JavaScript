/*
 * @lc app=leetcode.cn id=1021 lang=javascript
 *
 * [1021] 删除最外层的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

// 栈的解法: 碰到 "(" 就入栈，碰到 ")" 就把栈顶的一个 "(" 消掉。

// 如果栈为空，那么刚刚碰到的 “)” 就是最外层右括号；
// 如果入栈前栈为空，则即将入栈的 “(” 就是最外层左括号。

//  (这其实也是一种单调栈，它的单调性在于：栈里面只存在左括号，右括号仅仅是用来消灭左括号的)



var removeOuterParentheses = function (s) {
    const res = [];
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        // 如果入栈前栈为空，则即将入栈的 “(” 就是最外层左括号。
        if (s[i] === '(' && stack.length === 0) {
            stack.push('(');
            // 如果入栈前栈不为空，则即将入栈的 “(” 就是内层左括号。push进res中
        } else if (s[i] === '(' && stack.length !== 0) {
            stack.push('(');
            res.push('(');
        }
        // 遇到右括号，弹出。如果弹出后栈不为空，说明是内层括号，push进res中
        if (s[i] === ')') {
            stack.pop();
            if (stack.length !== 0) {
                res.push(')')
            }
        }
    }
    return res.join('')

};
// @lc code=end

