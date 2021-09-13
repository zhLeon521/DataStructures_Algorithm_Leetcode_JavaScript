/*
 * @Description: 
 * @Autor: Blueheart
 * @Date: 2021-09-13 10:52:10
 * @LastEditTime: 2021-09-13 16:04:12
 * @FilePath: \DataStructures_Algorithm_Leetcode_JavaScript\Leetcode\1.Array\5.最长回文子串.js
 */
/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */


var longestPalindrome = function (s) {
    if (s.length < 2) return s;

    let ans = '';

    for (let i = 0; i < s.length; i++){
        // 回文串 是奇数
        getCenter(i, i);

        // 回文串 是偶数
        getCenter(i, i + 1);
    }
    

    function getCenter(left, right) {
        // 左边界不小于0，是不小于！！  右边界不超过数组的最长长度。
        // 进入循环条件：不越界，且当前两个指针指向的字符相等
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }

        // 应注意，此时left、right是循环恰好不满足的时刻，截取最长回文子串应该把两个边界去掉。
        // 实际应该是（分别向中间收敛一个）：左：left+1; 右：right-1; 两者之间的距离(right-1)-(left+1)+1 = right-left-1；(举个例子：2,3,4,5之间是4个数，计算方法：5-2+1=4)
        // 进入判断：如果这个新的ans 比 原来的长，就给他替换掉
        if ((right - left - 1) > ans.length) {
            // 长度判断完了，就该看怎么截取了。
            // 其实刚才已经说到了，要截取正确的回文子串，就是要消除while循环：最后一次不满足条件的left、right
            /**
             * left=left+1;
             * right = right-1+1;
             */
            ans = s.slice(left + 1, right);
        }
    }

    return ans;
    

 
  };

// @lc code=end

