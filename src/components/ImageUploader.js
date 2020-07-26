import React, { useState } from 'react';
import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export const ImageUploader = ({ handleUpload, uploadedLogo, btnText }) => {
  const [state, setState] = useState({
    previewVisible: false,
    previewImage: '',
    previewTitle: '',
  });

  const handleCancel = () => setState({ ...state, previewVisible: false });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setState({
      ...state,
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    });
  };

  const { previewVisible, previewImage, previewTitle } = state;

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">{btnText}</div>
    </div>
  );
  return (
    <section style={{ marginBottom: 10 }}>
      <Upload
        action="#"
        listType="picture-card"
        fileList={uploadedLogo}
        onPreview={handlePreview}
        onChange={handleUpload}
      >
        {uploadedLogo.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal
        visible={previewVisible}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </section>
  );
};
