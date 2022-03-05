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


    let queue = [];
    queue.push(root);
    let res = [];

    if (root === null) {
        return res;
    }

    while (queue.length) {
        let length = queue.length;
        // 避免出现负数情况
        let currMax = -Infinity;

        while (length--) {
            let node = queue.shift();
            currMax = Math.max(node.val, currMax)

            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }

        res.push(currMax);
    }

    return res;

};
// @lc code=end

