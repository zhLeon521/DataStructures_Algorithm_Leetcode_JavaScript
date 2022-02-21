/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-02-21 00:47:26
 * @LastEditTime: 2022-02-21 10:46:43
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\6.Tree\108.将有序数组转换为二叉搜索树.js
 */
/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
const traversal = (arr, left, right) => {
    if (left > right) { // 构成不了区间，返回null
        return null;
    }
    // 取中间元素
    let mid = Math.floor(left + (right - left) / 2);

    let root = new TreeNode(arr[mid]);// 构建当前节点
    root.left = traversal(arr, left, mid - 1);// 构建左子树
    root.right = traversal(arr, mid + 1, right);

    return root; //别忘了返回！！
}
// 因为定义的区间是左闭右闭， 所以这里是 0， nums.length-1
var sortedArrayToBST = function (nums) {
    // 递归的入口
    return traversal(nums, 0, nums.length - 1);
};
// @lc code=end

