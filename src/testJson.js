export const formData = {
  tabs: [
    {
      tabPane: {
        title: 'WIDTH AND COLOR',
        icon: 'desktopOutlined',
        section: [
          {
            tabSectionTitle: 'Width',
            tabSection: [
              {
                name: 'width',
                widthOptions: [
                  { id: 1, width: '3/8' },
                  { id: 2, width: '5/8' },
                  { id: 3, width: '3/4' },
                  { id: 4, width: '1' },
                ],
                role: 6,
                role_name: 'list_options',
              },
            ],
          },
          {
            tabSectionTitle: 'Color',
            tabSection: [],
          },
        ],
      },
    },
    {
      tabPane: {
        title: 'TEXT AND LOGO',
        icon: 'fontSizeOutlined',
        section: [
          {
            tabSectionTitle: 'Front Text And Image',
            tabSection: [{}],
          },
        ],
      },
    },
  ],
};
