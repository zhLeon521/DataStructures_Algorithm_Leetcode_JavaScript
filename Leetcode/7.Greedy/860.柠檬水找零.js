/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 * 
第一步: 能不能正确找零 只取决于5元和10元的数量; 所以用2个变量 five和ten记录;
第二步: 遍历数组
    1.如果是5 直接收起来 five加一;
    2.如果是10 看five是否还有 有的话fve减一;ten加一; 否则返回false;
    3.如果是20 就又有2种找零方案: 一张10一张5, 或者3张5; 如果2种方案都可以选择,优先选10和5找零,因为5的找零用处更多,所以要留更多的5;

 */
var lemonadeChange = function (bills) {
    let five = 0;
    let ten = 0;

    for (const bill of bills) {
        if (bill === 5) {//面值为5 直接可以兑换柠檬水
            five += 1;
        } else if (bill === 10) {//面值为10 兑换柠檬水 还需要找5元
            if (five === 0) {
                return false;
            }
            five -= 1;
            ten += 1;
        } else if (bill === 20) { //面值为20 兑换柠檬水 需要找3个5元或一个10元一个5元(优先)
            if (five > 0 && ten > 0) {
                five -= 1;
                ten -= 1;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
};
// @lc code=end

