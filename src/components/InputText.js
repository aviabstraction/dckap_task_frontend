import React from 'react';
import { Input } from 'antd';

export const InputText = (props) => {
  const { inputText, handleChange, placeholder, required } = props;

  return (
    <section className="inputtext" style={{ margin: '10px 0px' }}>
      <Input
        placeholder={placeholder}
        name="inputText"
        value={inputText}
        required={required}
        onChange={handleChange}
      />
    </section>
  );
};
