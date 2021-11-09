/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-09 09:42:44
 * @LastEditTime: 2021-11-09 10:38:12
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\5.Tree\116.填充每个节点的下一个右侧节点指针.js
 */
/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
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
 * 这题是完美二叉树哦哦！！
 */
var connect = function (root) {
    let queue = [];
    queue.push(root);
    if (root === null) return root;

    // 外层的 while 循环迭代的是层数
    while (queue.length) {
        let length = queue.length;
        // 遍历这一层的所有节点
        for (let i = 0; i < length; i++){
            let node = queue.shift();
            if (i < length - 1) {
                // 连接
                node.next = queue[0]; // 在这一层中，节点永远和这层的下一个节点相连接
            }
            // 拓展下一层节点
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    return root;
    
    
};
// @lc code=end

