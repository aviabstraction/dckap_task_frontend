import React from 'react';
import { Typography, List } from 'antd';
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
        {title} -<span style={{ fontSize: 12 }}>Show More</span>
      </Title>

      <List
        className="typography__listcontainer"
        dataSource={fontFamilyOptions}
        grid={{ gutter: 16, column: 4 }}
        renderItem={(item) => (
          <Item
            className="typography__listitem"
            style={{
              backgroundColor: typography === item.type ? 'black' : '#f0f2f5',
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
        )}
      />
    </section>
  );
};
