# GBTI 图片占位清单

将以下图片放入 `gbti/image/` 目录：

- `GURU.png`
- `LEEK.png`
- `WATCHER.png`
- `JEEP_MAN.png`
- `TD_MASTER.png`
- `TEN_JQKA.png`
- `DEFENDER_A.png`
- `JUICY_WONDER.png`
- `DIP_HUNTER.png`
- `CHASER.png`
- `SWING_PRO.png`
- `VALUE_GUARD.png`
- `ETF_BELIEVER.png`
- `STOPLOSS_KNIGHT.png`
- `NEWS_TRADER.png`
- `GRID_MONK.png`

对应关系：

- `GURU`：股神
- `LEEK`：韭菜
- `WATCHER`：观望者
- `JEEP_MAN`：接盘侠
- `TD_MASTER`：逃顶大师
- `TEN_JQKA`：梭哈King
- `DEFENDER_A`：大A守望者
- `JUICY_WONDER`：主力妄想者
- `DIP_HUNTER`：抄底猎手
- `CHASER`：追高勇士
- `SWING_PRO`：波段手
- `VALUE_GUARD`：价值派
- `ETF_BELIEVER`：指数信徒
- `STOPLOSS_KNIGHT`：止损骑士
- `NEWS_TRADER`：消息面战士
- `GRID_MONK`：网格禅师

## 生图 Prompt（16 类型合成一张总览图）

> 直接复制下面这段给 AI 生图工具：

```text
请生成一张“GBTI 股票人格类型图鉴总览”，扁平化手绘风、简洁高级、浅灰绿色配色，整体风格参考互联网测试卡片海报。

【画布与版式】
- 一张大图，4096x4096，1:1。
- 4列 x 4行，共16张卡片，卡片间距统一，外边距统一。
- 背景为 very light gray-green（#ECEEEA 附近）。
- 每张卡片为圆角矩形，浅灰白底（#F3F4F1），细边框，轻阴影。

【每张卡片内容结构】
- 左侧：一个统一画风的小人头像/半身像，黑色线稿，浅绿色衣服，极简可爱。
- 右侧两行文字：
  1) 英文代号（全大写，粗体，深灰黑）
  2) 中文类型名（中灰色）
- 文字要清晰可读，不变形，不乱码。

【16张卡片的文案，按顺序排布】
1. GURU / 股神
2. LEEK / 韭菜
3. WATCHER / 观望者
4. JEEP_MAN / 接盘侠
5. TD_MASTER / 逃顶大师
6. TEN_JQKA / 梭哈King
7. DEFENDER_A / 大A守望者
8. JUICY_WONDER / 主力妄想者
9. DIP_HUNTER / 抄底猎手
10. CHASER / 追高勇士
11. SWING_PRO / 波段手
12. VALUE_GUARD / 价值派
13. ETF_BELIEVER / 指数信徒
14. STOPLOSS_KNIGHT / 止损骑士
15. NEWS_TRADER / 消息面战士
16. GRID_MONK / 网格禅师

【角色差异化小道具（每张卡片可带一个）】
- GURU：金色光环
- LEEK：绿色嫩芽
- WATCHER：望远镜
- JEEP_MAN：接力棒
- TD_MASTER：小旗子/“TOP”箭头
- TEN_JQKA：红色上升箭头
- DEFENDER_A：盾牌
- JUICY_WONDER：放大镜
- DIP_HUNTER：向下箭头+捞网
- CHASER：火焰速度线
- SWING_PRO：波浪线图标
- VALUE_GUARD：硬币/秤
- ETF_BELIEVER：指数折线图
- STOPLOSS_KNIGHT：剑与止损线
- NEWS_TRADER：新闻喇叭
- GRID_MONK：网格图标

【风格要求】
- 扁平插画、统一笔触、统一人物比例。
- 不要写实，不要3D，不要照片质感。
- 画面干净，偏产品UI展示图。

【严格禁止】
- 不要水印、不要Logo、不要小红书号、不要二维码。
- 不要多余英文段落说明。
- 不要错误拼写（特别是 TEN_JQKA、ETF_BELIEVER、STOPLOSS_KNIGHT）。
```

## 可选 Negative Prompt

```text
low resolution, blurry text, misspelled words, extra watermark, logo, qr code, photorealistic, 3d render, cluttered background, distorted typography, duplicated cards, random Chinese characters
```
