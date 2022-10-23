
// https://www.bilibili.com/video/BV1Xo4y1Z7RR?p=111&spm_id_from=pageDriver&vd_source=ad977f2996622120f46d207ea056d745

/**
 *          4
 *          0               索引   0 的左子树  = 0*2+1 = 1 
 *      6       8
 *      1       2           索引   0 的右子树  = 0*2+2 = 2
 *   5     9
 *   3     4                索引
 * 
*/

/* 大堆 用于升序
 * arr[i] >= arr[2*i+1] && arr[i] >= arr[2*i+2]
 */

/* 小堆 用于降序
 * arr[i] <= arr[2*i+1] && arr[i] <= arr[2*i+2] 
 */

/**
 * 思想
 * 1. 以数组存储
 * 2. 以树的方式遍历
 * 3. 先建立1个堆
 * 4. 重复1个交换和调整的过程，直到堆消失，最后得到有序序列
 * */

const arr = [4, 6, 8, 5, 9, 44, -98, 0, 44, 5, 33]

function heapSort(arr) {

    // 先将1个数组 （二叉树）

    // buildHeap(arr, 1, arr.length)
    // console.log('第1次', arr); // 第1次 [ 4, 9, 8, 5, 6 ]


    // buildHeap(arr, 0, arr.length)
    // console.log('第2次', arr); // 第2次 [ 9, 6, 8, 5, 4 ]

    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {

        buildHeap(arr, i, arr.length)

    }

    let temp;
    for (let j = arr.length - 1; j > 0; j--) {

        temp = arr[j]
        arr[j] = arr[0]
        arr[0] = temp
        buildHeap(arr, 0, j)
    }

}

/**
 * @description: 每次都只调整最基本的1个树
 * @param {*} arr 待调整数组
 * @param {*} i 最后1个非 叶子节点的左子节点 在数组中的索引
 * @param {*} len 待调整的元素个数，逐渐减少的
 * @return {*}
 */
function buildHeap(arr, i, len) {

    const temp = arr[i]

    for (let k = i * 2 + 1; k < len; k = k * 2 + 1) {
        const lN = arr[k]/*左子节点*/, rN = arr[k + 1]/*右子节点*/

        if (k + 1 < len /*边界判断*/ && lN < rN /*比较兄弟大小*/) {
            k++ //【1】 拿到大兄弟的指针
        }

        if (arr[k] > temp /*比较父 子大小*/) {
            arr[i] = arr[k] // 子节点大于父节点 值交换 【2】
            i = k // 指针交换
        } else {
            break
        }
    }

    // 循环结束。 i 这个树 已经局部大顶堆了 。
    arr[i] = temp // 如果for循环中 【2】成立 ，i指针则被修改了，而i位置的值也被修改了，因此这里也再交换值 
}


heapSort(arr)
console.log('arr', arr);
