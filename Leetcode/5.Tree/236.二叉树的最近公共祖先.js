/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-16 22:59:48
 * @LastEditTime: 2021-11-16 23:11:37
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\5.Tree\236.二叉树的最近公共祖先.js
 */
/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 * 如果找到一个节点，发现左子树出现结点p，右子树出现节点q，或者 左子树出现结点q，右子树出现节点p，那么该节点就是节点p和q的最近公共祖先
 */
var lowestCommonAncestor = function (root, p, q) {
    // 使用递归的方法
    // 需要从下到上，所以使用后序遍历
    // 1. 确定递归的函数
    const travelTree = (root, p, q) => {
        // 2. 确定递归终止条件
        if (root === null || root === p || root === q) return root;

        // 3. 确定递归单层逻辑
        let left = travelTree(root.left, p, q);
        let right = travelTree(root.right, p, q);
        if (left !== null && right !== null) {
            return root;
        }

        if (left === null) return right;
        
        return left;

    }

    return travelTree(root, p, q);
    
};
// @lc code=end

