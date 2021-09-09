/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-09 10:42:35
 * @LastEditTime: 2021-09-09 10:58:48
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\56.合并区间.js
 */
/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    let res = []; 

    intervals.sort((a, b) => a[0] - b[0]);
    let prev = intervals[0];

    for (let i = 1; i < intervals.length; i++){
        let curr = intervals[i];

        if (prev[1] >= curr[0]) {
            prev[1] = Math.max(prev[1],curr[1])
        } else {
            res.push(prev);
            prev = curr;
        }
            
    }

    res.push(prev);
    return res;
 

};
// @lc code=end

