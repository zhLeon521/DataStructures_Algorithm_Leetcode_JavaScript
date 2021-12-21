/*
 * @lc app=leetcode.cn id=669 lang=javascript
 *
 * [669] 修剪二叉搜索树
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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
var trimBST = function (root, low, high) {
    //
    if (root === null) return null;
    //如果该节点值小于最小值，则该节点更换为该节点的右节点值，继续遍历
    if (root.val < low) {
        let right = trimBST(root.right, low, high)
        return right;
    }
    //如果该节点的值大于最大值，则该节点更换为该节点的左节点值，继续遍历
    if (root.val > high) {
        let left = trimBST(root.left, low, high)
        return left;
    }
    // root在[low,high]范围内
    root.left = trimBST(root.left, low, high) //将下一层递归处理的左子树结果赋值给root.left
    root.right = trimBST(root.right, low, high) //将下一层递归处理的右子树结果赋值给root.right
    return root;
};
// @lc code=end

