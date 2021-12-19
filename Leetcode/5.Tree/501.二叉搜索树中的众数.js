/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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

// 暴力法。把他当成普通的二叉树
// 用map存储，再比较
// var findMode = function (root) {
//     let map = new Map();
//     const traversal = (root) => {
//         if (root === null) { return };
//         traversal(root.left)
//         // key:二叉树中的元素  value:元素出现的次数
//         map.set(root.val, map.has(root.val) ? map.get(root.val) + 1 : 1)
//         traversal(root.right)
//     }

//     traversal(root)

//     // 上面是把数据都放到map中存储
//     // 下面是开始寻找map中出现次数最多的数

//     // 定义最大次数  初始值为root.val出现的次数
//     let maxCount = map.get(root.val);
//     // 定义一个存放结果的数组res
//     let res = [];
//     for (let [key, value] of map) {
//         //如果当前值等于最大出现次数就直接在res增加该值
//         if (value === maxCount) {
//             res.push(key);
//         }
//         if (value > maxCount) {
//             //如果value的值大于原本的maxCount就清空res的所有值，因为找到了更大的
//             res = [];
//             maxCount = value;
//             res.push(key);
//         }
//     }
//     return res;
// };


// 不使用额外空间，利用二叉搜索树性质：中序遍历——有序
var findMode = function (root) {
    let count = 0; //元素出现的次数
    let maxCount = 1; // 出现的最大次数，初始化为1
    let pre = root;
    let res = [];

    const traversal = (curr) => {
        // 确定递归终止条件
        if (curr === null) { return };

        traversal(curr.left); // 左

        if (pre.val === curr.val) { //与前一个节点相同
            count++;
        } else {  //与前一个节点不同
            count = 1;
        }

        pre = curr; //更新上一个节点

        if (count === maxCount) { //和最大次数一样，放入res
            res.push(curr.val);
        }

        if (count > maxCount) { //比现有的最大次数大

            maxCount = count;  //更新最大计数
            res = []; //清空数组，因为原数组中所有的元素都失效了
            res.push(curr.val); //把当前值push进去
        }

        traversal(curr.right);  //右

    }

    traversal(root)
    return res;


}
// @lc code=end

