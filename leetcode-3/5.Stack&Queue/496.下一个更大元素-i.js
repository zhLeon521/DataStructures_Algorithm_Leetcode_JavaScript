/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//  nums1 是 nums2 的子集 这个题干信息很重要。

// 维护一个单调递减栈！！！

// 先只对nums2操作就行
var nextGreaterElement = function (nums1, nums2) {
    const stack = [];
    const res = [];
    const map = new Map();

    for (let num of nums2) {
        //若当前元素大于栈顶元素，对应的下一个更大的元素就是【当前数字】,将【栈顶元素】与【当前元素】建立hash存到map中。
        while (stack.length && num > stack[stack.length - 1]) {
            map.set(stack.pop(), num)
        }
        // 否则，将当前元素压入栈，供后续数字判断使用。
        stack.push(num);
    }

    // hash表建立完毕便可以开始取值
    // 遍历nums1,将map中对应的key-value取出, 没有找到则为-1.
    for (let num of nums1) {
        res.push(map.get(num) || -1)
    }

    return res;


};
// @lc code=end




