/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-02-01 00:15:33
 * @LastEditTime: 2022-02-01 00:53:33
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\3.Hash Table\15.三数之和.js
 */
/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 * 思路：
 * 三数之和，预判断：
 * 首先就是数组为空，或者不满三个元素，直接返回空数组[]
 * 1.排序(从小到大) nums.sort((a,b)=>a-b)  || 如果第一个元素大于0(相加不可能大于0了)
 * 2.固定第一个元素（然后去重），然后从i= K+1;j = nums.length-1. 两面夹击开始运算
 * 3.和等于零，对i,j都得进行去重处理。把元素里的值push进去
 * 4. 不等于零，sum小于零就移动i;大于0就移动j;
 * 
 */

var threeSum = function (nums) {
    let res = [];
    if (nums === null || nums.length < 3) {
        return res;
    }

    nums.sort((a, b) => a - b);//正序排序

    for (let k = 0; k < nums.length - 2; k++) {
        if (nums[k] > 0) break; //如果排序后的第一个元素大于0，则和肯定大于零
        if (k > 0 && nums[k] === nums[k - 1]) continue;  //去重
        let i = k + 1, j = nums.length - 1; //i,j都是下标
        while (i < j) {
            const sum = nums[k] + nums[i] + nums[j];
            if (sum === 0) {
                res.push([nums[k], nums[i], nums[j]])
                while (nums[i] === nums[++i]);//去重处理
                while (nums[j] === nums[--j]);
            }
            else if (sum < 0) {
                ++i;
            }
            else if (sum > 0) {
                --j;
            }
        }
    }
    return res;


};
// @lc code=end

