/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 * 遍历二叉搜索树，找到空节点 插入元素就可以了
 */
var insertIntoBST = function (root, val) {
    const traversal = (root, val) => {
        // 遇到null ,这个位置就是要插入的地方，并把插入的节点返回
        if (root === null) {
            let node = new TreeNode(val);
            return node;
        }
        // 当前节点比插入节点大，向左边半棵树走
        if (root.val > val) {
            root.left = traversal(root.left, val)
        }
        if (root.val < val) {
            root.right = traversal(root.right, val)
        }
        // 排除上面两个情况,这个位置刚刚好
        return root;
    }

    return traversal(root, val);

};
// @lc code=end

