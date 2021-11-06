/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-06 09:59:33
 * @LastEditTime: 2021-11-06 12:24:53
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\5.Tree\145.二叉树的后序遍历.js
 */
/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
// var postorderTraversal = function (root) {
//     let res = [];
//     if (root === null) return res;

//     const order = (root) => {
//         if (root.left !== null) {
//             order(root.left)
//         }
//         if (root.right !== null) {
//             order(root.right)
//         }
//         res.push(root.val);
//     }

//     order(root);
//     return res;
    

// };


// 后续遍历：左右中
// 压栈顺序：中右左
 
var postorderTraversal = function(root, res = []) {
    const stack = [];
    if (root) stack.push(root);
    while(stack.length) {
        const node = stack.pop();
        if(!node) {
            res.push(stack.pop().val);
            continue;
        }
        stack.push(node); // 中
        stack.push(null);
        if (node.right) stack.push(node.right); // 右
        if (node.left) stack.push(node.left); // 左
    };
    return res;
};


// @lc code=end

