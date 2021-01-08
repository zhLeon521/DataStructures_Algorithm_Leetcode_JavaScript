/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-01-08 15:58:39
 * @LastEditTime: 2021-01-08 16:36:52
 * @FilePath: \Algorithm_Leetcode\20. 有效的括号.js
 */

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。


// 解题步骤：
// 1. 创建一个HashMap,把括号配对放进去
// 2. 创建一个Stack(Array),for循环遍历字符串，对于每一个字符，
// 如果map中有这个key,那说明他是左括号，从map中取出相对应的右括号。
// 把他push到stack里。否则的话他就是右括号，
// 需要pop出stack里面的第一个字符然后看他是否等于当前的字符。如果不相符，则返回false。

// 3.  循环结束后，还要检验一遍stack是否为空，如果stack 不为空，就说明还剩一些左括号没有被闭合，返回false.否则返回true。


/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //s是传入的字符串，map是我们新建的hashmap;
    
    // 1. 创建一个HashMap,把括号配对放进去
    const map = new Map();
    map.set("(",")");
    map.set("[","]");
    map.set("{","}");

    // 2. 创建一个Stack(Array)
    const stack = [];
    for(let i = 0; i<s.length; i++){
        //检查hashmap 中有没有key (也就是左括号)
        if(map.has(s[i])){
            //如果有的话，将他的右括号放进去 || map.get()方法：返回一个 Map 对象中与指定键相关联的值！
            stack.push(map.get(s[i]));
        } else{// 如果不是左括号，那么就是右括号(检查map中有没有这个key)。既要将其pop出与当前字符串比较。相等的话就没问题
            
            // 如果返回的不与当前字符串相等，则返回false
            if(stack.pop() !== s[i]){
                return false;
            }
        }   
    }
    
    // 最后检查一下stack是否为空，不为空返回false！
    if ( stack.length !== 0){
        return false;
    }

    // 如果这些都通过了，那么就返回true；
    return true;

};
