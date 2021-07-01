function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
function getRoot(root, index, tree) {
  if (index === root.length) {
    return tree;
  }
  console.log(index >> 1, index << 1);
  let val = root[index];
  let left = root[(index << 1) + 1];
  let right = root[(index << 1) + 2];

  console.log(val, left, right);

  getRoot(root, index + 1, tree);
  // tree = new TreeNode(val, left, right);
  // tree.val = root[index];
  // if (index > root.length - 1 ? undefined : root[index + 1]) {
  //   console.log("left");
  //   tree.left = getRoot(root, index + 1, tree);
  // }
  // if (index > root.length - 2 ? undefined : root[index + 2]) {
  //   console.log("right");
  //   tree.right = getRoot(root, index + 2, tree);
  // }
  return tree;
}
console.log(getRoot([1, null, 2, 3], 0, {}));
console.log(getRoot([3, 9, 20, null, null, 15, 7], 0, {}));
