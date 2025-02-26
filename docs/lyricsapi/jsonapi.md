---
title: 歌词 JSON API
sidebar_position: 3
---

# 歌词 JSON API

批量获取歌词文本，并返回 JSON 格式。

`lrcapi.lyrics.advance`
## API价格

- 计费标准：按次计费
- 价格：0.001元/条 | 1元/1000条

## 请求方式

- 请求方式：GET
- 请求地址：`http://liapi.lrc.cx/api/lrcapi/jsonapi`

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| title | string | 否 | 歌曲标题 |
| artist | string | 否 | 歌手名称 |
| album | string | 否 | 专辑名称 |

### 请求示例

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="bash" label="cURL">

```bash
curl --location --request GET 'http://liapi.lrc.cx/api/lrcapi/jsonapi?title=晴天&artist=周杰伦&album=叶惠美' \
--header 'Authorization: your_token'
```

</TabItem>
<TabItem value="py" label="Python">

```py
import requests

url = "http://liapi.lrc.cx/api/lrcapi/jsonapi?title=晴天&artist=周杰伦&album=叶惠美"

payload={}
headers = {
  'Authorization': 'your_token'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
var myHeaders = new Headers();
myHeaders.append("Authorization", "your_token");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://liapi.lrc.cx/api/lrcapi/jsonapi?title=晴天&artist=周杰伦&album=叶惠美", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

</TabItem>
</Tabs>

### 响应格式

- 响应格式：application/json
- 响应示例：

```json

