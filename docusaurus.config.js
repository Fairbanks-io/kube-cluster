const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Kube Cluster',
  tagline: 'Enabling next generation app deployments',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  url: 'https://fairbanks-io.github.io',
  baseUrl: '/kube-cluster/',
  projectName: 'kube-cluster', // Usually your repo name.
  organizationName: 'Fairbanks-io', // Usually your GitHub org/user name.
  trailingSlash: false,
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌙',

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '\u{1F602}',

        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    announcementBar: {
      id: 'announcement', // Any value that will identify this message.
      content:
        'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      backgroundColor: '#fafbfc', // Defaults to `#fff`.
      textColor: '#091E42', // Defaults to `#000`.
      isCloseable: false, // Defaults to `true`.
    },
    navbar: {
      title: 'Kube Cluster',
      logo: {
        alt: 'Kube Cluster',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'github.com/fairbanks-io/',
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
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Code Best Practices',
              to: '/docs/intro',
            },
            {
              label: 'Containerization',
              to: '/docs/intro',
            },
            {
              label: 'Deployments',
              to: '/docs/intro',
            },
            {
              label: 'Automation',
              to: '/docs/intro',
            },
            {
              label: 'More...',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'GitHub',
          items: [
            {
              label: 'tf-iac-cluster',
              href: 'https://github.com/Fairbanks-io/tf-iac-cluster',
            },
            {
              label: 'flux-gitops-apps',
              href: 'https://github.com/Fairbanks-io/flux-gitops-apps',
            },
            {
              label: 'Helm Charts',
              href: 'https://github.com/Fairbanks-io/helm-charts',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Tech Blog',
              to: '/blog',
            },
            {
              label: 'CNCF',
              href: 'https://www.cncf.io/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fairbanks.io`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
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
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
