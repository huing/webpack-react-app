import {action, runInAction, observable} from 'mobx'
import moment from 'moment'
import API from '../api'

class Store {
  @observable value = null

  @observable tab = ''

  @action changeTab = key => {
    console.log(key)
    runInAction(() => {
      this.tab = key
    })
  }

  @action Hello = async () => {
    const res = await API.Hello({
      firstName: 'firstName',
      lastName: 'lastName',
      age: 23,
      fullName: Date.now().toString(),
      birthday: '2019-10-14',
      isActive: true,
    })
    await API.CatsDetail()
  }

  @action getHomeValue = async (id = 1) => {
    try {
      const res = await API.Cats({
        id,
      })
      runInAction(() => {
        this.value = res.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  @action changeData = () => {
    const date = {
      '2019-10-23': [{
        start_time: '2019-10-23',
        end_time: '2019-10-23',
      }, {
        start_time: '2019-10-23',
        end_time: '2019-10-24',
      }],
      '2019-10-24': [{
        start_time: '2019-10-24',
        end_time: '2019-10-24',
      }, {
        start_time: '2019-10-24',
        end_time: '2019-10-26',
      }],
      '2019-10-25': [{
        start_time: '2019-10-25',
        end_time: '2019-10-25',
      }, {
        start_time: '2019-10-25',
        end_time: '2019-10-26',
      }],
      '2019-10-26': [{
        start_time: '2019-10-26',
        end_time: '2019-10-26',
      }]
    }
    this.getFun1(date)
    
    // obj.reduce((acc, cur) => {
    //   (cur || []).map((item, index) => {
    //     if (item.diff > 0) {
    //       // console.log(item)
    //       for (let i = 1; i <= item.diff; i += 1) {
    //         console.log(item.day, moment(item.day).add(i, 'days').format('YYYY-MM-DD'))
    //         obj1[moment(item.day).add(i, 'days').format('YYYY-MM-DD')].splice(index, 0, {...item, diff: item.diff - 1})
    //       }
    //     }
    //   })
    //   return [...acc, cur]
    // }, [])
  }
  @action getFun1 = date => {
    const arr1 = Object.entries(date).map(item => ({[item[0]]: (item[1] || []).map(sub => ({
      ...sub,
      diff: moment(sub.end_time).diff(moment(sub.start_time), 'days'),
      day: item[0],
    }))}))
    // const obj = arr1.reduce((acc, cur) => ({...acc, ...cur}), {})
    const obj = Object.assign({}, ...arr1)
    const arr = Object.entries(obj)
    // console.log('getFun1 obj', obj)
    // console.log('getFun1 arr', arr)
    this.getFun2(obj, arr)
    return {obj, arr}
  }
  @action getFun2 = (obj1, arr1) => {
    const obj = JSON.parse(JSON.stringify(obj1))
    // const arr2 = JSON.parse(JSON.stringify(arr1))
    const arr = arr1.map((top, topIndex) => (top[1] || []).map((item, index) => {
      if (item.diff > 0) {
        for (let i = 1; i <= item.diff; i += 1) {
          const nextday = moment(item.day).add(i, 'days').format('YYYY-MM-DD')
          // console.log(item.day, index, nextday, obj[nextday])
          obj[nextday].splice(index, 0, {...item, diff: item.diff - i})
        }
      }
      return item
    }))
    // console.info('obj1', obj1)
    // console.info('arr1', arr1)
    // console.info('arr2', arr2)
    console.info('obj', obj)
    console.info('arr', arr)
  }
}
export default new Store()
// function getListData(value) {
//   const obj = {
//     5: [
//       {
//         id: 1,
//         type: 1,
//         content: { nick: 'a1' },
//         nextDate: true
//       },
//       {
//         id: 3,
//         type: 1,
//         content: { nick: 'b2' }
//       }
//     ],
//     6: [
//       {
//         id: 1,
//         type: 1,
//         beforeDate: true,
//         content: { nick: 'a1' }
//       },
//       {
//         id: 3,
//         type: 1,
//         content: { nick: 'c2' }
//       },
//       {
//         id: 4,
//         type: 2,
//         content: { nick: 'b3' },
//         nextDate: true
//       }
//     ],
//     7: [
//       {
//         id: 1,
//         type: 2,
//         content: { nick: 'a1' }
//       },
//       {
//         id: 2,
//         type: 2,
//         before: [0],
//         beforeDate: true,
//         content: { nick: 'b3' }
//       },
//       {
//         id: 3,
//         type: 3,
//         content: { nick: 'e4' },
//         nextDate: true
//       }
//     ],
//     8: [
//       {
//         id: 1,
//         type: 1,
//         content: { nick: 'h1' },
//         next: [0],
//         nextDate: true
//       },
//       {
//         id: 2,
//         type: 1,
//         content: { nick: 'a3' },
//         nextDate: true
//       },
//       {
//         id: 3,
//         type: 3,
//         beforeDate: true,
//         content: { nick: 'e4' }
//       },
//       {
//         id: 4,
//         type: 2,
//         content: { nick: '5' }
//       },
//       {
//         id: 5,
//         type: 1,
//         content: { nick: '6' }
//       }
//     ],
//     9: [
//       {
//         id: 1,
//         type: 1,
//         beforeDate: true,
//         content: { nick: 'h1' }
//       },
//       {
//         id: 2,
//         type: 1,
//         content: { nick: 'm2' }
//       },
//       {
//         id: 3,
//         type: 1,
//         content: { nick: 'a3' },
//         nextDate: true,
//         beforeDate: true
//       },
//       {
//         id: 4,
//         type: 2,
//         content: { nick: '5' }
//       }
//     ],
//     10: [
//       {
//         id: 1,
//         type: 1,
//         content: { nick: 'a3' },
//         beforeDate: true,
//         before: [0, 0]
//       },
//       {
//         id: 2,
//         type: 3,
//         content: { nick: '4' }
//       }
//     ]
//   }
//   return obj[value.date()] || []
// }