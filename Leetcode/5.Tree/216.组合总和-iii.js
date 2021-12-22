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
 * n为和， k是个数
 */
var combinationSum3 = function (k, n) {
    let res = [];
    let path = [];

    const backtracking = (n, k, sum, startIndex) => {
        // 剪枝操作：如果已选元素的和大于n,再往下遍历已没有意义，所以直接终止遍历。
        if (sum > n) {
            return;
        }
        // 如果已选元素个数满足题目要求，并且和也相同，将path push进res中，返回。
        if (path.length === k) {
            if (sum === n) {
                res.push([...path]);
                return;
            }
        }
        for (let i = startIndex; i <= 9 - (k - path.length) + 1; i++) {
            sum += i;
            path.push(i)
            backtracking(n, k, sum, i + 1)
            sum -= i;
            path.pop()
        }
    }

    backtracking(n, k, 0, 1);
    return res

};
// @lc code=end

