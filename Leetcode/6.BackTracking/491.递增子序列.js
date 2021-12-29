/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
    let res = [];
    let path = [];
    const set = new Set(); //使用set 存储合格的path,下次遇到重复的不让加入解集

    const backtracking = (nums, startIndex) => {
        if (path.length > 1) {
            const str = path.toString(); //path数组转换成字符串
            if (!set.has(str)) {   // set中没有存有当前path
                res.push(path.slice()); //推入一份path的拷贝
                set.add(str); // 将字符串存入set, 记录一下
            }
        }
        // 枚举出所有的选项，从start到末尾
        for (let i = startIndex; i < nums.length; i++) {
            const prev = path[path.length - 1]; //上一个选择的元素，即path数组中的末尾元素
            const curr = nums[i]; // 当前选的元素
            if (path.length === 0 || prev <= curr) {  //如果path为空 或者 前一个元素小于等于当前元素（满足递增关系） 可以选择
                path.push(nums[i])  //将当前元素push进path中（选择当前元素）
                backtracking(nums, i + 1) //继续往下递归，注意传的是 i+1
                path.pop(); //撤销选择的当前数字，选择别的数字；
            }
        }
    }
    backtracking(nums, 0)
    return res;

};
// @lc code=end

