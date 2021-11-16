/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-16 10:27:26
 * @LastEditTime: 2021-11-16 10:58:22
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\5.Tree\113.路径总和-ii.js
 */
/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
    let res = [];
    if (!root) return res;
    

    const traversal = (node, count, path) => {
        // 遇到了叶子节点且找到了和为sum的路径
        if (count === 0 && !node.left && !node.right) {
            res.push([...path]); // 不能写res.push(path), 要深拷贝
            return;
        }
        // 遇到叶子节点而没有找到合适的边，直接返回
        if (!node.left && !node.right) return;

        // 遍历开始
        if (node.left) {
            path.push(node.left.val);
            traversal(node.left, count - node.left.val, path); //递归
            path.pop();  //回溯

        }

        if (node.right) {
            path.push(node.right.val);
            traversal(node.right, count - node.right.val, path);
            path.pop();
        }
        return;
    }
    
    if (!root) return res;
    traversal(root, targetSum - root.val, [root.val]); // 把根节点放进路径
    return res; 

};

// @lc code=end

