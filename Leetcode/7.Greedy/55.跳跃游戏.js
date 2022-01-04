/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 * 不用考虑每一步跳跃到那个位置，而是尽可能的跳跃到最远的位置，看最多能覆盖的位置，不断更新能覆盖的距离。
 */
var canJump = function (nums) {
    if (nums.length === 1) return true;
    let cover = nums[0]; //能覆盖的最远距离
    for (let i = 0; i <= cover; i++) { //注意这里是小于等于cover
        //当前覆盖距离cover和 当前位置【i】加能跳跃的距离【nums[i]】中取一个较大者
        cover = Math.max(cover, i + nums[i]);
        if (cover >= nums.length - 1) { //覆盖距离超过或等于nums.length - 1 说明能到达终点
            return true;
        }
    }
    return false;//循环完成之后 还没返回true 就是不能达到终点
};
// @lc code=end

