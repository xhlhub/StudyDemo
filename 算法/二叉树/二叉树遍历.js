// 构建一个简单的二叉树
//          3
//       /     \
//       9     20
//     /  \   /  \
//    5    8  15   7
//   / \  / \
//   4 2  7 1

// 先序遍历：先访问根节点，然后遍历左子树，最后遍历右子树
// 前序 当前节点 -> 左子树 -> 右子树
// 1. 访问根节点
// 2. 递归遍历左子树
// 3. 递归遍历右子树

// 中序 左子树 -> 当前节点 -> 右子树
// 1. 递归遍历左子树
// 2. 访问根节点
// 3. 递归遍历右子树

// 后序 左子树 -> 右子树 -> 当前节点
// 1. 递归遍历左子树
// 2. 递归遍历右子树
// 3. 访问根节点

// 记忆规律: 左子树、右子树的顺序不变，当前节点位置决定了，前中后序
// 当前节点在前就是前序，在中间中序，在后面后序！

// 前 [3,9,5,4,2,8,7,1,20,15,7]
// 中 [4,5,2,9,7,8,1,3,15,20,7]
// 后 [4,2,5,7,1,8,9,15,7,20,3]

/**
 *Definition for a binary tree node.
 * function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
 */

/**
 * @param { root } TreeNode
 */

function preorderTraversal(root) {
  console.log(root.val);
  root.left && preorderTraversal(root.left);
  root.right && preorderTraversal(root.right);
}
function inorderTraversal(root) {
  root.left && inorderTraversal(root.left);
  console.log(root.val);
  root.right && inorderTraversal(root.right);
}
function postTraversal(root) {
  root.left && postTraversal(root.left);
  root.right && postTraversal(root.right);
  console.log(root.val);
}

var buildTree = function (preorder, inorder) {};
