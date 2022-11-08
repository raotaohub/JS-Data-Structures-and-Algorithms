// 思路：
// 注意点 排列的意思是，只要出现且不包含其他字符即可。
// 1.维护1个 s1.length 长度的窗口
// 2.窗口内的有效字符数量和s1.length 一直 就说明找到了 。

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */


// case
// s1 =
// "ab"
// s2 =
// "eidbaooo"

var checkInclusion = function (s1, s2) {

    let left = right = valid = 0 // 左右指针 和 有效值初始化
    let window = {}, need = {}
    for (let c of s1) need[c] = (need[c] || 0) + 1 // 统计 s1 字符频数

    while (right < s2.length) {

        const c = s2[right]
        right++

        if (need[c]) { // 若存在则更新计数器 和 统计值
            window[c] = (window[c] || 0) + 1
            if (window[c] === need[c]) valid++
        }


        //  当窗口大小 和 s1.length 相同的时候，就进入内部检查
        while (right - left >= s1.length) {

            if (valid === Object.keys(need).length) return true

            const c = s2[left]
            left++// 左指针前移

            if (need[c]) { // 检查将移出的这个字符 是否存在于s1中 ，若存在则更新计数器 和 统计值
                if (window[c] === need[c]) {
                    valid--
                }
                window[c]--
            }
        }
    }
    return !true
};



