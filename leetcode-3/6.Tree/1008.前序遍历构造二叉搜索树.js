/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-02-21 16:08:14
 * @LastEditTime: 2022-02-21 16:34:50
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\6.Tree\1008.前序遍历构造二叉搜索树.js
 */
/*
 * @lc app=leetcode.cn id=1008 lang=javascript
 *
 * [1008] 前序遍历构造二叉搜索树
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
 * @param {number[]} preorder
 * @return {TreeNode}
 */

// 直接递归
var bstFromPreorder = function (preorder) {

    if (preorder.length === 0) return null;
    let node = new TreeNode(preorder[0]);

    node.left = bstFromPreorder(preorder.filter(elem => elem < preorder[0]));

    node.right = bstFromPreorder(preorder.filter(elem => elem > preorder[0]));

    return node;

};
// @lc code=end

