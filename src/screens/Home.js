import React, { Fragment, useState, useEffect } from 'react';
import { Tabs, Collapse, Row, Col, Checkbox } from 'antd';
import {
  FontSizeOutlined,
  DesktopOutlined,
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
} from '@ant-design/icons';
import Axios from 'axios';

//Custom Imports
import {
  WidthSection,
  ColorSection,
  InputText,
  TypoComponent,
  ImageUploader,
  SlideGroup,
  FontStyle,
} from '../components';
import { API_END_POINT } from '../config';
// import { fields } from '../testJson';
import './home.css';

export const Home = (props) => {
  //state
  const [state, setState] = useState({
    activeWidth: '3/8',
    activeWidthColor: '#f44336',
    inputText: '',
    textStyle: null,
    activeTextColor: '#f44336',
    typography: 'arial',
    uploadedLogo: [],
    textSize: 0,
    textSpacing: 0,
    imageSpacing: 0,
    agree: false,
    fields: [],
  });

  const {
    activeWidth,
    activeWidthColor,
    inputText,
    textStyle,
    activeTextColor,
    typography,
    uploadedLogo,
    textSize,
    textSpacing,
    imageSpacing,
    agree,
    fields,
  } = state;

  const { TabPane } = Tabs;
  const { Panel } = Collapse;

  const textStyles = [
    { component: <BoldOutlined />, type: 'bold' },
    { component: <ItalicOutlined />, type: 'italic' },
    { component: <UnderlineOutlined />, type: 'underline' },
  ];

  //Handlers

  const handleWidthChange = (activeWidth) => {
    setState({ ...state, activeWidth });
  };

  const handleColorChange = (color, event, type) => {
    if (type === 'width') {
      setState({ ...state, activeWidthColor: color.hex });
    } else {
      setState({ ...state, activeTextColor: color.hex });
    }
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleTextStyle = (textStyle) => {
    setState({
      ...state,
      textStyle,
    });
  };

  const handleTypography = (typography) => {
    setState({
      ...state,
      typography,
    });
  };

  const handleSlider = (value, type) => {
    if (type === 'textSize') {
      setState({ ...state, textSize: value });
    }
    if (type === 'textSpacing') {
      setState({ ...state, textSpacing: value });
    }
    if (type === 'imageSpacing') {
      setState({ ...state, imageSpacing: value });
    }
  };

  const handleUpload = ({ fileList }) => {
    setState({ ...state, uploadedLogo: fileList });
  };

  useEffect(() => {
    const fetchFormJson = async () => {
      Axios.get(`${API_END_POINT}/formfields`)
        .then((data) => {
          setState({ ...state, fields: data.data.data });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchFormJson();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Tabs defaultActiveKey="1">
        <TabPane
          tab={
            <span>
              <DesktopOutlined />
              <b>WIDTH AND COLOR</b>
            </span>
          }
          key="1"
        >
          {[
            { id: 1, active: activeWidth },
            { id: 2, active: activeWidthColor },
          ].map((elem, index) => (
            <div
              style={{
                width: 100,
                height: 'auto',
                margin: 15,
                display: 'inline',
              }}
            >
              Active Value:{elem.active}
            </div>
          ))}
          <Collapse
            accordion
            expandIconPosition="right"
            style={{ position: 'relative' }}
          >
            {fields &&
              fields.length > 0 &&
              fields.map((field, index) => {
                if (field.name === 'widthSelection') {
                  return (
                    <Panel header="Width" key="1">
                      <WidthSection
                        widthOptions={field.options}
                        activeWidth={activeWidth}
                        handleWidthChange={handleWidthChange}
                      />
                    </Panel>
                  );
                }
                if (field.name === 'colorSelection' && field.type === 'width') {
                  return (
                    <Panel header="Color" key="2">
                      <ColorSection
                        activeWidthColor={activeWidthColor}
                        type={field.type}
                        handleColorChange={handleColorChange}
                      />
                    </Panel>
                  );
                } else {
                  return <div></div>;
                }
              })}
          </Collapse>
        </TabPane>
        <TabPane
          tab={
            <span>
              <FontSizeOutlined />
              <b>TEXT & LOGO</b>
            </span>
          }
          key="2"
        >
          <Collapse accordion expandIconPosition="right">
            <Panel header="Front Text And Image" key="1">
              <Row gutter={[20, 20]} align="middle">
                {fields &&
                  fields.length > 0 &&
                  fields.map((field, index) => {
                    if (field.type === 'textInput') {
                      return (
                        <Col span={18}>
                          <InputText
                            placeholder={field.placeholder}
                            required={field.required}
                            handleChange={handleChange}
                            inputText={inputText}
                          />
                        </Col>
                      );
                    }
                    if (field.name === 'fontStyle') {
                      return (
                        <Col span={6}>
                          <FontStyle
                            textStyle={textStyle}
                            textStyles={textStyles}
                            handleTextStyle={handleTextStyle}
                          />
                        </Col>
                      );
                    }
                    if (
                      field.name === 'colorSelection' &&
                      field.type === 'text'
                    ) {
                      return (
                        <Col span={24}>
                          <ColorSection
                            title={field.title}
                            activeTextColor={activeTextColor}
                            type={field.type}
                            handleColorChange={handleColorChange}
                          />
                        </Col>
                      );
                    }

                    if (field.name === 'typographySelection') {
                      return (
                        <Col span={24}>
                          <TypoComponent
                            fontFamilyOptions={field.options}
                            typography={typography}
                            handleTypography={handleTypography}
                            title={field.title}
                          />
                        </Col>
                      );
                    }

                    if (field.name === 'imageUpload') {
                      return (
                        <Col span={24}>
                          <ImageUploader
                            uploadedLogo={uploadedLogo}
                            handleUpload={handleUpload}
                            btnText={field.btnText}
                          />
                        </Col>
                      );
                    }

                    if (field.name === 'slideGroup') {
                      return (
                        <Col span={24}>
                          <SlideGroup
                            slideGroup={field.options}
                            handleSlider={handleSlider}
                            sliderValues={(textSize, textSpacing, imageSpacing)}
                          />
                        </Col>
                      );
                    }

                    if (field.type === 'checkbox') {
                      return (
                        <Col span={24}>
                          <Checkbox
                            name="agree"
                            checked={agree}
                            onChange={() =>
                              setState({ ...state, agree: !agree })
                            }
                          >
                            {field.value}
                          </Checkbox>
                        </Col>
                      );
                    } else {
                      return <div></div>;
                    }
                  })}
              </Row>
            </Panel>
          </Collapse>
        </TabPane>
      </Tabs>
    </Fragment>
  );
};
