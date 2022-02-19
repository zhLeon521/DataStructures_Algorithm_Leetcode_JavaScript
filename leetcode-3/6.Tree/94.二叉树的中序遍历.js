/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-02-20 00:22:28
 * @LastEditTime: 2022-02-20 00:29:16
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\6.Tree\94.二叉树的中序遍历.js
 */
/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

var inorderTraversal = function (root) {
    const res = [];
    if (root === null) {
        return res;
    }
    const order = (root) => {
        if (root.left) {
            order(root.left);
        }
        res.push(root.val);

        if (root.right) {
            order(root.right)
        }
    }

    order(root);
    return res;

};
// @lc code=end

