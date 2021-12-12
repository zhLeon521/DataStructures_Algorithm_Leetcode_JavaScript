/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
// var sumOfLeftLeaves = function (root) {

//     const nodeSum = (node) => {
//         if (node === null) return 0;

//         let leftValue = sumOfLeftLeaves(node.left)
//         let rightValue = sumOfLeftLeaves(node.right)

//         let midValue = 0;

//         // 判断当前节点是不是左叶子是无法判断的，必须要通过节点的父节点来判断其左孩子是不是左叶子
//         // 当遇到左叶子节点的时候，记录数值，然后通过递归求取左子树左叶子之和，和 右子树左叶子之和，相加便是整个树的左叶子之和。
//         if (node.left && node.left.left === null && node.left.right === null) {
//             midValue = node.left.val;
//         }

//         let sum = leftValue + rightValue + midValue;
//         return sum;
//     }
//     return nodeSum(root);

// };



// 迭代
// 采用层序遍历
var sumOfLeftLeaves = function (root) {
    let queue = [];
    queue.push(root);

    if (root === null) return 0;
    let sum = 0;

    while (queue.length) {
        let node = queue.shift();
        if (node.left && node.left.left === null && node.left.right === null) {
            sum += node.left.val
        }
        if (node.left) {
            queue.push(node.left)
        }
        if (node.right) {
            queue.push(node.right)
        }
    }
    return sum;




}
// @lc code=end

