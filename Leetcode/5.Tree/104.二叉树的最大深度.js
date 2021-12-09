/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-09 15:21:17
 * @LastEditTime: 2021-12-09 22:56:37
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\5.Tree\104.二叉树的最大深度.js
 */
/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 * 
 * 层数
 */
var maxDepth = function (root) {
    // let queue = [];
    // queue.push(root);
    // if (root === null) return root;

    // let depth = 0; // 最大深度这里和111题最小深度，重点记忆一下。

    // while (queue.length) {
    //     let length = queue.length;
    //     while (length--) {
    //         let node = queue.shift();
    //         if (node.left) queue.push(node.left);
    //         if (node.right) queue.push(node.right);
    //     }
    //     depth++;
    // }
    // return depth;

    let queue = [];
    queue.push(root)
    if (root === null) return root;

    let depth = 0;

    while (queue.length) {
        let length = queue.length;
        while (length--) {
            let node = queue.shift();
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        depth++;
    }

    return depth;
};
// @lc code=end

