var arr = [
    {
        id: 4,
        value: 5,
        parentId: null
    },
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
    }
];
function reverse(array) {
    var parentIdMap = {};
    var root;
    array.forEach(function (item) {
        if (item.parentId) {
            if (parentIdMap[item.parentId]) {
                parentIdMap[item.parentId].push(item);
            }
            else {
                parentIdMap[item.parentId] = [item];
            }
        }
        else {
            root = item;
        }
        
        if (parentIdMap[item.id]) {
            item.children = parentIdMap[item.id];
        } else {
            item.children = parentIdMap[item.id] = []
        }
    });
    return root;
}
console.log(reverse(arr));
