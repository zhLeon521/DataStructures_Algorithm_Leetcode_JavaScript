/*
 * @lc app=leetcode.cn id=450 lang=javascript
 *
 * [450] 删除二叉搜索树中的节点
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
 * @param {number} key
 * @return {TreeNode}
 * 
 * https://pic.leetcode-cn.com/1611932922-MelojG-450.jpg
 * 1. 如果目标节点大于当前节点值，则去右子树中删除；
   2. 如果目标节点小于当前节点值，则去左子树中删除；
   3. 如果目标节点就是当前节点，分为以下三种情况：
        a.其无左子：其右子顶替其位置，删除了该节点；
        b.其无右子：其左子顶替其位置，删除了该节点；
        c.其左右子节点都有：其左子树转移到其右子树的最左节点的左子树上，然后右子树顶替其位置，由此删除了该节点。
。
 */
var deleteNode = function (root, key) {
    if (root === null) return root;
    // 如果目标节点大于当前节点值，则去右子树中删除；
    if (key > root.val) {
        root.right = deleteNode(root.right, key);
    }
    // 如果目标节点小于当前节点值，则去左子树中删除；
    else if (key < root.val) {
        root.left = deleteNode(root.left, key)
    }
    // 如果目标节点就是当前节点，分为以下三种情况：
    else {
        // 其无左子：其右子顶替其位置，删除了该节点；
        if (!root.left) return root.right;
        // 其无右子：其左子顶替其位置，删除了该节点；
        if (!root.right) return root.left;
        // 其左右子节点都有：
        // 其 [左子树]转移到  其[右子树的最左节点的左子树]上，然后[右子树]顶替其位置，由此删除了该节点。

        //查找右子树最左面的节点
        let node = root.right;
        while (node.left) {
            node = node.left;
        }
        node.left = root.left; // 把要删除的节点{（root）：图片中的4}的左子树放到node的左孩子的位置{图中5的左孩子}
        root = root.right; //返回 旧root的右孩子作为新的root。即把原来4的右孩子6成为root

    }
    return root;

};
// @lc code=end

