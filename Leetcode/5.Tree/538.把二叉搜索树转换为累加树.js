/*
 * @lc app=leetcode.cn id=538 lang=javascript
 *
 * [538] 把二叉搜索树转换为累加树
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
 * @return {TreeNode}
 */
var convertBST = function (root) {
    let prev = 0; // 记录前一个节点的数值
    // 反中序遍历：右中左
    const reverseInOrder = (curr) => {
        if (curr) {
            reverseInOrder(curr.right)
            curr.val += prev;
            prev = curr.val;
            reverseInOrder(curr.left);
        }
    }
    reverseInOrder(root)
    return root;


};
// @lc code=end

