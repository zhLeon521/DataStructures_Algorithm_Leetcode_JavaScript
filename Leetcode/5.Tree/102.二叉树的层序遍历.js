/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-08 10:04:27
 * @LastEditTime: 2021-11-08 10:13:55
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\5.Tree\102.二叉树的层序遍历.js
 */
/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function (root) {
    let res = [];
    if (root === null) return res;

    const queue = [];
    queue.push(root);

    while (queue.length) {
        const length = queue.length; //记录当前层数的节点数
        const currLevel = []; //存放每一层的节点

        for (let i = 0; i < length; i++){
            let node = queue.shift();  //第一个节点打入队列
            currLevel.push(node.val);

            if (node.left) {
                queue.push(node.left)
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        res.push(currLevel);
        
    }

    return res;



};
// @lc code=end

