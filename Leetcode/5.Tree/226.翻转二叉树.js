/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// 递归
// 使用前序遍历
// var invertTree = function (root) {
//     const invertNode = (left, right) => {
//         let temp = left;
//         left = right;
//         right = temp;
//         //需要重新给root赋值一下
//         root.left = left;
//         root.right = right;

//     }
//     // 终止条件
//     if (root === null) return root;
//     // 先交换节点
//     invertNode(root.left, root.right);

//     invertTree(root.left);
//     invertTree(root.right);
//     return root;

// };

//我们先定义节点交换函数
var invertTree = function (root) {
    const invertNode = (root, left, right) => {
        let temp = left;
        left = right;
        right = temp;

        root.left = left;
        root.right = right;
    }

    // 层序遍历
    let queue = [];
    if (root === null) return root;
    queue.push(root);

    while (queue.length) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let node = queue.shift()
            invertNode(node, node.left, node.right);
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
    }
    return root;

}
// @lc code=end

