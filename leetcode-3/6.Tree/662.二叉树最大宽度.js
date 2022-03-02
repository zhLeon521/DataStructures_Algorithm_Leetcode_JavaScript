/*
 * @lc app=leetcode.cn id=662 lang=javascript
 *
 * [662] 二叉树最大宽度
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
//  var widthOfBinaryTree = function(root) {
//     if (!root) return 0;

//     // 同层序遍历的思想
//     // queue  该队列用于层序遍历，不同的是，此处存储的是数组，数组中有节点有对应的行索引值
//     // answer 为每行的宽度
//     let queue = [[root, 0]], answer = 0;

//     while (queue.length) {
//         let len = queue.length
//         // 队列中第一个节点索引值
//         let firstNumber = queue[0][1];
//         console.log(firstNumber)

//         // 对列最后一个节点索引值 - 第一个节点索引值 + 1 求出此行索引再同上一层即answer对比求最大值
//         answer = Math.max(answer, queue[len - 1][1] - firstNumber + 1);

//         // 按层迭代
//         while (len--) {
//             let [node, number] = queue.shift();

//             // 你可能比较迷惑的是这一行代码，其实，在数据量小的情况下此行不写也可以，但是不要忘了JS有最大有效数字
//             // 假如数据量非常大的情况下，我们的索引超出数字有效值了呢
//             // 我们可以看到在题目最后的注意上标明了：答案在32位有符号整数的表示范围内
//             // 也就是说最终答案那个最大宽度是不会超过32位有符号整数的，按照我们目前的想法是空节点也标注了索引
//             // 假如层数非常非常多但每层只有一个右节点的用例，空节点也计数那直接就凉了，因为并没有限制层数
//             // 我们让同一层节点的索引先减去此层第一个节点的索引再来计算子节点的索引，这样每一层的索引都是从0开始的
//             // 从而解决数字大的问题
//             number -= firstNumber;

//             if (node.left) {
//                 // 左子节点索引值 = 父节点索引值 * 2
//                 queue.push([node.left, number * 2]);
//             }

//             if (node.right) {
//                 // 右子节点索引值 = 父节点索引值 * 2 + 1
//                 queue.push([node.right, number * 2 + 1]);
//             }
//         }
//     }

//     return answer;
// };



var widthOfBinaryTree = function (root) {
    if (root === null) return 0;

    let queue = [[root, 0]]; ans = 0;

    while (queue.length) {
        let length = queue.length;
        let firstNumber = queue[0][1] //这一层的第一个元素

        ans = Math.max(ans, queue[length - 1][1] - firstNumber + 1);

        while (length--) {
            let [node, number] = queue.shift();
            number -= firstNumber; //这个注意
            if (node.left) {
                queue.push([node.left, number * 2]);
            }
            if (node.right) {
                queue.push([node.right, number * 2 + 1])
            }
        }
    }

    return ans;

}

// @lc code=end

