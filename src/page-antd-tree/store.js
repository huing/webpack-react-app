import {observable, action} from 'mobx'

class TreeStore {
  @observable obj1 = []

  @action Fun = data => data.reduce((acc, cur) => [...acc, {children: cur.children, ...cur.parent}], [])

  @action changeData = data => {
    for (let i = 0; i < data.length; i += 1) {
      // console.info(toJS(data[i]))
      if (data[i].children) {
        this.changeData(data[i].children)
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
      children: [{
        parent: {
          key: 11,
          title: 11,
        },
        children: [],
      }],
    },
    {
      parent: {
        key: 2,
        title: 2,
      },
      children: [
        {
          parent: {
            key: 21,
            title: 21,
          },
          children: [],
        },
        {
          parent: {
            key: 22,
            title: 22,
          },
          children: [
            {
              parent: {
                key: 221,
                title: 221,
              },
              children: [
                {
                  parent: {
                    key: 2211,
                    title: 2211,
                  },
                  children: [],
                },
                {
                  parent: {
                    key: 2212,
                    title: 2212,
                  },
                  children: [],
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
      children: [
        {
          parent: {
            key: 31,
            title: 31,
          },
          children: [],
        },
      ],
    },
    {
      parent: {
        key: 4,
        title: 4,
      },
      children: [],
    },
  ]
}

export default new TreeStore()
