/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = [];
    let path = [];
    const backtracking = (nums, startIndex) => {
        res.push([...path]);
        // 当startIndex大于数组长度的时候，遍历就终止了,因为没有元素可以取了
        // 本题这个终止条件可以不加, 因为startIndex >= nums.length; 本层for循环也结束了。
        if (startIndex >= nums.length) {
            return;
        }
        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i]) //i是索引,记得要往里面填充元素
            backtracking(nums, i + 1)
            path.pop();
        }

    }
    backtracking(nums, 0)
    return res;
};
// @lc code=end

