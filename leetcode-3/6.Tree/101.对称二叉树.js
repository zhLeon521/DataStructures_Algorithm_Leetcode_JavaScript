/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
var isSymmetric = function (root) {
    if (root === null) return true;
    const compareNode = (left, right) => {
        if (left === null && right === null) {
            return true;
        }
        if (left === null && right !== null) {
            return false;
        }
        if (left !== null && right === null) {
            return false;
        }
        if (left.val !== right.val) {
            return false;
        }


        return compareNode(left.left, right.right) && compareNode(left.right, right.left)
    }

    // 程序入口
    return compareNode(root.left, root.right)

};
// @lc code=end

