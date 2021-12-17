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
// var getMinimumDifference = function (root) {
//     let arr = [];
//     const toArray = (root) => {
//         if (root) {
//             toArray(root.left);
//             arr.push(root.val);
//             toArray(root.right);
//         }
//     }

//     toArray(root);

//     let diff = arr[arr.length - 1];
//     for (let i = 1; i < arr.length; i++) {
//         if (diff > arr[i] - arr[i - 1]) {
//             diff = arr[i] - arr[i - 1]
//         }
//     }
//     return diff;

// };

// // 换个写法
// var getMinimumDifference = function (root) {
//     let arr = [];
//     const toArray = (root) => {
//         if (root) {
//             toArray(root.left);
//             arr.push(root.val);
//             toArray(root.right)
//         }
//     }

//     toArray(root);
//     let res = Infinity; //输出结果
//     let i = 1; //准备遍历
//     while (i < arr.length) {
//         let diff = Math.abs(arr[i - 1] - arr[i]);
//         if (diff < res) {
//             res = diff;
//         }
//         i++;
//     }
//     return res;
// }


// 使用prev节点指向所指节点的前一个节点
var getMinimumDifference = function (root) {
    let res = Infinity;
    let prev = null

    const traversal = (node) => {
        if (node === null) return;
        traversal(node.left);
        if (prev !== null) {
            res = Math.min(res, Math.abs(prev - node.val));
        }
        prev = node.val;
        traversal(node.right);
    }
    traversal(root);
    return res;
}

// @lc code=end

