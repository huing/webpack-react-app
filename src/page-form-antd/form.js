import React from 'react'
import {observer} from 'mobx-react'
import {toJS, action, observable} from 'mobx'
import cls from 'classnames'
import * as antd from 'antd'
const {Form, Input, Select, Tooltip} = antd

const FormItem = Form.Item
const {Option} = Select
const {TextArea} = Input

const formLayout = {
  wrapperCol: {
    span: 21,
  },
  colon: false,
}

@observer 
class PageForm extends React.Component {
  @observable displayBlock = true // 是否折叠 默认折叠

  @action handleSubmit = e => {
    e.preventDefault()
    const {form, submit} = this.props
    form.validateFields((errors, values) => {
      if (errors) {
        return
      }
      submit(values)
    })
  }

  @action handleClick = () => {
    this.displayBlock = !this.displayBlock
  }

  render() {
    const {
      depEnvData,
      values,
      form: {
        getFieldDecorator,
      },
    } = this.props
    const record = toJS(values) || {}
    const http = ['POST', 'GET', 'DELETE', 'PUT']

    // const formItems = formData.map(k => {
    //   const Comp = antd[k.comp]
    //   return (
    //     <FormItem
    //       {...formLayout}
    //       label={k.label}
    //       key={k.decorator}
    //     >
    //       {getFieldDecorator(`${k.decorator}`, {
    //         initialValue: [],
    //         // validateTrigger: ['onChange', 'onBlur'],
    //         rules: k.rules,
    //       })(<Comp />)}
    //     </FormItem>
    //   )
    // })

    return (
      <Form className="api-form" onSubmit={this.handleSubmit} hideRequiredMark>
        <FormItem {...formLayout} label="API名称">
          {getFieldDecorator('apiName', {
            initialValue: record.apiName,
            rules: [{
              required: true,
              message: '请输入API名称，仅限字母、数字和下划线，且长度范围3-128位，必填',
            }, {
              pattern: /^[0-9a-zA-Z_]*$/,
              message: '仅限字母、数字和下划线',
            }, {
              min: 3,
              message: '长度范围3-128位',
            }, {
              max: 128,
              message: '长度范围3-128位',
            }],
          })(
            <Input
              placeholder="请输入API名称，仅限字母、数字和下划线，且长度范围3-128位，必填"
              autoComplete="off"
            />
          )}
        </FormItem>
        <FormItem {...formLayout} label="API分组">
          {getFieldDecorator('apiGroup', {
            initialValue: record.apiGroup || '默认分组',
            rules: [{
              required: true,
              message: '请选择分组',
            }],
          })(
            <Select>
              <Option value="默认分组">默认分组</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formLayout} label="HTTP请求方式">
          {getFieldDecorator('http', {
            initialValue: record.http || 'POST',
            rules: [{
              required: true,
              message: '请选择HTTP请求方式',
            }],
          })(
            <Select style={{width: 120}}>
              {
                toJS(http).map(item => <Option key={item} value={item}>{item}</Option>)
              }
            </Select>
          )}
        </FormItem>
        <FormItem {...formLayout} label="返回类型">
          {getFieldDecorator('json', {
            initialValue: record.json || 'JSON',
            rules: [{
              required: true,
              message: '请选择返回类型',
            }],
          })(
            <Select style={{width: 120}}>
              <Option value="JSON">JSON</Option>
            </Select>
          )}
        </FormItem>
        <FormItem {...formLayout} label="部署环境">
          {getFieldDecorator('depEnv', {
            initialValue: record.depEnv,
            rules: [{
              required: true,
              message: '请选择部署环境',
            }],
          })(
            <Select placeholder="请选择">
              {
                toJS(depEnvData || []).map(item => <Option key={item.id} value={item.value}>{item.value}</Option>)
              }
            </Select>
          )}
        </FormItem>
        <FormItem {...formLayout} label="描述">
          {getFieldDecorator('desc', {
            initialValue: record.desc,
            rules: [{
              required: true,
              message: '必填，最多512个字符',
            }, {
              max: 521,
              message: '最多512个字符',
            }],
          })(
            <TextArea placeholder="必填，最多512个字符" />
          )}
        </FormItem>
        <button
          type="button"
          className="collapse-btn"
          onClick={this.handleClick}
        >
          高级配置&nbsp;
        </button>
        <div 
          className={cls({
            'item-count': true,
            show: !!this.displayBlock,
          })}
          id="formInput"
        >
          <FormItem {...formLayout} label="调用次数限制">
            {getFieldDecorator('count', {
              initialValue: record.count || 1500,
              rules: [{
                required: true,
                message: '请输入次数',
              }, {
                validator: (rule, value, callback) => {
                  if (value && value > 1500) {
                    callback('单用户每秒调用次数不超过1500次')
                  } else {
                    callback()
                  }
                },
              }],
            })(
              <Input />
            )}
          </FormItem>
          <Tooltip
            className="count-tooltip"
            title="单用户每秒调用次数，不超过1500次"
          >
            123
          </Tooltip>
        </div>

        <button type="submit" className="mt68">提交</button>
      </Form>
    )
  }
}
export default Form.create()(PageForm)
