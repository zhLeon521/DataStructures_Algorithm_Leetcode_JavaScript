/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-05 23:52:28
 * @LastEditTime: 2021-11-06 17:55:10
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\5.Tree\144.二叉树的前序遍历.js
 */
/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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

// var preorderTraversal = function (root) {
//     let res = []
//     const order = (root) => {
//         if (root === null) return res;
//         //先序遍历所以从父节点开始
//         res.push(root.val);

//         //递归左子树
//         if (root.left !== null) {
//             order(root.left)
//         }

//         //递归右子树
//         if (root.right !== null) {
//             order(root.right)
//         }
//     }
//     //只使用一个参数 使用闭包进行存储结果
//     order(root);
//     return res;
    

// };

// 迭代：

// 前序遍历：中左右
// 压栈顺序：右左中

// var preorderTraversal = function(root, res = []) {
//     const stack = [];
//     if (root) stack.push(root);
//     while(stack.length) {
//         const node = stack.pop();
//         if(!node) {
//             res.push(stack.pop().val);
//             continue;
//         }
//         if (node.right) stack.push(node.right); // 右
//         if (node.left) stack.push(node.left); // 左
//         stack.push(node); // 中
//         stack.push(null);
//     };
//     return res;
// };


var preorderTraversal = function (root) { 
    const stack = [];
    let res = [];
    if (root) stack.push(root);

    while (stack.length) {
        const node = stack.pop();

        if(node !== null) {
            if (node.right) stack.push(node.right);
            if (node.left) stack.push(node.left);
            stack.push(node);
            stack.push(null) //标记
        }

        if(node === null) {
            res.push(stack.pop().val)
            continue;
     }
    }
    return res;
     
    
}


// @lc code=end

