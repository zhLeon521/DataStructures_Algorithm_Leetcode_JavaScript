/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-09 17:28:32
 * @LastEditTime: 2021-09-09 17:38:45
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\01.08 面试题，零矩阵.js
 */
/**
 * 
 * 面试题 01.08. 零矩阵
编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。

 

示例 1：

输入：
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出：
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
示例 2：

输入：
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出：
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]

思路：
1. 用两个标记数组标记是否有0出现；
2. 最后我们再次遍历该数组，用标记数组更新原数组即可。

巧用bool运算符
 */

var setZeroes = function (matrix) {

    const m = matrix.length; // 几行
    const n = matrix[0].length; // 几列

    // row col 为标记数组，用布尔值false填充
    const row = new Array(m).fill(false);
    const col = new Array(n).fill(false);
    
    // 遍历。发现等于零的，把所在行所在列都标记为true；
    for (let i=0; i < m; i++) {
        for (let j = 0; j < n; j++){
            if (matrix[i][j] === 0) {
                row[i] = col[j] = true;
            }
        }
    }

    // 然后再遍历一遍标记数组，发现位置有true，直接弄成0；
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            if (row[i] || col[j]) {
                matrix[i][j] = 0;
            }
        }
    }


    
}