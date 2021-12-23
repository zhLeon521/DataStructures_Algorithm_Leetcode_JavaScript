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



const letterCombinations = (digits) => {
    if (digits.length === 0) return [];
    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };

    let res = [];
    let path = [];

    // digits:传入的【数字】，如“23”，digits.length=2
    // index:记录遍历第几个【数字】
    const backtracking = (digits, index) => {
        if (digits.length === index) { //如果此时index等于【输入数字的个数】
            res.push(path.join("")) //将此条结果传入res中 ...看答案形式进行输出
            return; //结束本层迭代
        }
        // 迭代循环：index
        for (const letter of map[digits[index]]) {
            path.push(letter)
            backtracking(digits, index + 1) //递归， index+1下层要处理下一个数字了
            path.pop() // 回溯
        }

    }

    backtracking(digits, 0)

    return res;


};
// @lc code=end

