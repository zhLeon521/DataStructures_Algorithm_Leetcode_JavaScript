/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 使用startIndex去重
 var subsetsWithDup = function (nums) {
    let res = [];
    let path = [];
    const backtracking = (nums, startIndex) => {
        res.push([...path]);
        for (let i = startIndex; i < nums.length; i++) {
            if (i > startIndex && nums[i] === nums[i - 1]) {
                continue;
            }
            path.push(nums[i])
            backtracking(nums, i + 1);
            path.pop();
        }
    }
    nums.sort((a, b) => a - b);
    backtracking(nums, 0)
    return res;
};
// @lc code=end


