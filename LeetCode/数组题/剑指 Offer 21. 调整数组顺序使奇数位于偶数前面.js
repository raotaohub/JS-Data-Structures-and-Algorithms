/**
 * 1. 暴力法则
 * 思路就是遍历一遍 ，然后分别push 到 a | b 中，最后返回 a & b 合并后的数组
 */
var exchange = function (nums) {

    let len = nums.length, a = [], b = []

    while (len--) {

        if (nums[len] % 2 === 0) {
            b.push(nums[len])
        } else {
            a.push(nums[len])

        }

    }
    return [...a, ...b]
};

/**
 * 2. 双指针法则
 * 
 * 一样是遍历一遍，
 */


var exchange = function (nums) {


    let start = 0, end = nums.length

    for (; start > end) {

        if (nums[start] % 2 === 0) {

            [nums[start, nums[end]]] = [nums[end]], nums[start]]

            start++
        } else {
            end--
        }


    }

    return nums
};

