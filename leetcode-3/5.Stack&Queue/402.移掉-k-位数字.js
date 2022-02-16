/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-02-17 01:20:32
 * @LastEditTime: 2022-02-17 01:50:23
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\5.Stack&Queue\402.移掉-k-位数字.js
 */
/*
 * @lc app=leetcode.cn id=402 lang=javascript
 *
 * [402] 移掉 K 位数字
 */

// @lc code=start
/**
 * @param {string} nums
 * @param {number} k
 * @return {string}
 */

// 维护一个单调递增栈
var removeKdigits = function (nums, k) {
    const stack = [];

    for (let num of nums) {
        // 当前元素比栈顶元素小，删除栈顶元素。
        while (k > 0 && stack.length && num < stack[stack.length - 1]) {
            stack.pop();
            k--;
        }
        stack.push(num);

        // 栈内首位无效0,去除.
        if (stack[0] === "0" && stack.length > 0) {
            stack.shift();
        }
    }


    // 如果本身就是递增数列：123456，
    // 或者删除：123546后，变成12346且k>0,从后往前删除。
    while (k > 0) {
        stack.pop();
        k--;
    }

    return stack.length ? stack.join("") : "0";

};
// @lc code=end

