/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 * 遍历二叉搜索树，找到空节点 插入元素就可以了
 */
var insertIntoBST = function (root, val) {
    const traversal = (root, val) => {
        // 遇到null ,这个位置就是要插入的地方，并把插入的节点返回
        if (root === null) {
            let node = new TreeNode(val);
            return node;
        }
        // 当前节点比插入节点大，向左边半棵树走
        if (root.val > val) {
            root.left = traversal(root.left, val)
        }
        if (root.val < val) {
            root.right = traversal(root.right, val)
        }
        // 排除上面两个情况,这个位置刚刚好
        return root;
    }

    return traversal(root, val);

};


// // 相对来说复杂了，用有返回值的
// // 如果是没有返回值，需要记录上一个节点（parent）,当前遍历的指针遇到空节点时，让parent的左孩子或者右孩子 指向 新插入的节点即可
// var insertIntoBST = function (root, val) {
//     let parent = new TreeNode(0);
//     const traversal = (curr, val) => {
//         if (curr === null) {
//             let node = new TreeNode(val);
//             if (parent.val > val) {
//                 parent.left = node;
//             }
//             if (parent.val < val) {
//                 parent.right = node;
//             }
//             return;
//         }

//         parent = curr;

//         if (curr.val > val) {
//             traversal(curr.left, val)
//         }
//         if (curr.val < val) {
//             traversal(curr.right, val)
//         }
//     }
//     if (root === null) {
//         root = new TreeNode(val)
//     }
//     traversal(root, val)
//     return root;
// }
// @lc code=end

