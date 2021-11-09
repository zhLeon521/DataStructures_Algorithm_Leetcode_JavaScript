/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-09 10:39:03
 * @LastEditTime: 2021-11-09 10:53:02
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\5.Tree\117.填充每个节点的下一个右侧节点指针-ii.js
 */
/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    let queue = [root];
    if (root === null) return root;
    while (queue.length) {
        let length = queue.length;
        let pre = null; //定义前一个节点
        for (let i = 0; i < length; i++){
            let node = queue.shift();

            if (i > 0) {
                pre.next = node;  // 前一个节点指向下一个node
            }
            pre = node;  //将pre 指向 node;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return root;
    
};
// @lc code=end

