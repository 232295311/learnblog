module.exports = {
  base: 'learnblog',
  title: '前端蜗牛路',
  description: '同学的个人博客',
  head: [['link', { rel: 'icon', href: '/app-1.ico' }]],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '文章',
        items: [{ text: 'webgl', link: '/webgl/' }]
      },
      { text: 'GitHub', link: 'https://github.com/232295311' },
      { text: '知乎', link: '' },
      { text: '女朋友', link: '/girlfriend/' }
    ],
    sidebar: {
      '/webgl/': ['', '职业', '自我学习', '自我营销']
    }
  }
}
