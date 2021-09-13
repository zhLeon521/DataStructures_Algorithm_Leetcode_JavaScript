/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-11 14:59:36
 * @LastEditTime: 2021-09-13 10:50:06
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\14.最长公共前缀.js
 */
/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 * 
 * 判断是否为空，空直接返回
 * 对数组进行按字母顺序排序
 * 只比较第一个和最后一个，相等就继续走，不相等就返回
 * 
 */
// var longestCommonPrefix = function (strs) {

//     let ans = '';
//     // 按字母顺序排列数组
//     if (!strs || !strs.length) return '';

//     strs.sort();

//     // 按照第一个元素长度进行遍历；
//     for (let i = 0; i < strs[0].length; ++i){
//         if (strs[0][i] !== strs[strs.length - 1][i]) { //只比较第一项和最后一项
//             break;
//         } else {
//             ans += strs[0][i];
//         }
//     }

//     return ans;

// };

var longestCommonPrefix = function (strs) {
    
    strs.sort();
    for (let i = 0; i < strs[0].length; ++i){
        // substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集
        if(strs[0][i] !== strs[strs.length - 1][i]) return strs[0].substring(0,i)
    }
    return strs[0];

};
// @lc code=end

