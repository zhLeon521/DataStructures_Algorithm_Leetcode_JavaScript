/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-05 21:14:47
 * @LastEditTime: 2021-11-05 21:32:45
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\4.Queue\622.设计循环队列.js
 */
/*
 * @lc app=leetcode.cn id=622 lang=javascript
 *
 * [622] 设计循环队列
 */

// @lc code=start
/**
 * @param {number} k
 * 用数组进行实现
 */
var MyCircularQueue = function (k) {
    this.capacity = k;
    this.queue = [];
    this.headIndex = 0;
    this.count = 0;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
    if (this.isFull()) return false;
    
    this.queue[(this.headIndex + this.count) % this.capacity] = value;
    this.count++;
    return true;

};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
    if (this.isEmpty()) return false;
    // 删掉一个元素，直接把头指针向右移动1位(+1)即可，为了防止头部指针大于容器长度，这里取余
    this.headIndex = (this.headIndex + 1) % this.capacity;
    this.count--;
    return true;

};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
    if (this.isEmpty()) return -1;
    return this.queue[this.headIndex];


};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
    if (this.isEmpty()) return -1;

    // 获取队尾，tailIndex=(headIndex+count−1) % capacity
    const tailIndex = (this.headIndex + this.count - 1) % this.capacity;
    return this.queue[tailIndex];
    

};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
    return (this.count === 0 )

};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
    return (this.count === this.capacity)
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// @lc code=end

