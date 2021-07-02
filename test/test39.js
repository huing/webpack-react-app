// https://leetcode-cn.com/problems/chuan-di-xin-xi/

var numWays = function (n, relation, k) {
  let ways = 0;
  const edges = new Array(n).fill(0).map(() => new Array(0));
  console.log("edges---1>", edges);
  for (const [src, dst] of relation) {
    edges[src].push(dst);
  }
  console.log("edges---2>", edges);
  const dfs = (index, steps) => {
    if (steps === k) {
      if (index === n - 1) {
        ways++;
      }
      return;
    }
    const list = edges[index];
    for (const nextIndex of list) {
      dfs(nextIndex, steps + 1);
    }
  };

  dfs(0, 0);
  return ways;
};

console.log(
  numWays(
    5,
    [
      [0, 2],
      [2, 1],
      [3, 4],
      [2, 3],
      [1, 4],
      [2, 0],
      [0, 4],
    ],
    3
  )
);
