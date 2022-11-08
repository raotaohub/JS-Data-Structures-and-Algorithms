// TODO 滑动窗口、双指针
// https://leetcode.cn/problems/minimum-window-substring/

// 思路
// 1、我们在字符串 S 中使⽤双指针中的左右指针技巧，初始化 left = right = 0，把索引左闭右开区间[left, right) 称为⼀个「窗⼝」。
// 2、我们先不断地增加 right 指针扩⼤窗⼝ [left, right)，直到窗⼝中的字符串符合要求（包含了 T 中的所有字符）。
// 3、此时，我们停⽌增加 right，转⽽不断增加 left 指针缩⼩窗⼝ [left, right)，直到窗⼝中的字符串不再符合要求（不包含 T 中的所有字符了）。同时，每次增加 left，我们都要更新⼀轮结果。
// 4、重复第 2 和第 3 步，直到 right 到达字符串 S 的尽头。

var minWindow = function (s, t) {
    let need = {};//需要覆盖的字符串频数
    let window = {};//滑动窗口的字符串频数
    for (let a of t) need[a] = (need[a] || 0) + 1;//统计t中字符频数

    //左右指针
    let left = 0,
        right = 0;
    let valid = 0;//滑动窗口中能覆盖的字符种类数
    let start = 0,//最小覆盖子串的起始索
        len = Number.MAX_VALUE;//最小覆盖子串长度

    while (right < s.length) {
        let c = s[right];//进入滑动窗口右边的字符
        right++;//右移窗口
        if (need[c]) {//如果当前字符在need字符中 更新window中字符数
            window[c] = (window[c] || 0) + 1;
            if (window[c] == need[c]) {//如果当前窗口和需要的字符数量一致时，字符种类+1
                valid++;
            }
        }

        while (valid >= Object.keys(need).length) {//字符种类与需要的字符个数一致时，就收缩窗口
            if (right - left < len) {//当前窗口长度小于之前窗口的长度len 更新最小覆盖子串的起始位置和长度
                start = left;
                len = right - left;
            }
            let d = s[left];//需要被移除的字符
            left++;//左移窗口 从窗口中移除字符
            if (need[d]) {//如果在需要的字符中 更新window中字符数
                if (window[d] == need[d]) {//如果当前窗口和需要的字符数量一致时，字符种类-1
                    valid--;
                }
                window[d]--;
            }
        }
    }
    //没有找到覆盖子串 返回'' 否则返回覆盖子串
    return len == Number.MAX_VALUE ? "" : s.substr(start, len);
};


