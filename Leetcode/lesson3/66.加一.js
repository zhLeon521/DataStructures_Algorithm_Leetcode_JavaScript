/*
 * @Description: 加一
 * @Autor: Blueheart
 * @Date: 2021-05-18 00:06:32
 * @LastEditTime: 2021-05-18 00:33:03
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
 * 
 */
let digits = [9, 9, 9, 9];
var plusOne = function (digits) {
    const len = digits.length;
    // 特别要注意，数组从零开始，一定要从零开始遍历
    for (let i = len -1; i >=0; i--){
        digits[i]++;
        digits[i] %= 10;
        if (digits[i] !== 0) {
            return digits;
        }
    }
    
    digits = [...Array(len + 1)].map(_ => 0);
    digits[0] = 1;
    console.log(digits);
    return digits;
    
    
    

};
// @lc code=end

plusOne(digits);