/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-11 14:59:36
 * @LastEditTime: 2021-09-11 15:19:56
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\14.最长公共前缀.js
 */
/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    'use strict';
    if (strs === undefined || strs.length === 0) { return ''; }
    
    return strs.reduce((accumulator, currentValue) => {
        let i = 0;
        while (accumulator[i] && currentValue[i] && accumulator[i] === currentValue[i])
            i++;
        return accumulator.slice(0, i);
    });
};
// @lc code=end

