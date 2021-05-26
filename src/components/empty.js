import React from 'react'
import {
  ConfigProvider,
  Divider,
  TreeSelect,
  Select,
  Cascader,
  Transfer,
  Table,
  List,
} from 'antd';
import { SmileOutlined } from '@ant-design/icons';
const EmpetyComponent = () => {
    
const customizeRenderEmpty = () => (
    <div style={{ textAlign: 'center' }}>
      <SmileOutlined style={{ fontSize: 20 }} />
      <p>Data Not Found</p>
    </div>
  );
  
  const style = { width: 200 };

    
    const { customize } = false;
    return (
        <div>
          <Divider />
  
          <ConfigProvider renderEmpty={customize && customizeRenderEmpty}>
            <div className="config-provider">
              <h4>Select</h4>
              <Select style={style} />
  
              <h4>TreeSelect</h4>
              <TreeSelect style={style} treeData={[]} />
  
              <h4>Cascader</h4>
              <Cascader style={style} options={[]} showSearch />
  
              <h4>Transfer</h4>
              <Transfer />
  
              <h4>Table</h4>
              <Table
                style={{ marginTop: 8 }}
                columns={[
                  {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                  },
                  {
                    title: 'Age',
                    dataIndex: 'age',
                    key: 'age',
                  },
                ]}
              />
  
              <h4>List</h4>
              <List />
            </div>
          </ConfigProvider>
        </div>
      );
}

export default EmpetyComponent
