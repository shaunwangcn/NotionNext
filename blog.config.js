// 注: process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a

const BLOG = {
  // --- 你之前手动添加的样式配置 ---
  POST_LIST_STYLE: 'page', // 建议设为 page 减轻加载压力
  POST_LIST_PREVIEW: true, // 这里强制改为 true
  POST_PREVIEW_LINES: 4,   // 预览行数设为 4

  // --- 基础配置 ---
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3', 
  NOTION_PAGE_ID: process.env.NOTION_PAGE_ID || '02ab3b8678004aa69e9e415905ef32a5,en:7c1d570661754c8fbc568e00a01fd70e',
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || true, 
  THEME: process.env.NEXT_PUBLIC_THEME || 'heo', 
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN', 
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2021, 

  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, 
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 60, 
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', 
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], 

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'Xuefeng Wang', 
  BIO: process.env.NEXT_PUBLIC_BIO || '中医，哲学，科学的思考', 
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://acuswiss.vercel.app', 

  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Notion, 博客', 
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', 
  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', 
  BEI_AN_LINK: process.env.NEXT_PUBLIC_BEI_AN_LINK || 'https://beian.miit.gov.cn/', 
  BEI_AN_GONGAN: process.env.NEXT_PUBLIC_BEI_AN_GONGAN || '', 

  // RSS订阅
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, 

  // --- 引用外部配置 ---
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

  // 高级用法
  ...require('./conf/layout-map.config'),
  ...require('./conf/notion.config'),
  ...require('./conf/dev.config'),

  // 自定义外部脚本，外部样式
  CUSTOM_EXTERNAL_JS: [''], 
  CUSTOM_EXTERNAL_CSS: [''], 

  // 自定义菜单
  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, 

  // 文章列表相关设置
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, 

  // 侧栏布局
  LAYOUT_SIDEBAR_REVERSE: process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // 欢迎语
  GREETING_WORDS: process.env.NEXT_PUBLIC_GREETING_WORDS || 'Hi，欢迎来到我的博客🎉',

  // uuid重定向
  UUID_REDIRECT: process.env.UUID_REDIRECT || false
}

module.exports = BLOG
