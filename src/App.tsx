import React from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Button, theme, Avatar, Select, Space, Switch, Table } from "antd";

import D3SiderBar from "./components/Layout/D3SiderBar/D3SiderBar";
import { useD3LayoutStore } from "./components/Layout/Store/useD3LayoutStore";
import D3Table from "./components/shared/D3Table/D3Table";

const { Header, Content } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { isOpen, setIsOpen } = useD3LayoutStore();

  return (
    <Layout className="min-h-screen">
      <D3SiderBar />

      <Layout className="bg-gray-50">
        <Header className="flex items-center justify-between p-2 m-1 bg-white rounded shadow ">
          <Space direction="horizontal">
            <Button
              type="text"
              icon={isOpen ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-center text-gray-500 "
            />
            <Select
              showSearch
              size="large"
              //defaultValue={['Closed']}
              className="flex items-center justify-center truncate select-none w-96"
              placeholder="Selecione o Cliente"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.label ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.label ?? "").toLowerCase())
              }
              options={[
                {
                  value: "1",
                  label:
                    "Not Identified Not IdentifiedNot IdentifiedNot IdentifiedNot IdentifiedNot Identified",
                },
                {
                  value: "2",
                  label: "Closed",
                },
                {
                  value: "3",
                  label: "Communicated",
                },
                {
                  value: "4",
                  label: "Identified",
                },
                {
                  value: "5",
                  label: "Resolved",
                },
                {
                  value: "6",
                  label: "Cancelled",
                },
              ]}
            />
          </Space>

          <Avatar size={40} icon={<UserOutlined />} className="flex items-center justify-center" />
        </Header>
        <Header className="flex items-center m-1 bg-white rounded shadow"></Header>
       

              <D3Table  />
       
      </Layout>
    </Layout>
  );
};

export default App;
