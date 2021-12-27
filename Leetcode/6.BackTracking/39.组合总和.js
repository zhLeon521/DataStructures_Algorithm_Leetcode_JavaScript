/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates //候选人
 * @param {number} target
 * @return {number[][]}
 */
// var combinationSum = function (candidates, target) {
//     let res = [];
//     let path = [];

//     const backtracking = (candidates, target, sum, startIndex) => {
//         if (sum > target) { return; }
//         if (sum === target) {
//             res.push(path.slice())
//             return;
//         }
//         for (let i = startIndex; i < candidates.length; i++) {
//             sum += candidates[i];
//             path.push(candidates[i])
//             backtracking(candidates, target, sum, i); //注意哈:这里i不用从i+1开始，因为元素可重复
//             sum -= candidates[i];
//             path.pop()
//         }
//     }
//     backtracking(candidates, target, 0, 0) //注意startIndex的起始位置
//     return res;

// };

// 剪枝操作
var combinationSum = function (candidates, target) {
    let res = [];
    let path = [];


    const backtracking = (candidates, target, sum, startIndex) => {
        if (sum > target) {
            return;
        }
        if (sum === target) {
            // 要注意结果输出格式
            res.push(path.slice()); // path的拷贝
            return;
        }
        // 这里做剪枝操作：如果下一层的sum（即 本层的sum+candidates[1]）大于target,就可以结束本层for循环遍历
        for (let i = startIndex; (i < candidates.length) && (sum + candidates[i] <= target); i++) {
            sum += candidates[i];
            path.push(candidates[i]);
            backtracking(candidates, target, sum, i);
            sum -= candidates[i];
            path.pop();
        }

    }
    // 再求和问题中，排序之后减剪枝是常见的做法。
    candidates.sort((a, b) => a - b);// 升序排序。
    backtracking(candidates, target, 0, 0)
    return res;
}
// @lc code=end

