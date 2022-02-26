/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 *   // 深搜使用的思想是，每层计算都进行targetSum-root.val 如果到叶子节点时 targetSum===root.val说明路径和符合要求了
 */
var hasPathSum = function (root, targetSum) {
    if (root === null) return false;
    if (root.left === null && root.right === null) {
        // 搜到叶子节点，则判断当前节点值是否等于目标值
        return root.val === targetSum;
    }
    // 还没搜到叶子节点，则进行 目标值-当前节点值，并继续往下搜
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);

};
// @lc code=end

