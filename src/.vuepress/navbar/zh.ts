import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/demo/",
  {
    text: "精选博文",
    icon: "pen-to-square",
    prefix: "/zh/posts/",
    children: [
      // {
      //   text: "苹果",
      //   icon: "pen-to-square",
      //   prefix: "apple/",
      //   children: [
      //     { text: "苹果1", icon: "pen-to-square", link: "1" },
      //     { text: "苹果2", icon: "pen-to-square", link: "2" },
      //     "3",
      //     "4",
      //   ],
      // },
      // {
      //   text: "香蕉",
      //   icon: "pen-to-square",
      //   prefix: "banana/",
      //   children: [
      //     {
      //       text: "香蕉 1",
      //       icon: "pen-to-square",
      //       link: "1",
      //     },
      //     {
      //       text: "香蕉 2",
      //       icon: "pen-to-square",
      //       link: "2",
      //     },
      //     "3",
      //     "4",
      //   ],
      // },
      {
        text: "倪神！",
        icon: "microchip",
        prefix: "倪嘉舟/",
        children: [
          {
            text: "夏至日邂逅日环食",
            icon: "sun",
            link: "solarEclipse",
          },
          {
            text: "小科学家三赴科学T大会",
            icon: "atom",
            link: "Conference3",
          },
          // "3",
          // "4",
        ],
      },
      {
        text: "北京地铁",
        icon: "map",
        prefix: "北京地铁/",
        children: [
          {
            text: "北京地铁1号线",
            icon: "train-subway",
            link: "北京地铁1号线",
          },
          {
            text: "北京地铁车型概论",
            icon: "train-subway",
            link: "北京地铁车型概论",
          },
          // "3",
          // "4",
        ],
      },
      {
        text: "城市",
        icon: "pen-to-square",
        prefix: "城市/",
        children: [
          {
            text: "如何探索一个城市",
            icon: "city",
            link: "ExploreCities",
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
      "patentSEU1",
      "SUSTMonthlyStar",
      "jdd24Mar",
    ],
  },
  {
    text: "V2 文档",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
