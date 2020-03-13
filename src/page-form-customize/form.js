import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {observable, toJS, action} from 'mobx'
import cls from 'classnames'
import DragSilde from '../drag-silde'
import './index.styl'

@observer 
class DemoForm extends Component {
  @observable objValue = {}

  @observable objError = {}

  @action handleSubmit = e => {
    e.preventDefault()
    console.log(toJS(this.objValue), toJS(this.objError), 
      JSON.stringify(toJS(this.objValue)), JSON.stringify(toJS(this.objError)))
    if (JSON.stringify(toJS(this.objValue)) === '{}') {
      this.handleError()
    } 
  }

  @action verify = value => {
    console.log(value)
  }

  @action handleError = (name, value) => {
    let flag = true
    const pattern = {
      email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      name: /^\d{6}/g,
      password: /\s+/g,
    }
    switch (name) {
      case 'email': 
        flag = pattern.email.test(value)
        if (!flag) {
          this.objError = {...this.objError, email: '邮箱格式不正确'}
        } else {
          this.objError = {...this.objError, email: undefined}
        }
        break
      case 'name': 
        flag = pattern.name.test(value)
        if (!flag || value.length !== 6) {
          this.objError = {...this.objError, name: '验证码不正确'}
        } else {
          this.objError = {...this.objError, name: undefined}
        }
        break
      case 'password': 
        flag = pattern.password.test(value)
        if (flag) {
          this.objError = {...this.objError, password: '密码不能包含空格'}
        } else if (value.length < 6 || value.length > 20) {
          this.objError = {...this.objError, password: '密码应为6-20位'}
        } else {
          this.objError = {...this.objError, password: undefined}
        }
        // document.getElementById("newpassword").focus()
        break
      case 'newpassword':
        if (this.objValue.newpassword !== this.objValue.password) {
          this.objError = {...this.objError, newpassword: '两次密码不一样'}
        } else {
          this.objError = {...this.objError, newpassword: undefined}
        }
        break
      default: 
        this.objError = {...this.objError, email: '邮箱必填'}
        this.objError = {...this.objError, name: '验证码必填'}
        this.objError = {...this.objError, password: '密码必填'}
        break
    }
    return flag
  }

  @action handleChange = e => {
    // this.objValue= Object.assign({}, this.objValue, {
    //   [e.target.name]: e.target.value.trim(),
    // })
    this.objValue = {
      ...this.objValue,
      [e.target.name]: e.target.value.trim(),
    }
    this.handleError(e.target.name, e.target.value)
  }
  
  render() {
    return (
      <div className="page-form">
        <form className="demo-form" autoComplete="off" onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className={cls({
            'form-item': true,
            'no-empty-state': !!this.objValue.email,
          })}
          >
            <label className="form-item-label" htmlFor="email">              
              <input className="form-item-input" type="email" name="email" id="email" />
              <div className="label-name">email</div>
            </label>
            <div className="field-line">
              <hr className={cls({
                'input-line ': true,
                'focus-line error': false,
              })}
              /> 
            </div>
            <div className="input-error">{this.objError.email}</div>
          </div>
          <DragSilde
            verify={this.verify}
            name="drag-silde"
          />
          
          <div className={cls({
            'form-item': true,
            'no-empty-state': !!toJS(this.objValue.name),
          })}
          >
            <label className="form-item-label" htmlFor="name">
              
              <input className="form-item-input" type="text" name="name" id="name" />     
              <div className="label-name">name</div>         
            </label>
            <div className="field-line">
              <hr className={cls({
                'input-line ': true,
                'focus-line error': false,
              })} 
              /> 
            </div>
            <div className="input-error">{this.objError.name}</div>
          </div>

          <div className={cls({
            'form-item': true,
            'no-empty-state': !!this.objValue.password,
          })}
          >
            <label className="form-item-label" htmlFor="password">
              
              <input 
                className="form-item-input" 
                type="text" 
                name="password" 
                id="password"
                onBlur={() => this.handleError('newpassword')}
              /> 
              <div className="label-name">password</div>             
            </label>
            <div className="field-line">
              <hr className={cls({
                'input-line ': true,
                'focus-line error': false,
              })} 
              /> 
            </div>
            <div className="input-error">{this.objError.password}</div>
          </div>

          <div className={cls({
            'form-item': true,
            'no-empty-state': !!this.objValue.newpassword,
          })} 
          >
            <label className="form-item-label" htmlFor="newpassword">
              
              <input 
                className="form-item-input" 
                type="text" 
                name="newpassword" 
                id="newpassword" 
              />     
              <div className="label-name">newpassword</div>         
            </label>
            <div className="field-line">
              <hr className={cls({
                'input-line ': true,
                'focus-line error': false,
              })} 
              /> 
            </div>
            <div className="input-error">{this.objError.newpassword}</div>
          </div>

          <button type="submit" className="form-item-btn">Submit</button> 

        </form>
      </div>
    )
  }
}
export default DemoForm