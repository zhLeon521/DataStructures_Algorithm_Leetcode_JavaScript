/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-03-13 19:34:06
 * @LastEditTime: 2021-03-13 20:54:25
 * @FilePath: \Algorithm_Leetcode\DataStructures_js\Stack\index.js
 */

// 测试入口文件

import Stack from './Stack.js';
import dec2bin from './leetcode/dec2bin.js'

console.log('*****----------Stack结构测试 Start----------*****');
const stack = new Stack();

// push() 测试
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.items); //--> [1, 2, 3]

// pop() 测试
console.log(stack.pop()); //--> 3

// peek() 测试
console.log(stack.peek()); //--> 2

// isEmpty() 测试
console.log(stack.isEmpty()); //--> false

// size() 测试
console.log(stack.size()); //--> 2

// toString() 测试
console.log(stack.toString()); //--> 1 2

// dec2bin() 测试
console.log(dec2bin(100)); //--> 1100100
console.log(dec2bin(88)); //--> 1011000

console.log('*****----------Stack结构测试 End ----------*****');


