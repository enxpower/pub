# enxpower/pub 发布方法与治理规范

## 一、目的

本仓库用于将用户提供的文章、策划案、品牌材料、公益项目、朋友项目和个人成果，转化为独立、精美、可公开传播的静态 HTML 页面。

它不是一个大型网站应用，也不是把所有内容塞进同一个首页的内容管理系统。它采用最简单、最稳定、最容易长期维护的发布模型：

> 一个项目 = 根目录下一个独立文件夹 = 一个正式 URL。

## 二、发布模型

仓库：

```text
https://github.com/enxpower/pub
```

自定义域名：

```text
https://enxpower.com
```

目录与 URL 映射：

```text
仓库：<folder>/index.html
网址：https://enxpower.com/<folder>/
```

示例：

```text
youth-heritage-100/index.html
→ https://enxpower.com/youth-heritage-100/
```

注意：自定义域名已经直接映射仓库根目录，因此正式 URL 绝不写成：

```text
https://enxpower.com/pub/<folder>/
```

## 三、项目命名

文件夹名必须：

- 全部小写
- 使用英文、数字和短横线
- 简短、稳定、具备长期传播价值
- 避免日期、版本号、空格、中文、下划线
- 一旦公开传播，原则上不再改名

推荐：

```text
youth-heritage-100
huaxia-he
snow-robot-proposal
museum-partnership
```

不推荐：

```text
新项目
final-v7
project_01
2026-07-21-test
```

## 四、标准项目结构

最小可发布结构：

```text
project-slug/
├── index.html
└── og-image.png
```

推荐结构：

```text
project-slug/
├── index.html
├── og-image.png
├── wechat-share.png
├── favicon.png
└── assets/
    ├── hero.webp
    ├── figure-01.webp
    └── ...
```

### index.html

- 必须是正式入口。
- 必须包含完整 HTML、CSS 和必要 JavaScript。
- 即使禁用 JavaScript，核心内容仍应可阅读。
- 不允许是空壳、重定向页、iframe 包装页或 JS 二次加载正文。

### assets

- 资源必须属于当前项目。
- 路径优先使用相对路径。
- 所有图片发布前应压缩并核对大小写。
- 不提交字体文件。

## 五、标准工作流程

### 阶段 1：理解原文

先完整阅读素材，再回答四个问题：

1. 这份内容真正要证明什么？
2. 目标读者是谁？
3. 读者最终应采取什么行动？
4. 哪些事实、数据和关系是不可删减的信任锚点？

不得直接把原文逐段搬成“在线 Word”。

### 阶段 2：信息架构

根据内容建立清晰的说服顺序，例如：

```text
愿景 → 问题 → 解决方案 → 机制 → 实力证明 → 商业/社会价值 → 路线 → 风险治理 → 行动入口
```

页面结构必须服务于读者决策，而不是服务于设计炫技。

### 阶段 3：视觉与文案

- 文案忠于原文核心思想，但允许压缩、重组和金句化。
- 视觉根据项目气质决定，不机械套模板。
- 对朋友项目也按正式品牌提案标准执行。
- 页面应做到精美、克制、易读、值得反复观看。

### 阶段 4：实现

- 在仓库根目录创建新文件夹。
- 编写完整 `index.html`。
- 加入 favicon、OG/Twitter 分享元数据。
- 准备公开可访问的 PNG 分享图。
- 完成响应式、菜单、按钮和必要交互。

### 阶段 5：发布前验证

执行 `docs/HTML_PRODUCT_STANDARD.md` 中的检查表。

至少人工验证：

- iPhone 窄屏
- 常见 Android/移动浏览器宽度
- iPad/平板宽度
- 1440px 左右桌面宽度
- 页面顶部、底部、导航和全部 CTA
- 微信分享卡片

### 阶段 6：提交与线上核验

- 提交到 `main`。
- 记录 commit SHA。
- 打开正式 URL 验证，不只看 GitHub 源文件。
- 确认 GitHub Pages/CDN 更新后再宣布完成。

