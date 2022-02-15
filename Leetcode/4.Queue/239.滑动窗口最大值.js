/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-07-21 00:48:44
 * @LastEditTime: 2022-02-15 23:46:49
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\4.Queue\239.滑动窗口最大值.js
 */
/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const len = nums.length;
    const res = [];
    const deque = [];
    for (let i = 0; i < len; i++) {
        // 当队尾元素小于当前元素,将对尾元素出栈（维持递减队列）
        while (deque.length && nums[i] >= nums[deque[deque.length - 1]]) {
            deque.pop();
        }
        // 将当前元素(索引)入队
        deque.push(i);

        // 当队头元素的索引被排除在滑动窗口之外
        // 这里也可以使用if,但是while更快好像
        while (deque.length && deque[0] <= i - k) {
            deque.shift();
        }

        // 判断滑动窗口状态，只有在被遍历的元素个数大于k的时候，才更新结果数组。
        // 才更新结果数组
        if (i >= k - 1) {
            res.push(nums[deque[0]]);
        }
    }
    return res;
};
// @lc code=end

