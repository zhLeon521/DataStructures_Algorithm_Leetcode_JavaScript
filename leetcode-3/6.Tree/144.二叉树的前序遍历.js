/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-02-20 00:58:37
 * @LastEditTime: 2022-02-20 01:00:44
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\6.Tree\144.二叉树的前序遍历.js
 */
/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {

    const res = [];
    if (root === null) {
        return res;
    }

    const order = (root) => {
        res.push(root.val);
        if (root.left) {
            order(root.left);
        }
        if (root.right) {
            order(root.right);
        }
    }
    order(root);
    return res;
};
// @lc code=end

