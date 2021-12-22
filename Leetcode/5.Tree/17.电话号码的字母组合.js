/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
// const letterCombinations = (digits) => {
//     if (digits == null || digits.length === 0) return [];

//     const map = {
//         2: 'abc',
//         3: 'def',
//         4: 'ghi',
//         5: 'jkl',
//         6: 'mno',
//         7: 'pqrs',
//         8: 'tuv',
//         9: 'wxyz',
//     };

//     const res = [];
//     const backtracking = (i, s) => {
//         if (i === digits.length) {
//             res.push(s);
//             return;
//         }

//         for (const c of map[digits[i]]) {
//             backtracking(i + 1, s + c);
//         }
//     };

//     backtracking(0, '');
//     return res;
// };

const letterCombinations = (digits) => {
    let len = digits.length;
    // 没有传参，返回空
    if (len === 0) return [];
    //初始对应所有的数字，为了直接对应2-9，新增了两个无效的字符串""
    const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    // 传参只有一个，就直接把这个格子里的给拆分开 
    if (len === 1) return map[digits].split("");

    let res = [];
    let path = [];

    const backtracking = (digits, len, a) => {
        if (path.length === len) {
            res.push(path.join(""))
            return;
        }
        for (const i of map[digits[a]]) {
            path.push(i);
            backtracking(digits, len, a + 1);
            path.pop();
        }
    }

    backtracking(digits, len, 0);
    return res;

}
// @lc code=end

