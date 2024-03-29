/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// // 使用used Boolean数组
var combinationSum2 = function (candidates, target) {
    let res = [];
    let path = [];
    const backtracking = (candidates, target, sum, startIndex, used) => {
        if (sum > target) { return; }
        if (sum === target) {
            res.push([...path]);
            return;
        }
        for (let i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++) {

            /**去重，定义：
             * 如果 used[i-1]===true,说明同一个【树枝】使用过candidates[i-1],本题同一树枝可以重复选取
             * 如果 used[i-1]===false,说明同一个【树层】使用过candidates[i-1]，本题同一树层不可以重复选取
             */
            // 这里使用i>startIndex与i>0效果等同,是为了candidates[i - 1]不越界
            //同一树层使用过candidates[i - 1]，跳过同一树层使用过的元素
            if (i > 0 && candidates[i] === candidates[i - 1] && used[i - 1] === false) {
                continue; //跳过
            }
            sum += candidates[i];
            path.push(candidates[i]);
            used[i] = true
            backtracking(candidates, target, sum, i + 1, used) // 这里是i+1;
            used[i] = false
            sum -= candidates[i]
            path.pop()
        }

    }

    const used = new Array(candidates.length).fill(false) //定义boolean数组，用false填充
    candidates.sort((a, b) => a - b); //升序排序
    backtracking(candidates, target, 0, 0, used)
    return res;

};


// 使用startIndex去重
// var combinationSum2 = function (candidates, target) {
//     let res = [];
//     let path = [];

//     const backtracking = (candidates, target, sum, startIndex) => {
//         if (sum === target) {
//             res.push([...path])
//             return;
//         }
//         for (let i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++) {
//             // 跳过同一树层使用过的元素
//             if (i > startIndex && candidates[i] === candidates[i - 1]) {
//                 continue;
//             }
//             sum += candidates[i];
//             path.push(candidates[i]);
//             backtracking(candidates, target, sum, i + 1); //i+1 所有元素在每个组合中只能使用一次
//             sum -= candidates[i]
//             path.pop()
//         }

//     }
//     candidates.sort((a, b) => a - b)
//     backtracking(candidates, target, 0, 0)
//     return res;
// }
// @lc code=end

