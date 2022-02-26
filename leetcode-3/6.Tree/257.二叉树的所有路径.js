/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let res = [];

    const getPath = (node, currPath) => {
        if (root == null) { // 遍历到null
            return;           // 结束当前递归分支
        }

        if (node.left === null && node.right === null) { //此时到叶子节点了。
            currPath += node.val; // 路径末尾了，不用加箭头
            res.push(currPath); // 加入解集
            return;
        }

        currPath += node.val + '->'; // 处理非叶子节点，要加箭头
        if (node.left) {
            getPath(node.left, currPath);
        }

        if (node.right) {
            getPath(node.right, currPath)
        }

    }

    getPath(root, '')
    return res;


};
// @lc code=end

