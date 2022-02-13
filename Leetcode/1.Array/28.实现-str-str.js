/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-18 16:36:18
 * @LastEditTime: 2022-02-13 23:46:44
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
//     // 暴力 注意边界 小于等于
// var strStr = function (haystack, needle) {
//     const n = haystack.length;
//     const m = needle.length;

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

// KMP
/**
 * 前缀是指不包含最后一个字符的所有以第一个字符开头的连续子串；
 * 后缀是指不包含第一个字符的所有以最后一个字符结尾的连续子串。
 */


// j: 前缀末尾；；；还表示最长相同前后缀的长度：0到j-1额度长度为j
// i: 后缀末尾

function getNext(s) {
    let next = [];
    let j = -1;
    next[0] = j;
    // i指向后缀起始位置，j指向前缀起始位置
    // next[i]表示i(包括i)之前最长相等的前后缀的长度（其实就是j）,所以初始化next[0]=j;
    for (let i = 1; i < s.length; i++) { // 注意i从1开始
        while (j >= 0 && s[i] !== s[j + 1]) { // 前后缀不相同
            j = next[j];  // 向前回溯
        }
        if (s[i] === s[j + 1]) { // 找到相同的前后缀
            j++; // 继续往后走
        }
        next[i] = j;  // 将j( 前缀的长度 ) 赋值给 next[i],是i哦
        // https://pic.leetcode-cn.com/1599638403-eQrdyh-KMP%E7%B2%BE%E8%AE%B24.gif
    }
    return next;  // 把next return出去

}

var strStr = function (haystack, needle) {
    if (needle.length === 0) {
        return 0;  // 模式串为空，返回0就好
    }

    let next = getNext(needle);  // 定义next数组
    let j = -1;  // nex数组中记录的起始位置为-1
    for (let i = 0; i < haystack.length; i++) { // 比较的时候 从0开始
        while (j >= 0 && haystack[i] !== needle[j + 1]) { // 不匹配的时候
            j = next[j]; // j寻找之前匹配的位置，向前回溯
        }
        if (haystack[i] === needle[j + 1]) { // 匹配，i与j同时向后移动
            j++;  // i的增加在for循环
        }
        // 本题要在文本串字符串中找出模式串出现的第一个位置 (从0开始)
        // 所以返回当前在文本串匹配模式串的位置i 减去 模式串的长度
        // 就是文本串字符串中出现模式串的第一个位置。

        if (j === (needle.length - 1)) {  // 文本串 haystack 里出现了 模式串 needle;; j从-1开始的，所以长度减去1.
            return (i - (needle.length - 1));
        }
    }
    return -1;




}




// @lc code=end

