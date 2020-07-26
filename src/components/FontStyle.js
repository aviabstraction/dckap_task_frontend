import React from 'react';
import { List, Typography } from 'antd';

export const FontStyle = ({ textStyles, textStyle, handleTextStyle }) => {
  const { Item } = List;
  const { Text } = Typography;
  return (
    <List
      grid={{ gutter: 16, column: 3 }}
      dataSource={textStyles}
      renderItem={(item, index) => (
        <Item
          key={index}
          style={{
            backgroundColor: item.type === textStyle ? 'black' : '#f0f2f5',
            cursor: 'pointer',
          }}
          onClick={() => handleTextStyle(item.type)}
        >
          <Text
            style={{
              textAlign: 'center',
              color: item.type === textStyle ? 'white' : 'black',
            }}
          >
            {item.component}
          </Text>
        </Item>
      )}
    ></List>
  );
};
