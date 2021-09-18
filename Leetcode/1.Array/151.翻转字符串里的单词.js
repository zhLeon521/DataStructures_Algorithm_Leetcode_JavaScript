/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-16 20:39:50
 * @LastEditTime: 2021-09-18 15:52:53
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\151.翻转字符串里的单词.js
 */
/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function (s) {
    // // 方法一：
    // return s.trim().split(/\s+/).reverse().join(' ');


    // 方法二：//字母往前推，单词往前推
    // const ret = [];
    // let word = [];
    // for (let i = 0; i < s.length; ++i) {
    //     if (s.charAt(i) === ' ') {
    //         // 遇到空格，把结果单词word，往ret前面推，
    //         word.length > 0 && ret.unshift(word.join(''));
            
    //         // 塞进ret之后就把当前word清空
    //         word = [];

    //     }
    //   else {
    //     // 把字符 push进word
    //       word.push(s.charAt(i));
    //       console.log(word);
    //   }
    // }
    // // If there is current word exists, add it in front
    // word.length > 0 && ret.unshift(word.join(''));
    
    // return ret.join(' ');

    let word = [];
    const ret = [];

    for (let i = 0; i < s.length; i++){
        if (s.charAt(i) === ' ') {
            word.length > 0 && ret.unshift(word.join(''));
            word = [];
        }
        else {
            word.push(s.charAt(i));
        }
    }

    word.length > 0 && ret.unshift(word.join(''));

    return ret.join(' ');


};

// reverseWords(s)
// @lc code=end

