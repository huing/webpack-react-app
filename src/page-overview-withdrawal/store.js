import {action, runInAction, observable} from 'mobx'
// import moment from 'moment'
import API from '../api'

class Store {
  @observable value = null

  @action Hello = async () => {
    await API.Hello({
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
}
export default new Store()