[
    {
        "album": "叶惠美",
        "artist": "周杰伦",
        "id": "333420869619105189309323388697127014735",
        "lyrics": "[id:$00000000]\n[ar:周杰伦]\n[ti:晴天]\n[by:]\n[hash:6d6bc2d6ae2b21943f810a2cd23e2260]\n[al:叶惠美]\n[sign:]\n[qq:]\n[total:0]\n[offset:0]\n[00:00.000]周杰伦 - 晴天\n[00:02.250]词：周杰伦\n[00:04.500]曲：周杰伦\n[00:06.750]编曲：周杰伦\n[00:09.000]制作人：周杰伦\n[00:11.250]合声：周杰伦\n[00:13.500]合声编写：周杰伦\n[00:15.750]吉他：蔡科俊Again\n[00:18.000]贝斯：陈任佑\n[00:20.250]鼓：陈柏州\n[00:22.510]录音助理：刘勇志\n[00:24.760]录音工程：杨瑞代（Alfa Studio）\n[00:27.010]混音工程：杨大纬（杨大纬录音工作室）\n[00:29.260]故事的小黄花\n[00:32.710]从出生那年就飘着\n[00:36.240]童年的荡秋千\n[00:39.750]随记忆一直晃到现在\n[00:42.910]Re So So Si Do Si La\n[00:45.930]So La Si Si Si Si La Si La So\n[00:49.870]吹着前奏望着天空\n[00:53.200]我想起花瓣试着掉落\n[00:56.720]为你翘课的那一天\n[00:58.830]花落的那一天\n[01:00.600]教室的那一间\n[01:02.320]我怎么看不见\n[01:04.120]消失的下雨天\n[01:05.810]我好想再淋一遍\n[01:09.990]没想到失去的勇气我还留着\n[01:16.120]好想再问一遍\n[01:17.970]你会等待还是离开\n[01:24.910]刮风这天我试过握着你手\n[01:30.450]但偏偏雨渐渐大到我看你不见\n[01:38.880]还要多久我才能在你身边\n[01:45.440]等到放晴的那天也许我会比较好一点\n[01:52.870]从前从前有个人爱你很久\n[01:58.540]但偏偏风渐渐把距离吹得好远\n[02:06.940]好不容易又能再多爱一天\n[02:13.500]但故事的最后你好像还是说了拜拜\n[02:34.900]为你翘课的那一天\n[02:36.880]花落的那一天\n[02:38.660]教室的那一间\n[02:40.390]我怎么看不见\n[02:42.150]消失的下雨天\n[02:43.870]我好想再淋一遍\n[02:48.000]没想到失去的勇气我还留着\n[02:54.150]好想再问一遍\n[02:56.030]你会等待还是离开\n[03:02.920]刮风这天我试过握着你手\n[03:08.490]但偏偏雨渐渐大到我看你不见\n[03:16.940]还要多久我才能在你身边\n[03:23.430]等到放晴的那天也许我会比较好一点\n[03:30.870]从前从前有个人爱你很久\n[03:37.140]偏偏风渐渐把距离吹得好远\n[03:44.880]好不容易又能再多爱一天\n[03:51.420]但故事的最后你好像还是说了拜拜\n[03:58.490]刮风这天我试过握着你手\n[04:01.970]但偏偏雨渐渐大到我看你不见\n[04:05.650]还要多久我才能够在你身边\n[04:09.070]等到放晴那天也许我会比较好一点\n[04:12.920]从前从前有个人爱你很久\n[04:15.910]但偏偏雨渐渐把距离吹得好远\n[04:19.380]好不容易又能再多爱一天\n[04:22.860]但故事的最后你好像还是说了拜\n",
        "ratio": 1.0,
        "title": "晴天"
    },
    {
        "album": "叶惠美",
        "artist": "周杰伦",
        "id": "80776622926514369194154432283790141533",
        "lyrics": "[00:00.000] 作词 : 周杰伦\n[00:01.000] 作曲 : 周杰伦\n[00:02.000] 编曲 : 周杰伦\n[00:03.000] 制作人 : 周杰伦\n[00:04.000] 和声编写 : 周杰伦\n[00:05.000] 吉他 : 蔡科俊Again\n[00:06.000] 贝斯 : 陈任佑\n[00:07.000] 鼓 : 陈柏州\n[00:08.000] 录音工程 : 杨瑞代\n[00:09.000] 混音 : 杨大纬（杨大纬录音工作室）\n[00:10.000] 录音助理 : 刘勇志\n[00:28.950]故事的小黄花\n[00:32.380]从出生那年就飘着\n[00:35.870]童年的荡秋千\n[00:39.370]随记忆一直晃到现在\n[00:42.440]Re So So Si Do Si La\n[00:45.530]So La Si Si Si Si La Si La So\n[00:49.570]吹着前奏望着天空\n[00:52.870]我想起花瓣试着掉落\n[00:56.410]为你翘课的那一天\n[00:58.550]花落的那一天\n[01:00.189]教室的那一间\n[01:01.988]我怎么看不见\n[01:03.880]消失的下雨天\n[01:05.409]我好想再淋一遍\n[01:09.748]没想到失去的勇气我还留着\n[01:15.528]好想再问一遍\n[01:17.519]你会等待还是离开\n[01:24.498]刮风这天我试过握着你手\n[01:30.078]但偏偏雨渐渐大到我看你不见\n[01:38.450]还要多久我才能在你身边\n[01:44.870]等到放晴的那天也许我会比较好一点\n[01:52.328]从前从前有个人爱你很久\n[01:57.959]但偏偏风渐渐把距离吹得好远\n[02:06.239]好不容易又能再多爱一天\n[02:12.909]但故事的最后你好像还是说了拜拜\n[02:21.989]\n[02:34.660]为你翘课的那一天\n[02:36.500]花落的那一天\n[02:38.299]教室的那一间\n[02:40.039]我怎么看不见\n[02:41.780]消失的下雨天\n[02:43.679]我好想再淋一遍\n[02:47.610]没想到失去的勇气我还留着\n[02:54.089]好想再问一遍\n[02:55.649]你会等待还是离开\n[03:02.469]刮风这天我试过握着你手\n[03:07.899]但偏偏雨渐渐大到我看你不见\n[03:16.419]还要多久我才能在你身边\n[03:22.899]等到放晴的那天也许我会比较好一点\n[03:30.310]从前从前有个人爱你很久\n[03:36.440]偏偏风渐渐把距离吹得好远\n[03:44.289]好不容易又能再多爱一天\n[03:50.769]但故事的最后你好像还是说了拜拜\n[03:58.009]刮风这天我试过握着你手\n[04:01.759]但偏偏雨渐渐大到我看你不见\n[04:05.049]还要多久我才能够在你身边\n[04:08.629]等到放晴那天也许我会比较好一点\n[04:12.569]从前从前有个人爱你很久\n[04:15.509]但偏偏雨渐渐把距离吹得好远\n[04:18.949]好不容易又能再多爱一天\n[04:22.430]但故事的最后你好像还是说了拜\n",
        "ratio": 1.0,
        "title": "晴天"
    },
    {
        "album": "",
        "artist": "周杰伦",
        "id": "98283056460509501879015953527968231657",
        "lyrics": "[offset:0]\n[00:08.800]门外的桂花香飘进我的书桌前\n[00:12.810]我知道该起床妈再给我两分钟\n[00:16.980]拉开了窗帘怎么是下雨天\n[00:24.710]把吐司咬碎碎喂我的狗叫 mikai\n[00:28.660]哥哥说你猜猜今天为什么下雨\n[00:32.870]原来 mikai 把晴天娃娃吃了\n[00:39.570]我讨厌下雨天亲爱的你快出现\n[00:43.820]不然我就告诉妈咪你偷牵我的手\n[00:47.620]我喜欢夏天你穿背心的感觉\n[00:52.000]每天都想粘都很甜\n[00:55.490]我讨厌下雨天亲爱的你快出现\n[00:59.760]不然我就告诉妈咪你偷牵我的手\n[01:03.700]我喜欢夏天你穿背心的感觉\n[01:07.730]每天都想粘都很甜\n[01:18.350]把吐司咬碎碎喂我的狗叫 mikai\n[01:22.290]哥哥说你猜猜今天为什么下雨\n[01:26.510]原来 mikai 把晴天娃娃吃了\n[01:33.210]我讨厌下雨天亲爱的你快出现\n[01:37.460]不然我就告诉妈咪你偷牵我的手\n[01:41.770]我喜欢夏天你穿背心的感觉\n[01:45.650]每天都想粘都很甜\n[01:49.130]我讨厌下雨天亲爱的你快出现\n[01:53.390]不然我就告诉妈咪你偷牵我的手\n[01:57.420]我喜欢夏天你穿背心的感觉\n[02:01.830]每天都想粘都很甜\n",
        "ratio": 0.9099337432583379,
        "title": "晴天娃娃"
    }
]
```