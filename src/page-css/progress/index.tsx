import React from 'react'
import 'index.less'

const PageCSS: React.FC<{}> = () => {
  return (
    <div className="page-css">
      <progress value={70} max={100} className="my-progress">
        70%
      </progress>
    </div>
  )
}

export default PageCSS
