import React from "react";
import styles from "./header.module.scss";
import { FaHotel } from "react-icons/fa";
import { DownOutlined, SmileOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";
import "antd/dist/antd.css";
const Header = () => {
  const accomadation = [
    {
      key: "1",
      label: (
        <a rel="" href="#">
          Family Rooms
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a rel="" href="#">
          Caurtyard
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a rel="" href="#">
          Mountain View
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a rel="" href="#">
          Apartments
        </a>
      ),
    },
    {
      key: "5",
      label: (
        <a rel="" href="#">
          Suits
        </a>
      ),
    },
  ];
  const menu = <Menu items={accomadation} />;
  return (
    <header>
      <div className={styles.header_cont}>
        <div className={styles.logo}>
          <span>
            THE <FaHotel /> VINEYARD
          </span>
        </div>
        <div className={styles.navs}>
          <Dropdown overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                ACCOMODATION
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Dropdown overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                DINING
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Space>MEETING</Space>
          <Dropdown overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                LOCAL BUZZ
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Space>ABOUT US</Space>
          <Space>SPECIALS</Space>
          <Space>CONTACT US</Space>
          <Space>EVENTS</Space>
        </div>
        <div className={styles.book_now}>
          <span>BOOK NOW</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
