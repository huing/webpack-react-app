import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {observable, toJS, action} from 'mobx'
import cls from 'classnames'
import './index.styl'


@observer 
class DemoForm extends Component {
  @observable objValue = {}

  @action handleSubmit = e => {
    e.preventDefault()
    console.log(toJS(this.objValue))
  }

  @action handleError = (name, value) => {
    console.log(typeof name, value)
    let flag = true

    const pattern = {
      email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      name: /^\d{6}/g,
      password: /\s+/g,
    }

    switch(name) {
      case 'email': 
        flag = pattern.email.test(value)
        if (!flag) {
          this.objValue[name].error = '邮箱格式不正确'
        } else {
          this.objValue[name].error = undefined
        }
        break
      case 'name': 
        flag = pattern.name.test(value)
        if (!flag || value.length !== 6) {
          this.objValue[name].error = '验证码不正确'
        } else {
          this.objValue[name].error = undefined
        }
        break
      case 'password': 
        flag = pattern.password.test(value)
        if (flag) {
          this.objValue[name].error = '密码不能包含空格'
        } else if (value.length < 6 || value.length > 20) {
          this.objValue[name].error = '密码应为6-20位'
        } else {
          this.objValue[name].error = undefined
        }
        break
      case 'newpassword': 
        if (this.objValue[name].value !== this.objValue.password.value) {
          this.objValue[name].error = '两次密码不一样'
        } else {
          this.objValue[name].error = undefined
        }
        break
      default: break
    }

    return flag
  }

  @action handleChange = e => {
    // this.objValue= Object.assign({}, this.objValue, {
    //   [e.target.name]: e.target.value.trim(),
    // })
    this.objValue = {...this.objValue,
      [e.target.name]: {
        value: e.target.value.trim(),
        error: undefined,
      },
    }
    this.handleError(e.target.name, e.target.value)
  }
  
  render() {

    console.log(!!this.objValue.email && !!this.objValue.email.value)

    return (
      <div className="page-form">
        <div className="mt30">
          <form  className="demo-form" autoComplete="off" onSubmit={this.handleSubmit} onChange={this.handleChange} >

            <div className={cls({
              'form-item': true,
              'no-empty-state': !!this.objValue.email && !!this.objValue.email.value,
            })} >
              <input className="form-item-input" type="email" name="email" id="email"  />
              <label className="form-item-label" htmlFor="email">email</label>
              <div className="field-line">
                <hr className={cls({
                  'input-line ': true,
                  'focus-line error': false,
                })} /> 
              </div>
              <div className="input-error">{!!this.objValue.email && this.objValue.email.error}</div>
            </div>
            
            <div className={cls({
              'form-item': true,
              'no-empty-state': !!toJS(this.objValue.name),
            })} >
              <input className="form-item-input" type="text" name="name" id="name"  />
              <label className="form-item-label" htmlFor="name">name</label>
              <div className="field-line">
                <hr className={cls({
                  'input-line ': true,
                  'focus-line error': false,
                })} /> 
              </div>
              <div className="input-error">{!!this.objValue.name && this.objValue.name.error}</div>
            </div>

            <div className={cls({
              'form-item': true,
              'no-empty-state': !!this.objValue.password,
            })} >
              <input className="form-item-input" type="text" name="password" id="password" />
              <label className="form-item-label" htmlFor="password">password</label>
              <div className="field-line">
                <hr className={cls({
                  'input-line ': true,
                  'focus-line error': false,
                })} /> 
              </div>
              <div className="input-error">{!!this.objValue.password && this.objValue.password.error}</div>
            </div>

            <div className={cls({
              'form-item': true,
              'no-empty-state': !!this.objValue.newpassword,
            })} >
              <input 
                className="form-item-input" 
                type="text" 
                name="newpassword" 
                id="newpassword" 
                onBlur={e => this.handleError(e.target.name, e.target.value)}
              />
              <label className="form-item-label" htmlFor="newpassword">newpassword</label>
              <div className="field-line">
                <hr className={cls({
                  'input-line ': true,
                  'focus-line error': false,
                })} /> 
              </div>
              <div className="input-error">{!!this.objValue.newpassword && this.objValue.newpassword.error}</div>
            </div>

            <div className="form-item">
              <button type="submit">Submit</button>
            </div> 

          </form>
        </div>
      </div>
    )
  }
}
export default DemoForm


/* eslint-disable */
