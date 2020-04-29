import { observable, action, runInAction } from 'mobx'
import {isObj, hasSomeKey} from '@util'

class Store {
  $params = {}
  $listApi = null
  $filters = {}
  $sorter = {}
  $pageSize = 20
  $initialParams = {}
  //不需要在最后发请求时传递的参数名
  $ignoreParams = []
  $getListApi = () => {
    return this.$listApi
  }
  @observable $list = []
  @observable $loading = false
  @observable
  $pagination = {
    showQuickJumper: true,
    showTotal: total => `共 ${total} 条`,
    showSizeChanger: false,
    current: 1,
    pageSize: this.$pageSize,
    total: 0
  }
  @observable $selectedRowKeys = []
  @action
  $onSelectChange = keys => {
    this.$selectedRowKeys = keys
  }
  @action
  $paging = ({ current, pageSize }, filters, sorter) => {
    this.$filters = filters
    this.$sorter = sorter
    this.$pagination.current = current
    this.$pagination.pageSize = pageSize
    this.$getList(current)
  }
  @action
  $getList = async (page = this.$pagination.current, params) => {
    this.$loading = true
    if (isObj(page)) {
      params = page
      page = this.$pagination.current
    }
    // if(this.$list.length===1){
    //     page=1
    // } 这段代码影响到最后一页只有一条数据时翻页都到第一页
    const resParams = {
      page,
      currPage: page,
      pageSize: this.$pageSize,
      limit: this.$pageSize,
      ...this.$initialParams,
      ...this.$getParams(),
      ...params
    }
    for (let key of this.$ignoreParams) {
      delete resParams[key]
    }
    const { data } = await this.$getListApi()(resParams)
    runInAction(() => {
      this.$afterGet(data, page)
    })
  }
  $initParams = (value) => {
    this.$initialParams = value
    this.$params = Object.assign({}, this.$initialParams, this.$params)
  }
  $resetParams = () => {
    this.$params = Object.assign({}, this.$initialParams)
  }
  $clearParams = () => {
    this.$initialParams = {}
    this.$params = {}
  }
  @action
  $afterGet = (data, page) => {
    const { list, length, totalRecord } = data
    this.$list = list || []
    this.$pagination.total = length ? +length : +totalRecord
    this.$pagination.current = page
    this.$selectedRowKeys = []
    this.$loading = false
    this.$extraOp && this.$extraOp(data, page)
  }
  $search = () => {
    this.$getList(1)
  }
  $getParams() {
    return this.$params
  }
  $setParams = (values, noNeed) => {
    if (values) {
      this.$params = Object.assign({}, this.$params, values)
    } else {
      this.$resetParams()
    }
    if (!hasSomeKey(values, noNeed)) {
      this.$getList(1)
    }
  }
}
export default Store