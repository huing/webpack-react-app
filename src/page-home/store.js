import {action, runInAction, observable} from 'mobx'
import moment from 'moment'
import API from '../api'

class Store {
  @observable value = null

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
  
    const obj1 = {}
    const obj =  Object.entries(date).map(item => {
      obj1[item[0]] = (item[1] || []).map(sub => ({
        ...sub,
        diff: moment(sub.end_time).diff(moment(sub.start_time), 'days'),
        day: item[0],
      }))
      return obj1[item[0]]
    })
    console.info(date)
    console.info(obj)
    console.info(obj1)
    obj.reduce((acc, cur) => {
      (cur || []).map((item, index) => {
        if (item.diff > 0) {
          // console.log(item)
          for (let i = 1; i <= item.diff; i += 1) {
            console.log(item.day, moment(item.day).add(i, 'days').format('YYYY-MM-DD'))
            obj1[moment(item.day).add(i, 'days').format('YYYY-MM-DD')].splice(index, 0, {...item, diff: item.diff - 1})
          }
        }
      })
      return [...acc, cur]
    }, [])
    console.info(obj)
    console.info(obj1)
  }
}
export default new Store()
