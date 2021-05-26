/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
 var MinStack = function () {
    this.Stack = [];
    this.minStack = [Infinity]; //new Create a Stack, minStack use Infinity站位，方便比较。
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
    this.Stack.push(val); // 原始栈直接将元素压入
    this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1])); //最小栈将小的压入
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.Stack.pop(); //弹出，并删除
    this.minStack.pop(); // 弹出，并删除
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.Stack[this.Stack.length - 1];  //返回栈顶元素，不删除
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.minStack.length - 1]; //取出最小栈栈顶元素
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

