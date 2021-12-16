/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    const buildTree = (arr, left, right) => {
        if (left > right) { return null }
        let maxValue = -1;
        let maxValueIndex = -1;
        // 找到数组中的最大值 及对应的索引
        for (let i = left; i <= right; i++) {
            if (arr[i] > maxValue) {
                maxValue = arr[i];
                maxValueIndex = i;
            }
        }

        let root = new TreeNode(maxValue);
        // 递归调用构造左右子树
        root.left = buildTree(arr, left, maxValueIndex - 1);
        root.right = buildTree(arr, maxValueIndex + 1, right);
        return root;
    }

    return buildTree(nums, 0, nums.length - 1);

};
// @lc code=end

