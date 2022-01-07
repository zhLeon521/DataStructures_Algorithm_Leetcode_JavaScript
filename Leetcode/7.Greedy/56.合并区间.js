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
    intervals.sort((a, b) => a[0] - b[0]);
    let res = []

    let prev = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        let curr = intervals[i];
        // 先合并，遇到不重合再推入 prev。
        if (prev[1] >= curr[0]) { //有重合
            prev[1] = Math.max(curr[1], prev[1]);
        } else {
            res.push(prev); // 不重合，prev推入res数组 
            prev = curr; //更新prev
        }
    };
    // 当考察完最后一个区间，后面没区间了，遇不到不重合区间，最后的 prev 没推入 res。要单独补上
    res.push(prev);
    return res;
}
// @lc code=end

