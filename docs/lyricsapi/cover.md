---
title: 歌词封面
sidebar_position: 4
---

# 歌词封面

获取歌词封面图片。

`lrcapi.cover`

## API价格

- 计费标准：按量付费
- 价格：0.001元/条 | 1元/1000条

## 请求方式

- 请求方式：GET
- 请求地址：`http://liapi.lrc.cx/api/lrcapi/cover`

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| title | string | 否 | 歌曲标题 |
| artist | string | 否 | 歌手名称 |
| album | string | 否 | 专辑名称 |

#### 说明

对于传入的参数：

- 如果`title`不存在而`album`存在，则返回专辑封面。
- 如果`title`和`album`都不存在，但`artist`存在，则返回歌手封面。
- 如果`title`存在，则返回歌曲封面。

### 请求示例

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="bash" label="cURL">

```bash
curl --location --request GET 'http://liapi.lrc.cx/api/lrcapi/cover?title=晴天&artist=周杰伦&album=叶惠美' \
--header 'Authorization: your_passkey'
```

</TabItem>
<TabItem value="py" label="Python">

```py
import requests

url = "http://liapi.lrc.cx/api/lrcapi/cover?title=晴天&artist=周杰伦&album=叶惠美"

payload={}
headers = {
  'Authorization': 'your_passkey'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
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

fetch("http://liapi.lrc.cx/api/lrcapi/cover?title=晴天&artist=周杰伦&album=叶惠美", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

</TabItem>
</Tabs>

## 响应内容

二进制图片数据。
