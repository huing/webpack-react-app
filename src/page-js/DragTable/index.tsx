import React, { useState, useCallback, useRef, memo } from 'react';
import 'antd/dist/antd.css';
import './index.less';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { MenuOutlined } from '@ant-design/icons';
import Card from './card';

const type = 'DraggableBodyRow';

const RenderDrag = (props: React.ClassAttributes<HTMLSpanElement>) => (
  <span {...props}>
    <MenuOutlined style={{ cursor: 'grab', color: 'gray' }} />
  </span>
);
const DraggableRow = memo(
  (props: {
    row: any;
    data: any[];
    moveRow: (dragIndex: any, index: any) => void;
  }) => {
    const { row, data, moveRow } = props;
    const { className, style, children, ...restProps } = row;
    const rowKey = Number(restProps['data-row-key']);
    const index = data.findIndex((x) => x.id === rowKey);
    const ref = useRef(null);
    const [{ isOver, dropClassName }, drop] = useDrop({
      accept: type,
      collect: (monitor: any) => {
        const { index: dragIndex } = monitor.getItem() || {};
        if (dragIndex === index) {
          return {};
        }
        return {
          isOver: monitor.isOver(),
          dropClassName:
            dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
        };
      },
      drop: (item: any) => {
        moveRow(item.index, index);
      },
    });
    const [{ isDragging }, drag, preview] = useDrag({
      type,
      item: { index },
      collect: (monitor) => {
        return {
          isDragging: monitor.isDragging(),
        };
      },
    });
    drop(preview(ref));
    return (
      <tr
        ref={ref}
        className={`${className}${isOver ? dropClassName : ''}`}
        style={{ ...style, opacity: isDragging ? 0.9 : 1 }}
        {...restProps}
      >
        {React.Children.map(children, (child) => {
          if (child.key === 'orderBy') {
            return React.cloneElement(child, {}, RenderDrag({ ref: drag }));
          }
          return React.cloneElement(child);
        })}
      </tr>
    );
  },
);

const DragSortingTable: React.FC = () => {
  const [data, setData] = useState(
    new Array(10)
      .fill({
        id: 1,
      })
      .map((item, index) => ({ ...item, id: index + 1 })),
  );
  const moveRow = useCallback(
    (dragIndex, hoverIndex) => {
      console.log(dragIndex, hoverIndex);
      const dragRow = data[dragIndex];
      setData(
        update(data, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragRow],
          ],
        }),
      );
    },
    [data],
  );
  const components = {
    body: {
      row: (row: any) => (
        <DraggableRow row={row} data={data} moveRow={moveRow} />
      ),
    },
  };
  const columns: ProColumns<any>[] = [
    {
      title: '排序',
      dataIndex: 'orderBy',
    },
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      render: () => <span>address</span>,
      width: 100,
      fixed: 'right',
    },
  ];
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <ProTable
          rowKey="id"
          columns={columns}
          dataSource={data}
          components={components}
          search={false}
          toolBarRender={false}
          pagination={false}
          scroll={{ x: 800, y: 600 }}
        />
        <Card />
      </DndProvider>
    </>
  );
};

export default DragSortingTable;
