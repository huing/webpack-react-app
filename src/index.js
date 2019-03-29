import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {LocaleProvider} from 'antd'
import {BrowserRouter as Router} from 'react-router-dom'
import zhCNAntd from 'antd/lib/locale-provider/zh_CN'
import enUSAntd from 'antd/lib/locale-provider/en_US'
import zhIntl from 'react-intl/locale-data/zh'
import enIntl from 'react-intl/locale-data/en'
// import moment from 'moment'
import 'moment/locale/zh-cn'

import {setIntlObject, addLocaleData, IntlProvider, intlShape} from './locales'
import enUSMSg from './locales/en-US'
import zhCNMsg from './locales/zh-CN'

import './index.css'
import './common/common.styl'
import Frame from './frame'
// import * as serviceWorker from './serviceWorker'

const localeInfo = { 
  'en-US': {
    messages: {...enUSMSg},
    locale: 'en-US',
    antd: enUSAntd,
    data: enIntl,
    momentLocale: '',
  },
  'zh-CN': {
    messages: {...zhCNMsg},
    locale: 'zh-CN',
    antd: zhCNAntd,
    data: zhIntl,
    momentLocale: 'zh-cn',
  },
}

let appLocale = {
  locale: 'zh-CN',
  messages: {},
  data: require('react-intl/locale-data/zh'),
  momentLocale: 'zh-cn',
}

if (localStorage.getItem('umi_locale') && localeInfo[localStorage.getItem('umi_locale')]) {
  appLocale = localeInfo[localStorage.getItem('umi_locale')]
} else if (localeInfo[navigator.language]){
  appLocale = localeInfo[navigator.language]
} else {
  appLocale = localeInfo['zh-CN'] || appLocale
}
window.g_lang = appLocale.locale
appLocale.data && addLocaleData(appLocale.data)

class App extends Component {
  render() {
    return (
      <LocaleWrapper>
        <Router>
          <Frame />
        </Router>
      </LocaleWrapper>
    )
  }
}
const InjectedWrapper = (() => {
  let sfc = (props, context) => {
    setIntlObject(context.intl)
    return props.children
  }
  sfc.contextTypes = {
    intl: intlShape,
  }
  return sfc
})()

export function LocaleWrapper(props) {
  let ret  = props.children 
  ret = (
    <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
      <InjectedWrapper>{ret}</InjectedWrapper>
    </IntlProvider>
  )
  ret = (
    <LocaleProvider locale={appLocale.antd ? (appLocale.antd.default || appLocale.antd) : zhCNAntd}>
      {ret}
    </LocaleProvider>
  )
  return ret
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))
// serviceWorker.unregister()
