/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'getting-started',
        },
      ],
    },
    {
      type: 'category',
      label: 'Setup',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Install',
          items: [
            {
              type: 'autogenerated',
              dirName: 'setup/install',
            },
          ],
        },
        {
          type: 'category',
          label: 'Runtime',
          items: [
            {
              type: 'autogenerated',
              dirName: 'setup/runtime',
            },
          ],
        },
        {
          type: 'category',
          label: 'Integration',
          items: [
            {
              type: 'autogenerated',
              dirName: 'setup/integration',
            },
          ],
        },
        'setup/upgrade',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Observability',
          items: [
            {
              type: 'autogenerated',
              dirName: 'concepts/observability',
            },
          ],
        },
        {
          type: 'category',
          label: 'Terminology',
          items: [
            {
              type: 'autogenerated',
              dirName: 'concepts/terminology',
            },
          ],
        },
        'concepts/best-practices',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'Configuration',
          href: 'https://github.com/dragonflyoss/Dragonfly2/tree/main/docs/zh-CN/deployment/configuration',
        },
        {
          type: 'category',
          label: 'Command Line',
          items: [
            {
              type: 'autogenerated',
              dirName: 'reference/cli',
            },
          ],
        },
        {
          type: 'category',
          label: 'API',
          items: [
            {
              type: 'autogenerated',
              dirName: 'reference/api',
            },
          ],
        },
        'reference/manage-console',
        'reference/benchmark',
      ],
    },
    {
      type: 'category',
      label: 'Contribute',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Development Guide',
          items: [
            {
              type: 'autogenerated',
              dirName: 'contribute/development-guide',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Others',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'others',
        },
        {
          type: 'link',
          label: 'Change logs',
          href: 'https://github.com/dragonflyoss/Dragonfly2/blob/main/CHANGELOG.md',
        },
      ],
    },
  ],
};
