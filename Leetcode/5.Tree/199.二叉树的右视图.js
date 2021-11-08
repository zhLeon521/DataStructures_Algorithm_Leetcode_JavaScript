/*
 * @Description:  
 * @Autor: Blueheart
 * @Date: 2021-11-08 11:53:23
 * @LastEditTime: 2021-11-08 12:25:13
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\5.Tree\199.二叉树的右视图.js
 */
/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * 
 * //二叉树右视图 只需要把每一层最后一个节点存储到res数组
 * 
 */
var rightSideView = function (root) {
    let res = [], queue = [];
    queue.push(root);

    if (root === null) return res;
    while (queue.length) {
        let length = queue.length;
        while (length--) {
            let node = queue.shift();
            // 当length为0的时候，表明到了层级的最后一个节点
            if (length === 0) {
                res.push(node.val);
            }

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }

    return res;

};
// @lc code=end

