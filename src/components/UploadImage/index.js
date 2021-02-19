import React from 'react';
import { Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Api from '../../api';

export default class UploadImage extends React.Component {
  static defaultProps = {
    count: 99,
  };
  constructor(props) {
    super(props);
    this.state = {
      qnToken: '',
    };
    this.getQiniuToken();
  }
  getQiniuToken = async () => {
    const { qnToken } = await Api.getQiniuTokenApi();
    this.setState({ qnToken });
  };
  beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      console.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 10;
    if (!isLt2M) {
      console.error('Image must smaller than 10MB!');
    }
    return isJpgOrPng && isLt2M;
  };
  handleChange = (info) => {
    if (info.file.status === 'uploading')  {
      this.props.onChange([...info.fileList]);
    }
    if (info.file.status === 'done') {
      const fileList = [...info.fileList]
      const last = fileList.pop()
      this.props.onChange([...fileList, {...last, url: `${last.response.domain}/${last.response.hash}`}]);
    }
  };
  render() {
    const { qnToken } = this.state;
    const { value, count } = this.props
    return (
      <Upload
        name="file"
        action="https://upload.qiniup.com"
        data={{ token: qnToken }}
        listType="picture-card"
        beforeUpload={this.beforeUpload}
        onChange={this.handleChange}
        fileList={value}
        multiple
      >
        {
          count > (value || []).length && (
            <div>
              <PlusOutlined />
              <div className="ant-upload-text">Upload</div>
            </div>
          )
        }
      </Upload>
    );
  }
}
