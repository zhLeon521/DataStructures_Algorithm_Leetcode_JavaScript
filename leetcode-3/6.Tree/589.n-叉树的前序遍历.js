/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-02-20 00:30:46
 * @LastEditTime: 2022-02-20 01:08:35
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\6.Tree\589.n-叉树的前序遍历.js
 */
/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
function Node(val, children) {
    this.val = val;
    this.children = children;
}

// N叉树与二叉树唯一的区别就是不只左右二个子节点，会有多个子节点
// 循环遍历多个子节点，再递归调用就OK了
var preorder = function (root) {
    const res = [];

    if (root === null) {
        return res;
    }

    const order = (root) => {
        res.push(root.val);
        for (let node of root.children) {
            order(node)
        }
    }

    order(root);
    return res;

};
// @lc code=end

