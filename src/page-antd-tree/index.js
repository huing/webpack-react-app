import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {toJS} from 'mobx'
import {Tree} from 'antd'
import store from './store'
import './index.styl'

const {TreeNode} = Tree

@observer 
class DemoPage extends Component {
  constructor(props) {
    super(props)
    store.changeData(store.treeData)
  }
  renderTreeNodes = data => {
    data.map(item => {
      if (item.children) {
        console.log(1, item.title, item.key, toJS(item).children)
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        )
      }
      console.log(2, toJS(item).children)
      return <TreeNode key={item.key} {...item} />
    })
  }

  render() {
    console.log(toJS(store.treeData))
    return (
      <div className="demo-page">
        <Tree
          checkable
          showLine
          // expandedKeys={store.expandedKeys}
          // onExpand={this.onExpand}
          // checkedKeys={store.checkedKeys}
          // onCheck={this.onCheck}
        >
          {this.renderTreeNodes(toJS(store.treeData))}
        </Tree>
      </div> 
    )
  }
}
export default DemoPage
