/*
 * @Description: 加一
 * @Autor: Blueheart
 * @Date: 2021-05-18 00:06:32
 * @LastEditTime: 2021-05-18 00:56:59
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\lesson3\66.加一.js
 */
/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 * 只有两种情况，末尾是9，判断需不需要进位
 * 思路：加一取余进行判断
 * 1.取余结果不为零，说明不为零，直接返回
 * 2.取余结果若为零，
 *       a.数组长度不变，如：499+1=500 直接返回
 *       b.数组长度改变，如：999+1=1000，改变数组长度，第一位是1，其余是0
 * 
 */
let digits = [9, 9, 9, 9];
var plusOne = function (digits) {
    const len = digits.length;
    // 特别要注意，数组从零开始，一定要从零开始遍历
    for (let i = len -1; i >=0; i--){
        digits[i]++;
        digits[i] %= 10; //如果这位是0，就是0.
        console.log(digits);
        if (digits[i] !== 0) { //如果这位不是0，就返回这个数
            return digits;
        }
    }
    
    // 如果上面都是0（就没有返回值），说明数组需要长度加一
    // digits = [...Array(len + 1)].map(_ => 0);
    // digits[0] = 1;
    // console.log(digits);
    // return digits;

    // // 改进一下写法
    // console.log([1, ...digits]);
    // return [1, ...digits];

    // 再来一种方法;
    digits.unshift(1)
    console.log(digits);
    return digits;
    
    
};
// @lc code=end

plusOne(digits);