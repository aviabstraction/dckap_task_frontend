import React, { Fragment, useState } from 'react';
import { Tabs, Collapse, Row, Col, Checkbox } from 'antd';
import {
  FontSizeOutlined,
  DesktopOutlined,
  BoldOutlined,
  ItalicOutlined,
  UnderlineOutlined,
} from '@ant-design/icons';

//Custom Imports
import {
  WidthSection,
  ColorSection,
  InputText,
  TypoComponent,
  ImageUploader,
  SlideGroup,
} from '../components';
import { widthOptions, fontFamilyOptions, slideGroup } from '../utils/data';
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
  } = state;

  const { TabPane } = Tabs;
  const { Panel } = Collapse;

  //Temp variable

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
          <div
            style={{
              width: 100,
              height: 'auto',
              margin: 15,
              display: 'inline',
            }}
          >
            Active Width:{activeWidth}
          </div>
          <div
            style={{
              width: 100,
              height: 'auto',
              borderRadius: '50%',
              margin: 15,
              display: 'inline',
            }}
          >
            Active Color: {activeWidthColor}
          </div>

          <Collapse
            accordion
            expandIconPosition="right"
            style={{ position: 'relative' }}
          >
            <Panel header="Width" key="1">
              <WidthSection
                widthOptions={widthOptions}
                activeWidth={activeWidth}
                handleWidthChange={handleWidthChange}
              />
            </Panel>
            <Panel header="Color" key="2">
              <ColorSection
                activeWidthColor={activeWidthColor}
                type="width"
                handleColorChange={handleColorChange}
              />
            </Panel>
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
              <Row gutter={[20, 20]}>
                <Col span={24}>
                  <InputText
                    handleChange={handleChange}
                    inputText={inputText}
                    textStyle={textStyle}
                    textStyles={textStyles}
                    handleTextStyle={handleTextStyle}
                  />
                </Col>
                <Col span={24}>
                  <ColorSection
                    title="Pick your Color"
                    activeTextColor={activeTextColor}
                    type="text"
                    handleColorChange={handleColorChange}
                  />
                </Col>
                <Col span={24}>
                  <TypoComponent
                    fontFamilyOptions={fontFamilyOptions}
                    typography={typography}
                    handleTypography={handleTypography}
                    title="Typography"
                  />
                </Col>
                <Col span={24}>
                  <ImageUploader
                    uploadedLogo={uploadedLogo}
                    handleUpload={handleUpload}
                  />
                </Col>
                <Col span={24}>
                  <SlideGroup
                    slideGroup={slideGroup}
                    handleSlider={handleSlider}
                    sliderValues={(textSize, textSpacing, imageSpacing)}
                  />
                </Col>
                <Col span={24}>
                  <Checkbox
                    name="apply"
                    checked={agree}
                    onChange={() => setState({ ...state, agree: !agree })}
                  >
                    Apply the same Text and Image to the back side of lanyards
                  </Checkbox>
                </Col>
              </Row>
            </Panel>
          </Collapse>
        </TabPane>
      </Tabs>
    </Fragment>
  );
};
