/*
 * @Description:
 * @Autor: Blueheart
 * @Date: 2021-11-16 11:08:28
 * @LastEditTime: 2021-12-16 14:55:37
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\5.Tree\106.从中序与后序遍历序列构造二叉树.js
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
 * 从中序与后序遍历序列构造二叉树
 *
 * 后序遍历：左右根，所以后序数组最后一个元素即为根元素。用它来切割中序数组
 *
 */
// var buildTree = function (inorder, postorder) {
//     // 开始就是先从后序遍历开始，为空，就返回null
//     if (!postorder.length) return null;
//     // 树的根节点一定是，后序遍历的最后一个元素，提出来
//     let root = new TreeNode(postorder[postorder.length - 1]);

//     // 找出的根节点  去分割中序数组
//     let index = inorder.findIndex(number => number === root.val)

//     // slice 左闭右开
//     // 根据slice 划分左右子树

//     // 顺序别搞反了，一定是先切中序数组！！！
//     root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index));
//     //
//     root.right = buildTree(inorder.slice(index + 1, inorder.length), postorder.slice(index, postorder.length - 1)); //把用过的根节点舍去

//     return root;

// };

/**
 *
 *第一步：如果数组大小为零的话，说明是空节点了。

    第二步：如果不为空，那么取后序数组最后一个元素作为节点元素。

    第三步：找到后序数组最后一个元素在中序数组的位置，作为切割点

    第四步：切割中序数组，切成中序左数组和中序右数组 （顺序别搞反了，一定是先切中序数组）

    第五步：切割后序数组，切成后序左数组和后序右数组

    第六步：递归处理左区间和右区间

 */

// // 要画图
// var buildTree = function (inorder, postorder) {
//     if (!postorder.length) return null;
//     let root = new TreeNode(postorder[postorder.length - 1]);

//     let index = inorder.findIndex(number => number === root.val);

//     root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index));

//     root.right = buildTree(inorder.slice(index + 1, inorder.length), postorder.slice(index, postorder.length - 1));

//     return root;

// }

var buildTree = function (inorder, postorder) {
    if (postorder.length === 0) return null;
    let root = new TreeNode(postorder[postorder.length - 1]);
    let index = inorder.findIndex(number => number === root.val);

    root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index));
    root.right = buildTree(inorder.slice(index + 1), postorder.slice(index, postorder.length - 1))
    return root;

}

// @lc code=end

