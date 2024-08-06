import { Table } from 'antd';
import './App.css';
import type { ColumnsType } from 'antd/lib/table';
import { Repository } from './gql/graphql';

const dataSource: Repository[] = [];

const columns: ColumnsType<Repository> = [
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
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },

];

function App() {
  return (
    <>
      <Table dataSource={dataSource} columns={columns} />;
    </>
  );
}

export default App;
