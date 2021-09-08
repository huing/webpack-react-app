// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val
//   this.left = left === undefined ? null : left
//   this.right = right === undefined ? null : right
// }

function TreeNode(root, n) {
  console.log(n, root.length)
  // return null
  if (n >= root.length - 2) {
    return null
  }
  if (root[n] === null) {
    return null
  }
  return {
    val: root[n],
    left: TreeNode(root, n + 1),
    right: TreeNode(root, n + 2),
  }
}

function getRoot(root) {
  let tree = {}
  tree = TreeNode(root, 0)
  console.log(tree)
  return tree
}
getRoot([1, null, 2, 3])
getRoot([3, 9, 20, null, null, 15, 7])
