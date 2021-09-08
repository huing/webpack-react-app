// https://leetcode-cn.com/problems/01-matrix/

// function dfs(grid, sr, sc) {
//     if (sr < 0 || sr >= grid.length || sc < 0 || sc >= grid[0].length) {
//         return 0
//     }
//     if (grid[sr][sc] === 1) {
//         grid[sr][sc] = 0
//         return (
//             dfs(grid, sr - 1, sc) +
//             dfs(grid, sr, sc - 1) +
//             dfs(grid, sr + 1, sc) +
//             dfs(grid, sr, sc + 1) +
//             1
//         )
//     }
//     return 0
// }

/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = function (mat) {
  // for (let i = 0; i < mat.length; i++) {
  //     for (let j = 0; j < mat[i].length; j++) {
  //         dfs(mat, i, j)
  //     }
  // }
}
updateMatrix([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
])
updateMatrix([
  [0, 0, 0],
  [0, 1, 0],
  [1, 1, 1],
])
