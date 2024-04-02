import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/zh/posts/",
    children: [
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
      {
        text: "倪嘉舟",
        icon: "pen-to-square",
        prefix: "NiJiazhou/",
        children: [
          {
            text: "夏至日邂逅日环食",
            icon: "pen-to-square",
            link: "solarEclipse",
          },
          {
            text: "小科学家三赴科学T大会",
            icon: "pen-to-square",
            link: "Conference3",
          },
          // "3",
          // "4",
        ],
      },
      {
        text: "交通运输",
        icon: "pen-to-square",
        prefix: "Transmition/",
        children: [
          {
            text: "北京地铁",
            icon: "pen-to-square",
            link: "BeijingSubway",
          },
          // {
          //   text: "小科学家三赴科学T大会",
          //   icon: "pen-to-square",
          //   link: "Conference3",
          // },
          // "3",
          // "4",
        ],
      },
      { text: "樱桃", icon: "pen-to-square", link: "cherry" },
      { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
      "patentSEU1",
      "SUSTMonthlyStar",
      "jdd24Mar",
      "strawberry",
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
