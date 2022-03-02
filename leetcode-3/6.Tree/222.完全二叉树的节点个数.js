/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
// // 递归

// // 1. 确定递归函数参数
// var countNodes = function (root) {
//     const getNodeSum = (node) => {
//         //2. 确定终止条件
//         if (node === null) return 0;
//         //3. 确定单层递归逻辑
//         let leftSum = getNodeSum(node.left);
//         let rightSum = getNodeSum(node.right);
//         return leftSum + rightSum + 1;
//     }

//     return getNodeSum(root)
// };


// // 广度优先搜索（层序遍历  迭代）
// var countNodes = function (root) {
//     let queue = [];
//     queue.push(root);
//     if (root === null) return 0;

//     let nodeSum = 0;

//     while (queue.length) {
//         let length = queue.length;
//         while (length--) {
//             let node = queue.shift();
//             nodeSum++;
//             if (node.left) queue.push(node.left);
//             if (node.right) queue.push(node.right);
//         }
//     }
//     return nodeSum;

// }

//https://labuladong.gitee.io/algo/2/18/31/
https://leetcode-cn.com/problems/count-complete-tree-nodes/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-er-ch-iz5t/
var countNodes = function (root) {
    if (root === null) return 0;
    let left = root.left;
    let right = root.right;

    // 记录左、右子树的高度
    let leftHeight = 0;
    let rightHeight = 0;

    // 计算左子树高
    while (left) {
        left = left.left;
        leftHeight++;
    }

    // 计算右子树高
    while (right) {
        right = right.right;
        rightHeight++;
    }

    // 如果左右子树的高度相同，则是一棵满二叉树
    if (leftHeight === rightHeight) {
        // 从0开始的，所以要加一  leftHeight + 1
        return Math.pow(2, leftHeight + 1) - 1; //2^k-1
    }
    // 如果左右高度不同，则按照普通二叉树的逻辑计算，
    // 两个递归只有一个会真的递归下去，另一个一定会触发leftHeight === rightHeight 而立即返回，不会递归下去
    return countNodes(root.left) + countNodes(root.right) + 1; //加1是因为算上当前中间节点



}




// @lc code=end

