import React from 'react';
import { Row, Col, Typography, List } from 'antd';
//Custom Imports
import './TypoComponent.css';

export const TypoComponent = ({
  fontFamilyOptions,
  title,
  typography,
  handleTypography,
}) => {
  const { Item } = List;
  const { Title, Text } = Typography;
  return (
    <section className="typography">
      <Title
        level={4}
        style={{ fontSize: 16, letterSpacing: 1.1, paddingBottom: 10 }}
      >
        {title} -
        <a
          href="none"
          style={{ fontSize: 12, color: 'black', textDecoration: 'dotted' }}
        >
          Show More
        </a>
      </Title>

      <Row justify="space-between" align="middle" className="typography__row">
        <List
          className="typography__listcontainer"
          grid={{ gutter: 16, column: 4 }}
          dataSource={fontFamilyOptions}
          renderItem={(item) => (
            <Col span={24} className="typography__col">
              <Item
                className="typography__listitem"
                style={{
                  backgroundColor:
                    typography === item.type ? 'black' : '#f0f2f5',
                  padding: 12,
                  cursor: 'pointer',
                }}
                onClick={() => handleTypography(item.type)}
              >
                <Text
                  style={{
                    color: typography === item.type ? 'white' : 'black',
                    fontSize: 12,
                  }}
                >
                  {item.fontFamily}
                </Text>
              </Item>
            </Col>
          )}
        />
      </Row>
    </section>
  );
};
