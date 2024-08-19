import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Documentation SITN',
  tagline: 'SITN API and Webservices documentation',
  favicon: 'img/favicon.ico',
  url: 'https://sitn.ne.ch',
  baseUrl: '/services',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'fr-CH',
    locales: ['fr-CH'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/sitn/sitn-docs/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Accueil',
      logo: {
        alt: 'État de Neuchâtel',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'examplesSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Openlayers demo',
              to: '/docs/Exemples/wmts-getcapabilities',
            },
          ],
        },
        {
          title: 'Liens',
          items: [
            {
              label: 'Géoportail',
              href: 'https://sitn.ne.ch',
            },
            {
              label: 'Géoshop',
              href: 'https://sitn.ne.ch/geoshop',
            },
            {
              label: 'Géoportail LiDAR',
              href: 'https://sitn.ne.ch/lidar',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SITN`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
