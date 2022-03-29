import React, { useState } from 'react';
import './index.less';

interface FileDTO {
  lastModified: number;
  lastModifiedDate: number;
  name: string;
  size: number;
  // 文件的 MIME 类型，只读字符串，当类型不能确定时为 ""。
  type: 'video/mp4';
  webkitRelativePath: string;
}

const PageCSS: React.FC<{}> = () => {
  const [fileList, setFileList] = useState<FileDTO[]>([]);
  const maxCount = 2;

  // 访问被选择的文件
  /* 
  const selectedFile = document.getElementById('input').files[0];
 */

  // change监听器
  /* 
  const inputElement = document.getElementById("input");
  inputElement.addEventListener("change", handleFiles, false);
  function handleFiles() {
    const fileList = this.files; 
  } 
  */

  // 通过onchange
  const handleChange = (event) => {
    const files: FileDTO[] = Array.from(event.target.files);
    console.table(files);
    const extraFile = files.splice(maxCount, files.length);
    if (extraFile.length) {
      console.log('传多了');
    }
    // console.log(2, files);
    setFileList([...fileList, ...files]);
    // updateSize(files);
  };
  console.table(fileList);

  return (
    <div className="page-css">
      <input
        type="file"
        id="fileElem"
        multiple
        onChange={handleChange}
        className="visually-hidden"
      />
      <label htmlFor="fileElem" className="input-label">
        Select some files
      </label>
    </div>
  );
};

export default PageCSS;

// const arr = [
//   {
//     a: 0,
//   },
//   {
//     a: 1,
//   },
//   {
//     a: 2,
//   },
// ];
