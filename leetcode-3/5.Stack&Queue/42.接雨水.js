/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-02-16 00:59:17
 * @LastEditTime: 2022-02-16 01:14:41
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\5.Stack&Queue\42.接雨水.js
 */
/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 单调递减栈：保存原数组的索引值!!
// https://leetcode-cn.com/problems/trapping-rain-water/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-w-8/

var trap = function (height) {
    let res = 0; //这里是结果,最终的接水量
    let stack = [];
    // 栈不为空，且当前元素[大于]栈顶元素
    for (let i = 0; i < height.length; i++) {
        while (height.length && height[i] > height[stack[stack.length - 1]]) {
            // 弹出栈顶元素.
            // 做记录,接下来会用到
            const top = stack.pop();
            // 特殊情况，当栈为空的时候，跳出循环，直接增加当前下标 i 到栈里
            if (!stack.length) {
                break;
            }
            //两堵墙之间的距离
            let currWidth = i - stack[stack.length - 1] - 1;
            // 先比较当前元素与出栈后栈顶元素谁更小；最小的减去弹出的栈顶元素=水池的高度
            let currHeight = Math.min(height[i], height[stack[stack.length - 1]]) - height[top];
            // 接到的雨水需要不断的累加
            res += currHeight * currWidth;
        }
        stack.push(i);
    }
    return res;

};
// @lc code=end

