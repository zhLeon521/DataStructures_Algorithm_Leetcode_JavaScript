/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-01-26 23:35:38
 * @LastEditTime: 2021-01-27 00:32:16
 * @FilePath: \Algorithm_Leetcode\49. 字母异位词分组.js
 */

 /**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length === 0){
        return [];
    }
    const map = new Map();

    for(const str of strs){
        //创建一个数组用0填充
        const characters = Array(26).fill(0);
        for(let i=0; i<str.length;i++){
            const ascii = str.charCodeAt(i) - 97;
            characters[ascii]++;
        }
        // 将数组拼接成字符串
        // const key = characters.join("|");
        const key = characters.toString();
        if(map.has(key)){
            // map.get(key).push(str);
            // 或者 ES6 结构   两者等价
            map.set(key, [...map.get(key), str]);
        }else{
            map.set(key,[str]);
        }   
    }
    const result = [];
    for(const arr of map){
        result.push(arr[1]); //map中0对应的是key, 1是value;
    }
    return result;

};