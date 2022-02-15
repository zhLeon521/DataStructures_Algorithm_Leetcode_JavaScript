/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-02-15 23:30:39
 * @LastEditTime: 2022-02-16 00:21:20
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\5.Stack&Queue\239.滑动窗口最大值.js
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

// 维护一个单调递减队列：从大到小nums值的索引
// -------------
// front     end
// -------------
var maxSlidingWindow = function (nums, k) {
    const deque = [];// 保存nums的索引值
    const res = [];
    // 当队尾元素小于当前元素,将队尾元素出栈（维持递减队列，队列里是nums的索引值）
    for (let i = 0; i < nums.length; i++) {
        while (deque.length && nums[i] >= nums[deque[deque.length - 1]]) {
            deque.pop();
        }
        // 将当前元素(nums数组索引)入队
        deque.push(i);


        // 当队头元素的索引被排除在滑动窗口之外
        // 这里也可以使用if,但是while更快好像
        // deque[0]:队头元素。保存的是nums的索引
        while (deque.length && deque[0] <= i - k) {
            deque.shift();
        }
        // 判断滑动窗口状态，只有在被遍历的元素个数大于k的时候，才更新结果数组。
        if (i >= k - 1) {
            res.push(nums[deque[0]])
        }
    }
    return res;

};
// @lc code=end

