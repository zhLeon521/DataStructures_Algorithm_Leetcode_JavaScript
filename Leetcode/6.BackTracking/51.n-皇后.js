/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */


// var solveNQueens = function (n) {
//     // n为输入的棋盘大小
//     // row为递归到棋盘第几行了
//     let res = [];

//     // 初始化一个二维棋盘chessboard,并用“.”填充
//     const chessboard = new Array(n);
//     for (let i = 0; i < n; i++) {
//         chessboard[i] = new Array(n).fill(".");
//     }

//     const isValid = (row, col) => {
//         //检查列
//         for (let i = 0; i < row; i++) {
//             if (chessboard[i][col] === "Q") {
//                 return false;
//             }
//         }
//         // 检查45°角是否有皇后
//         for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
//             if (chessboard[i][j] === "Q") {
//                 return false;
//             }
//         }
//         // 检查135°角是否有皇后
//         for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
//             if (chessboard[i][j] === "Q") {
//                 return false;
//             }
//         }
//         return true;
//     }

//     const backtracking = (n, row, chessboard) => {
//         if (row === n) {
//             const stringboard = chessboard.slice(); //这里只深拷贝了第一层,但是下面的循环,
//             for (let i = 0; i < n; i++) { // 对 stringsBoard 的每一项直接赋予新值(原本存放的数组连接而成的字符串)
//                 stringboard[i] = stringboard[i].join("")  // 没有直接修改第二层的数组,所以不会影响原数组chessboard
//             }
//             res.push(stringboard)
//             return;
//         }
//         for (let col = 0; col < n; col++) {
//             if (isValid(row, col)) {
//                 chessboard[row][col] = "Q";
//                 backtracking(n, row + 1, chessboard);
//                 chessboard[row][col] = "."
//             }
//         }
//     }
//     backtracking(n, 0, chessboard)
//     return res;
// };

var solveNQueens = function (n) {
    // 棋盘的初始化: 二维棋盘
    const chessBoard = new Array(n);
    for (let i = 0; i < n; i++) {
        chessBoard[i] = new Array(n).fill(".")
    }

    let res = [];
    const isVaild = (row, col) => {
        for (let i = 0; i < row; i++) {      //之前的行
            for (let j = 0; j < n; j++) {    //所有的列
                // 发现了皇后，并且和自己同列/对角线,,直接返回 false
                if (chessBoard[i][j] === "Q" && (j === col || i + j === row + col || i - j === row - col)) {
                    return false;  //不合法的选择
                }
            }
        }
        return true;
    }

    const backtracking = (row) => {    // 放置当前行的皇后
        if (row === n) {  // 当递归到最后一行（也就是叶子结点），可以收集结果并返回
            const newBoard = chessBoard.slice(); //
            for (let i = 0; i < n; i++) {
                newBoard[i] = newBoard[i].join(""); // 将每一行拼成字符串
            }
            res.push(newBoard)  //推入res数组
            return;
        }

        for (let col = 0; col < n; col++) {  // 枚举出所有选择
            if (isVaild(row, col)) {   // 剪掉无效的选择
                chessBoard[row][col] = "Q"    // 作出选择，放置皇后
                backtracking(row + 1);        // 继续选择，往下递归
                chessBoard[row][col] = ".";   // 撤销当前选择
            }
        }
    }

    backtracking(0);  // 从第0行开始
    return res;
}


// @lc code=end