## 六、内容治理

### 1. 原文优先

页面必须全面表达原文核心内容与思想。设计和传播优化不得造成：

- 核心结论遗漏
- 商业口径矛盾
- 合作关系升级或虚构
- 数据夸大
- 计划状态伪装成已落地成果

### 2. 状态必须清楚

对合作方、点位、授权和实施进度，使用准确状态：

- 已签约
- 已落地
- 拟申请
- 拟合作
- 规划中
- 试点中

不得把“拟”删掉以增强气势。

### 3. 数据必须可追溯

重要数字在适当位置注明：

- 数据年份
- 截止日期
- 来源口径
- 是否来自用户原始策划材料

如未核验，不得将其写成已独立确认的事实。

### 4. 对外语气

禁止出现：

- 展示稿
- 草稿
- TODO
- 此处待补
- 内部沟通
- AI生成
- 请替换
- 假数据
- 调试说明

必要法律兜底应使用低权重、正式、前进式表达。

## 七、设计治理

### 设计原则

- 先建立统一设计系统，再做分区。
- 同一页面不能像多个模板拼接。
- 大标题、正文、卡片、按钮和数据必须有统一尺度。
- 中文大标题应有舒展行高，手机端不得拥挤。
- 装饰层不得影响点击。
- 地图、图表和数据可视化必须真实；无法保证真实性时改用网络图、流程图或场景结构。

### VI 使用

- 明确公司/品牌时，完整尊重该主体 VI。
- 无明确品牌主体时，使用 GONG-VI 的克制、精致和大道至简原则。
- 不随意借用其他公司的 Logo、颜色或视觉资产。

## 八、分享与搜索治理

每个页面必须具备：

```html
<title>...</title>
<meta name="description" content="...">
<meta property="og:type" content="website">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:url" content="https://enxpower.com/<folder>/">
<meta property="og:image" content="https://enxpower.com/<folder>/og-image.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
```

微信兼容原则：

- PNG 优先，绝不只提供 SVG。
- 图片必须公开返回 `200 OK` 和正确 `image/png` MIME。
- `index.html` 必须直接包含元数据和正文。
- 必要时额外提供方形 `wechat-share.png`。
- 微信抓取结果由微信服务器缓存，换浏览器不能清缓存。
- 测试可使用新的查询参数，但正式传播 URL 保持稳定。

## 九、交互治理

所有点击元素必须是真实的 `<a>` 或 `<button>`。

内部锚点必须满足：

```text
每一个 href="#target" 都存在 id="target"
```

任何绝对定位、伪元素、背景纹理、动画装饰必须：

```css
pointer-events: none;
```

或明确位于交互层下方。

移动端菜单必须：

- 可打开
- 可关闭
- 点击导航后自动收起
- 不覆盖后续页面交互
- 有 `aria-label`

## 十、变更治理

修改既有页面时：

1. 先确定用户要求的修改边界。
2. 只动相关文件和相关层。
3. 用户说“其他不要动”时，必须执行最小差异修改。
4. 不借修 Bug 之机重写正文或重新设计。
5. 提交后说明实际改动文件和 commit SHA。

## 十一、失败处理

- 若正式地址 404，先核对目录、文件名大小写和自定义域名路径。
- 若微信没有预览图，检查公网响应、MIME、图片尺寸、HTML入口和微信缓存，不靠反复换浏览器猜测。
- 若按钮不可点，检查锚点存在性、透明覆盖层、z-index 和 pointer-events。
- 若无法真实表达地图或数据，删除误导性表达，改用准确的结构图。
- 不得在未验证时宣称“已修复”“已经可用”。

## 十二、交付格式

完成后给用户：

1. 正式链接
2. GitHub 源码目录
3. 主要完成项
4. commit SHA
5. 仍需用户在第三方平台人工确认的事项，例如微信最终卡片缓存结果

不要用缓存参数地址代替正式地址。