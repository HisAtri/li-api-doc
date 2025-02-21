---
title: METAR 获取
sidebar_position: 1
---

# METAR 获取

获取指定机场的 METAR 信息。

`aviator.metar`

## API价格

- 计费标准：按次计费
- 价格：0.005元/条 | 1元/200条

## 请求方式

- 请求方式：GET
- 请求地址：`http://liapi.lrc.cx/api/aviator/metar`

### 请求参数

| 参数名 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| id | string | 是 | 机场 ICAO 代码（四字码） |
| limit | int | 否 | 返回条数，默认 1 条，最大 10 条 |
| time | int | 否 | 截止某个时间点前的数据，默认获取当前时间，整数时间戳；数据记录从 2025-02-21 10:30:00 开始 |

### 请求示例

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="curl" label="curl">
    ```bash
curl --location --request GET 'http://liapi.lrc.cx/api/aviator/metar?id=zggg' \
--header 'Authorization: your_token'
    ```
  </TabItem>
  <TabItem value="python" label="Python">
    ```python
import requests

response = requests.get('http://liapi.lrc.cx/api/aviator/metar?id=zggg', headers={'Authorization': 'your_token'})
print(response.text)
    ```
  </TabItem>
  <TabItem value="javascript" label="JavaScript">
    ```javascript
var myHeaders = new Headers();
myHeaders.append("Authorization", "your_token");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://liapi.lrc.cx/api/aviator/metar?id=zggg", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    ```
  </TabItem>
</Tabs>

## 响应内容

```json
[
    {
        "data": {
            "altim_in_hg": 30.18,
            "auto": "",
            "auto_station": "",
            "cloud_base_ft_agl": "",
            "corrected": "",
            "dewpoint_c": 9.0,
            "elevation_m": "11",
            "flight_category": "VFR",
            "freezing_rain_sensor_off": "",
            "latitude": 23.392,
            "lightning_sensor_off": "",
            "longitude": 113.307,
            "maintenance_indicator_on": "",
            "maxT24hr_c": "",
            "maxT_c": "",
            "metar_type": "METAR",
            "minT24hr_c": "",
            "minT_c": "",
            "no_signal": "TRUE",
            "observation_time": "2025-02-21T10:30:00Z",
            "pcp24hr_in": "",
            "pcp3hr_in": "",
            "pcp6hr_in": "",
            "precip_in": "",
            "present_weather_sensor_off": "",
            "raw_text": "ZGGG 211030Z 35005MPS 9999 OVC050 17/09 Q1022 NOSIG",
            "sea_level_pressure_mb": "",
            "sky_cover": "",
            "snow_in": "",
            "station_id": "ZGGG",
            "temp_c": 17.0,
            "three_hr_pressure_tendency_mb": "",
            "vert_vis_ft": "",
            "visibility_statute_mi": null,
            "wind_dir_degrees": 350.0,
            "wind_gust_kt": "",
            "wind_speed_kt": 10.0,
            "wx_string": ""
        },
        "observation_time": "2025-02-21 10:30:00",
        "station_id": "ZGGG"
    }
]
```