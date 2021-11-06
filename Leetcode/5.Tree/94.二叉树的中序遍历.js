/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-06 09:52:17
 * @LastEditTime: 2021-11-06 17:36:37
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

// var inorderTraversal = function(root) {
//     const stack = [];
//     let res = [];
    
//     if (root) stack.push(root);
//     while (stack.length) {
        
//         const node = stack.pop();
//         if (node !== null) {
//             if (node.right) stack.push(node.right);  // 添加右节点（空节点不入栈）
//             stack.push(node); // 添加中节点
//             stack.push(null); // 中节点访问过，但是还没有处理，加入空节点做为标记。
//             if (node.left) stack.push(node.left); // 添加左节点（空节点不入栈）
//         }

//         // 只有遇到空节点的时候，才将下一个节点【栈顶元素】放进结果集
//         if(node===null) {
//             res.push(stack.pop().val);// 重新取出栈中元素放到结果集【res】中
//             continue;
//         }
//     };
//     return res;
// };

var inorderTraversal = function (root) {
    const stack = [];
    let res = [];

    if (root) {
        stack.push(root);
    }

    while (stack.length) {
        const node = stack.pop();
        if (node !== null) {
            if (node.right) stack.push(node.right);
            stack.push(node);
            stack.push(null) // 这里是一个标记，记录已访问过的节点
            if (node.left) stack.push(node.left);

        }
        //入栈完毕后，出栈。遇到null再开始
        if (node === null) {
            res.push(stack.pop().val)
            continue;
        }
        
    }

    return res;

    
}

// @lc code=end

