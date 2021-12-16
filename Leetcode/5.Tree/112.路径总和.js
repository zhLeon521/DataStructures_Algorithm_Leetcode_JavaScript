/*
 * @Description:
 * @Autor: Blueheart
 * @Date: 2021-11-15 11:08:37
 * @LastEditTime: 2021-12-16 14:37:11
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\5.Tree\112.路径总和.js
 */
/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 * 用递减，让计数器count初始为目标和，然后每次减去遍历路径节点上的数值。
 * 如果最后count == 0，同时到了叶子节点的话，说明找到了目标和。
 * 如果遍历到了叶子节点，count不为0，就是没找到。

 */
// var hasPathSum = function (root, targetSum) {
//     // 如果为空，就是找不到
//     if (!root) return false;
//     // 进入递归  count 为初始值
//     const traversal = (node, count) => {
//         // 遇到叶子节点，并且计数为0
//         if (count === 0 && !node.left && !node.right) return true;
//         // 遇到叶子节点而没有找到合适的边(计数不为0)，直接返回
//         if (!node.left && !node.right) return false;

//         //  左（空节点不遍历）.遇到叶子节点返回true，则直接返回true
//         if (node.left && traversal(node.left, count - node.left.val)) return true;
//         //  右（空节点不遍历）
//         if (node.right && traversal(node.right, count - node.right.val)) return true;
//         return false;

//         /** 这部分体现了回溯：
//          * 改写一下：
//             if (node.left) { //左
//                 count -= node.left.val;  // 递归，处理节点
//                 if (traversal(node.left, count)) return true;
//                 count += node.left.val;  // 回溯，撤销处理结果
//             }

//             if (node.right) {
//                 count -= node.right.val;
//                 if (traversal(node.right, count)) return true;
//                 count += node.right.val;
//             }

//             return false;
//          */

//     }

//     return traversal(root, targetSum - root.val);
// };


// var hasPathSum = function (root, targetSum) {
//     if (root === null) return false

//     const traversal = (node, count) => {
//         if (count === 0 && node.left === null && node.right === null) {
//             return true;
//         }

//         if (node.left === null && node.right === null) {
//             return false;
//         }

//         if (node.left) {
//             count -= node.left.val;
//             if (traversal(node.left, count)) return true;
//             count += node.left.val;
//         }

//         if (node.right) {
//             count -= node.right.val;
//             if (traversal(node.right, count)) return true;
//             count += node.right.val;
//         }
//         return false;
//     }
//     return traversal(root, targetSum - root.val)

// }


// 递归
var hasPathSum = function (root, targetSum) {
    if (root === null) return false;

    const traversal = (node, count) => {
        if (!node.left && !node.right && count === 0) return true;
        if (!node.left && !node.right) return false;

        if (node.left) {
            count -= node.left.val;
            if (traversal(node.left, count)) return true;
            count += node.left.val;
        }

        if (node.right) {
            count -= node.right.val;
            if (traversal(node.right, count)) return true;
            count += node.right.val;
        }

        return false;

    }
    return traversal(root, targetSum - root.val);

}

// @lc code=end

