package main

import "testing"

func Test_parseMsg(t *testing.T) {
	test1 := []byte(`
{
  "type": 0,
  "id": "20221213184907104600",
  "time": "2022-12-13 18:49:07",
  "data": {
    "content": "网传辉瑞新冠特效药Paxlovid开启网售，1药网回应称媒体对1药网关于新冠口服药PAXLOVID网售的解读不准确。（21财经）",
    "pic": ""
  },
  "important": 1,
  "remark": [
    {
      "id": 1024,
      "link": "https://m.21jingji.com/timeline/b28d14a65ecb77fc44ec60b858880da5.html",
      "type": "link",
      "title": "相关链接 >>"
    }
  ],
  "channel": [
    2
  ],
  "action": 1
}
`)

	test2 := []byte(`
{
  "event": "flash-hot-changed",
  "data": [
    {
      "type": 0,
      "id": "20221210185949034100",
      "time": "2022-12-10 18:59:49",
      "data": {
        "content": "【中企造自动驾驶大巴客车将在法国载客运营】中国中车旗下中车时代电动汽车股份有限公司（中车电动）制造的自动驾驶大巴客车近日在法国巴黎市郊完成各项调试，准备正式开始载客运营。这款自动驾驶大巴客车是中车电动“新巴客”城市系列C12AI，于2020年完成设计。车身长约12米，以智能驾驶、智能动力、智能互联为依托，可全方位实施人、车、路动态信息实时交互。该客车计划近期在巴黎大众运输公司其中一条线路的部分路段上开展载客运营。（新华社）",
        "pic": ""
      },
      "important": 0,
      "tags": [],
      "remark": [],
      "channel": [
        3,
        4,
        5
      ],
      "action": 1,
      "classify": [
        129,
        28,
        130,
        29,
        39,
        22,
        125,
        109
      ],
      "hot": "热"
    }
  ]
}
`)

	test3 := []byte(`
{
  "event": "flash-hot-changed",
  "data": [
    {
      "type": 0,
      "id": "20221212112931788100",
      "time": "2022-12-12 11:29:31",
      "data": {
        "content": "<b>央行前瞻：2022年度最后一个“超级央行周”</b><br/>动荡的一年即将结束，美联储领衔各大央行迎来2022年度最后一次利率决议，密集宣布加息的同时这些全球重要央行还将作出什么关键决定？交易者需要关注哪些风险？",
        "pic": ""
      },
      "important": 1,
      "tags": [],
      "remark": [
        {
          "id": 1024,
          "link": "https://svip.jin10.com/news/104145",
          "type": "link",
          "title": "相关链接 >>"
        }
      ],
      "channel": [
        1
      ],
      "action": 1,
      "classify": [
        128,
        27,
        2,
        1,
        121,
        3,
        4,
        5,
        137,
        26,
        127,
        16,
        12,
        123,
        53
      ],
      "hot": "火"
    },
    {
      "type": 0,
      "id": "20221211220152160100",
      "time": "2022-12-11 22:01:52",
      "data": {
        "content": "【不止新冠患者，美国医院病床占用率升至疫情以来新高】据美国有线电视新闻网（CNN）8日对卫生与公共服务部数据分析，美国今冬的医院病床使用率超过80%，达到新冠疫情以来新高。而且占用病床的不止是新冠患者，住院的呼吸道疾病患者也出现激增。据报道，全美医院病床使用率超过80%，过去两周上升了8个百分点。（中新网）",
        "pic": ""
      },
      "important": 0,
      "tags": [],
      "remark": [],
      "channel": [
        3,
        1
      ],
      "action": 1,
      "classify": [
        132,
        32
      ],
      "hot": "热"
    },
    {
      "type": 0,
      "id": "20221209220032268100",
      "time": "2022-12-09 22:00:32",
      "data": {
        "content": "【习近平：愿同海合会国家实现航天太空合作新突破】当地时间12月9日下午，习近平出席首届中国－海湾阿拉伯国家合作委员会峰会，并表示，中方愿同海合会国家在遥感和通信卫星、空间应用、航天基础设施、航天员选拔训练等领域开展合作，<b>欢迎海合会国家航天员进入中国空间站，同中国航天员联合飞行并开展空间科学实验。</b>欢迎海方参与中国航天任务搭载合作，研究成立中海联合月球和深空探测中心。（央视新闻）",
        "pic": ""
      },
      "important": 0,
      "tags": [],
      "channel": [
        4,
        5
      ],
      "action": 1,
      "classify": [
        130,
        29,
        75,
        34,
        133
      ],
      "hot": "热"
    }
  ]
}
`)

	ret1 := parseMsg(test1)
	t.Logf("%s \n\n\n", ret1)
	ret2 := parseMsg(test2)
	t.Logf("%s \n\n\n", ret2)
	ret3 := parseMsg(test3)
	t.Logf("%s \n\n\n", ret3)
}