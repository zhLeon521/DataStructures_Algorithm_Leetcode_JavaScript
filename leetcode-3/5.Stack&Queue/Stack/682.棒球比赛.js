/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    let res = 0;
    const stack = [];

    if (ops === null) {
        return 0
    }

    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === "+") {
            stack.push(stack[stack.length - 1] + stack[stack.length - 2])
        }
        if (ops[i] === "D") {
            stack.push(stack[stack.length - 1] * 2)
        }

        if (ops[i] === "C") {
            stack.pop()
        }
        // + 号用来将字符串转为数字
        if (+ops[i]) {
            stack.push(+ops[i])
        }

    }

    // for (let i = 0; i < stack.length; i++) {
    //     res += stack[i];
    // }
    // return res;

    // 只能添加数字
    return stack.reduce((a, b) => a + b)


};
// @lc code=end

