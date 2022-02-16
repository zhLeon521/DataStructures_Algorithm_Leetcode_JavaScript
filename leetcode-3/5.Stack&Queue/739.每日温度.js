/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-02-17 00:58:44
 * @LastEditTime: 2022-02-17 01:16:01
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\5.Stack&Queue\739.每日温度.js
 */
/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
//  ‘找右边第 1 个大于（或小于）自己的元素，这种问题的套路就是使用栈’划重点，要考！！


// stack存放temperatures元素的下标。

var dailyTemperatures = function (temperatures) {

    // 栈中存放temperatures元素对应的【下标】。
    const stack = [];
    // 生成一个结果数组用0填充
    const res = [...Array(temperatures.length)].fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        // 单调递减栈，遇到当前元素[大于]栈顶元素，就操作
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {

            // 找到res【对应位置】的【下标】，将当前元素与栈顶元素的索引【位置】差值赋值到res数组。
            res[stack[stack.length - 1]] = i - stack[stack.length - 1];

            // stack[stack.length - 1]：栈顶元素 也就是 res或者temperatures对应位置上的数组下标
            // i-stack[stack.length - 1]：当前元素与栈顶元素的差值，也就是到达的天数。

            // 弹出栈顶元素
            stack.pop()

        }

        stack.push(i);
    }
    return res;

};
// @lc code=end

