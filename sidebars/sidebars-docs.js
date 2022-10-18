module.exports = {
  mainSidebar: [
    {
      type: 'category',
      label: 'Overview of Immutable X (new)',
      link: { type: 'doc', id: 'overview-new/what-is-immutable-x' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'overview-new',
        },
      ],
    },
    {
      type: 'category',
      label: 'Key concepts (new)',
      items: [
        {
          type: 'autogenerated',
          dirName: 'key-concepts-new',
        },
      ],
    },
    {
      type: 'category',
      label: 'Launch a collection (new)',
      link: { type: 'doc', id: 'launch-collection-new/overview/index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'launch-collection-new',
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides (new)',
      items: [
        {
          type: 'category',
          label: 'Basic guides',
          link: { type: 'doc', id: 'guides-new/basic-guides/overview/index' },
          items: [
            'guides-new/basic-guides/get-started/index',
            'guides-new/basic-guides/get-data/index',
            'guides-new/basic-guides/generate-signers/index',
            'guides-new/basic-guides/register-users/index',
            'guides-new/basic-guides/create-orders/index',
            'guides-new/basic-guides/create-trades/index',
            'guides-new/basic-guides/mint-assets/index',
            'guides-new/basic-guides/transfers/index',
            'guides-new/basic-guides/deposits-withdrawals/index',
          ]
        },
        {
          type: 'category',
          label: 'Advanced guides',
          items: [
            {
              type: 'autogenerated',
              dirName: 'guides-new/advanced-guides',
            },
          ],
        },
        {
          type: 'category',
          label: 'UI guides',
          items: [
            {
              type: 'autogenerated',
              dirName: 'guides-new/ui-guides',
            },
          ],
        },
        {
          type: 'category',
          label: 'Link SDK (deprecated soon)',
          link: { type: 'doc', id: 'guides-new/link-sdk/sdk-api' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'guides-new/link-sdk',
            },
          ],
        },
        {
          type: 'category',
          label: 'JS SDK (deprecated soon)',
          link: { type: 'doc', id: 'guides-new/js-sdk/integrate-your-application' },
          items: [
            {
              type: 'autogenerated',
              dirName: 'guides-new/js-sdk',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Overview',
      items: [
        {
          type: 'autogenerated',
          dirName: 'overview',
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        {
          type: 'autogenerated',
          dirName: 'guides',
        },
      ],
    },
    {
      type: 'link',
      label: 'SDKs',
      href: '/docs/sdks',
    },
    'code-examples',
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        {
          type: 'autogenerated',
          dirName: 'tutorials',
        },
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        {
          type: 'autogenerated',
          dirName: 'troubleshooting',
        },
      ],
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        {
          type: 'autogenerated',
          dirName: 'resources',
        },
      ],
    },
  ],
};
