/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-06 09:52:17
 * @LastEditTime: 2021-11-06 11:09:55
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\5.Tree\94.二叉树的中序遍历.js
 */
/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
// var inorderTraversal = function (root) {
//     let res = [];
//     const order = function (root) {
//         if (root ===  null) return res;

//         if (root.left !== null) {
//             order(root.left);
//         }

//         res.push(root.val);

//         if (root.right !== null) {
//             order(root.right);
//         }
        
//     }
    
//     order(root);
//     return res;
    

// };

var inorderTraversal = function (root) {
    const res = [];
    if (root === null) return res;

    const stack = [];
    let curr = root;


    while (stack.length || curr) {
        // 不断将左节点压入
        if (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        } else {
            // --> 弹出 中
            curr = stack.pop();
            res.push(curr.val)
            // 右
            curr = curr.right;
        }
    }
    
    return res;
}
// @lc code=end

