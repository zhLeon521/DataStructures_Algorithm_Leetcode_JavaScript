/*
 * @Description: 接雨水，这题用到单调递减栈
 * @Autor: Blueheart
 * @Date: 2021-06-03 15:42:56
 * @LastEditTime: 2021-06-03 16:29:06
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
        // 栈不为空，且当前元素大于栈顶元素
        while (stack.length !== 0 && height[i] > height[stack[stack.length - 1]]) {
            const top = stack.pop();

            if (stack.length === 0) {
                break;
            }

            let curWidth = i - stack[stack.length - 1] - 1;
            let curHeight = Math.min(height[i], height[stack[stack.length - 1]]) - height[top];
            
            res += curWidth * curHeight;

            
        }
        stack.push(i);
    }
    return res;
    

};
// @lc code=end

