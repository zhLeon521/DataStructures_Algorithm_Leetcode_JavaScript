/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-15 00:39:43
 * @LastEditTime: 2021-11-15 11:03:36
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\5.Tree\572.另一棵树的子树.js
 */
/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 * 思路：问题转化为，s上是否存在一个子节点，所在的子树是和t相等
 */
var isSubtree = function (root, subRoot) {
    if (!root && !subRoot) return true; // * 如果都是空树，返回true
    if (!subRoot) return true; // 子树为空，返回true
    if (!root) return false; // root 为空 返回false
    // 左右节点加入递归中
    return isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);

};
const isSameTree = (p,q) => {
    if (!p && !q) return true; //如果两个节点都为空，则返回true
    if (!p || !q) return false; //走到这里说明两个节点至少有一个不为空，如果确实有一个为空，则另一个肯定不空，返回false
    // val相等后再递归判断left和right
    return p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

}
// @lc code=end

