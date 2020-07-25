import React from 'react';
import { Layout, Row, Col, Card } from 'antd';

//Custom Imports
import './layout.css';

export default function ({ children }) {
  return (
    <Layout className="layout">
      <Row justify="center" className="layout__mainrow">
        <Col span={15}>
          <Card>{children}</Card>
        </Col>
      </Row>
    </Layout>
  );
}
