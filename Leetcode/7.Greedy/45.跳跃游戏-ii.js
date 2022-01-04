/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 * 统计两个覆盖范围，当前这一步的最大覆盖和下一步最大覆盖。
 * 移动下标只要遇到当前覆盖最远距离的下标，直接步数加一，不考虑是不是终点的情况。
 */
var jump = function (nums) {
    let res = 0;  // 记录跳的步数
    let currJumpMax = 0; // 以当前跳跃步数，能到的最远位置，比如: jump=1跳一次时，最远能到下标currJumpMax=2
    let currNextMax = 0; // 下一步覆盖的最远距离下标
    // 不需要检查最后一个位置是因为，最后一个位置我们不用跳了已经，所以这里是小于nums.length-1
    for (let i = 0; i < nums.length - 1; i++) {
        // 只需要在一次 跳跃 完成时，更新下一次 能跳到最远的距离 下标。
        currNextMax = Math.max(currNextMax, i + nums[i]) // 更新下一步覆盖的最远距离下标
        // 并以此刻作为时机来更新 跳跃 次数。
        if (i === currJumpMax) {   //第一次起跳 或  遇到当前覆盖的最远距离下标!!!!已经到达边界，必须跳一下！！！
            res++; //我们不得不再跳一次
            currJumpMax = currNextMax;  // 更新当前覆盖的最远距离下标, 新的边界
        }
    }
    return res;
};
// @lc code=end

