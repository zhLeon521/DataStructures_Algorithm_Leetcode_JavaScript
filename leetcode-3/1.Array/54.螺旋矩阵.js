/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-01-30 12:59:47
 * @LastEditTime: 2022-01-30 19:23:29
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\1.Array\54.螺旋矩阵.js
 */
/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {

    if (matrix.length === 0) return [];
    const res = [];
    let top = 0, bottom = matrix.length - 1, left = 0, right = matrix[0].length - 1;
    // 定义终结条件
    while (left <= right && top <= bottom) {
        // 从左到右，把top行、i列push进结果数组
        for (let i = left; i <= right; i++) {
            res.push(matrix[top][i]);
        } top++; //下移

        // 从上到下，把i行、right列 push进结果数组
        for (let i = top; i <= bottom; i++) {
            res.push(matrix[i][right]);
        } right--; //右边界左移

        // 更新完相应的边界后,检查在循环的途中不满足条件的情况，而且此时“遍历完成”时间点，要么发生在遍历完上边、要么发生在遍历完右边
        if (left > right || top > bottom) break;

        // 从右向左，将bottom行、i列 push进结果数组
        for (let i = right; i >= left; i--) {
            res.push(matrix[bottom][i]);
        } bottom--;

        // 从底向上，将
        for (let i = bottom; i >= top; i--) {
            res.push(matrix[i][left]);
        } left++;
    }
    return res;
};

// @lc code=end

