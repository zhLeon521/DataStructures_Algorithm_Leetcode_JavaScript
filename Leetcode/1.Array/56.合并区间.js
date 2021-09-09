/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-09 10:42:35
 * @LastEditTime: 2021-09-09 11:23:12
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
 * prev 初始为第一个区间，cur 表示当前的区间，res 表示结果数组
 * 思路：
 * 开启遍历，尝试合并 prev 和 cur，合并后更新到 prev 上
 * 因为合并后的新区间还可能和后面的区间重合，继续尝试合并新的 cur，更新给 prev
 * 直到不能合并 —— prev[1] < cur[0]，此时将 prev 区间推入 res 数组
 易错：
 * 我们是先合并，遇到不重合再将 prev推入res。
 * 当考察完最后一个区间，后面没区间了，遇不到不重合区间，最后的 prev 没推入 res。
 * 要单独补上。

 */
var merge = function (intervals) {
    let res = []; //定义一个结果数组

    // 按照各个区间左端按升序排列
    intervals.sort((a, b) => a[0] - b[0]);

    // prev 为第一个初始区间
    let prev = intervals[0];

    // 第二个往后开始循环
    for (let i = 1; i < intervals.length; i++){
        // 当前区间
        let curr = intervals[i];
        // 如果初始区间的右端大于等于当前区间的左侧，这说明两个区间有重合，应该合并
        if (prev[1] >= curr[0]) {
            // 将prev 区间的右侧进行更新
            prev[1] = Math.max(prev[1],curr[1])
        } else {  // 否则，没有重合
            res.push(prev); // 直接将prev区间push进结果数组
            prev = curr; // 更新prev区间，继续操作。
        }        
    }
    // 考察完最后一个区间，后面没有了。
    // 遇不到不重合的区间，最后直接将prev推进res数组
    res.push(prev);
    return res;
 

};
// @lc code=end

