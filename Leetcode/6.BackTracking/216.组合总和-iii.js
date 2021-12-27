/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
//  「组合中只允许含有1-9的正整数，并且每种组合中不存在重复的数字」意味着这个组合中最多包含9个数字。
var combinationSum3 = function (k, n) {
    let res = [];
    let path = []; //取名叫path,结果就是一条从根节点到叶子结点的一条露路径

    const backtracking = (targetSum, k, sum, startIndex) => {
        // 剪枝操作：如果已选元素的和大于题目中所给值【n】,再往下遍历已没有意义，所以直接终止遍历。
        if (sum > targetSum) {
            return;
        }
        // 如果已选元素个数满足题目要求，并且和也相同，将path push进res中，返回。
        if (path.length === k) {
            if (sum === targetSum) {
                res.push(path.slice())
                return;
            }
        }

        for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
            sum += i;
            path.push(i)
            backtracking(targetSum, k, sum, i + 1)
            sum -= i;
            path.pop();
        }

    }
    backtracking(n, k, 0, 1);
    return res;

};
// @lc code=end

