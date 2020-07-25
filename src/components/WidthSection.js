import React from 'react';
import { List, Row, Col } from 'antd';

export const WidthSection = ({
  widthOptions,
  activeWidth,
  handleWidthChange,
}) => {
  const { Item } = List;

  return (
    <section className="widthsection">
      <Row>
        <Col span={15}>
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={widthOptions}
            renderItem={(item) => (
              <Item
                style={{
                  borderBottom:
                    item.width === activeWidth ? '3px solid red' : 'none',
                  cursor: 'pointer',
                  textAlign: 'center',
                }}
                onClick={() => handleWidthChange(item.width)}
              >
                |-{item.width}-|
              </Item>
            )}
          />
        </Col>
      </Row>
    </section>
  );
};
