function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function getRoot(root, index, tree) {
  if (!root[index]) {
    return null;
  }
  // tree = new TreeNode(
  //   root[index],
  //   index > root.length - 1 ? undefined : root[index + 1],
  //   index > root.length - 2 ? undefined : root[index + 2]
  // );

  // if (index === root.length) {
  //   return tree;
  // }
  tree.val = root[index];
  if (index > root.length - 1 ? undefined : root[index + 1]) {
    console.log("left");
    tree.left = getRoot(root, index + 1, tree);
  }
  if (index > root.length - 2 ? undefined : root[index + 2]) {
    console.log("right");
    tree.right = getRoot(root, index + 2, tree);
  }
  return tree;
}
console.log(getRoot([1, null, 2, 3], 0, {}));

function preorder(root, res) {
  if (root === null) {
    return;
  }
  res.push(root.val);
  preorder(root.left, res);
  preorder(root.right, res);
}

var preorderTraversal = function (root) {
  // const nodeList = root.map((item, index) => ({
  //   [item]: ,
  // }));
  // console.log("--->", nodeList);
  // let res = [];
  // preorder(new TreeNode(item, index === 0 ? undefined : root[index - 1], index === root.length ? undefined : root[index + 1]), res);
  // let queue = [root];
  // if (!root) return [];
  // while (queue.length) {
  //   let arr = [],
  //     temp = [];
  //   while (queue.length) {
  //     let curr = queue.shift();
  //     arr.push(curr.val);
  //     if (curr.left) temp.push(curr.left);
  //     if (curr.right) temp.push(curr.right);
  //   }
  //   queue = temp;
  //   res.push(arr);
  // }
  // return res;
};
preorderTraversal([1, null, 2, 3]);
preorderTraversal([1, null, 2, 3]);
preorderTraversal([]);
preorderTraversal([1]);
preorderTraversal([1, 2]);
preorderTraversal([1, null, 2]);

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
//  class Solution {
//   public List<Integer> preorderTraversal(TreeNode root) {
//       List<Integer> res = new ArrayList<Integer>();
//       preorder(root, res);
//       return res;
//   }

//   public void preorder(TreeNode root, List<Integer> res) {
//       if (root == null) {
//           return;
//       }
//       res.add(root.val);
//       preorder(root.left, res);
//       preorder(root.right, res);
//   }
// }
