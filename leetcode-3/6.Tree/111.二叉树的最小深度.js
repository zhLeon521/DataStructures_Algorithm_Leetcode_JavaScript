/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * @return {number}
 */

// DFS
var minDepth = function (root) {
    let depth = 0;
    if (root === null) return 0;
    if (root.left === null && root.right === null) return 1;

    let res = Infinity;
    if (root.left) res = Math.min(res, minDepth(root.left));
    if (root.right) res = Math.min(res, minDepth(root.right))

    return res + 1;

};
// @lc code=end

