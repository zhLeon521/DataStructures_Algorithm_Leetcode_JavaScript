/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-09 15:15:59
 * @LastEditTime: 2021-09-09 16:38:20
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\48.旋转图像.js
 */
/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    // // 找到规律：
    // // 对于矩阵中第 i行的第 j 个元素，在旋转后，它出现在倒数第 i 列的第 j 个位置。
    // // 我们将其翻译成代码。由于矩阵中的行列从 0 开始计数，因此对于矩阵中的元素 matrix[row][col]，在旋转后，它的新位置为new_matrix[col][n-row-1]

    // // 方法一：借助另一个辅助数组
    // const n = matrix.length;
    // // 创建一个二维数组用0填充
    // const new_matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
    // for (let i = 0; i < n; i++){
    //     for (let j = 0; j < n; j++){
    //         new_matrix[j][n - i - 1] = matrix[i][j];
    //     }
    // }
    // //最后把另一个数组拷回原数组
    // for (let i = 0; i < n; i++){
    //     for (let j = 0; j < n; j++){
    //         matrix[i][j] = new_matrix[i][j];
    //     }
    // }

    // /// ****************用翻转代替旋转*******************
    // 官方题解方法三：https://leetcode-cn.com/problems/rotate-image/solution/xuan-zhuan-tu-xiang-by-leetcode-solution-vu3m/
// 步骤：1.先水平翻转，matrix[row][col] = matrix[n-1-row][col]
    // 2.再沿着对角线旋转 matrix[row][col] = matrix[col][row]
    // 3.OK了

    const n = matrix.length;
    // 水平翻转
    for (let i = 0; i < Math.floor(n / 2); i++){
        for (let j = 0; j < n; j++){
            [matrix[i][j], matrix[n-1-i][j]] = [matrix[n-1-i][j],matrix[i][j]]
        }
    }

    // 对角线翻转
    for (let i = 0; i < n; i++){
        // 是j<i，别翻转多了
        for (let j = 0; j < i; j++){
            [matrix[i][j],matrix[j][i]] = [matrix[j][i],matrix[i][j]]
        }
    }


};
// @lc code=end

