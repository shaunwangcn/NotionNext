// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next

const BLOG = {
  // --- 列表样式配置 ---
  POST_LIST_STYLE: 'page', 
  POST_LIST_PREVIEW: true, 
  POST_PREVIEW_LINES: 4,   

  // --- 核心 Notion 配置 ---
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3',
  NOTION_PAGE_ID: process.env.NOTION_PAGE_ID || '02ab3b8678004aa69e9e415905ef32a5,en:7c1d570661754c8fbc568e00a01fd70e',
  
  // --- 站点基础信息 ---
  THEME: process.env.NEXT_PUBLIC_THEME || 'heo', 
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || true,
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN', 
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2021, 
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', 
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], 

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'Xuefeng Wang', 
  BIO: process.env.NEXT_PUBLIC_BIO || '中医，哲学，科学的思考', 
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://acuswiss.vercel.app', 
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Notion, 博客', 
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', 

  // --- 性能与功能 ---
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, 
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 60, 
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, 
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, 
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, 
  UUID_REDIRECT: process.env.UUID_REDIRECT || false,

  // --- 引用外部配置 (确保这些文件在你的 /conf/ 目录下存在) ---
  ...require('./conf/comment.config'),
  ...require('./conf/contact.config'),
  ...require('./conf/post.config'),
  ...require('./conf/analytics.config'),
  ...require('./conf/image.config'),
  ...require('./conf/font.config'),
  ...require('./conf/right-click-menu'),
  ...require('./conf/code.config'),
  ...require('./conf/animation.config'),
  ...require('./conf/widget.config'),
  ...require('./conf/ad.config'),
  ...require('./conf/plugin.config'),
  ...require('./conf/performance.config'),
  ...require('./conf/layout-map.config'),
  ...require('./conf/notion.config'),
  ...require('./conf/dev.config'),

  // --- 其他自定义 ---
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '',
  BEI_AN_LINK: process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/',
  BEI_AN_GONGAN: process.env.NEXT_PUBLIC_BEI_AN_GONGAN || '',
  CUSTOM_EXTERNAL_JS: [''], 
  CUSTOM_EXTERNAL_CSS: [''], 
  LAYOUT_SIDEBAR_REVERSE: process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,
  GREETING_WORDS: process.env.NEXT_PUBLIC_GREETING_WORDS || 'Hi，欢迎来到我的博客🎉'
}

module.exports = BLOG
