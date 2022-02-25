/*
 * @Description:
 * @Autor: Blueheart
 * @Date: 2022-02-25 11:16:55
 * @LastEditTime: 2022-02-25 12:06:50
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\6.Tree\226.翻转二叉树.js
 */
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
// var invertTree = function (root) {
// let queue = [];
// queue.push(root);

// if (root === null) return null;

// while (queue.length) {
//     let length = queue.length;

//     while (length--) {
//         let node = queue.shift();
//         [node.left, node.right] = [node.right, node.left]
//         if (node.left) queue.push(node.left);
//         if (node.right) queue.push(node.right)
//     }
// }
// return root;


// };


// ******递归*********
var invertTree = function (root) {
    // base case
    if (root == null) {
        return null;
    }
    // root 节点需要交换它的左右子节点
    [root.left, root.right] = [root.right, root.left];

    // 让左右子节点继续翻转它们的子节点
    invertTree(root.left);
    invertTree(root.right);
    return root;
};
// @lc code=end

