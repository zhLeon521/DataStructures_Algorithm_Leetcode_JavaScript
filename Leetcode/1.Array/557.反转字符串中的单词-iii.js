/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-23 14:46:14
 * @LastEditTime: 2021-09-23 15:08:24
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\557.反转字符串中的单词-iii.js
 */
/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// var reverseWords = function (s) {

//     let word = [];
//     const res = [];

//     for (let i = 0; i < s.length; i++){
//         if (s.charAt(i) !== ' ') {
//             word.unshift(s.charAt(i))  // 没有遇到空格就是一个单词，倒着塞。   
//         } else {
//             word.length > 0 && res.push(word.join('')) // 遇到空格就把单词push进res里面
//             word = []; // 把word置空，方便下一个单词使用
//         }
//     }

//     word.length > 0 && res.push(word.join('')); //把最后一个单词弄进去
//     return res.join(' ');
    
    

// };


// 方法2：
var reverseWords = function(s) {
    return s.split(' ').map(word => word.split('').reverse().join('')).join(' ')
};



// @lc code=end

