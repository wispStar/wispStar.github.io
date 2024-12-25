import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "人物传记",
        icon: "pen-to-square",
        prefix: "人物传记/",
        children: [
          { text: "夏至日邂逅日偏食", icon: "sun", link: "solarEclipse" },
          { text: "小科学家三赴T大会", icon: "atom", link: "Conference3" },
          { text: "大鼠面部疼痛识别专利", icon: "microscope", link: "patentSEU1" },
          { text: "生命科学学院榜样", icon: "person", link: "jdd24Mar" },
          { text: "树仁书院团学之星", icon: "star", link: "SUSTMonthlyStar" },
        ],
      },
      {
        text: "交通运输",
        icon: "transport",
        prefix: "交通运输/",
        children: [
          "地铁",
          "公交",
          "北京地铁1号线",
        ],
      },
      {
        text: "城市",
        icon: "city",
        prefix: "城市/",
        children: [
          "城市探索",
          "旅行行李",
        ],
      },
      {
        text: "读书笔记",
        icon: "booknote",
        prefix: "读书笔记/",
        children: [
          "社会性动物",
          "政治学",
          "置身事内",
        ],
      },
      { text: "写作贴士", icon: "pen-to-square", link: "tips" },
      "随笔",
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
