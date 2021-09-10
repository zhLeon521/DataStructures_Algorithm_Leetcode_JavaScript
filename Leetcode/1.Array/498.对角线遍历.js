/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-10 09:29:48
 * @LastEditTime: 2021-09-10 14:39:39
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\498.对角线遍历.js
 */
/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 * 这里的关键是要意识到所有对角线上的索引之和是相等的
 */

var findDiagonalOrder = function (matrix) {
     // 如果数组为空，直接返回就可以
    if (matrix.length === 0) {
        return [];
    }

    let rows = matrix.length;
    let cols = matrix[0].length;

    // 新建一个数组用[]填充
    const result = new Array(rows + cols - 1).fill(null).map(() => []);

    // 每一条对角线上的坐标和都是一样的，偶向上（在数组前面添加），奇向下（在数组后面添加）
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < cols; j++){
            if ((i + j) % 2 === 0) {
                result[i+j].unshift(matrix[i][j]);
            } else {
                result[i+j].push(matrix[i][j]);
            }
        }
    }

    return result.flat();

  }

// @lc code=end

