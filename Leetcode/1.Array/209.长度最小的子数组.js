/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-23 10:45:05
 * @LastEditTime: 2021-09-23 11:41:15
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\209.长度最小的子数组.js
 */
/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    if (!nums.length) return 0;

    let minLength = Infinity; //初始化最小长度是无限大

    let sum = 0; // 滑动窗口的和
    let i = j = 0; //滑动窗口起始、终止位置


    
    while(j<nums.length){ // 主旋律是扩张，找可行解
        sum += nums[j];
        while (sum >= target) {  // 间歇性收缩，优化可行解
            minLength = Math.min(minLength, j - i + 1);
            sum -= nums[i++]; // // 这里体现出滑动窗口的精髓之处，不断变更i（子序列的起始位置）
        }
        j++;
    }
    
    // 如果result没有被赋值的话，就返回0，说明没有符合条件的子序列
    return minLength === Infinity ? 0 : minLength; // 从未找到可行解，返回0




};
// @lc code=end

