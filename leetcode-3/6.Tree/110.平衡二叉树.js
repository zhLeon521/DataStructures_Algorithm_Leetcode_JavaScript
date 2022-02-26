/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */

//  先判定每个子树是不是平衡树 ，
// 如果平衡，则使用它们的高度判断父节点是否平衡，并计算父节点的高度，如果不平衡，返回false 。
var isBalanced = function (root) {
    // 记录二叉树是否平衡
    let flag = true;


    const maxDepth = (node) => {
        if (node === null) {
            return true;
        }

        let left = maxDepth(node.left)
        let right = maxDepth(node.right)

        if (Math.abs(right - left) > 1) {
            flag = false;
        }
        // 以当前节点为根节点的最大高度
        return Math.max(left, right) + 1;

    }

    maxDepth(root)
    return flag;


};
// @lc code=end

