import {observable, action, toJS} from 'mobx'

class TreeStore {
  @observable obj1 = []

  @action Fun = data => data.reduce((acc, cur) => [...acc, {children: cur.sun, ...cur.parent}], [])

  @action changeData = data => {
    for (let i = 0; i < data.length; i += 1) {
      console.info(toJS(data[i]))
      if (data[i].sun) {
        this.changeData(data[i].sun)
      }
      data[i] = {...data[i].parent, ...data[i]}
    }
    // return data
  }

  @observable treeData = [
    {
      parent: {
        key: 1,
        title: 1,
      },
      sun: [{
        parent: {
          key: 11,
          title: 11,
        },
        sun: [],
      }],
    },
    {
      parent: {
        key: 2,
        title: 2,
      },
      sun: [
        {
          parent: {
            key: 21,
            title: 21,
          },
          sun: [],
        },
        {
          parent: {
            key: 22,
            title: 22,
          },
          sun: [
            {
              parent: {
                key: 221,
                title: 221,
              },
              sun: [
                {
                  parent: {
                    key: 2211,
                    title: 2211,
                  },
                  sun: [],
                },
                {
                  parent: {
                    key: 2212,
                    title: 2212,
                  },
                  sun: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      parent: {
        key: 3,
        title: 3,
      },
      sun: [
        {
          parent: {
            key: 31,
            title: 31,
          },
          sun: [],
        },
      ],
    },
    {
      parent: {
        key: 4,
        title: 4,
      },
      sun: [],
    },
  ]
}

export default new TreeStore()
