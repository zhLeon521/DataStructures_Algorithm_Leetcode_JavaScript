/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-23 14:00:38
 * @LastEditTime: 2021-09-23 14:44:29
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\119.杨辉三角-ii.js
 */
/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */

// 某一行的某个位置的值等于上一行这个位置的值再加上前一位的值
// 题目要求我们不使用额外空间  所以这里做的就是[就地]对同一个集合的相同位置进行来回替换


var getRow = function (rowIndex) {
    if (rowIndex === 0) return [1]; //如果是0，就返回第一行

    let list = [1]; // 初始化

    for (let i = 0; i < rowIndex; i++){
        list.unshift(0)
        for (j = 0; j < i + 1; j++){
            // list[j] 为当前行 ，list[j] + list[j+1]为上一行的数据
            /***
             * 举个例子 i=3时，也就是求第4行（i从零开始）
             * 这时第三行的数字为 1 2 1，按照操作，对list进行前部补0：list变为 【0 1 2 1】 
             * 进入j循环, 每前后两个数相加,得：【1 3 3 1】
             * 有一个临街条件非常重要，就是 j < i + 1，本来要计算到数组最后一位，现在只需要计算到倒数第二位
             * 这样最后一位的1就被保存了下来
             */
            list[j] = list[j] + list[j + 1];
        }
    }

    return list;
    
    

};
// @lc code=end

