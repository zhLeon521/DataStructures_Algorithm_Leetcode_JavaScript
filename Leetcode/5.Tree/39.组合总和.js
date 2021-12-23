/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = [];
    let path = [];
    const backtracking = (candidates, target, sum, startIndex) => {
        if (sum > target) {
            return;
        }

        if (sum === target) {
            // res.push(Array.from(path))
            // res.push(path.slice())
            res.push([...path])
            return;
        }

        for (let i = startIndex; i < candidates.length; i++) {
            sum += candidates[i];
            path.push(candidates[i]);
            console.log(path)
            backtracking(candidates, target, sum, i) // 这里不用i+1,因为可以重复取。
            sum -= candidates[i];
            path.pop();

        }
    }
    backtracking(candidates, target, 0, 0)
    return res;


};
// @lc code=end

