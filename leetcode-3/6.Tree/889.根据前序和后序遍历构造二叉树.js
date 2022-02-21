/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2022-02-21 14:54:21
 * @LastEditTime: 2022-02-21 15:35:57
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\leetcode-3\6.Tree\889.根据前序和后序遍历构造二叉树.js
 */
/*
 * @lc app=leetcode.cn id=889 lang=javascript
 *
 * [889] 根据前序和后序遍历构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 * https://img-blog.csdn.net/20180819142914862
 */
// 注意preorder.slice右边界是index+2

var constructFromPrePost = function (preorder, postorder) {

    if (preorder.length === 0) return null;


    let root = new TreeNode(preorder[0]);
    // 前序遍历【根】左右。左子树根节点位置
    let leftRoot = preorder[1];
    // 后序遍历左右【根】。左子树根节点位置

    let index = postorder.findIndex((number) => number === leftRoot) //findIndex传入一个回调函数
    // let index = postorder.indexOf(leftRoot) //indexOf 直接传入值

    // 取的长度是 index+1；
    // preorder: 起点是1, 终点是1+(index+1)=index+2
    // postorder: 起点是0,终点是 0+(index+)=index+1
    root.left = constructFromPrePost(preorder.slice(1, index + 2), postorder.slice(0, index + 1))

    root.right = constructFromPrePost(preorder.slice(index + 2, preorder.length), postorder.slice(index + 1, postorder.length - 1));

    return root;

};
// @lc code=end

