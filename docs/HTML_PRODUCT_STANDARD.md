# HTML 产品铁律与发布验收标准

本标准适用于 `enxpower/pub` 中所有新建和修改的 HTML 项目。

## A. 三端适配

1. 必须精确适配桌面、Pad、手机。
2. 发布前必须分别核对至少 375px、768px、1024px、1440px 宽度。
3. 所有版本必须锁死横向滚动：

```css
html, body {
  max-width: 100%;
  overflow-x: hidden;
}
```

4. 图片、SVG、视频和卡片不得突破容器宽度。
5. 手机版导航内容较多时必须使用汉堡菜单。
6. 固定导航不得遮挡锚点标题，应设置 `scroll-margin-top`。
7. 中文大标题在手机端必须有足够行高，不得密集堆叠。

## B. 完整静态入口

1. `<folder>/index.html` 必须直接包含完整可阅读页面。
2. 不得使用 JavaScript 去加载另一份 HTML 作为正文。
3. 不得使用 iframe 包装正文。
4. 核心内容不得依赖外部 API 才出现。
5. JavaScript 失败时，正文仍须存在。
6. 页面必须具备：

```html
<!doctype html>
<html lang="zh-CN">
<head>...</head>
<body>...</body>
</html>
```

## C. 内容与传播

1. 页面必须忠实、全面表达用户提供原文的核心思想。
2. 不做在线 Word，要用信息架构、数据层级和视觉叙事帮助读者理解。
3. 不为了精简而删掉核心信任锚点。
4. 不为了气势而把规划、拟合作或申请状态写成已落地。
5. 读者看完必须清楚：
   - 项目是什么
   - 为什么重要
   - 如何运行
   - 为什么能落地
   - 谁负责什么
   - 有什么价值
   - 下一步做什么
6. 页面文字应短句化、层级化、易扫读，但不牺牲准确性。
7. 禁止残留 TODO、占位符、内部工作流语言和 AI 自述。

## D. 视觉与 VI

1. 明确企业或品牌主体时，必须完整尊重其 VI。
2. 无明确企业主体时，使用用户个人 GONG-VI 的克制、精美、大道至简原则。
3. 全页必须是统一设计系统，禁止每个区块各自一种风格。
4. 色彩、圆角、边框、留白、字体尺度和按钮必须统一。
5. 不使用廉价的大红大金、模板化渐变、无意义玻璃拟态或过量动画。
6. 图片和可视化必须真实、准确、有传播价值。
7. 无法准确绘制地图时，不得伪装成地图；改用区域网络、节点结构或场景矩阵。
8. 不得提交或分享字体文件。

## E. 社交预览与 favicon

每个页面必须配置：

- 页面标题
- 内容相关的 meta description
- favicon
- Open Graph 标题、简介、URL、图片
- Twitter Card

推荐标准：

- `og-image.png`：1200×630 PNG
- `wechat-share.png`：500×500 PNG（在微信需要独立方图时）
- 图片必须与内容强相关，不得使用通用链条图标或空白图
- 所有分享图片必须公开可访问

最低元数据：

```html
<meta property="og:type" content="website">
<meta property="og:locale" content="zh_CN">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:url" content="https://enxpower.com/<folder>/">
<meta property="og:image" content="https://enxpower.com/<folder>/og-image.png">
<meta property="og:image:secure_url" content="https://enxpower.com/<folder>/og-image.png">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="...">
<meta name="twitter:description" content="...">
<meta name="twitter:image" content="https://enxpower.com/<folder>/og-image.png">
```

微信核验必须区分：

- 浏览器缓存
- GitHub Pages/CDN 缓存
- 微信服务器分享卡片缓存

换浏览器不能清除微信服务器缓存。

## F. 链接、按钮与交互

1. 所有导航、按钮和 CTA 必须真实可点击。
2. 所有内部锚点必须一一对应。
3. 发布前逐个检查：
   - Logo
   - 桌面导航
   - 手机菜单
   - Hero 按钮
   - 正文 CTA
   - 页脚链接
4. 装饰伪元素、背景纹理、轨道、印章和大号数字不得拦截点击：

```css
.decorative,
.hero::before,
.hero::after {
  pointer-events: none;
}
```

5. 点击元素应拥有合理层级：

```css
.actions,
.button,
a,
button {
  position: relative;
  z-index: 2;
}
```

仅在需要时设置，不得滥用极高 z-index。

6. 可点击区域应满足移动端触摸尺寸，建议不小于 44×44px。
7. 按钮不可只靠颜色区分状态。
8. 汉堡菜单按钮必须具有 `aria-label`。

## G. 性能与稳定性

1. 优先原生 HTML、CSS、少量 JavaScript。
2. 非必要不引入框架、字体库和大型第三方脚本。
3. 图片优先 WebP/AVIF 用于正文，PNG 用于分享兼容。
4. 首屏图片应压缩，避免数 MB 大图。
5. 页面不能因为第三方资源失败而整体失效。
6. 不引用临时 CDN、沙箱地址、本机文件路径和带鉴权的图片。
7. 路径大小写必须与仓库文件完全一致。

## H. 可访问性

1. 页面语言属性正确。
2. 所有有意义图片有 `alt`。
3. 纯装饰图片使用空 `alt` 或 `aria-hidden="true"`。
4. 颜色对比度应保证正文清晰阅读。
5. 键盘用户可以访问主要导航和按钮。
6. 支持系统减少动态效果设置：

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    scroll-behavior: auto !important;
  }
}
```

## I. 防盗版与源代码暴露

1. 页面不提供“通过邮件查看代码”或类似源码发送入口。
2. 不在页面公开内部注释、密钥、API Key、私人地址或非公开联系人信息。
3. 前端公开代码无法真正保密，不得伪造“绝对防盗版”承诺。
4. 对外发布只包含必要资产。

## J. 发布前检查表

### 内容

- [ ] 原文核心思想完整
- [ ] 关键数据和信任锚点未遗漏
- [ ] 商业数字和口径前后一致
- [ ] 所有合作状态准确
- [ ] 无内部用语、占位符、TODO

### 页面

- [ ] `index.html` 是完整静态入口
- [ ] 手机、Pad、桌面适配完成
- [ ] 无横向滚动
- [ ] 大标题行高舒展
- [ ] 手机菜单正常
- [ ] 所有图片加载成功

### 交互

- [ ] 所有内部锚点存在
- [ ] 所有按钮可点击
- [ ] 无透明装饰层拦截触摸
- [ ] 固定导航不遮挡跳转目标
- [ ] 菜单打开、关闭和点击收起正常

### 分享

- [ ] favicon 有效
- [ ] `og:image` 为 PNG
- [ ] 分享图尺寸与声明一致
- [ ] 分享图返回正确 MIME
- [ ] OG URL 使用正式绝对地址
- [ ] 微信使用新 URL 完成实际抓取测试

### 发布

- [ ] 文件已真实提交到 `main`
- [ ] 正式 URL 不包含 `/pub/`
- [ ] 线上页面返回正常
- [ ] commit SHA 已记录
- [ ] 最终回复提供正式链接与源码目录

任何一项失败，不得宣布完成。