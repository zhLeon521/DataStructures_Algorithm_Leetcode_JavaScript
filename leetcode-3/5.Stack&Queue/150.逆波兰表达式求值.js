/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-02-15 00:02:17
 * @LastEditTime: 2022-02-15 00:21:57
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\5.Stack&Queue\150.逆波兰表达式求值.js
 */
/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    // 如果遇到的是一个操作数，则将其入栈；如果遇到的是一个操作符，则两个操作数出栈并执行相应的运算，然后计算结果入栈
    const stack = [];
    for (const token of tokens) {
        if (isNaN(Number(token))) { //遇到非数字
            n2 = stack.pop();//出栈两个元素
            n1 = stack.pop();
            switch (token) {
                case "+":
                    stack.push(n1 + n2);
                    break;
                case "-":
                    stack.push(n1 - n2);
                    break;
                case "*":
                    stack.push(n1 * n2);
                    break;
                case "/":
                    // js除了Math.floor方法，还可以通过位运算|，>>实现向下取整
                    // stack.push(n1 / n2 | 0);
                    // stack.push(n1 / n2 >> 0);
                    break;
            }

        } else { //遇到数字
            stack.push(Number(token));
        }
    }
    return stack[0]; // 因没有遇到运算符而待在栈中的结果
};
// @lc code=end

