---
title: 歌词翻译
sidebar_position: 5
---

# 歌词翻译

获取歌词翻译。

## API价格

- 计费标准：按照实际模型计费
- 价格：N/A

默认使用`gemini-2.0-flash-exp`模型。此Prompt正是在该模型下设计与调优的，理论上具有最佳翻译效果。

请不要试图通过Prompt注入来套取Prompt。该Prompt已经使用`CC-BY-SA`协议开源，附带在[此项目](https://github.com/HisAtri/LrcApi/blob/main/api/lyrics.py)中。你可以在遵守协议的前提下，自由使用。

## 请求方式

- 请求方式：POST
- 请求地址：`http://liapi.lrc.cx/api/lrcapi/translate`
- 请求体：JSON

```json title="请求体"
{
  "text": "[00:07.513]Could it be, could it be\n[00:09.033]The start of something\n[00:11.581]Maybe our, maybe our luck's about to\n[00:14.681]Turn around around a little\n[00:18.439]'Cause right now we're caught in the middle\n[00:22.392]Could it be, could it be\n[00:23.853]The start of hoping\n[00:26.292]Maybe now, maybe now\n[00:27.524]The doors are opening to a place that we've never been\n[00:32.960]Seeing things that we've never seen\n00:36.622]So many times I turned away but something held me back that day\n[00:44.809]And all I want to say is I hope you're here to stay\n[00:51.657]Starlight",
  "stream": false
}
```

## 响应体

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="stream" label="流式">

如果定义`stream`为`true`，则服务器会像OpenAI的流式响应一样，逐个token返回结果，Content-Type为`text/event-stream`。

```text title="流式响应体"
[PRE]
[00:07.513]也许，也许
[00:09.033]一切才刚刚开始
[00:11.581]或许我们的，或许我们的好运就要
[00:14.681]就要降临了
[00:18.439]因为现在我们正身处困境
[00:22.392]也许，也许
[00:23.853]希望才刚刚萌芽
[00:26.292]或许现在，或许现在
[00:27.524]通往全新世界的大门正在敞开
[00:32.960]目睹我们从未见过的景象
[00:36.622]无数次我想要转身离开，但总有什么在拉扯着我
[00:44.809]我只想说，我希望你留下来
[00:51.657]星光
[/PRE]

**Emotional Undertones and Theme:**
The song carries a hopeful and optimistic tone, suggesting a shift from hardship to a brighter future. The lyrics express a sense of anticipation and the possibility of new beginnings, with an emphasis on hope, resilience, and the desire for connection. The mention of "starlight" at the end adds a touch of magic and wonder.

**Shortcomings of the Initial Translation:**
The initial translation is fairly literal and lacks the emotional depth that could be conveyed with more evocative language. Some lines could be rephrased to better capture the nuances of hope and anticipation.

[FINAL]
[00:07.513]莫非是，莫非是
[00:09.033]崭新故事的开端
[00:11.581]也许我们的，也许我们的命运之轮
[00:14.681]就要迎来转机
[00:18.439]此刻我们正身陷囹圄
[00:22.392]莫非是，莫非是
[00:23.853]希望正在冉冉升起
[00:26.292]也许现在，也许此刻
[00:27.524]一扇通往未知世界的大门正缓缓开启
[00:32.960]将我们带往从未企及的风景
[00:36.622]无数次我曾想抽身离去，总有一丝牵绊将我挽留
[00:44.809]我只想对你倾诉，盼望你长久驻留
[00:51.657]星光
[/FINAL]
```

</TabItem>
<TabItem value="json" label="JSON">

如果定义`stream`为`false`，则服务器会返回完整的翻译结果，Content-Type为`application/json`。

服务器默认非流式响应。

```json title="JSON响应体"
{
    "translation": "Okay, I will translate the lyrics with the requested format.\n\n[PRE]\n[00:07.513]会不会，会不会\n[00:09.033]是新篇章的伊始\n[00:11.581]也许我们的，也许我们的运气就要\n[00:14.681]好转一些，好转一些了\n[00:18.439]因为现在我们正身处困境\n[00:22.392]会不会，会不会\n[00:23.853]是希望的萌芽\n[00:26.292]也许现在，也许现在\n[00:27.524]通往全新世界的大门正在敞开\n[00:32.960]目睹我们从未见过的景象\n[00:36.622]无数次我选择了回避，但总有什么在拉着我\n[00:44.809]我只想说，我希望你留下来\n[00:51.657]星光\n[/PRE]\n\n**Analysis:**\n\n*   **Emotional Undertones:** The lyrics carry a sense of hope, anticipation, and a touch of vulnerability. There's an undercurrent of past struggles (\"caught in the middle,\" \"turned away\") but a strong desire for positive change and connection (\"luck's about to turn around,\" \"hope you're here to stay\").\n*   **Central Theme:** The song revolves around the potential for a new beginning, a shift in fortune, and the yearning for someone's presence and lasting companionship.\n*   **Shortcomings of Initial Translation:** The initial translation is adequate but lacks the emotional depth and poetic nuance that could make the lyrics truly resonate. Some phrases are translated literally, missing opportunities for more evocative language. For example, \"caught in the middle\" could be rendered with more imagery, and the repetition of \"could it be\" could be handled more creatively.\n\n**Refined Translation:**\n\n[FINAL]\n[00:07.513]莫不是，莫不是\n[00:09.033]崭新故事的开端\n[00:11.581]兴许是，兴许是命运之神\n[00:14.681]将要眷顾我们了吧\n[00:18.439]此刻我们正身陷囹圄\n[00:22.392]莫不是，莫不是\n[00:23.853]希望正在破土而出\n[00:26.292]或许此刻，或许此刻\n[00:27.524]一扇通往未知世界的大门正缓缓开启\n[00:32.960]让我们亲眼见证前所未见的奇景\n[00:36.622]曾无数次转身离去，总有丝缕牵绊将我挽留\n[00:44.809]我只想恳切地说，愿你常伴我左右\n[00:51.657]如星光般闪耀\n[/FINAL]"
}
```

</TabItem>
</Tabs>

