/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-18 16:36:18
 * @LastEditTime: 2021-09-18 16:54:26
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\28.实现-str-str.js
 */
/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * hayStack 长的子串， needle 短的
 */
// var strStr = function (haystack, needle) {
//     const n = haystack.length;
//     const m = needle.length;

//     // 暴力 注意边界 小于等于
//     for (let i = 0; i + m <= n; i++){
//         let flag = true;

//         for (let j = 0; j < m; j++){
//             if (haystack[i + j] !== needle[j]) {
//                 flag = false;
//                 break;
//             }
//         }

//         if (flag) {
//             return i;
//         }
//     }

//     return -1;

// };


// 调用API
// var strStr = function (haystack, needle) {
//     return haystack.indexOf(needle)
// }


// @lc code=end

