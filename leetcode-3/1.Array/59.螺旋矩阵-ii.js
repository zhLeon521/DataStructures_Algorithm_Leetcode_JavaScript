/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-01-30 12:51:52
 * @LastEditTime: 2022-01-30 22:01:41
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\1.Array\59.螺旋矩阵-ii.js
 */
/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
// 这题和54不同的是，要自己生成矩阵
// 打印的是 1-- > n²
var generateMatrix = function (n) {
    // const matrix = new Array(n).fill().map(() => new Array(n).fill(0))

    const matrix = [...Array(n)].map(() => Array(n));
    let num = 1;
    let left = 0, right = n - 1, top = 0, bottom = n - 1;
    while (num <= n * n) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num;
            num++;
        } top++;

        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num;
            num++;
        } right--;

        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = num;
            num++;
        } bottom--;

        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = num;
            num++;
        } left++;
    }
    return matrix;
};
// @lc code=end

