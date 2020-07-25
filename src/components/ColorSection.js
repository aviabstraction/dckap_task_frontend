import React from 'react';
import { Col, Row, Typography } from 'antd';
import { CirclePicker } from 'react-color';

export const ColorSection = (props) => {
  const { activeWidthColor, activeTextColor, type, handleColorChange } = props;
  const { Title } = Typography;
  const { title } = props;

  return (
    <section className="colorsection" style={{ marginBottom: 10 }}>
      {title && (
        <Title
          style={{ fontSize: 16, letterSpacing: 1.1, paddingBottom: 10 }}
          level={4}
        >
          {title}
        </Title>
      )}
      <Row>
        <Col span={24}>
          <CirclePicker
            color={type === 'width' ? activeWidthColor : activeTextColor}
            width="100%"
            circleSpacing={30}
            circleSize={45}
            onChange={(color, event) => handleColorChange(color, event, type)}
          />
        </Col>
      </Row>
    </section>
  );
};
