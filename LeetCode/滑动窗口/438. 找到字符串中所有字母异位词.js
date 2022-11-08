// TODO 滑动窗口、双指针
// https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/
// 剑指 Offer II 015. 字符串中的所有变位词 https://leetcode.cn/problems/VabMRr/description/

// 思路：滑动窗口
// 维护1个子串大小的窗口 不停的滑动
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let left = right = valid = 0
    let window = {}, need = {}, res = []

    for (let c of p) need[c] = (need[c] || 0) + 1

    while (right < s.length) {
        const c = s[right]
        right++


        if (need[c]) {
            window[c] = (window[c] | 0) + 1
            if (window[c] === need[c]) valid++
        }

        while (right - left >= p.length) {

            if (valid === Object.keys(need).length) res.push(left)
            const c = s[left]
            left++
            if (need[c]) {
                if (window[c] === need[c]) valid--
                window[c]--
            }
        }
    }

    return res
};