import React, {Component} from 'react'
import {observer} from 'mobx-react'
import {action} from 'mobx'
import './index.styl'

@observer 
class PageModal extends Component {
  @action handleBtnClick = () => {
    document.getElementById('myModal').style.display = 'block'
  }
  @action handleCloseBtn = () => {
    document.getElementById('myModal').style.display = 'none'
  }
  render() {
    return (
      <div className="page-modal">
        <button 
          type="button" 
          className="btn btn-info btn-lg" 
          data-toggle="modal" 
          data-target="#myModal"
          id="myBtn"
          onClick={this.handleBtnClick}
        >
          Open Modal
        </button>

        <div id="myModal" className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span 
                className="close" 
                data-dismiss="modal"
                id="closeBtn"
                // onClick={this.handleCloseBtn}
              >
                &times;
              </span>
              <h4 className="modal-title">Modal Header</h4>
            </div>
            
            <div className="modal-body">
              <p>Some text in the modal...</p>
            </div>
          </div>
        </div>
        {/* <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Modal Header</h4>
              </div>
              <div className="modal-body">
                <p>Some text in the modal.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div> */}
      </div> 
    )
  }
}
export default PageModal
