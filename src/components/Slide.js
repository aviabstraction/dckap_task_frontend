import React, { Fragment } from 'react';
import { Slider, Col, Card, Typography } from 'antd';

export const Slide = (props) => {
  console.log('props', props);
  const { title, type, handleSlider } = props;
  const { Title } = Typography;
  return (
    <Fragment>
      <Col span={8}>
        <Card>
          <Title
            level={4}
            style={{ fontSize: 16, letterSpacing: 1.1, paddingBottom: 10 }}
          >
            {title}
          </Title>
          <Slider
            defaultValue={0}
            onChange={(values) => handleSlider(values, type)}
          />
        </Card>
      </Col>
    </Fragment>
  );
};
