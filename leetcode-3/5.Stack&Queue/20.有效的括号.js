/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-02-14 23:49:26
 * @LastEditTime: 2022-02-14 23:54:09
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\5.Stack&Queue\20.有效的括号.js
 */
/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const map = new Map();
    map.set("(", ")");
    map.set("[", "]");
    map.set("{", "}");
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            stack.push(map.get(s[i]));
        } else {
            if (stack.pop() !== s[i]) {
                return false;
            }
        }
    }

    if (stack.length !== 0) {
        return false;
    }
    return true;


};



// /**
//  * @param {string} s
//  * @return {boolean}
//  * 
//  * 解题步骤：
//  * 1.建立一个HashMap,把括号配对放进去
//  * 2.创建一个Stack(Array),for循环遍历字符串。
//  * 如果map中有key ,说明他是左括号，从map 中取出对应的右括号放到Stack中。
//  * 否则的话他就是右括号，这时需要将stack 栈顶元素弹出看是否相等，不相等返回false
//  * 
//  * 3.循环结束后，看一下stack是否为空，不为空就说明还剩一些左括号没有被闭合，返回false.否则返回true。
//  */
//  var isValid = function(s) {
//     //s是传入的字符串，map是我们新建的hashmap;
    
//     // 1. 创建一个HashMap,把括号配对放进去
//     const map = new Map();
//     map.set("(",")");
//     map.set("[","]");
//     map.set("{","}");

//     // 2. 创建一个Stack(Array)
//     const stack = [];
//     for(let i = 0; i<s.length; i++){
//         //检查hashmap 中有没有key (也就是左括号)
//         if(map.has(s[i])){
//             //如果有的话，将他的右括号放进去 || map.get()方法：返回一个 Map 对象中与指定键相关联的值！
//             stack.push(map.get(s[i]));
//         } else{// 如果不是左括号，那么就是右括号(检查map中有没有这个key)。既要将其pop出与当前字符串比较。相等的话就没问题
            
//             // 如果返回的不与当前字符串相等，则返回false
//             if(stack.pop() !== s[i]){
//                 return false;
//             }
//         }   
//     }
    
//     // 最后检查一下stack是否为空，不为空返回false！
//     if ( stack.length !== 0){
//         return false;
//     }
//     // 如果这些都通过了，那么就返回true；
//     return true;
// };
// @lc code=end

