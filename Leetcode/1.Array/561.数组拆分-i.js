/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-19 17:33:25
 * @LastEditTime: 2021-09-19 17:40:25
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\561.数组拆分-i.js
 */
/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    
    // 排序。2n个元素，分成n组，每组两个元素，
    // 两两一组，然后取左边的就可以了

    nums.sort((a, b) => a - b);
    let res = 0;

    for (let i = 0; i < nums.length; i += 2){
        res += nums[i];
    }
    return res;

};
// @lc code=end

