import React, { memo, useCallback, useMemo, useRef, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { MenuOutlined } from '@ant-design/icons';
import update from 'immutability-helper';
import { useDrag, useDrop } from 'react-dnd';
import type { XYCoord, Identifier } from 'dnd-core';
import { Card } from './card';
// import { Row } from './row';

const style = {
  width: 400,
};

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  cards: Item[];
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

export const ItemTypes = {
  CARD: 'card',
};

const App: React.FC<{}> = () => {
  const [data, setData] = useState(
    new Array(10)
      .fill({
        id: 1,
      })
      .map((item, index) => ({ ...item, id: index + 1 })),
  );
  const moveRow = useCallback((dragIndex: number, hoverIndex: number) => {
    console.log(dragIndex, hoverIndex);
    setData((prevCards: Item[]) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex] as Item],
        ],
      }),
    );
  }, []);

  // const ref = useRef<HTMLDivElement>(null);
  const DraggableRow = ({ ...restProps }) => {
    const rowKey = Number(restProps['data-row-key']);
    const index = data.findIndex((x) => x.id === rowKey);
    const [collectedProps, drop] = useDrop(() => ({
      accept: ItemTypes.CARD,
    }));

    return <tr ref={drop} {...restProps} />;
  };

  // const renderRow = () => {
  //   const rowKey = Number(restProps['data-row-key']);
  //   const index = data.findIndex((x) => x.id === rowKey);
  //   // const [collectedProps, drop] = useDrop(() => ({
  //   //   accept: ItemTypes.CARD,
  //   // }));

  //   return (
  //     <span ref={dragPreview}>
  //       <MenuOutlined style={{ cursor: 'grab', color: 'gold' }} />
  //     </span>
  //   );
  // };

  const columns: ProColumns<any>[] = [
    {
      title: '排序',
      dataIndex: 'orderBy',
      key: 'orderBy',
      render: () => (
        <span key="orderBy">
          <MenuOutlined style={{ cursor: 'grab', color: 'gold' }} />
        </span>
      ),
    },
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
  ];
  const components = {
    body: {
      row: DraggableRow,
    },
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <ProTable
        rowKey="id"
        columns={columns}
        dataSource={data}
        components={components}
        search={false}
        toolBarRender={false}
        pagination={false}
      />
    </DndProvider>
  );
};

export default App;
