/*
 * @Description: 柱状图中的最大矩形
 * @Autor: Blueheart
 * @Date: 2021-05-31 12:00:02
 * @LastEditTime: 2021-05-31 12:29:16
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\3.Stack\84.柱状图中最大的矩形.js
 */
/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 * https://leetcode-cn.com/problems/largest-rectangle-in-histogram/solution/bao-li-jie-fa-zhan-by-liweiwei1419/
 */
var largestRectangleArea = function (heights) {
    // 添加哨兵Sentinel
    let maxArea = 0;
    const stack = [];
    heights = [0].concat(heights).concat([0]);
    console.log(heights);
    for (let i = 0; i < heights.length; i++){
        while (stack && heights[stack[stack.length - 1]] > heights[i]) {
            const j = stack.pop();
            maxArea = Math.max((i-stack[stack.length - 1]-1)*heights[j], maxArea)
            console.log(maxArea);
        }
        // 重要的是记录下标
        stack.push(i); 
    }
    return maxArea;
};
// @lc code=end

