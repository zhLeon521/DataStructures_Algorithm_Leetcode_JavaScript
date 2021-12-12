/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
 * @return {number}
 */
var findBottomLeftValue = function (root) {
    // 层序遍历，记录每一层最左边的点
    let queue = [];
    queue.push(root);
    if (root === null) return null;

    let res;
    while (queue.length) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let node = queue.shift();
            if (i === 0) {
                res = node.val;
            }
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }


    }
    return res;


};
// @lc code=end

