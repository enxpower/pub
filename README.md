# enxpower/pub

Andy 用于协助朋友、合作伙伴和个人项目发布独立 HTML 内容的公共发布仓库。

- 正式域名：<https://enxpower.com>
- 仓库：<https://github.com/enxpower/pub>
- 默认分支：`main`

## 发布模型

每个根目录子文件夹都是一个完全独立的发布项目：

```text
<folder>/index.html
→ https://enxpower.com/<folder>/
```

例如：

```text
youth-heritage-100/index.html
→ https://enxpower.com/youth-heritage-100/
```

正式地址**不包含**仓库名 `/pub/`。

## 新项目标准结构

```text
<project-slug>/
├── index.html          # 完整静态正式入口
├── og-image.png        # PNG 社交分享图
├── wechat-share.png    # 可选微信方形图
├── favicon.png         # 可选
└── assets/             # 项目独立资源
```

## AI / 开发者必读

开始任何新建、修改或修复任务前，依次阅读：

1. [`AGENTS.md`](./AGENTS.md) — 仓库最高执行规则
2. [`docs/PUBLISHING_GOVERNANCE.md`](./docs/PUBLISHING_GOVERNANCE.md) — 完整发布方法与治理
3. [`docs/HTML_PRODUCT_STANDARD.md`](./docs/HTML_PRODUCT_STANDARD.md) — HTML 铁律与验收标准
4. [`docs/QUICK_START_PROMPT.md`](./docs/QUICK_START_PROMPT.md) — 新线程一句话启动口令

## 一句话启动

上传或粘贴素材后，在新线程直接说：

> 使用 `enxpower/pub` 发布库，按仓库 `AGENTS.md` 和 HTML 铁律，把我提供的素材制作成独立精美中文网页；在根目录创建新文件夹和完整 `index.html`，完成三端适配、PNG 分享预览、favicon、按钮与锚点核验，直接发布并给我正式链接。

收到该指令后，应立即读取仓库治理文件、核对 `main` 分支、开发、验证并发布，不需要用户重复解释目录与 HTML 规则。

## 现有发布

| Folder | URL | Description |
|---|---|---|
| `gong-vi/` | [enxpower.com/gong-vi](https://enxpower.com/gong-vi/) | Personal Visual Identity System |
| `youth-heritage-100/` | [enxpower.com/youth-heritage-100](https://enxpower.com/youth-heritage-100/) | 青年非遗100项目提案 |

## 核心原则

- 一个项目一个根目录文件夹
- `index.html` 必须直接包含完整页面
- 原文核心思想优先于视觉炫技
- 电脑、Pad、手机精确适配并锁死横向滚动
- 使用与内容相关的 PNG 分享图和 favicon
- 所有按钮、导航、CTA、锚点发布前必须验证
- 不虚构数据、授权、合作或落地状态
- 不修改无关项目
- 未经线上验证不得宣称发布完成