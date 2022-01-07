/*
 * @lc app=leetcode.cn id=738 lang=javascript
 *
 * [738] 单调递增的数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * 遇到 a[i - 1] > a[i]的情况，让a[i - 1]--，然后a[i]给为9，可以保证这两位变成最大单调递增整数。
 * 只有一位数字时直接返回该数字
 * 找到不是递增的位置, 后面剩下的直接填充为9, 前面的减1后递归
 * 
 * 从后向前遍历
 */
var monotoneIncreasingDigits = function (n) {
    if (n < 9) return n;
    let a = (n + '').split("");
    // let a = n.toString().split("").map(v => '' + v)

    // flag用来标记赋值9从哪里开始
    let flag = Infinity; //设置为这个默认值，为了防止第二个for循环在flag没有被赋值的情况下执行

    for (let i = a.length - 1; i > 0; i--) {
        if (a[i - 1] <= a[i]) continue;
        a[i - 1]--;
        a[i] = 9;
        flag = i;
    }
    //将flag后面的全部置为9
    for (let i = flag; i < a.length; i++) {
        a[i] = 9;
    }
    return a.join("") - '0'; //将整数数组转换为字符串然后转换为数字并返回

};
// @lc code=end

