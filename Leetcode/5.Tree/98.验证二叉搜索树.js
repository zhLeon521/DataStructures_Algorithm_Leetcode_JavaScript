/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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

// 中序遍历转为数组+判断是否有序
var isValidBST = function (root) {
    const inOrder = (node) => {
        if (node === null) return [];
        return [...inOrder(node.left), node.val, ...inOrder(node.right)]

    }

    const sortedArr = inOrder(root);
    for (let i = 0; i < sortedArr.length; i++) {
        // 搜索树中不存在节点值相同的！后面的值比前边的大（或者等于），就不是二叉搜索树
        if (sortedArr[i + 1] <= sortedArr[i]) return false;
    }
    return true;

};

// @lc code=end

