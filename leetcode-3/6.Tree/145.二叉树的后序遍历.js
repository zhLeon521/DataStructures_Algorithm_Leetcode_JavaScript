/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
    let res = [];
    if (root === null) {
        return res;
    }

    const order = (root) => {
        if (root.left) {
            order(root.left);
        }
        if (root.right) {
            order(root.right);
        }
        res.push(root.val);
    }
    order(root)
    return res;

};
// @lc code=end

