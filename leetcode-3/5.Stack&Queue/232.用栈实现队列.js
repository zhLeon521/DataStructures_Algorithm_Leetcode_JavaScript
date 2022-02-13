/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-02-14 00:48:58
 * @LastEditTime: 2022-02-14 00:59:31
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\5.Stack&Queue\232.用栈实现队列.js
 */
/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

var MyQueue = function () {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stack1.push(x);

};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    if (this.stack2.length <= 0) {
        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop())
        }
    }
    return this.stack2.pop()


};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    if (this.stack2.length <= 0) {
        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop())
        }
    }
    if (this.stack2.length) {
        return this.stack2[this.stack2.length - 1]
    }

};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return !this.stack1.length && !this.stack2.length;

};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

