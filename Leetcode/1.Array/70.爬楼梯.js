/*
 * @Description: 爬楼梯
 * @Autor: Blueheart
 * @Date: 2021-05-19 09:07:24
 * @LastEditTime: 2021-05-19 10:01:07
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array&LinkedList\70.爬楼梯.js
 */
/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 * 这是一种从底向上的思路：
 * 因为一次只能爬一级或者两级，所有爬到第n层必然是之前爬一级或者两级的和
 * 
 */


var climbStairs = function (n) {
    if (n === 1) { return 1 };
    // 开辟一个长度为n的数组，用-1填充
    let nums = [...Array(n)].map(_ => -1);
    nums[1] = 1;
    nums[2] = 2;
    for (let i = 3; i <= n; i++){
        nums[i] = nums[i - 1] + nums[i - 2];
    }
    console.log(nums[n]);
    return nums[n];

};
// @lc code=end
climbStairs(5);