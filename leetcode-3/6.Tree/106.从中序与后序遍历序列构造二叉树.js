/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-02-21 11:51:04
 * @LastEditTime: 2022-02-21 12:11:38
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\6.Tree\106.从中序与后序遍历序列构造二叉树.js
 */
/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

// Array.slice 左闭右开
var buildTree = function (inorder, postorder) {
    if (postorder.length === 0) return null;

    let root = new TreeNode(postorder[postorder.length - 1]);

    let mid = inorder.findIndex(number => number === root.val);

    // 左子树裁剪区间是一样的
    // 中序遍历：【左】中右
    // 后序遍历：【左】右中
    root.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid));


    root.right = buildTree(inorder.slice(mid + 1, inorder.length), postorder.slice(mid, postorder.length - 1))

    return root;
};
// @lc code=end

