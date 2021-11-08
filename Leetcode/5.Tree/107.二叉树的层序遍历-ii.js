/*
 * @Description: []
 * @Autor: Blueheart
 * @Date: 2021-11-08 10:49:34
 * @LastEditTime: 2021-11-08 11:40:14
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\5.Tree\107.二叉树的层序遍历-ii.js
 */
/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    let res = [];
    let queue = [];
    queue.push(root)

    if (root === null) return res;

    while (queue.length) {
        let currLevel = [];
        let length = queue.length;
        while (length--) {
            let node = queue.shift();
            currLevel.push(node.val);
            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        res.push(currLevel)
    }

    return res.reverse();


};
// @lc code=end

