import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "毛怪小镇 玩家手册",
  description: "毛怪小镇的玩家手册",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '玩家文档', link: '/player-documentation' }
    ],

    sidebar: [
      {
        text: '第一次加入游戏',
        items: [
          { text: '初次游玩毛怪小镇', link: '/getting-started/first-join' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MGTown/' },
      { icon: 'bilibili', link: '' }
    ]
  }
})
