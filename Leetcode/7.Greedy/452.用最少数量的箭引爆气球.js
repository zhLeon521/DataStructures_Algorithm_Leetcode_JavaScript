/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 * 
 * 题目中说 满足  xstart ≤ x ≤ xend，则该气球会被引爆
 */
var findMinArrowShots = function (points) {
    points.sort((a, b) => a[1] - b[1]); //按右端升序排序
    let res = 1; //points不为空，所以至少需要一支箭
    for (let i = 1; i < points.length; i++) {
        // 气球 i 和气球 i-1 不挨着，注意不是 大于等于
        if (points[i][0] > points[i - 1][1]) {
            res++; // 需要一支箭
        } else { // 气球i 与 气球 i-1 挨着
            // 更新重叠气球的最小右边界
            points[i][1] = Math.min(points[i - 1][1], points[i][1]);
        }
    }
    return res;
};
// @lc code=end

