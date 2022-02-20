/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-02-20 01:09:38
 * @LastEditTime: 2022-02-21 00:05:13
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\6.Tree\102.二叉树的层序遍历.js
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
    let queue = [];

    if (root === null) return res;

    queue.push(root);
    while (queue.length) {
        const length = queue.length;
        let currLevel = [];  //保存这一层的节点

        // 注意啊，这里不能写 i< queue.length, 因为不断往里面push下层节点，一直在变
        for (let i = 0; i < length; i++) { // 一层层遍历
            let node = queue.shift(); //取第一个元素
            currLevel.push(node.val); // 将这个节点放到这层里面，

            // 讲下一层的节点放进去
            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right)
            }

        }
        res.push(currLevel)
    }
    return res;

};
// @lc code=end

