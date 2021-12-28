/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */

var restoreIpAddresses = function (s) {
    let res = [];
    let path = [];
    const backtracking = (startIndex) => {
        if (path.length > 4) return;
        // 分成了4段，且索引等于s的长度
        if (path.length === 4 && startIndex === s.length) {
            res.push(path.join("."));
            return;
        }

        for (let j = startIndex; j < s.length; j++) {
            const subStr = s.substring(startIndex, j + 1);
            // 子串长度不能大于三位数，且最大数不得大于255：0-255之间
            if (subStr.length > 3 || +subStr > 255) break;
            // 子串不得以0开头
            if (subStr.length > 1 && subStr[0] === "0") break;
            path.push(subStr);
            backtracking(j + 1);
            path.pop()
        }
    }
    backtracking(0);
    return res;

};
// @lc code=end

