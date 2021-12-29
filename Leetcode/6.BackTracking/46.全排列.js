/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = [];
    let path = [];
    const backtracking = (nums, used) => {
        if (path.length === nums.length) { // 选的个数与数组长度相同, 说明找到了一组结果
            res.push(path.slice()); //拷贝一份path,加入解集res
            return;  //结束当前递归分支；
        }
        for (let i = 0; i < nums.length; i++) { // for枚举出每个可选的选项
            if (used[i] === true) continue; //使用过的，直接跳过
            path.push(nums[i]); // 选择当前的数，加入path
            used[i] = true; // 记录一下，使用了
            backtracking(nums, used); // 基于当前的数，进行递归
            path.pop(); // 上一句的递归结束，回溯，将最后选的数pop出来
            used[i] = false; // 撤销这个记录
        }
    }

    const used = new Array(nums.length).fill(false); // 新建一个used数组用于记录path中有哪些元素被使用了，排列问题重元素只能使用一次
    backtracking(nums, used)
    return res;
};
// @lc code=end

