import React, { useEffect, useState } from 'react'
import { Select } from 'antd'
// import request from '@/utils/request';
// type TableListItem = {
//     id: number;
//     regionName: string;
// };
interface Props<T> {
  list: T[]
}
const RegionalSelect: React.FC<Props<any>> = (props) => {
  const { list } = props
  return (
    <Select
      {...props}
      allowClear
      showSearch
      // showArrow={false}
      placeholder="请选择"
      // notFoundContent={null}
      filterOption={(input, option) => {
        // console.log(input, option);
        return option?.children.indexOf(input) >= 0
      }}
      mode="multiple"
    >
      {(list || []).map((item) => (
        <Select.Option key={item.id} value={item.id}>
          {item.regionName}
        </Select.Option>
      ))}
    </Select>
  )
}

export default RegionalSelect
