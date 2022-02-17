/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-02-17 23:56:49
 * @LastEditTime: 2022-02-18 00:30:15
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\5.Stack&Queue\316.去除重复字母.js
 */
/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

// 单调递增栈

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
// 补充知识点：includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false。
// arr.includes(valueToFind[, fromIndex])
// 从fromIndex 索引处开始查找 valueToFind。
// 使用 includes()比较字符串和字符时是区分大小写的。


var removeDuplicateLetters = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        //如果单调递增栈已经有了这个元素，就弃掉（因为这是一个递增栈，比如4564，弃掉后面这个4而不是前面的4，这样最后的结果字典序才是最小的），开始下一轮
        if (stack.includes(s[i])) continue;
        // 如果栈非空，并且栈顶元素比s的当前元素还大并且后面还有栈顶元素，那么就弹栈
        while (stack.length && s[i] < stack[stack.length - 1] && s.includes(stack[stack.length - 1], i)) {
            stack.pop();
        }
        stack.push(s[i])
    }
    return stack.join('');
};
// @lc code=end

