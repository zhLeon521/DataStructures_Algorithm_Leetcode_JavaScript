/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-09 15:31:03
 * @LastEditTime: 2021-12-09 22:55:06
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\5.Tree\111.二叉树的最小深度.js
 */
/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
 * 只有当左右孩子都为空的时候，
 * 才说明遍历的最低点了。
 * 如果其中一个孩子为空则不是最低点
 * 
 * 注意啊，是节点数量
 */
var minDepth = function (root) {
    // let queue = [];
    // queue.push(root);
    // if (root === null) return 0;
    // let depth = 1; //主要不为空，就有一层。

    // while (queue.length) {
    //     let length = queue.length;
    //     while (length--) {
    //         let node = queue.shift();

    //         if (node.left === null && node.right === null) {
    //             return depth;
    //         }
    //         if (node.left) queue.push(node.left);
    //         if (node.right) queue.push(node.right);
    //     }
    //     depth++;
    // }
    // return depth;

    let queue = [];
    queue.push(root);
    if (root === null) return 0;

    let depth = 1;

    while (queue.length) {
        let length = queue.length;
        while (length--) {
            let node = queue.shift();
            if (node.left === null && node.right === null) {
                return depth;
            }
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        depth++;
    }

    return depth;

};
// @lc code=end

