/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-02-18 01:02:07
 * @LastEditTime: 2022-02-18 01:49:18
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\5.Stack&Queue\84.柱状图中最大的矩形.js
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
 */

// 单调递增栈，栈内存放 heights 元素的索引
/**
 * @param {number[]} heights
 * @return {number}
 * https://leetcode-cn.com/problems/largest-rectangle-in-histogram/solution/bao-li-jie-fa-zhan-by-liweiwei1419/
 * https://leetcode-cn.com/problems/largest-rectangle-in-histogram/solution/dong-hua-yan-shi-dan-diao-zhan-84zhu-zhu-03w3/
 */
var largestRectangleArea = function (heights) {
    // 添加哨兵Sentinel  初始化最终结果为0
    let maxArea = 0;
    const stack = [];
    // 将给定的原数组左右各添加一个元素0
    heights = [0].concat(heights).concat([0]);
    // 开始遍历
    for (let i = 0; i < heights.length; i++) {

        // 如果栈不为空且当前考察的元素值小于栈顶元素值，
        // 则表示以栈顶元素值为高的矩形面积可以确定

        while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
            // 弹出栈顶元素
            const curr = stack.pop();
            // 获取栈顶元素对应的高
            let curHeight = heights[curr];
            // 栈顶元素弹出后，新的栈顶元素就是其左侧边界
            let leftIndex = stack[stack.length - 1];
            // 右侧边界是当前考察的索引
            let rightIndex = i;
            // 计算矩形宽度,这个注意点！！要再减1
            let curWidth = rightIndex - leftIndex - 1;

            maxArea = Math.max(curWidth * curHeight, maxArea)
        }
        // // 当前考察索引入栈。重要的是记录下标
        stack.push(i);
    }
    return maxArea;
};
// @lc code=end

