/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
// var binaryTreePaths = function (root) {
//     let res = [];

//     const getPath = (node, currPath) => {
//         if (node.left === null && node.right === null) {
//             currPath += node.val;
//             res.push(currPath)
//             return;
//         }

//         currPath += node.val + '->';

//         if (node.left) {
//             getPath(node.left, currPath)
//         }
//         if (node.right) {
//             getPath(node.right, currPath)
//         }

//     }
//     getPath(root, '')
//     return res;


// };


var binaryTreePaths = function (root) {
    let res = [];

    const getPath = (node, currPath) => {
        if (node.left === null && node.right === null) {
            currPath += node.val;
            res.push(currPath);
            return;
        }

        currPath += node.val + '->';

        if (node.left) {
            getPath(node.left, currPath)
        }
        if (node.right) {
            getPath(node.right, currPath)
        }
    }

    getPath(root, '');
    return res;
}

// @lc code=end

