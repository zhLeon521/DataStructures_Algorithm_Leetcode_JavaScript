/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let res = []; // 存放所有结果
    let path = []; // 存放符合条件的结果


    const backtracking = (n, k, startIndex) => {
        // 如果已经选择的元素个数path.length等于k,直接将结果放到res中，并返回
        if (path.length === k) {
            res.push([...path])
            return;
        }
        // 横向遍历，在集合n中，至多要从（n - (k - path.length) + 1）开始遍历。这是一个左闭的区间
        // 举个例子：n=4, k=3。目前已经选取的元素个数为0（path.length===0）,那么 n-(k-path.length)+1 即 4-(3-0)+1=2，从2开始搜索是合理的，组合为【2,3,4】
        for (let i = startIndex; i <= n - (k - path.length) + 1; i++) {
            path.push(i);
            backtracking(n, k, i + 1);
            path.pop();
        }

    }


    backtracking(n, k, 1)
    return res;


};
// @lc code=end

