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
          { text: '如何使用CoreProtect插件', link: '/plugin-usages/coreprotect/basic-usage' },
          { text: '如何使用音乐插件', link: '/plugin-usages/allmusic/basic-usage' },
          { text: '如何使用动作插件', link: '/plugin-usages/gsit/basic-usage' },
          { text: '如何使用全息文本插件', link: '/plugin-usages/holograms/basic-usage' },
          { text: '如何使用mcmmo插件', link: '/plugin-usages/mcmmo/basic-usage' },
          { text: '如何使用QuickShop商店插件', link: '/plugin-usages/quickShop/basic-usage' },
          { text: '如何使用传送插件插件', link: '/plugin-usages/tp/basic-usage' },
          { text: '如何使用菜单插件', link: '/plugin-usages/menu/basic-usage' },
        ]
      },
      {
        text: '皮肤设置以及部分模组相关教程',
        items: [
          { text: '皮肤相关', link: '/plugin-usages/skin/basic-usage' },
          { text: '材质包相关', link: '/plugin-usages/resourcepack/basic-usage' },
          { text: '光影相关', link: '/plugin-usages/shaders/basic-usage' }
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
