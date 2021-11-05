/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-05 21:54:54
 * @LastEditTime: 2021-11-05 22:00:11
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\4.Queue\346.数据流中的移动平均值.js
 */
/**
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.queue = []
    this.size = size;
    this.sum = 0;

};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    if (this.queue.length >= this.size) {
        this.sum -= this.queue.shift();
    }

    this.queue.push(val);
    this.sum += val;
    return this.sum / this.queue.length;

};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
