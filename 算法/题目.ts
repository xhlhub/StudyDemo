type ArrayNode = {
    id: number,
    value: number | string,
    parentId: number | null,
}

type TreeNode = {
    id: number,
    value: number | string,
    parentId: number | null,
    children?: Array<TreeNode>,
}

var arr: ArrayNode[] = [
    {
        id: 1,
        value: 2,
        parentId: 2
    },
    {
        id: 2,
        value: 3,
        parentId: 4
    },
    {
        id: 3,
        value: 4,
        parentId: 2
    },
    {
        id: 4,
        value: 5,
        parentId: null
    },
]



/*
题目：编写reverse函数，把arr生成tree
*/ 

interface ParentIdMap {
    [index: number]: TreeNode[],
}

function reverse (array: TreeNode[]): TreeNode[]  {
    const parentIdMap: ParentIdMap = {}
    let root;
    array.forEach((item: TreeNode) => {
        if (item.parentId) {
            if (parentIdMap[item.parentId]) {
                parentIdMap[item.parentId].push(item)
            } else {
                parentIdMap[item.parentId] = [item]
            }
        } else {
            root = item
        }

        if (parentIdMap[item.id]) {
            item.children = parentIdMap[item.id]
        } else {
            item.children = parentIdMap[item.id] = []
        }
    })
    return root
}

// 技巧：遍历每个元素，找他的父节点和子节点。

console.log(reverse(arr))