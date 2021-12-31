/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    // 判断是否和行列、周围小边框有冲突。有冲突返回true,没有冲突返回falseS
    const hasConflit = (row, col, val) => {
        for (let i = 0; i < 9; i++) {
            // 与行、列有冲突
            if (board[i][col] === val || board[row][i] === val) {
                return true;
            }
        }
        // 
        const subRowStart = Math.floor(row / 3) * 3;  //对于小框，行有三种起始索引：0、3、6
        const subColStart = Math.floor(col / 3) * 3;  //对于小框，列有三种起始索引：0、3、6
        // 遍历所有小框
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (val === board[i + subRowStart][j + subColStart])
                    return true;
            }
        }
        return false;
    }
    // i是行， j是列
    const backtracking = (i, j) => {
        if (j === 9) { // 列越界，说明填完了一行，填下一行的第一格
            i++;
            j = 0;
            if (i === 9) return true;  // 都填完了，返回true
        }
        if (board[i][j] !== ".") {  // 不是空格，递归填下一格
            return backtracking(i, j + 1);
        }
        for (let num = 1; num <= 9; num++) {  // 枚举出当前格的所有可填的选择
            if (hasConflit(i, j, String(num))) continue;  // 如果存在冲突，跳过这个选择
            board[i][j] = String(num);   // 作出一个选择,填一个num
            if (backtracking(i, j + 1)) return true;   // 如果基于它，填下一格，最后可以解出数独，直接返回true
            board[i][j] = "."; // 如果基于它，填下一格，填1-9都不行，回溯，恢复为空格
        }
        return false;  // 尝试了1-9，每个都往下递归，都不能做完，返回false
    }
    backtracking(0, 0)  // 从左上角第一个格子开始填
    return board;

};
// @lc code=end

