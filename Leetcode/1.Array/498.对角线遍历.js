/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-10 09:29:48
 * @LastEditTime: 2021-09-10 18:24:14
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

// 方法一：
// var findDiagonalOrder = function (matrix) {
//      // 如果数组为空，直接返回就可以
//     if (matrix.length === 0) {
//         return [];
//     }

//     let rows = matrix.length;
//     let cols = matrix[0].length;

//     // 新建一个数组用[]填充
//     const result = new Array(rows + cols - 1).fill(null).map(() => []);

//     // 每一条对角线上的坐标和都是一样的，偶向上（在数组前面添加），奇向下（在数组后面添加）
//     for (let i = 0; i < rows; i++){
//         for (let j = 0; j < cols; j++){
//             if ((i + j) % 2 === 0) {
//                 result[i+j].unshift(matrix[i][j]);
//             } else {
//                 result[i+j].push(matrix[i][j]);
//             }
//         }
//     }

//     return result.flat();

//   }


// 方法2


var findDiagonalOrder = function (matrix) {
    
    // 遇到空数组，直接返回空
    if ( !matrix.length || !matrix[0].length) {
        return [];
    }

    const m = matrix.length, n = matrix[0].length;
    const result = [];
    
    //从左上角开始
    let row = 0, col = 0;

    // 循环矩阵所有元素
    for (let i = 0; i < m * n; i++){
        
        // 需换一次，push一次。
        result.push(matrix[row][col]);

        if ((row + col) % 2 === 0) { // 偶数的话，向右上走；；之后会遇到边界情况：第一行或者最后一列
            if (col === n - 1) { //要是遍历到最后一列的话得换行
                ++row;
            } else if (row === 0) { // 要是遍历到第一行的话得换列
                ++col;
            } else { //其他就是没有触碰边界的情况，因为是向上走，行减1列增1
                --row;
                ++col;
            }
        } else { // 奇数的话，向左下走；；之后会遇到第一列或者最后一行
            if (row === m - 1) { //碰到最后一行的情况时，（行为m,不是n哦）  //这个顺序和下面的不能错哈，必须先这个
                ++col; //行不变，列加一
            } else if (col === 0) { // 碰到第一列的情况时，列不变，行加一；
                ++row;  
            } else { //其他情况就是没碰壁的时候，行加一列减一；
                ++row;
                --col;
            }
        
        }
        
    }

    return result;
   
}

// @lc code=end

