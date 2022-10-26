const str = `
A
    Javascript
        TypeScript
            ts
            TS
        NodeJS
            egg
            koa

B
    Database
    MongoDB
C
    Linux
    Win
`


// function parseTabStr(str) {
//     let reg = /(\w)/ig
//     const list = str.split(/\n/).filter(v => v)
//     let baseTab = '    '
//     const result = queue = stack = []
//     for (let i = 0; i < list.length; i++) {
//         let name = list[i]
//         if (list[i].search(baseTab) === -1) {
//             queue.push({ name, childrens: [] })
//         }
//         if ()
//     }
// }

// parseTabStr(str)

let baseTab = '    '

function getlevel(str) {
    let num = 0;
    while (str.search(baseTab) != -1) {
        num++;
        str = str.replace(baseTab, "");
    }
    return num;
}

function getname(str) {
    let num = 0;
    while (str.search(baseTab) != -1) {
        num++;
        str = str.replace(baseTab, "");
    }
    return str;
}


function createtree(str) {
    let arr = array = stack = [];
    let list = str.split("\n").filter(v => v);

    /* 对于每个层级 数据结构都是一样的 */
    for (i = 0; i < list.length; i++) {
        arr[i] = {};
        arr[i]["name"] = list[i];
        arr[i]["childs"] = [];
    }

    let arrCount = arr.length; let stackCount
    for (i = 0; i < arrCount; i++) {
        let level = getlevel(arr[i].name);
        let titlename = getname(arr[i].name);
        arr[i].name = titlename;
        /* 对于 level 0 就是根节点 */
        if (level == 0 && stack.length == 0) {
            stack.push(arr[i]);
        }
        else if (level == 0 && stack.length > 0) {
            /* 再遇到根的时候,清空栈 */
            array.push(stack[0]);
            let arrnums = stack.length;
            for (j = 0; j < arrnums; j++) {
                stack.pop();
            }
            stack.push(arr[i]);
        }
        else if (stack.length > 0 && level > 0) {
            /* 每一层的子结构 */
            stackCount = stack.length;
            for (j = 0; j < stackCount - level; j++) {
                stack.pop();
            }
            stack.push(arr[i])
            stack[level - 1].childs.push(arr[i]);
        }
    }
    array.push(stack[0]);
    console.log(JSON.stringify(array));
}
createtree(str);
