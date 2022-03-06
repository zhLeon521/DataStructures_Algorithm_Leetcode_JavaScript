/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function (s, t) {
    const build = (str) => {
      let res = [];
      for (let a of str) {
        // 如果为退格键就出栈，否则就出栈
        res[a === "#" ? "pop" : "push"](a);
      }
      return res.join("");
    };
    // 比较经过处理后的俩字符串 s 及 t 是否相同
    return build(s) === build(t);
  };
  
// @lc code=end

