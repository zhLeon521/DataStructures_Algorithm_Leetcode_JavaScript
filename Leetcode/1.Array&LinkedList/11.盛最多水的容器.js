/*
 * @Description: 盛水最多的容器
 * @Autor: Blueheart
 * @Date: 2021-05-19 00:17:52
 * @LastEditTime: 2021-05-19 00:35:14
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