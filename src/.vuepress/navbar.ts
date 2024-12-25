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
          "3",
          "4",
        ],
      },
      {
        text: "苹果",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "苹果1", icon: "pen-to-square", link: "1" },
          { text: "苹果2", icon: "pen-to-square", link: "2" },
          "3",
          "4",
        ],
      },
      {
        text: "香蕉",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "香蕉 1",
            icon: "pen-to-square",
            link: "1",
          },
          {
            text: "香蕉 2",
            icon: "pen-to-square",
            link: "2",
          },
          "3",
          "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry",
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
