/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-23 12:10:37
 * @LastEditTime: 2021-09-23 14:00:10
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\118.杨辉三角.js
 */
/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {

    let res = [];

    for (let i = 0; i < numRows; i++){
        res[i] = []; // 令所有行都是空数组
        res[i][0] = 1; // 第一列都是1

        for (let j = 1; j < i; j++){
            // 每个数字等于上一行的左右两个数字之和
            // 第 n 行的第 i 个数等于第 n-1 行的第 i−1 个数和第 i 个数之和。
            res[i][j] = res[i - 1][j - 1] + res[i - 1][j];
        }
        res[i][i] = 1; //最后一列也是1
        
    }

    return res;

}



// @lc code=end

