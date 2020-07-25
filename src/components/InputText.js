import React from 'react';
import { Input, Row, Col } from 'antd';

export const InputText = (props) => {
  const {
    inputText,
    handleChange,
    textStyle,
    textStyles,
    handleTextStyle,
  } = props;

  return (
    <section className="inputtext" style={{ margin: '10px 0px' }}>
      <Row justify="space-between" align="middle">
        <Col span={18}>
          <Input
            placeholder="Type Text here"
            name="inputText"
            value={inputText}
            onChange={handleChange}
          />
        </Col>
        {textStyles.map((elem, index) => {
          return (
            <Col
              key={index}
              style={{
                borderBottom:
                  elem.type === textStyle ? '3px solid red' : 'none',
                cursor: 'pointer',
              }}
              onClick={() => handleTextStyle(elem.type)}
            >
              {elem.component}
            </Col>
          );
        })}
      </Row>
    </section>
  );
};
