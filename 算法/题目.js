var arr = [
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
];
var tree = [{
        id: 2,
        value: 3,
        children: [{
                id: 1,
                value: 2
            }, {
                id: 3,
                value: 4
            },]
    }];
function reverse(array) {
    var parentIdMap = {};
    var root;
    array.forEach(function (item) {
        debugger
        if (item.parentId) {
            if (parentIdMap[item.parentId]) {
                parentIdMap[item.parentId].children.push(item);
            }
            else {
                item.children = [];
                parentIdMap[item.parentId] = item;
            }
        }
        else {
            root = item;
        }
    });
    return root;
}
console.log(reverse(arr));
