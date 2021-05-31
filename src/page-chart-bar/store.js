import { observable } from "mobx";
import { mockData } from "./mock";

class Chart {
  @observable LockCount = mockData;

  @observable shapeDataArr = [
    {
      title: "IC卡",
      value: 915,
      pre: "43.57%",
      key: 1,
    },
    {
      title: "钥匙",
      value: 884,
      pre: "42.1%",
      key: 2,
    },
    {
      title: "密码",
      value: 301,
      pre: "14.33%",
      key: 3,
    },
  ];

  @observable shapeData = {
    cardCount: 915,
    cardPercentage: "43.57%",
    count: 2100,
    keyCount: 884,
    keyPercentage: "42.1%",
    pwdCount: 301,
    pwdPercentage: "14.33%",
  };

  @observable stackData = [
    {
      month: "2019-05",
      "hotel.sciener.cn": 2,
      "hotel.ttlock.tech": 4,
    },
    {
      month: "2019-04",
      "hotel.sciener.cn": 2,
      "hotel.ttlock.tech": 4,
    },
    {
      month: "2019-03",
      "hotel.sciener.cn": 2,
      "hotel.ttlock.tech": 4,
    },
    {
      month: "2019-02",
      "hotel.sciener.cn": 2,
      "hotel.sciener.tech": 6,
    },
    {
      month: "2019-01",
      "hotel.ttlock.tech": 4,
    },
    {
      month: "2018-12",
      "hotel.sciener.cn": 2,
    },
    {
      month: "2018-11",
      "hotel.sciener.cn": 2,
      "hotel.cn": 10,
    },
    {
      month: "2018-10",
      "hotel.ttlock.tech": 4,
    },
    {
      month: "2018-09",
      "hotel.ttlock.cn": 4,
    },
    {
      month: "2018-08",
      "hotel.ttlock.tech": 4,
    },
    {
      month: "2018-07",
      "hotel.ttlock.cn": 4,
    },
    {
      month: "2018-06",
      "hotel.sciener.cn": 4,
      "hotel.sciener.tech": 4,
    },
  ];
}

export default new Chart();
