/*
 * @Description: 柱状图中的最大矩形
 * @Autor: Blueheart
 * @Date: 2021-05-31 12:00:02
 * @LastEditTime: 2021-06-03 12:02:47
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
 * https://leetcode-cn.com/problems/largest-rectangle-in-histogram/solution/dong-hua-yan-shi-dan-diao-zhan-84zhu-zhu-03w3/
 */
var largestRectangleArea = function (heights) {
    // 添加哨兵Sentinel  初始化最终结果为0
    let maxArea = 0;
    const stack = [];
    // 将给定的原数组左右各添加一个元素0
    heights = [0].concat(heights).concat([0]);
    // 开始遍历
    for (let i = 0; i < heights.length; i++){
        
        // 如果栈不为空且当前考察的元素值小于栈顶元素值，
        // 则表示以栈顶元素值为高的矩形面积可以确定
        // js中，取出栈顶元素：peek()=return item[item.length-1]
        while (stack!==null && heights[i] < heights[stack[stack.length - 1]]) {
            // 弹出栈顶元素
            const curr = stack.pop();
            // 获取栈顶元素对应的高
            let curHeight = heights[curr];
            // 栈顶元素弹出后，新的栈顶元素就是其左侧边界
            let leftIndex = stack[stack.length - 1];
            // 右侧边界是当前考察的索引
            let rightIndex = i;
            // 计算矩形宽度
            let curWidth = rightIndex - leftIndex - 1;

            maxArea = Math.max(curWidth*curHeight, maxArea)
            console.log("maxArea：",maxArea);
        }
        // // 当前考察索引入栈。重要的是记录下标
        stack.push(i);
    }
    return maxArea;
};







// @lc code=end

