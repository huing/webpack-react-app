
import {action} from 'mobx'
// import io from './io.js'

class DoorStore {

  @action getDoor = async () => {
    // const res = await io.getDoor({
    //   nameVague: '',
    //   hotelId: 3023,
    //   staffId: 697,
    // })
    // console.log(res)
  } 

  @action postDoor = async () => {
    // const res = await io.postDoor({
    //   buildingId: 901,
    //   floorId: 1783,
    //   doorType: 1,
    //   doorName: '109',
    //   hotelId: 3023,
    //   staffId: 697,
    // })
    // console.log(res)
  } 

}

export default new DoorStore()