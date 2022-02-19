/*
 * @Description:
 * @Autor: Blueheart
 * @Date: 2022-02-20 01:02:03
 * @LastEditTime: 2022-02-20 01:05:51
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\6.Tree\590.n-叉树的后序遍历.js
 */
/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
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
 * @return {number[]}
 */
var postorder = function (root) {
    const res = [];
    if (root === null) {
        return res;
    }
    // N叉树，有children属性
    const order = (root) => {
        for (let node of root.children) {
            order(node)
        }
        res.push(root.val);
    }

    order(root);
    return res;

};
// @lc code=end

