/* https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/description/ */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// 思路：双指针 l r 分别指向起始和结束; （原因：给出的数组为升序的 ，且可以规避重复元素的情况）
// 每次计算l、r下标值和的和 sum 与 target比较
// 若 sum < target 那么 左指针 l 前移 （原因：数组升序，需要找到下一个【更大】的值计算sum ）
// 若 sum > target 那么 右指针 r 后移 （原因：数组升序，需要找到下一个【更小】的值计算sum ）
// 如果存在结果 那么肯定会找到
// 最后注意 题目要求返回的下标值要 + 1  （原因：要求返回长度下标）

/* 代码实现 */
var twoSum = function (numbers, target) {

    let l = 0, r = numbers.length - 1

    while (l < r) {
        let sum = numbers[l] + numbers[r]

        if (sum < target) {
            l++
        } else if (sum > target) {
            r--
        } else if (sum === target) {

            return [l + 1, r + 1]
        }
    }
};

/* 
更多挑战
两数之和 https://leetcode.cn/problems/two-sum/description/
两数之和 IV - 输入二叉搜索树 https://leetcode.cn/problems/two-sum-iv-input-is-a-bst/description/
小于 K 的两数之和 https://leetcode.cn/problems/two-sum-less-than-k/description/ 
*/