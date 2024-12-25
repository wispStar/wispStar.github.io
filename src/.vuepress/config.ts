import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "欢迎访问我的博客",
  description: "逸缕星辰的博客演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
