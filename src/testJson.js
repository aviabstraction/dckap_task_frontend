export const fields = [
  {
    name: 'widthSelection',
    type: 'list',
    options: [
      { id: 1, width: '3/8' },
      { id: 2, width: '5/8' },
      { id: 3, width: '3/4' },
      { id: 4, width: '1' },
    ],
    modelType: 3,
  },

  {
    name: 'colorSelection',
    type: 'width',
    modelType: 2,
  },
  {
    name: 'inputText',
    type: 'textInput',
    placeholder: 'Type Text here',
    required: true,
    modelType: 1,
  },
  {
    name: 'colorSelection',
    type: 'text',
    title: 'Pick your Color',
    modelType: 2,
  },
  {
    name: 'typographySelection',
    type: 'list',
    title: 'Typography',
    options: [
      {
        id: 1,
        type: 'arial',
        fontFamily: 'Arial',
      },
      {
        id: 2,
        type: 'amatsdcsc',
        fontFamily: 'Amatdcsc',
      },
      {
        id: 3,
        type: 'arailn',
        fontFamily: 'Arailn',
      },
      {
        id: 4,
        type: 'atheletic',
        fontFamily: 'Atheletic',
      },
      {
        id: 5,
        type: 'blacjar',
        fontFamily: 'Black-Jar',
      },
    ],
    modelType: 3,
  },
  {
    name: 'imageUpload',
    type: 'upload',
    btnText: 'Upload',
    modelType: 4,
  },
  {
    name: 'slideGroup',
    type: 'list',
    options: [
      { id: 1, title: 'Text Size', type: 'textSize' },
      { id: 2, title: 'Text Spacing', type: 'textSpacing' },
      {
        id: 3,
        title: 'Image Spacing',
        type: 'imageSpacing',
      },
    ],
    modelType: 3,
  },
  {
    name: 'agree',
    type: 'checkbox',
    value: ' Apply the same Text and Image to the back side of lanyards',
  },
];
