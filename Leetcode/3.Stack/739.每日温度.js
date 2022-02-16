/*
 * @Description: 单调递减栈
 * @Autor: Blueheart
 * @Date: 2021-06-03 16:47:10
 * @LastEditTime: 2022-02-17 01:10:39
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\3.Stack\739.每日温度.js
 */
/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures => temps
 * @return {number[]}
 *  
 */
var dailyTemperatures = function (temps) {
    let stack = [];
    // let res = [...Array(temps.length)].map(_ => 0);
    // 生成一个结果数组用0填充
    let res = Array(temps.length).fill(0);
    for (let i = 0; i < temps.length; i++) {
        // 单调递减栈，遇到当前元素[大于]栈顶元素，就操作
        while (stack.length !== 0 && temps[i] > temps[stack[stack.length - 1]]) {
            // stack[stack.length - 1]：栈顶元素 也就是 res对应位置上的数组下标
            // i-stack[stack.length - 1]：当前元素与栈顶元素的差值，也就是到达的天数。
            res[stack[stack.length - 1]] = i - stack[stack.length - 1];
            // 用完了，就把栈顶元素弹出吧
            stack.pop();
        }
        stack.push(i)
    }
    return res;

};
// @lc code=end

