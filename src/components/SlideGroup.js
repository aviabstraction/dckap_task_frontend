import React from 'react';
import { Row } from 'antd';

//Custom Imports
import { Slide } from './Slide';

export const SlideGroup = (props) => {
  const { slideGroup, ...rest } = props;
  return (
    <section className="slidegroup" style={{ marginBottom: 10 }}>
      <Row justify="space-between" gutter={[10, 10]}>
        {slideGroup.map((elem, index) => {
          return (
            <Slide
              title={elem.title}
              type={elem.type}
              key={elem.id}
              {...rest}
            />
          );
        })}
      </Row>
    </section>
  );
};
