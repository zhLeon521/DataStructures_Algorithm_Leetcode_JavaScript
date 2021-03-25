/*
 * @Description: 队列结构测试
 * @Autor: Blueheart
 * @Date: 2021-03-14 18:21:17
 * @LastEditTime: 2021-03-14 20:48:32
 * @FilePath: \js-data-structures-and-algorithms\DataStructures_js\Queue\index.js
 */
import Queue from './Queue.js'
import passGame from './Leetcode/passGame.js'

console.log("*****----------Queue结构测试 Start----------*****");
const queue = new Queue();


// enqueue() 测试
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.enqueue('d');
console.log(queue.items); //--> ["a", "b", "c", "d"]

// dequeue() 测试
queue.dequeue();
queue.dequeue();
console.log(queue.items); //--> ["c", "d"]

// front() 测试
console.log(queue.front()); //--> c

// isEmpty() 测试
console.log(queue.isEmpty()); //--> false

// size() 测试
console.log(queue.size()); //--> 2

// toString() 测试
console.log(queue.toString()); //--> c d


// passGame() 测试
const names = ['lily', 'lucy', 'tom', 'tony', 'jack'];
const targetIndex = passGame(names, 4);
console.log('击鼓传花', names[targetIndex]); //--> lily

console.log('*****----------Queue结构测试 End----------*****');

