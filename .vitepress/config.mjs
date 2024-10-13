import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "毛怪小镇",
  description: "Hanser的粉丝们 '毛怪' 所开发的 Minecraft 服务器",

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
          { text: '如何使用CoreProtect插件', link: '/plugin-usages/coreprotect/basic-usage' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MGTown/' }
    ],

    footer: {
      copyright: 'Copyright © 2021-2024 MGTown'
    },
  },

  sitemap: {
    hostname: 'https://mgtown.cn'
  }
})
