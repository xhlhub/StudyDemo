function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 示例使用
// 构建一个简单的二叉树
//       3
//      / \
//     9  20
//        /  \
//       15   7
// let root = new TreeNode(3);
// root.left = new TreeNode(9, undefined, new TreeNode(5));
// root.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));
// root.right.right = new TreeNode(18);
// let root1 = new TreeNode(3);
// root1.left = new TreeNode(9, undefined, new TreeNode(5));
// root1.right = new TreeNode(20, new TreeNode(15), new TreeNode(7));
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// var isSameTree = function (p, q) {
//   if (p === null && q === null) {
//     return true;
//   }
//   if (p === null || q === null) {
//     return false;
//   }
//   if (p.val !== q.val) {
//     return false;
//   }
//   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// };

// console.log(isSameTree(root, root1));

// 从前序与中序遍历序列构造二叉树
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// var buildTree = function (preorder, inorder) {};

// 给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。
// let root3 = new TreeNode(1);
// root3.right = new TreeNode(2);
// root3.left = null;

// var hasPathSum = function (root, targetSum) {
//   if (root === null) return false;
//   return preorderTraversal(root, targetSum, 0);
// };
// function preorderTraversal(root, targetSum, chainSum) {
//   let curChainSum = chainSum + root.val;
//   if (root.left === null && root.right === null) {
//     return curChainSum === targetSum;
//   }
//   return !!(
//     (root.left && preorderTraversal(root.left, targetSum, curChainSum)) ||
//     (root.right && preorderTraversal(root.right, targetSum, curChainSum))
//   );
// }
// console.log("hasPathSum", hasPathSum(root3, 0));

//
let root = new TreeNode(1);
root.left = new TreeNode(2, new TreeNode(4), new TreeNode(5));
root.right = new TreeNode(3);

var countNodes = function (root) {
  const maxLevel = getLevel(root, "left");
  if (maxLevel === getLevel(root, "right")) {
    return Math.pow(2, maxLevel) - 1;
  }

  var missCount = 0;
  // debugger;
  findMissCount(root, 1);

  return Math.pow(2, maxLevel) - 1 - missCount;

  function findMissCount(root, level) {
    if (root.left === null && root.right === null) {
      // debugger;
      if (level < maxLevel) {
        missCount += 2;
        return true;
      } else {
        return false;
      }
    }
    if (root.left === null || root.right === null) {
      debugger;
      missCount += 1;
      return false;
    }
    // debugger;
    return (
      findMissCount(root.right, level + 1) &&
      findMissCount(root.left, level + 1)
    );
  }
};
function getLevel(root, next) {
  if (root === null) return 0;
  return getLevel(root[next], next) + 1;
}

console.log(countNodes(root));
