/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-02-21 16:36:27
 * @LastEditTime: 2022-02-21 18:52:07
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\6.Tree\297.二叉树的序列化与反序列化.js
 */
/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */


// 序列化：遍历，把遍历的结果转化成字符串的形式，就是序列化。
// 用前序遍历的思路，前序遍历的特点是根节点在开头，然后接着左子树的前序遍历结果，然后接着右子树的前序遍历结果


const serialize = (root) => {
    if (root == null) {                  // 遍历到 null 节点
        return '#';
    }
    const left = serialize(root.left);   // 左子树的序列化结果
    const right = serialize(root.right); // 右子树的序列化结果
    return root.val + ',' + left + ',' + right; // 按  根,左,右  拼接字符串
};


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

const deserialize = (data) => {
    const list = data.split(',');   // split成数组

    const buildTree = (list) => {   // 基于list构建当前子树
        const node = list.shift(); // 弹出首项，获取它的“数据”
        if (node === '#') {         // 是#，返回null节点
            return null;
        }
        const root = new TreeNode(node); // 不是X，则创建节点
        root.left = buildTree(list);        // 递归构建左子树
        root.right = buildTree(list);       // 递归构建右子树
        return root;                        // 返回当前构建好的root
    };

    return buildTree(list); // 构建的入口
};


/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

