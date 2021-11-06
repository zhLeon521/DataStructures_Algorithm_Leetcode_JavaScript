/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-06 09:52:17
 * @LastEditTime: 2021-11-06 16:53:14
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

var inorderTraversal = function(root) {
    const stack = [];
    let res = [];
    
    if (root) stack.push(root);
    while(stack.length) {
        const node = stack.pop();
        
        // 只有遇到空节点的时候，才将下一个节点【栈顶元素】放进结果集
        if(node===null) {
            res.push(stack.pop().val);
            continue;
        }
        if (node.right) stack.push(node.right); // 右
        stack.push(node); // 中
        stack.push(null); // 中节点访问过，但是还没有处理，加入空节点做为标记。
        if (node.left) stack.push(node.left); // 左
    };
    return res;
};

// @lc code=end

