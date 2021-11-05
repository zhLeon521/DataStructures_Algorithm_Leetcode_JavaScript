/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-05 23:52:28
 * @LastEditTime: 2021-11-06 00:23:21
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\5.Tree\144.二叉树的前序遍历.js
 */
/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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

var preorderTraversal = function (root) {
    let res = []
    const order = (root) => {
        if (root === null) return res;
        //先序遍历所以从父节点开始
        res.push(root.val);

        //递归左子树
        if (root.left !== null) {
            order(root.left)
        }
        
        //递归右子树
        if (root.right !== null) {
            order(root.right)
        }
    }
    //只使用一个参数 使用闭包进行存储结果
    order(root);
    return res;
    

};
// @lc code=end

