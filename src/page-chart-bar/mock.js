import MockJS, { Random } from "mockjs";

const { list } = MockJS.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  "list|5-15": [
    {
      // 属性 id 是一个自增数，起始值为 1，每次增 1
      "id|+1": 1,
      "lockCount|1-100": 1,
      month: '@date("yyyy-MM")',
      month1: () => Random.date("yyyy-MM"),
    },
  ],
});

export { list as mockData };

// [{
//   lockCount: 1,
//   month: '2018-07',
// }, {
//   lockCount: 1,
//   month: '2018-08',
// }, {
//   lockCount: 61,
//   month: '2018-09',
// }, {
//   lockCount: 16,
//   month: '2018-10',
// }, {
//   lockCount: 17,
//   month: '2018-11',
// }, {
//   lockCount: 71,
//   month: '2018-12',
// }, {
//   lockCount: 1,
//   month: '2019-01',
// }, {
//   lockCount: 71,
//   month: '2019-02',
// }, {
//   lockCount: 1,
//   month: '2019-03',
// }, {
//   lockCount: 1,
//   month: '2019-04',
// }, {
//   lockCount: 11,
//   month: '2019-05',
// }]
