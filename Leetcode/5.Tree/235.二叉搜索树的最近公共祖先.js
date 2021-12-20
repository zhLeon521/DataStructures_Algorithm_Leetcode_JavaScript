/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * 分析思路：
 * 根据二叉搜索树的性质：如果p.val 和 q.val 都比 root.val 小，则p、q肯定在 root 的左子树。
 * 如果 p.val 和 q.val 都比 root.val 大，递归右子树就行！
 * 其他情况，root 即为所求！
 */
var lowestCommonAncestor = function (root, p, q) {
    if (root === null) return root; //这句是废话,因为题目中说了一定存在.这句就是仪式感

    // 当前节点值比要查询的左右节点都大，说明公共组现在左边，去查左子树
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    // 当前节点比左右节点都小,说明祖先在右边
    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }

    //排除上面两种情况,当前节点就是他们的祖先
    return root;

};
// @lc code=end

