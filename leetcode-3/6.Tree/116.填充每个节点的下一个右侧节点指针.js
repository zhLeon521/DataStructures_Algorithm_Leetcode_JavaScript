/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (root === null || root.left === null) {
        return root;
    }

    let queue = [root];

    while (queue.length) {
        let length = queue.length;

        while (length--) {
            let node = queue.shift();
            if (length > 0) node.next = queue[0]

            node.left && queue.push(node.left);
            node.right && queue.push(node.right)
        }
    }

    return root;



};


// var connect = function (root) {
//     if (root === null || root.left === null) {
//         return root;
//     }
//     // 第一种情况：连接同一个父节点的两个子节点
//     root.left.next = root.right;
//     // 第二种情况：不同父亲的子节点之间建立连接，这种情况不能直接连接。
//     // 第 N 层节点之间建立next 指针后，再建立第 N + 1 层节点的 next 指针。


//     if (root.next !== null) { //如果上一层已经链接
//         root.right.next = root.next.left;
//     }

//     connect(root.left);
//     connect(root.right)
//     return root;
// }
// @lc code=end

