/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-09 09:19:49
 * @LastEditTime: 2021-11-09 09:27:27
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\5.Tree\429.n-叉树的层序遍历.js
 */
/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 * 每一层可能有2个以上,所以不再使用node.left node.right
 */
var levelOrder = function (root) {
    let res = [], queue = [];
    queue.push(root);

    if (root === null) return res;
    while (queue.length) {
        // 记录每一层节点个数
        let length = queue.length;
        // 存放每层节点
        let currLevel = [];

        while (length--) {
            let node = queue.shift()
            currLevel.push(node.val);
            //这里不再是 ndoe.left node.right 而是循坏node.children
            for (let item of node.children) {
                if (item !== null) queue.push(item);
                // item&&queue.push(item);
            }

        }
        res.push(currLevel);
    }
    return res;
    
};
// @lc code=end

