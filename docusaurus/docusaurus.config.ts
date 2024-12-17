import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Documentation SITN",
  tagline: "Bienvenue sur la page de documentation des services du SITN!",
  favicon: "img/favicon.ico",
  url: "https://sitn.ne.ch",
  baseUrl: "/services",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "fr-CH",
    locales: ["fr-CH"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/sitn/sitn-docs/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  themes: [
    "docusaurus-theme-github-codeblock",
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        language: "fr",
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Accueil",
      logo: {
        alt: "État de Neuchâtel",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "examplesSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "API REST",
              to: "/docs/api",
            },
            {
              label: "Exemples live",
              to: "/docs/examples",
            },
            {
              label: "Intégration dans QGIS",
              to: "/docs/QGIS",
            },
          ],
        },
        {
          title: "Liens",
          items: [
            {
              label: "Géoportail",
              href: "https://sitn.ne.ch",
            },
            {
              label: "Géoshop",
              href: "https://sitn.ne.ch/geoshop",
            },
            {
              label: "Géoportail LiDAR",
              href: "https://sitn.ne.ch/lidar",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "Nous écrire",
              href: "mailto:sitn@ne.ch",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SITN`,
    },
    codeblock: {
      showGithubLink: true,
      githubLinkLabel: "Voir sur GitHub",
      showRunmeLink: false,
      runmeLinkLabel: "Checkout via Runme",
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
