/* < !--
    示例 1:

输入: s = "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
示例 4:

输入: s = ""
输出: 0
--> */

// 滑动窗口法
// 思路：用一个数组保存遍历的字符
// 遍历字符的时候，先查看这个字符是否已经出现在数组中了，
//    1. 如果没有出现,就push到数组尾巴
//    2. 如果已经出现过,就要把数组里存储的字符都删了
//    3. 用一个max变量默认为0，用来保存长度较大的值
//    假设有 字符串 ‘abcab’ 那么数组会push到 ['a','b','c']
//    当遍历到 a 的时候，由于 a 已经出现过了，因此index = 0 , 执行splice(0,1) arr=['b','c','a']  max = 3
//    接着遍历 b 的时候，由于 b 也出现过了，  因此index = 0 , 执行splice(0,1) arr=['c','a','b']  max = 3
//    遍历结束 返回 max
var lengthOfLongestSubstring = function (s) {
    let arr = []
    let max = 0

    for (let i = 0; i < s.length; i++) {
        let index = arr.indexOf(s[i])
        if (index != -1) {
            arr.splice(0, index + 1)
        }
        arr.push(s[i])
        max = Math.max(arr.length, max)
    }
    return max
};

var lengthOfLongestSubstring = function (s) {

    let left = right = res = 0
    let window = {}

    while (right < s.length) {
        let c = s[right]
        right++
        window[c] = (window[c] || 0) + 1

        while (window[c] > 1) {

            let c = s[left]
            left++
            window[c]--
        }

        console.log(window, right, left)
        res = Math.max(res, right - left)
    }

    return res
};