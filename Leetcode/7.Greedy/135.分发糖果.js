/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 * 一定要先确定一边孩子的评分后，再确定另一边
 * 先从前向后遍历， 先确定右边孩子大于左边孩子评分的情况
 * 再从后向前遍历， 确定左边孩子大于右边孩子评分的情况
 */
var candy = function (ratings) {
    // 贪心策略，两次遍历
    // 每个人至少先有一个糖果,先组建一个数组,每个孩子否分配一个糖果
    let nums = new Array(ratings.length).fill(1);
    // 从左往右遍历，若右边的评分比左边的高，则右边的糖果数改为左边的糖果数加 1
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) { //若右边的评分比左边的高，
            nums[i] = nums[i - 1] + 1; //则右边的糖果数改为左边的糖果数加 1
        }
    }
    // 从右往左遍历，左边的评分比右边的高，且左边孩子当前的糖果数不大于右边的糖果数，则左边的糖果数更新为右边的糖果数加 1
    for (let j = ratings.length - 1; j > 0; j--) {
        if (ratings[j] < ratings[j - 1] && nums[j - 1] <= nums[j]) { //左边的评分比右边的高，且左边孩子当前的糖果数不大于右边的糖果数
            nums[j - 1] = nums[j] + 1; //则左边的糖果数更新为右边的糖果数加 1
        }
    }

    let sum = 0;
    nums.forEach(n => sum += n);
    return sum;

};
// @lc code=end

