/*
 * @Description: 盛水最多的容器
 * @Autor: Blueheart
 * @Date: 2021-05-19 00:17:52
 * @LastEditTime: 2021-05-19 00:40:31
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array&LinkedList\11.盛最多水的容器.js
 */
/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 * 思路：
 * 两个指针，一个在索引0处，一个在索引最后位置（长度减一位置：height.length-1）
 * 容器的长度为j-i;高度为min(height[i],height[j])===>面积res = (j-i)*矮的那根柱子
 * 然后矮的那根柱子向内部移动，比较所有的面积就可！
 */

// height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// height = [1, 1];
height = [1, 2, 1];
// var maxArea = function (height) {
//     let i = 0, j = height.length - 1, res = 0;
//     while (i < j) {
//         if (height[i] < height[j]) {
//             res = Math.max(res, (j - i) * height[i]);
//             ++i;
//         } else {
//             res = Math.max(res, (j - i) * height[j]);
//             j--;
//         }
//     }
//     console.log(res);
//     return res;
// };


// 方法2：语句缩短
let maxArea = (height) => {
    let i = 0, j = height.length - 1, res = 0;
    while (i < j) {
        res = height[i] < height[j] ?
            Math.max(res, (j - i) * height[i++]) :
            Math.max(res, (j - i) * height[j--]);      
    }
    console.log(res);
    return res;
    
}
// @lc code=end

maxArea(height);