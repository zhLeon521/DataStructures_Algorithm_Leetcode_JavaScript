/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-19 17:45:57
 * @LastEditTime: 2021-09-19 17:56:33
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\167.两数之和-ii-输入有序数组.js
 */
/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// //暴力法
// var twoSum = function (nums, target) {
//     for (let i = 0; i < nums.length; i++){
//         for (let j = i + 1; j < nums.length; j++){
//             if (nums[i] + nums[j] === target) {
//                 return [i + 1, j + 1];
//             }
//         }
//     }

// };


// 双指针法
/**
 * 
 * @param {*} nums 
 * @param {*} target 
 * 
1. 定义left、right
2. 遍历过程若nums[left] + nums[right] > target，太大了，要小一点，则right左移一位
3. 遍历过程若nums[left] + nums[right] < target，太小了，要大一点，则left右移一位
4. 其余的情况就是nums[left] + nums[right] == target，return [left + 1, right + 1]即可
5. 注意题目的index从1开始，所以return时+1即可

 */
var twoSum = function (nums, target) {
    // 定义左右双指针
    let left = 0, right = nums.length - 1;
    while (left < right) {
        if (nums[left] + nums[right] < target) {
            // 太小了，要大一点，则left右移一位
            left++;
        }
        else if (nums[left] + nums[right] > target) {
            // 太大了，要小一点，则right左移一位
            right--;
        }
        else {
            return [left + 1, right + 1];
        }
    }
    
}
// @lc code=end

