/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
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
var sumNumbers = function (root) {

    const traversal = (root, path) => {
        if (root === null) return 0;
        path = path * 10 + root.val;
        if (root.left === null && root.right === null) {
            return path;
        }

        return traversal(root.left, path) + traversal(root.right, path);
    }

    return traversal(root, 0)

};
// @lc code=end

