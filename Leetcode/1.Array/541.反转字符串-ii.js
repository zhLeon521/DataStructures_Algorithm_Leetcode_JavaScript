/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-19 16:36:52
 * @LastEditTime: 2021-09-19 17:22:21
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\541.反转字符串-ii.js
 */
/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var reverseStr = function (s, k) {
    // 长度s.length   下标：s.length-1
    const n = s.length;
    const res = Array.from(s);

    // 每次前进2k，但是只交换前k个字符
    for (let i = 0; i < n; i += 2 * k){
        reverse(res, i, Math.min(i + k - 1, n - 1));
    }
    return res.join("");
}


// 每个区间内 翻转
// i：区间左侧
// j: 区间右侧
const reverse = (s, i, j) => {
    while (i < j) {
        [s[i], s[j]] = [s[j], s[i]];

        // const temp = s[i];
        // s[i] = s[j];
        // s[j] = temp;
        i++;
        j--;
    }
    
}

// @lc code=end

