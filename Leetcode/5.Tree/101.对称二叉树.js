/*
 * @Description:
 * @Autor: Blueheart
 * @Date: 2021-11-09 16:12:19
 * @LastEditTime: 2021-12-16 13:57:14
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\5.Tree\101.对称二叉树.js
 */
/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 * https://leetcode-cn.com/problems/symmetric-tree/solution/dai-ma-sui-xiang-lu-dai-ni-xue-tou-er-ch-hnjo/
 * 左空右不空 false
 * 右空左不空 false
 * 左右值不相等 false
 *
 */
// var isSymmetric = function (root) {
//     // if (root === null) return true;
//     // // 1. 确定递归的参数 root.left root.right和返回值true false
//     // const compareNode = (left, right) => {
//     //     //2. 确定终止条件 空的情况
//     //     if ((left === null && right !== null) || (left !== null && right === null)) return false;
//     //     else if (left === null && right === null) return true;
//     //     else if (left.val !== right.val) return false;

//     //     //3. 确定单层递归逻辑
//     //     // 内的外侧比较  左子树左右中，右子树右左中
//     //     let outSide = compareNode(left.left, right.right);
//     //     let inSide = compareNode(left.right, right.left);
//     //     let isSame = outSide && inSide;
//     //     return isSame;
//     // }

//     // return compareNode(root.left, root.right);  //传参，gogogo!


//     if (root === null) return true;

//     const compareNode = (left, right) => {
//         if ((left === null && right !== null) || (left !== null && right === null)) return false;
//         else if (left === null && right === null) return true;
//         else if (left.val !== right.val) return false;

//         let inSide = compareNode(left.left, right.right)
//         let outSide = compareNode(left.right, right.left)
//         return inSide && outSide;
//     }

//     return compareNode(root.left, root.right)

// };


// 递归
var isSymmetric = function (root) {
    if (root === null) return true;
    const compareNode = (left, right) => {
        if (left === null && right === null) return true;
        if (left === null && right !== null) return false;
        if (left !== null && right === null) return false;
        if (left.val !== right.val) return false;

        return compareNode(left.left, right.right) &&
            compareNode(left.right, right.left)

    }


    return compareNode(root.left, root.right)
}


// @lc code=end

