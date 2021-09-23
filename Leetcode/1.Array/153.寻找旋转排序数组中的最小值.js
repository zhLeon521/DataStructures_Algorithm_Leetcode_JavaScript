/*
 * @Descriptioreturn
 * @Autor: Blueheart
 * @Date: 2021-09-23 17:19:34
 * @LastEditTime: 2021-09-23 19:56:58
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\153.寻找旋转排序数组中的最小值.js
 */
/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// // 方法一： 直接排序，输出第一个就可以
// var findMin = function (nums) {
//     nums.sort((a,b)=>a-b)
//     return nums[0]

// };


// 方法二：二分查找
var findMin = function (nums) {
    let low = 0, high = nums.length - 1;
    while (low < high) {  //这里注意下
        const mid = low + Math.floor((high - low) / 2);
        if (nums[mid] < nums[high]) {
            high = mid; // 这里是匹配的。左闭右开
        } else {
            low = mid + 1;
        }
    }

    return nums[low];
    
}

// @lc code=end

