/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let res = [];
    let path = [];
    const backtracking = (nums, used) => {
        if (path.length === nums.length) { // 个数选够了
            res.push(path.slice())   // path的拷贝，加入解集
            return;  //结束当前递归分支
        }
        /**
         * used[i-1] === true; 说明同一树枝使用过 nums[i-1]
         * used[i-1] === false; 说明同一树层使用过 nums[i-1]
         */
        for (let i = 0; i < nums.length; i++) { // 枚举出所有的选择
            // 同一树层选过了，跳过
            if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) {
                continue;
            }
            // 这个数使用过了，跳过。
            if (used[i]) {
                continue;
            }
            path.push(nums[i]) // 选择当前的数
            used[i] = true;  // 记录树枝上做过的选择
            backtracking(nums, used) // 基于此 继续递归
            used[i] = false;  // 撤销对它的记录
            path.pop() // 上一句的递归结束，回溯，将最后选的数pop出来
        }
    }
    nums.sort((a, b) => a - b)
    const used = new Array(nums.length).fill(false);
    backtracking(nums, used)
    return res;

};
// @lc code=end

