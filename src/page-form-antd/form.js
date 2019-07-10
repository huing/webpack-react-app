import React from 'react'
import {observer} from 'mobx-react'
import {toJS, action, observable} from 'mobx'
import cls from 'classnames'
import {Form, Input, Select, Icon, Tooltip} from 'antd'

@observer 
class PageForm extends React.Component {
  @observable displayBlock = false // 是否折叠 默认折叠

  @observable condition = {
    apiName: false, // 报错状态Icon，默认不报错 API名称
    count: false, // 报错状态Icon，默认不报错 调用次数限制
  }
  // @observable apiName = false // 报错状态Icon，默认不报错 API名称
  // @observable count = false // 报错状态Icon，默认不报错 调用次数限制

  @action handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((errors, values) => {
      if (errors) {
        return
      }
      this.props.submit(values)
    })
  }

  @action handleClick = () => {
    console.log(!!this.displayBlock)
    this.displayBlock = !this.displayBlock
  }

  render() {
    const {
      store,
      form: {
        getFieldDecorator,
      },
    } = this.props

    const values = toJS(store.values) || {}

    return (
      <Form className="api-form" onSubmit={this.handleSubmit}> 
        <Form.Item label="API名称" colon={false}>
          {getFieldDecorator('apiName', {
            initialValue: values.apiName,
            rules: [{
              validator: (rule, value, callback) => {
                this.condition.apiName = true
                if (!value) {
                  callback('请输入API名称，仅限字母、数字和下划线，且长度范围3-128位，必填')
                } else if (!/^[0-9a-zA-Z_]*$/g.test(value)) {
                  callback('仅限字母、数字和下划线')
                } else if (value.length < 3 || value.length > 128 ) {
                  callback('长度范围3-128位')
                } else {
                  this.condition.apiName = false
                  callback()
                }
              },
            }],
          })(
            <Input
              placeholder="请输入API名称，仅限字母、数字和下划线，且长度范围3-128位，必填"
              autoComplete="off"
              suffix={this.condition.apiName ? <Icon type="close-circle" style={{color: 'red'}} /> : <span />}
            />
          )}
        </Form.Item>
        <Form.Item label="API分组" colon={false} >
          {getFieldDecorator('apiGroup', {
            initialValue: values.apiGroup || '默认分组',
            rules: [{
              validator: (rule, value, callback) => {
                if (!value) {
                  callback('请选择分组')
                } else {
                  callback()
                }
              },
            }],
          })(
            <Select allowClear>
              <Select.Option value="默认分组" > 默认分组 </Select.Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="HTTP请求方式" colon={false} >
          {getFieldDecorator('http', {
            initialValue: values.http || 'POST',
            rules: [{
              validator: (rule, value, callback) => {
                if (!value) {
                  callback('请选择HTTP请求方式')
                } else {
                  callback()
                }
              },
            }],
          })(
            <Select style={{width: 120}} allowClear>
              <Select.Option value="POST"> POST </Select.Option>
              <Select.Option value="GET"> GET </Select.Option>
              <Select.Option value="DELETE"> DELETE </Select.Option>
              <Select.Option value="PUT"> PUT </Select.Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="返回类型" colon={false} >
          {getFieldDecorator('json', {
            initialValue: values.json || 'JSON',
            rules: [{
              validator: (rule, value, callback) => {
                if (!value) {
                  callback('请选择返回类型')
                } else {
                  callback()
                }
              },
            }],
          })(
            <Select  style={{width: 120}} allowClear>
              <Select.Option value="JSON"> JSON </Select.Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="部署环境" colon={false} >
          {getFieldDecorator('depEnv', {
            initialValue: values.depEnv,
            rules: [{
              validator: (rule, value, callback) => {
                if (!value) {
                  callback('请选择部署环境')
                } else {
                  callback()
                }
              },
            }],
          })(
            <Select placeholder="请选择" allowClear>
              {
                toJS(store.depEnvDate || []).map(item => 
                  <Select.Option key={item.id} value={item.value}> {item.value} </Select.Option>
                )
              }
            </Select>
          )}
        </Form.Item>
        <Form.Item label="描述" colon={false} >
          {getFieldDecorator('description', {
            initialValue: values.description,
            rules: [{
              validator: (rule, value, callback) => {
                if (!value) {
                  callback('必填，最多512个字符')
                } else if (value && value.length > 512) {
                  callback('最多512个字符')
                } else {
                  callback()
                }
              },
            }],
          })(
            <Input.TextArea placeholder="必填，最多512个字符" />
          )}
        </Form.Item>
        <button
          type="button"
          className="collapse-btn"
          onClick={this.handleClick}
        >
          高级配置&nbsp;
          <Icon 
            type="down" 
            className={cls({
              'collapse-btn-icon': true, 
              'transform': !!this.displayBlock,
            })} 
          />
        </button>
        <div className={cls({
          'item-count': true,
          'show': !!this.displayBlock,
        })}>
          <Form.Item label="调用次数限制" colon={false} >
            {getFieldDecorator('Count', {
              initialValue: values.Count || 1500,
              rules: [{
                validator: (rule, value, callback) => {
                  this.condition.count = true
                  if (!value) {
                    callback('请输入次数')
                  } else if (value && value > 1500) {
                    callback('单用户每秒调用次数不超过1500次')
                  } else {
                    this.condition.count = false
                    callback()
                  }
                },
              }],
            })(
              <Input suffix={this.condition.count ? <Icon type="close-circle" style={{color: 'red'}} /> : <span />} />
            )}
          </Form.Item>
          <Tooltip 
            className="count-tooltip"
            title="单用户每秒调用次数，不超过1500次"
          >
            <Icon type="question-circle-o" />
          </Tooltip>
        </div>

        <button type="submit" className="mt68">提交</button>
      </Form>
    )
  }
}
export default Form.create({})(PageForm)