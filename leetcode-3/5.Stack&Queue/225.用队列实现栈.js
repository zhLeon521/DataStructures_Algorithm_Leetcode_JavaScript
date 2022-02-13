/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-02-14 01:15:51
 * @LastEditTime: 2022-02-14 01:40:02
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\5.Stack&Queue\225.用队列实现栈.js
 */
/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

// 使用一个队列实现
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
    this.queue = [];
};

MyStack.prototype.push = function (x) {
    this.queue.push(x);
};

MyStack.prototype.pop = function () {
    let size = this.queue.length;
    while (size-- > 1) {//将除了最后一个元素外的元素全部加入到队尾。
        this.queue.push(this.queue.shift());
    }
    return this.queue.shift();
};

MyStack.prototype.top = function () {
    const x = this.pop();//先出栈，然后在加入队列
    this.queue.push(x);
    return x;
};

MyStack.prototype.empty = function () {
    return !this.queue.length;
};






/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

