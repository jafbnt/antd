import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Menu, type MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import React from "react";
import { useD3LayoutStore } from "../Store/useD3LayoutStore";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const itemsUp: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Option 3", "3", <ContainerOutlined />),

  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),

  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),

    getItem("Submenu", "sub3", null, [
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ]),
];

function D3SiderBar() {
  const { isOpen, setIsOpen } = useD3LayoutStore();
  return (
    <Sider
      style={{ backgroundColor: "#FFF" }}
      trigger={null}
      collapsible
      collapsedWidth={50}
      collapsed={isOpen}
      className="m-1 bg-white rounded shadow"
    >
      <Menu
        className="mt-2"
        //defaultSelectedKeys={["1"]}
        //defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="light"
        inlineCollapsed={isOpen}
        items={itemsUp}
      />
      <Menu
        className="mt-2"
        mode="inline"
        theme="light"
        inlineCollapsed={isOpen}
        items={[
          {
            label: `${isOpen ? "Expandir" : "Minimizar"}`,
            key: "100",
            icon: isOpen ? <FullscreenOutlined /> : <FullscreenExitOutlined />,
            onClick: () => setIsOpen(!isOpen),
          },
        ]}
      />
    </Sider>
  );
}

export default D3SiderBar;
