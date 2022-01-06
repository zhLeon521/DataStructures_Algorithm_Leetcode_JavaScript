/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 * 如果总油量 减去 总消耗量大于等于0，那么汽车肯定可以行使完一圈
 */
var canCompleteCircuit = function (gas, cost) {
    let left = 0; // 剩余的
    let start = 0; // 起始位置
    let totalGas = 0; // 总油量
    let totalCost = 0;  // 总消费
    // 
    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i]; // 得到所有燃油总量
        totalCost += cost[i]; // 计算所有消耗的量
        // 我们从起点 0 开始，累加每次的剩余量
        left += gas[i] - cost[i];
        if (left < 0) {  //当站 i 累加完 left 后, 如果小于 0，则站 0 到 站 i都不是起点，
            start = i + 1; //我们将 i+1 作为新的起点，
            left = 0; //重新累加每个站点的 left(i)
        }
    }
    // 如果累加后 totalGas< totalCost, 则出发点到站 i 都不是起点。
    if (totalGas < totalCost) { // 总油量不够，问题无解
        return -1;
    }
    // 总加油>=总耗油，必然有解。当遍历结束时，最新的start指向成功的起点
    return start; //返回出发点

};
// @lc code=end

