import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: "zh-CN",
  title: "毛怪小镇",
  description: "Hanser的粉丝们 '毛怪' 所开发维护的 Minecraft 服务器",

  cleanUrls: true,
  metaChunk: true,
  lastUpdated: true,

  themeConfig: {
    logo: '/logo.png',

    nav: [
      { text: '主页', link: '/' },
      { text: '玩家文档', link: '/player-documentation' }
    ],

    sidebar: [
      {
        text: '第一次加入游戏',
        items: [
          { text: '初次游玩毛怪小镇', link: '/getting-started/first-join' }
        ]
      },
      {
        text: '插件使用教程',
        items: [
          { text: '如何使用圈地插件', link: '/plugin-usages/residence/basic-usage' },
          { text: '如何使用CoreProtect插件', link: '/plugin-usages/coreprotect/basic-usage' },
      {
        text: '更多附魔',
        collapsed: true,
        items: [
          { text: '概述', link: '/plugin-usages/custom-enchants/more-enchants' },
          { text: '特别说明', link: '/plugin-usages/custom-enchants/special-notes' },
          { text: '魔咒', link: '/plugin-usages/custom-enchants/magic-enchants' },
          { text: '附魔', link: '/plugin-usages/custom-enchants/enchants' },
          { text: '诅咒', link: '/plugin-usages/custom-enchants/curses' },
          { text: '粒子', link: '/plugin-usages/custom-enchants/particles' }
        ]
      }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MGTown/' }
    ],

    footer: {
      copyright: 'Copyright © 2021-2026 MGTown'
    },
  },

  sitemap: {
    hostname: 'https://mgtown.cn'
  }
})
