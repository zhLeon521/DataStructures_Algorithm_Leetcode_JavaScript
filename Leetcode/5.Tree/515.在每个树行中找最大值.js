/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-11-09 09:29:04
 * @LastEditTime: 2021-11-09 09:41:55
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\5.Tree\515.在每个树行中找最大值.js
 */
/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
var largestValues = function (root) {
    // 使用层序遍历
    let res = [], queue = [];
    queue.push(root);

    if (root === null) return res;
    while (queue.length) {
        //设置max初始值就是队列的第一个元素
        let max = queue[0].val;
        let length = queue.length;
        while (length--) {
            let node = queue.shift();
            max = max > node.val ? max : node.val;
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(max);
    }
    return res;

};
// @lc code=end

