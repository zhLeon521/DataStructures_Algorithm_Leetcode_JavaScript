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
 * 
 * 第一步： 弄清3种情况下返回root；
1.root === null;
2.root === p;
3.root === q;
第二步： 分治： 让左右子树分别深度优先搜索获取返回值left和right；根据返回值有4种情况
1. left,right都为null；则证明左右子树都找不到 返回null；
2. left为null，则把希望寄托在right 不管找不找得到都返回 right
3. right为null，则把希望寄托在left 不管找不找得到都返回 left
4. left,right都不为null；则证明左右子树都找到了 返回root；

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


