/*
 * @Description: 移动0
 * @Autor: Blueheart
 * @Date: 2021-05-17 23:21:47
 * @LastEditTime: 2021-09-23 20:18:14
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\283.移动零.js
 */
/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 思路：
 * 定义快慢指针，fast负责遍历nums
 * 1.若fast指向非0，slow+1;
 * 2.若fast指向0，slow不变
 *      fast继续移动，直到fast指向非0，交换连个指针。slow+1
 * 
 *简记：不为零就交换，slow++; 为零就不交换，slow不动
 */

// let nums = [0, 1, 0, 3, 0,12];
// var moveZeroes = function (nums) {
//     let fast = 0, slow = 0;
//     while (fast < nums.length) {
//         if (nums[fast] !== 0) {
//             // ES6解构； 交换交换两个数组方式 [a,b] = [b,a]；
//             [nums[slow],nums[fast]] =[nums[fast],nums[slow]];
//             slow++;
//         } fast++;
//     }   
//     console.log(nums);
//     return nums;
    
// };




// var moveZeroes = function (nums) {
//     let fast = 0, slow = 0;
//     for (let i = 0; i < nums.length; i++){
//         if (nums[fast] !== 0) {
//             [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
//             slow++;

//         }
//         fast++;
//     }

// };



// 移动位置，最后不得部分再补0
var moveZeroes = function (nums) {
    let slow =0, fast = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[fast] !== 0) {
            nums[slow] = nums[fast];
            slow++;
        } fast++;
    }

    for (; slow < nums.length; slow++){
        nums[slow] = 0;
    }

};

// @lc code=end
// moveZeroes(nums)
