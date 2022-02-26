/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 */

// 树的直径，就是左右子树的最大深度之和.
// 直接的想法是对每个节点计算左右子树的最大高度，得出每个节点的直径，从而得出最大的那个直径。

// 深度，节点的深度取决于它的祖先节点的数量。
// 高度，树中所有节点深度的最大值。

var diameterOfBinaryTree = function (root) {
    let res = 0;
    const dfs = (root) => {
        if (root === null) return 0;
        // 左子树为根的子树的的深度
        let leftMax = dfs(root.left);
        let rightMax = dfs(root.right);
        //计算l+r 更新res
        res = Math.max(res, leftMax + rightMax);
        // 返回该节点为根的子树的的深度
        return Math.max(leftMax, rightMax) + 1;
    }
    dfs(root);
    return res;

};
// @lc code=end

