/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-16 12:39:22
 * @LastEditTime: 2021-12-12 18:21:05
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\5.Tree\105.从前序与中序遍历序列构造二叉树.js
 */
/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// var buildTree = function (preorder, inorder) {

//     if (!preorder.length) return null;

//     let root = new TreeNode(preorder[0]);

//     let mid = inorder.findIndex(number => number === root.val);
//     // 前序遍历：根左右，中序：左根右

//     // 遍历左右树
//     // 前：（从根节点下一个节点开始）1：mid+1 （左闭右开）
//     // 中：从0到中间即可
//     root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
//     // 前：（左树结束即为右树起点）mid+1：length 
//     // 中：（根节点下一个开始）mid+1：length

//     root.right = buildTree(preorder.slice(mid + 1, preorder.length), inorder.slice(mid + 1, inorder.length))

//     return root;

// };


var buildTree = function (preorder, inorder) {
    if (!preorder.length) return null;

    let root = new TreeNode(preorder[0]);

    let mid = inorder.findIndex(number => number === root.val);

    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
    root.right = buildTree(preorder.slice(mid + 1, preorder.length), inorder.slice(mid + 1, inorder.length))
    return root;
}
// @lc code=end

