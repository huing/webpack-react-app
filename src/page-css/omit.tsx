import React, { Component } from 'react'

class Omit extends Component {
  render() {
    return (
      <>
        <h3>文本省略效果 width 300px</h3>
        <div style={{ width: 300 }}>
          <p className={'omit'}>
            <span className={'red'}>一行省略</span>
            只要你肯联系我，再勇敢一次，重蹈覆辙又何妨？你若不联系我，那就顺其自然，实不相瞒，特别想你，但能克制。
          </p>
          <p className={'omit2'}>
            <span className={'red'}>两行省略</span>
            只要你肯联系我，再勇敢一次，重蹈覆辙又何妨？你若不联系我，那就顺其自然，实不相瞒，特别想你，但能克制。
          </p>
          <p className={'omit3'}>
            <span className={'red'}>三行省略</span>
            <span className={'fc9'}>
              只要你肯联系我，再勇敢一次，重蹈覆辙又何妨？你若不联系我，那就顺其自然，实不相瞒，特别想你，但能克制。
            </span>
            <span className={'fc5'}>
              只要你肯联系我，再勇敢一次，重蹈覆辙又何妨？你若不联系我，那就顺其自然，实不相瞒，特别想你，但能克制。
            </span>
          </p>
        </div>
      </>
    )
  }
}

export default Omit
