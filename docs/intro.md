---
sidebar_position: 1
---

# 简介

锂 API 是一个功能丰富的 API 接口聚合平台。

锂 API 设立的的初衷，是通过付费订阅的方式，为我们的开源项目[LrcAPI](https://github.com/hisatri/LrcAPI)提供一定的资金支持。

## 定价原则

为了便利开发和防止滥用，锂 API 完全使用按量付费的定价原则。

对于大部分公开的 API 接口，锂 API 免费提供服务。

部分 API 接口需要较高的维护成本，锂 API 在合理范围内收取费用，并始终保持非盈利的原则。

## 项目说明

- 账号额度管理：https://account.lrc.cx

  你可以在这里查看你的账号额度，并使用兑换码兑换额度。

- API Base URL：https://liapi.lrc.cx

  锂 API 的 API Base URL。通过此域访问所有 API 接口。

## 接入方式

锂 API 是一个基于 HTTP 协议的 API 接口聚合平台。

接入方式非常简单，你只需要在请求头中添加 `Authorization` 字段，并设置为你的 API Key 即可。

API Key 可以在[账号额度管理](https://account.lrc.cx/)页面生成和管理。

## 请求示例

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="bash" label="cURL">

```bash
curl -X GET 'https://liapi.lrc.cx/api/lyrics/search?title=晴天&artist=周杰伦' \
  -H 'Authorization: your_passkey'
```

</TabItem>
<TabItem value="py" label="Python">

```py
import requests

response = requests.get('https://liapi.lrc.cx/api/lyrics/search', 
    params={
    'title': '晴天',
    'artist': '周杰伦'
    },
    headers={
      'Authorization': 'your_passkey'
    }).text

print(response)
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
var myHeaders = new Headers();
myHeaders.append("Authorization", "your_passkey");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://liapi.lrc.cx/api/lyrics?title=晴天&artist=周杰伦", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

</TabItem>
</Tabs>