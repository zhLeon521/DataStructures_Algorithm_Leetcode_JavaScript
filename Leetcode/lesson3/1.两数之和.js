/*
 * @Description: 两数之和
 * @Autor: Blueheart
 * @Date: 2021-05-17 12:01:39
 * @LastEditTime: 2021-05-17 22:54:18
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\lesson3\1.两数之和.js
 */
/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 思路：
 * 1.算出两数之差
 * 2.如果hash表中有该值，则返回该结果
 * 3.如果没有该结果：将当前数字作为key,索引为value存入。
 * 题目要求最后返回两个数据的下标，顺序任意
 */

const nums = [2, 7, 11, 15];
const target = 9;
var twoSum =  (nums, target)  => {
    const map = new Map();
    for (let i = 0; i < nums.length; ++i){
        const diff = target - nums[i];
        if (map.has(diff)) {
            return [i, map.get(diff)];
            // console.log( [i, map.get(diff)]);
        } else {
            // key 是nums里的元素，value 是元素在nums里的下标。
            map.set(nums[i], i);
        }
    }

};
// @lc code=end

twoSum(nums, target);