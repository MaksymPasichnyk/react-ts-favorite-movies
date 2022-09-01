import { Button, Layout, Col, Row, Space } from "antd";
import styles from "./header.module.scss";
import Logo from "../logo/Logo";
import Search from "../search/Search";
import { useState, useRef, SyntheticEvent } from "react";
const { Header: PageHeader } = Layout;

interface Props {
	handleSubmit: (event: SyntheticEvent) => void
}

const Header = ({handleSubmit}: Props) => {
  return (
    <PageHeader>
      <Row justify="space-between" align="middle">
        <Col>
          <Logo title="Logo" />
        </Col>
        <Col flex="auto">
          <Row justify="end">
            <Space>
              <Search />
              <Button>Register</Button>
              <Button>Sign in</Button>
            </Space>
          </Row>
        </Col>
      </Row>
    </PageHeader>
  );
};

export default Header;
