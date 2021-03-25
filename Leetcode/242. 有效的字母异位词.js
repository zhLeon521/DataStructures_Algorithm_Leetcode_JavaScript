/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-02-04 14:58:17
 * @LastEditTime: 2021-02-04 15:23:41
 * @FilePath: \Algorithm_Leetcode\242. 有效的字母异位词.js
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

//   var isAnagram = function(s, t) {
//     return s.split('').sort().join('') === t.split('').sort().join('')
// split:把字符串分割成字符串数组
// sort: 在原数组上进行排序
// join: 把数组中的所有元素放入一个字符串
// };
// join 换成 toString 或 String()
// var isAnagram = function(s, t) {
//     return s.split('').sort().toString() === t.split('').sort().toString()
// };

// Array.from()方法就是将一个类数组对象或者可遍历对象转换成一个真正的数组。
// var isAnagram = function(s, t) {
//     return Array.from(s).sort().join('') === Array.from(t).sort().join('')
// };



var isAnagram = function(s, t) {
    return s.length === t.length && Array.from(Array.from(s).reduce((h, v, i) => (h.set(v, (h.get(v) || 0) + 1), h.set(t[i], (h.get(t[i]) || 0) - 1), h), new Map).values()).every(v => !v)
};




