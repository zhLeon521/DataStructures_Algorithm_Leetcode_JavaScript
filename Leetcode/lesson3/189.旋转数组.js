/*
 * @Description: 旋转数组
 * @Autor: Blueheart
 * @Date: 2021-05-13 12:15:09
 * @LastEditTime: 2021-05-13 15:34:52
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\lesson3\189.旋转数组.js
 */
/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//     // 使用额外数组
//     const n = nums.length;
//     const newArr = new Array(n);
//     for (let i = 0; i < n; i++){ //循环n次
//         newArr[(i + k) % n] = nums[i];        
//     }
//     //把新建的数组里的值复制到原数组nums中去
//     for (let i = 0; i < n; i++){ 
//         nums[i] = newArr[i];
//     }
// };


///// 方法2
    // 其实每个元素只移动 k % n个位置，举例子：数组长度为5，移动次数k = 6,
    //     那么每个元素只移动 k % n = 6 % 5 = 1次（取余）
    // 所以，原始数组第k mod n个（6 % 5=1，即倒数第一个元素移动6次回到头部）元素就会被移动到数组头部。
    // 然后我们再翻转 [0, (k mod (n-1))]区间的元素和[(k mod n) , (n−1)] 区间的元素即能得到最后的答案。

    
    //构造翻转函数
const reverse = (nums, start, end) => {
    while (start < end) {
        const temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start += 1;
        end -= 1;
    }
};

    var rotate = function (nums, k) {
        const n = nums.length;
        k = k % n;  
        reverse(nums, 0, n-1) //全部翻转
        reverse(nums, 0, k-1) // 前一半翻转
        reverse(nums, k, n-1) // 翻转后一半
    
};
// @lc code=end

