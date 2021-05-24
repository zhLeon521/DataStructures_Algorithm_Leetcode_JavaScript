/*
 * @Description: 有效的括号
 * @Autor: Blueheart
 * @Date: 2021-05-24 11:24:28
 * @LastEditTime: 2021-05-24 11:39:14
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\3.Stack\20.有效的括号.js
 */
/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 * 
 * 解题步骤：
 * 1.建立一个HashMap,把括号配对放进去
 * 2.创建一个Stack(Array),for循环遍历字符串。
 * 如果map中有key ,说明他是左括号，从map 中取出对应的右括号放到Stack中。
 * 否则的话他就是右括号，这时需要将stack 栈顶元素弹出看是否相等，不相等返回false
 * 
 * 3.循环结束后，看一下stack是否为空，不为空就说明还剩一些左括号没有被闭合，返回false.否则返回true。
 */
var isValid = function (s) {
    const map = new Map();
    map.set("(", ")")
        .set("[", "]")
        .set("{", "}");
    
    const stack = [];
    for (let i = 0; i < s.length; i++){
        if (map.has(s[i])) {
            stack.push(map.get(s[i]));
        } else {
            if (stack.pop() !== s[i]) {
                return false;
            }
        }
    }

    if (stack.length !== 0) {
        return false;
    }
    return true;

};
// @lc code=end

