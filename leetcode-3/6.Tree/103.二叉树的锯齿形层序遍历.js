/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
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
var zigzagLevelOrder = function (root) {
    let res = [];
    let queue = [];
    if (root === null) return res;

    queue.push(root)

    let levelCount = 0;    // 记录层数
    while (queue.length) {
        let length = queue.length;
        let currLevel = [];

        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            currLevel.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right)
            }
        }
        levelCount++;

        // 单数层直接 push 进 res.
        if (levelCount % 2 !== 0) {
            res.push(currLevel)
        }

        //偶数层 反转进入
        if (levelCount % 2 === 0) {
            res.push(currLevel.reverse())
        }
    }
    return res;


};
// @lc code=end

