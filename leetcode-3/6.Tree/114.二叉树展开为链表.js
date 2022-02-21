/*
 * @Description:
 * @Autor: Blueheart
 * @Date: 2022-02-21 13:54:22
 * @LastEditTime: 2022-02-21 14:52:57
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\6.Tree\114.二叉树展开为链表.js
 */
/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */

//  思路：先把左右子树拉平，再将右子树接到左子树下方

var flatten = function (root) {
    if (root === null) return;

    // 先压平左树和右树
    flatten(root.left);
    flatten(root.right);

    // 用两个变量把原先的左右子树保存起来
    let left = root.left;
    let right = root.right;

    // 然后将左边的树移到其父节点的右边
    root.left = null;
    root.right = left;

    // 3、然后将旧的右树连接到当前右树的末端
    while (root.right) {
        root = root.right;
    }
    root.right = right;

};


// @lc code=end

