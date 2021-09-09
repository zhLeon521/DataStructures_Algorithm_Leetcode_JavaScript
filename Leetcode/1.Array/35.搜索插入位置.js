/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-08 15:17:49
 * @LastEditTime: 2021-09-09 10:06:41
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\35.搜索插入位置.js
 */
/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *  // 对于左闭右闭区间来说，循环结束时，left>right。
    // 由于，数组是升序排好的，所以当目标值在数组中不存在时，
    // left所指向的位置即为目标值应该插入的位置。
 */
var searchInsert = function (nums, target) {
    // 如果插入的数比所有的都大，直接插到数组后面就可以；
    if (target > nums[nums.length - 1]) {
        return nums.length;
    }
    // 如果插入的数据比所有的都小，就插在第一个就可以了。
    if (target <= nums[0]) {
        return 0;
    }

    let left = 0;
    let right = nums.length - 1;
    // 当left>right时，循环结束。所以，left<=right情况下，进入循环
    while (left <= right) {
        // 位运算，向右移动一位，相当于取对半；与下面那段(right - left) / 2一样
        // Math.floor()为向下取整
        let mid = left + Math.floor((right - left) >> 1);
        // let mid = left + (right - left) / 2;
        // 如果插入的数正好等于数组中间的数，直接返回mid;

        // 等于号“===”不要写成赋值符号“=”
        if (target === nums[mid]) {
            return mid;
        }
        // 如果插入的值比中间的数小，那就再左区间。
        // 由于是左闭右闭区间，所以mid - 1为下一个区间的right;
        if (target < nums[mid]) {
            right = mid - 1;
        }
        // 同理，如果插入的值比中间的值大，那就像右移；下一个区间的mid+1为left;
        if (target > nums[mid]) {
            left = mid + 1;
        }
        
    }
    return left;
    



};
// @lc code=end

