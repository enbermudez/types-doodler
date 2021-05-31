/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Types Doodler',
  tagline: 'Utility library filled with non-common (and some random) helpers.',
  url: 'https://enbermudez.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'enbermudez',
  projectName: 'types-doodler',
  themeConfig: {
    navbar: {
      title: 'Types Doodler',
      items: [
        {
          type: 'doc',
          docId: 'getting-started',
          position: 'right',
          label: 'Docs',
        },
        {
          href: 'https://github.com/enbermudez/types-doodler',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} types-doodler, enbermudez.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/enbermudez/types-doodler',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/enbermudez/types-doodler/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
