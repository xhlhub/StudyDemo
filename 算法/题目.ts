type ArrayNode = {
    id: number,
    value: number | string,
    parentId: number | null,
}

type TreeNode = {
    id: number,
    value: number | string,
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
        parentId: null
    },
    {
        id: 3,
        value: 4,
        parentId: 2
    },
]

var tree: TreeNode[] = [{
    id: 2,
    value: 3,
    children: [{
        id: 1,
        value: 2,
    },{
        id: 3,
        value: 4,
    },]
}]



/*
题目：编写reverse函数，把arr生成tree
*/ 

type resultNode = TreeNode & ArrayNode;

interface ParentIdMap {
    [index: number]: resultNode,
}

function reverse (array: ArrayNode[]): TreeNode[]  {
    const parentIdMap: ParentIdMap = {}
    let root;
    array.forEach((item: resultNode) => {
        if (item.parentId) {
            if (parentIdMap[item.parentId]) {
                parentIdMap[item.parentId].children!.push(item)
            } else {
                item.children = [item]
                parentIdMap[item.parentId] = item
            }
        } else {
            root = item
        }
    })
    return root
}

console.log(reverse(arr))