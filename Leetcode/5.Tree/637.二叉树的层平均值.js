/*
 * @Description: let
 * @Autor: Blueheart
 * @Date: 2021-11-08 12:29:59
 * @LastEditTime: 2021-11-08 12:47:42
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\5.Tree\637.二叉树的层平均值.js
 */
/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * @return {number[]}
 */
var averageOfLevels = function (root) {
    let res = [], queue = [];
    queue.push(root);

    if (root === null) return res;

    while (queue.length) {
        let length = queue.length;
        let sum = 0;
        for (let i = 0; i < length;i++) {
            let node = queue.shift();
            sum += node.val;
            if (node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        //每一层的平均值存入数组res
        res.push(sum/length)
        
    }

    return res;
    

};
// @lc code=end

