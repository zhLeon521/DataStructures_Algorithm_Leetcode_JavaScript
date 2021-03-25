/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-03-13 19:20:26
 * @LastEditTime: 2021-03-13 20:45:33
 * @FilePath: \Algorithm_Leetcode\DataStructures_js\Stack\Stack.js
 */
/**
 * 堆栈允许弹出数据并将其推入堆栈
 * 先进后出 (LIFO)
 *
 * ---
 * |a|
 * |b|
 * |c|
 * ---
 *
 * stack.pop()
 *
 * ---
 * |b|
 * |c|
 * ---   -> a
 *
 * stack.push(d)
 *
 * ---
 * |d|
 * |b|
 * |c|
 * ---   -> b
 *
 * @zhLeon521
 * @Stack的封装
 */
// 栈结构的封装
export default class Stack {

    constructor() {
      this.items = [];
    }
  
    // push(item) 压栈操作，往栈里面添加元素
    push(item) {
      this.items.push(item);
    }
  
    // pop() 出栈操作，从栈中取出元素，并返回取出的那个元素
    pop() {
      return this.items.pop();
    }
  
    // peek() 查看栈顶元素
    peek() {
      return this.items[this.items.length - 1];//也就是数组的最后一个元素
    }
  
    // isEmpty() 判断栈是否为空
    isEmpty() {
      return this.items.length === 0;
    }
  
    // size() 获取栈中元素个数
    size() {
      return this.items.length;
    }
  
    // toString() 返回以字符串形式的栈内元素数据
    toString() {
      let result = '';
      for (let item of this.items) {
        result += item + ' ';
      }
      return result;
    }
  }
  