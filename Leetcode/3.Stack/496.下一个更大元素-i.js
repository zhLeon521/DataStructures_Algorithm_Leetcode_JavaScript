/*
 * @Description: 单调栈 + HashMap
 * @Autor: Blueheart
 * @Date: 2021-06-03 19:24:55
 * @LastEditTime: 2021-06-03 19:53:53
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\3.Stack\496.下一个更大元素-i.js
 */
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


// 先只对nums2操作就行
var nextGreaterElement = function (nums1, nums2) {
    let stack = [], res = [], map = new Map;
    for (let num of nums2) {
        // 当前数字 > 栈顶，代表栈顶对应下一个更大的数字就是当前数字，则将该组数字对应关系，记录到哈希表。
        while (stack.length && num > stack[stack.length - 1]) {
            map.set(stack.pop(),num)        
        }
        // 当前数字 < 栈顶，当前数字压入栈，供后续数字判断使用。
        stack.push(num)
    }

    // 取值，hash表中有对应key-value则取出，没有就是-1。
    for (let num of nums1) {
        res.push(map.get(num) || -1);
    }

    return res;

};
// @lc code=end

