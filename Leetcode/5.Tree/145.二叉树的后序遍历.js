/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-06 09:59:33
 * @LastEditTime: 2021-11-06 10:00:47
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\5.Tree\145.二叉树的后序遍历.js
 */
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
var postorderTraversal = function (root) {
    let res = [];
    if (root === null) return res;

    const order = (root) => {
        if (root.left !== null) {
            order(root.left)
        }
        if (root.right !== null) {
            order(root.right)
        }
        res.push(root.val);
    }

    order(root);
    return res;
    

};
// @lc code=end

