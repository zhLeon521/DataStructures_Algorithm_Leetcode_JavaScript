/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */

// 利用双指针判断是否是回文字符串
const isPalindrome = (s, left, right) => {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }
        left++;
        right--;
    }
    return true;

}


var partition = function (s) {
    let res = [];
    let path = [];

    const backtracking = (s, startIndex) => {
        // 如果起始位置已经大于s的大小，说明已经找到了一组分割方案了
        if (startIndex >= s.length) {
            res.push([...path]);
            return;
        }
        for (let i = startIndex; i < s.length; i++) {
            if (isPalindrome(s, startIndex, i)) { //是回文子串
                // 获取【startIndex,i】在s的子串。这里有一个语法记录一下：s.subString(start, stop),start为要提取子串第一个字符所在位置，stop要比要【提取的子串的最后一个字符】位置多1
                const subStr = s.substring(startIndex, i + 1);
                path.push(subStr)
            } else {
                continue; // 不是回文子串，跳过
            }
            backtracking(s, i + 1); // 寻找i+1为起始位置的子串
            path.pop(); // 回溯，弹出本次已经处理过的子串
        }

    }

    backtracking(s, 0);
    return res;

};
// @lc code=end

