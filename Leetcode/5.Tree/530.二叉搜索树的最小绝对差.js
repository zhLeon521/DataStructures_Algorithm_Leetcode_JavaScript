/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
 * @return {number}
 */
// 在二叉搜索树上，求最值、差值，就把他放到有序数组上1求。
var getMinimumDifference = function (root) {
    let arr = [];
    const toArray = (root) => {
        if (root) {
            toArray(root.left);
            arr.push(root.val);
            toArray(root.right);
        }
    }

    toArray(root);

    let diff = arr[arr.length - 1];
    for (let i = 1; i < arr.length; i++) {
        if (diff > arr[i] - arr[i - 1]) {
            diff = arr[i] - arr[i - 1]
        }
    }
    return diff;

};
// @lc code=end

