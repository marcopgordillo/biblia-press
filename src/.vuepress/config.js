const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Biblia Católica Latinoamericana',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Antiguo Testamento',
        link: '/antiguo-testamento/',
      },
      {
        text: 'Nuevo Testamento',
        link: '/nuevo-testamento/'
      },
    ],
    sidebar: {
      '/antiguo-testamento/': [
        {
          title: 'Antiguo Testamento',
          collapsable: false,
          children: [
            '',
            'genesis',
            'exodo',
            'levitico',
            'numeros',
            'deuteronomio',
          ]
        }
      ],
      '/nuevo-testamento/': [
        {
          title: 'Nuevo Testamento',
          collapsable: false,
          children: [
            '',
            'mateo',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
    markdown: {
        extendMarkdown: md => {
            md.use(require('markdown-it-sup'));
            md.use(require('markdown-it-footnote'));
            md.use(require('markdown-it-attrs'), {
              allowedAttributes: ['id', 'class', /^regex.*$/]
            });
        }
    }
}
