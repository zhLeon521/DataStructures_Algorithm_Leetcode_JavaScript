/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-05-13 10:57:42
 * @LastEditTime: 2021-09-23 20:03:33
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\26.删除有序数组中的重复项.js
 */
/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */


// var removeDuplicates = function (nums) {
//     const n = nums.length;
//     if (n === 0) {
//         return 0;
//     }
    
//     let fast = 1, slow = 1;
//     for (let i = 1; i < n; ++i){
//         if (nums[fast] !== nums[fast - 1]) {
//             nums[slow] = nums[fast];
//             slow++;
//         }
//         ++fast;
//     }
//     return slow;
// };

var removeDuplicates = function (nums) {
    if (!nums.length) return 0;

    let fast = 0, slow = 0;
    for (let i = 0; i < nums.length; i++){
        if (nums[fast] !== nums[fast - 1]) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;


};



// @lc code=end

