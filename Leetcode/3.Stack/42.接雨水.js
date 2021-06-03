/*
 * @Description: 接雨水，这题用到单调递减栈
 * @Autor: Blueheart
 * @Date: 2021-06-03 15:42:56
 * @LastEditTime: 2021-06-03 16:32:34
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\3.Stack\42.接雨水.js
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
 * 单调递减栈！！
 */
 var trap = function (height) {
    let stack = [];
    let res = 0;

     for (let i = 0; i < height.length; i++){
        // 栈不为空，且当前元素[大于]栈顶元素
        while (stack.length !== 0 && height[i] > height[stack[stack.length - 1]]) {
            // 弹出栈顶元素
            const top = stack.pop();
            // 特殊情况，当栈为空的时候，跳出循环，直接增加当前下标 i 到栈里
            if (stack.length === 0) {
                break;
            }
            //两堵墙之前的距离。
            let curWidth = i - stack[stack.length - 1] - 1;
            // 先比较当前元素与出栈后栈顶元素谁更小；最小的减去弹出的栈顶元素=水池的高度
            let curHeight = Math.min(height[i], height[stack[stack.length - 1]]) - height[top];
            // 接到的雨水需要不断的累加
            res += curWidth * curHeight;           
        }
        stack.push(i);
    }
    return res;
    
};
// @lc code=end

