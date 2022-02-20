/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-02-21 00:38:35
 * @LastEditTime: 2022-02-21 00:43:35
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\6.Tree\107.二叉树的层序遍历-ii.js
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
    if (root === null) return res;

    queue.push(root);
    while (queue.length) {
        let currLevel = [];
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            currLevel.push(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        // 不断往前追加：unshift() 方法将新项添加到数组的开头，并返回新的长度。
        res.unshift(currLevel)
    }
    return res;

};
// @lc code=end

