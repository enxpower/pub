(() => {
  const base = 'assets/stores/';
  const imageSets = [
    ['tree-shade-tea-break', 4],
    ['mountain-tea-room', 5],
    ['spirit-of-all-things', 20],
    ['seed-dark-light', 5],
    ['cloud-coffee', 6],
    ['miao-family-tea', 5],
    ['heritage-workshop', 10],
    ['butterfly-spring-honey', 6],
    ['miao-vision-phantom', 7],
    ['poetic-lamp-kitchen', 6],
  ];

  const imagesFor = (storeNo, slug, count) =>
    Array.from({ length: count }, (_, i) =>
      `${base}store-${String(storeNo).padStart(2, '0')}-${slug}-proposal-${String(i + 1).padStart(2, '0')}.jpg`
    );

  const stores = [
    {
      n: '01',
      name: '树影茶歇站',
      area: '21.60㎡',
      positioning: '启程补给 · 地标首购 · 第一打卡点',
      demand: '游客刚进入栈道，最先出现的是体力、天气和拍照准备需求。这个点位需要用低决策门槛商品快速完成首购，并建立“寻美栈道”的第一处记忆。',
      products: ['雷山银球风味茶', '西江苗家风味冰浆', '能量补给食品', '苗寨地标冰箱贴', '防雨御寒装备', '自拍杆与滤镜', '寻美栈道印章打卡本'],
      features: ['不同高度的苗族银冠墙，适配家庭、情侣和亲子游客打卡', '雷山银球专属杯身和银球装饰带，强化第一杯饮品识别', '以西江全景、银帽大门、项圈广场、铜鼓广场、风雨桥开发地标冰箱贴', '设置寻美栈道印章打卡机制，每一家店配置一枚专属印章，引导游客沿线搜寻、收集并完成全程打卡。'],
      value: '以刚需补给带动首站交易，以可拍、可带走的小商品建立栈道消费开端。',
      strategy: '优先保证出品速度、天气应急商品和小额文创陈列效率，把它作为全线客流转化的起点。',
    },
    {
      n: '02',
      name: '深山茶室',
      area: '9㎡',
      positioning: '登高静坐 · 贵州抹茶 · 山景茶歇',
      demand: '游客完成第一段登高后需要短暂停留、恢复体力和安静观景。小体量空间不适合复杂菜单，适合用少量高识别产品承接情绪消费。',
      products: ['贵州抹茶风味茶饮', '苗家唯美茶点', '抹茶生活方式产品', '千户苗寨全景小夜灯'],
      features: ['空间表达强调静谧、留白和自然材质', '设置面向苗寨的核心观景座位', '包装采用低饱和苗岭色系，突出深山茶室气质'],
      value: '用景观和安静氛围形成溢价，在小面积中完成高质量茶歇转化。',
      strategy: '控制SKU数量，以预制度高、视觉稳定的茶饮和点心为主，减少后场压力。',
    },
    {
      n: '03',
      name: '万物有灵',
      area: '54㎡',
      positioning: '旗舰文创 · 非遗生活化 · 限定首发',
      demand: '这里承担全线旗舰文创店角色，游客期待更完整的西江限定商品、非遗转译产品和可集中购买的伴手礼。',
      products: ['地标冰箱贴与透卡', '银饰、刺绣、蜡染', '贵州茶、苗医药、苗寨零食', '护手霜、香氛等日化', '苗族风格时尚单品', '黄小西西江限定系列'],
      features: ['建立统一的西江限定产品视觉系统', '把非遗从陈列品转译为日常可用的生活方式商品', '设置限定首发、联名发布和直播展示区'],
      value: '成为全线品牌旗舰、爆款首发地和高客单文创消费中心。',
      strategy: '按“入门小件、核心限定、高客单联名、线上复购”组织货架，让空间同时服务现场销售和内容电商。',
    },
    {
      n: '04',
      name: '种子暗光',
      area: '33.66㎡',
      positioning: '苗族神话 · 暗光咖啡 · 祈福记忆',
      demand: '栈道中段需要一个强记忆、强传播的情绪空间。苗族神话、种子和祈福意象能把咖啡消费升级为可讲述的沉浸体验。',
      products: ['苗家特色风味咖啡', '暗黑系限定包装', '苗家特色甜品', '苗疆种子祈福盲盒'],
      features: ['暗光、局部照明和神话纹样形成可识别氛围', '祈福盲盒和互动装置提供参与感', '适合短视频拍摄的低照度视觉场景'],
      value: '承担文化沉浸、夜游记忆和主题零售三重价值。',
      strategy: '用少量强主题产品和稳定灯光氛围建立传播点，避免过重装置影响运营维护。',
    },
    {
      n: '05',
      name: '云上咖啡',
      area: '41.20㎡',
      positioning: '全景窗口 · 日咖夜酒 · 高峰夜游',
      demand: '高位全景是全线稀缺资源，游客需要长时间停留、拍摄和社交分享。日咖夜酒能覆盖白天观景和夜间停留两个场景。',
      products: ['贵州冠军咖啡限定特调', '苗寨全景限定咖啡', '西江限定鸡尾酒', '贵州精酿', '原创蜡染甜品'],
      features: ['面向苗寨设置最佳全景座席', '白天咖啡、夜间酒饮双场景切换', '以高品质主理人联名提升空间调性'],
      value: '依靠景观溢价和夜间消费提高客单，延长游客在高点停留时间。',
      strategy: '把窗口座位、外摆秩序、饮品出片率和夜间灯光作为核心运营指标。',
    },
    {
      n: '06',
      name: '苗家的茶',
      area: '24.04㎡',
      positioning: '药食同源 · 草本饮品 · 在地生活',
      demand: '游客对“苗家草本”和地方生活方式有好奇，但需要以日常饮品和伴手礼方式理解，避免医疗化表达。',
      products: ['百草苗茶', '刺梨折耳根草本饮', '益肝草凉茶', '藤茶', '木姜子青草饮', '青橄榄润喉饮', '苗疆草本日化'],
      features: ['在地居民参与传统配方整理与讲述', '设置草本原料展示和知识说明', '突出文化、风味和日常饮用体验'],
      value: '把在地知识转化为高频茶饮和可复购伴手礼。',
      strategy: '建立合规的产品命名和话术体系，优先选择稳定、易标准化的草本饮品。',
    },
    {
      n: '07',
      name: '非遗工坊',
      area: '10.89㎡',
      positioning: '银饰刺绣蜡染 · 手作体验 · 共创销售',
      demand: '游客不只想看非遗，也希望知道如何制作、由谁制作、如何把技艺带回日常生活。',
      products: ['银饰体验与小件产品', '刺绣体验与生活用品', '蜡染体验与时尚单品', '非遗共创限定系列'],
      features: ['可视化手作台和小型体验课程', '优先与西江本地居民和手艺人合作', '制作过程本身成为内容和销售场景'],
      value: '提升非遗活化、社区收益、体验转化和内容生产能力。',
      strategy: '采用预约体验加即买小件的组合，确保小面积空间也能稳定承接参与和销售。',
    },
    {
      n: '08',
      name: '蝶泉蜜语',
      area: '10.89㎡',
      positioning: '蜂蜜食品 · 蜂蜡日化 · 伴手礼',
      demand: '蜂蜜产品天然适合作为轻体验和伴手礼，但需要统一的故事、包装和品鉴方式来提高识别度。',
      products: ['蜂蜜主题饮品', '蜂胶糖与一口蜂胶', '盒装蜂产品', '蜂蜜唇膏', '蜂蜜香皂', '蜂蜜护手霜', '蜂蜡产品'],
      features: ['以蝶与蜂巢形成统一识别系统', '设置蜂蜜品鉴和产品故事展示', '兼顾即时饮用和离店伴手礼两类消费'],
      value: '连接雷山蜂产业，形成轻体量、高复购的特色零售节点。',
      strategy: '以标准化小包装和组合礼盒提高连带率，用试吃试饮降低购买门槛。',
    },
    {
      n: '09',
      name: '苗境幻影',
      area: '10.89㎡',
      positioning: '苗疆美学 · 山系户外 · 青年时尚',
      demand: '年轻游客需要更轻、更时尚、更适合拍照和日常使用的苗族美学商品，而不是传统纪念品。',
      products: ['苗族风格包袋', '眼镜与魔术巾', '肤感衣与皮肤衣', '山系配饰', '咖啡渣、板蓝根渣等再生材料产品'],
      features: ['以苗疆纹样建立当代时尚语言', '强调轻量、易穿、易拍、易带走', '形成青年化、户外化和环保化产品矩阵'],
      value: '连接年轻客群、时尚传播、高毛利配饰和可持续叙事。',
      strategy: '用小批量上新和限定色控制库存风险，把穿搭内容作为主要传播方式。',
    },
    {
      n: '10',
      name: '诗句的灯小厨',
      area: '31.68㎡',
      positioning: '风景收尾 · 轻餐慢酒 · 夜间停留',
      demand: '终点需要把整条栈道体验收束成一次可坐下来的风景消费，轻餐、慢酒和夜景能自然延长停留。',
      products: ['黑毛猪与小黄牛汉堡', '苗寨沙拉', '苗寨腊味拼盘', '行匠精酿', '抹茶精酿', '苗寨米酒', '苗寨限定特调'],
      features: ['以窗景和外摆组织终点停留', '菜单强调当地食材的现代化表达', '灯光、诗句和夜景形成夜间记忆'],
      value: '以餐饮客单和夜游延时完成全线商业叙事闭环。',
      strategy: '控制菜单复杂度，强化本地食材和夜间氛围，让终点成为可复购的慢停留空间。',
    },
  ].map((store, index) => ({
    ...store,
    images: imagesFor(index + 1, imageSets[index][0], imageSets[index][1]),
  }));

  const style = document.createElement('style');
  style.textContent = `
    body{font-kerning:normal;text-rendering:optimizeLegibility}
    .section{padding-top:112px;padding-bottom:112px}
    .wrap{max-width:1180px}
    .head{grid-template-columns:160px minmax(0,1fr);gap:58px;margin-bottom:58px}
    .no,.principle .n,.pc small,.exp small,.phase small{font-size:10px;letter-spacing:.18em;font-weight:500}
    .title h2{font-weight:500;line-height:1.22;letter-spacing:.02em}
    .title p,.statement p,.finance-copy p{line-height:2;color:#586168}
    .statement,.principle,.ops,.finance-copy,.gov-card,.stop{border-color:rgba(160,150,140,.32)}
    .principle,.ops,.gov-card,.finance-copy{box-shadow:0 12px 34px rgba(28,32,36,.035)}
    .principle{padding:32px 26px;min-height:248px;border-top-width:1px}
    .principle h3,.ops h3,.gov-card h3{font-weight:500}
    .tag{border-color:rgba(168,96,47,.26);background:rgba(255,255,255,.36)}
    .route{gap:34px}
    .map{border-color:rgba(255,255,255,.08);box-shadow:0 22px 60px rgba(28,32,36,.08)}
    .stop{padding:20px 18px}
    .stop b{font-weight:500;line-height:1.35}
    .stop p{line-height:1.78;color:#626b72}
    .proposal-card{padding-right:86px;transition:transform .28s ease,border-color .28s ease,box-shadow .28s ease,background-color .28s ease}
    .proposal-card:after{content:"查看详情";right:18px;top:18px;color:rgba(168,96,47,.86);letter-spacing:.12em}
    .proposal-card:before{width:26px;height:26px;right:18px;bottom:18px;border-color:rgba(168,96,47,.24);font-size:12px}
    .proposal-card:hover,.proposal-card:focus-visible{transform:translateY(-2px);border-color:rgba(168,96,47,.34);box-shadow:0 10px 28px rgba(28,32,36,.075);background:#fff}
    .proposal-card:hover:before,.proposal-card:focus-visible:before{background:var(--cu);border-color:var(--cu);color:#fff;transform:rotate(45deg)}
    .portfolio,.ops-grid,.gov,.principles{gap:18px}
    .pc,.phase{box-shadow:0 18px 48px rgba(0,0,0,.08)}
    .pc-body{padding:28px}
    .pc h3,.phase h3{font-weight:500}
    .scenario{gap:14px}
    .srow{border-color:rgba(160,150,140,.32);box-shadow:0 12px 30px rgba(28,32,36,.03)}
    .cta{padding-top:118px;padding-bottom:118px}
    .proposal-modal{background:rgba(17,20,22,.68);backdrop-filter:blur(10px)}
    .proposal-modal.open{display:block}
    .proposal-nav{height:76px;padding:0 32px;background:rgba(28,32,36,.92);border-bottom:1px solid rgba(255,255,255,.08)}
    .proposal-nav>div{display:flex;align-items:baseline;gap:16px;min-width:0}
    .proposal-nav b{font-weight:500;letter-spacing:.06em}
    .proposal-nav small{flex:0 0 auto;letter-spacing:.16em;color:rgba(199,123,69,.9)}
    .proposal-nav b{min-width:0;overflow-wrap:anywhere}
    .proposal-close{transition:background-color .22s ease,color .22s ease,border-color .22s ease}
    .proposal-wrap{max-width:1160px;padding:38px 24px 78px}
    .proposal-document{background:var(--paper);box-shadow:0 28px 90px rgba(0,0,0,.24);min-height:calc(100svh - 130px)}
    .proposal-hero{grid-template-columns:minmax(0,1.02fr) minmax(360px,.98fr);min-height:620px;background:#202428}
    .proposal-visual{background:none}
    .proposal-visual img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transform:scale(1.01)}
    .proposal-visual:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(17,20,22,.04) 35%,rgba(17,20,22,.68))}
    .proposal-visual-in{z-index:2;left:48px;right:44px;bottom:48px}
    .proposal-visual h2{font-size:clamp(46px,6.2vw,78px);line-height:1.08;letter-spacing:.04em;margin:16px 0 18px}
    .proposal-kicker{letter-spacing:.2em}
    .proposal-area{border-color:rgba(255,255,255,.34);background:rgba(17,20,22,.18)}
    .proposal-summary{gap:28px;padding:64px 52px;background:#24292e}
    .proposal-summary h3{font-size:30px;line-height:1.55;font-weight:500;letter-spacing:.02em}
    .proposal-summary dl{display:grid;gap:22px;margin-top:4px}
    .proposal-summary dt{color:var(--cu2);font:10px var(--mono);letter-spacing:.18em;text-transform:uppercase}
    .proposal-summary dd{font:15px/1.95 var(--serif);color:#d6dcdf}
    .proposal-section{padding:66px 52px;border-bottom-color:rgba(160,150,140,.25)}
    .proposal-grid{gap:16px}
    .proposal-grid.two{grid-template-columns:repeat(2,minmax(0,1fr))}
    .proposal-head{grid-template-columns:150px minmax(0,1fr);gap:34px;margin-bottom:32px}
    .proposal-head small{font-size:10px;letter-spacing:.18em;font-weight:500}
    .proposal-head h3{font-size:clamp(28px,3.5vw,46px);line-height:1.25;letter-spacing:.02em}
    .proposal-item{padding:28px 26px;min-height:128px;border:1px solid rgba(160,150,140,.22);border-top-color:rgba(168,96,47,.18);box-shadow:none;background:rgba(255,255,255,.72)}
    .proposal-item b{display:block;font:500 18px/1.85 var(--serif);letter-spacing:.01em;color:#30363b}
    .proposal-item p{line-height:1.9;color:#5f6970}
    .proposal-image-section{padding-top:24px}
    .proposal-image-grid{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:18px;align-items:start}
    .proposal-image{grid-column:span 2;margin:0;background:#f7f4ef;overflow:hidden;min-width:0;border:1px solid rgba(160,150,140,.18)}
    .proposal-image:nth-child(5n+2),.proposal-image:nth-child(7n+5){grid-column:span 3}
    .proposal-image:nth-child(6n+4){grid-column:span 4}
    .proposal-image img{display:block;width:100%;height:auto;aspect-ratio:4/3;object-fit:contain;background:#f7f4ef;transition:transform .45s ease}
    .proposal-image:nth-child(5n+2) img,.proposal-image:nth-child(7n+5) img{aspect-ratio:5/4}
    .proposal-image:nth-child(6n+4) img{aspect-ratio:16/10}
    .proposal-image:hover img{transform:scale(1.025)}
    .proposal-image figcaption{display:none}
    .proposal-controls{padding:30px 52px 50px}
    .proposal-btn{min-width:120px}
    .proposal-btn{border-color:rgba(160,150,140,.32);transition:border-color .22s ease,color .22s ease,background-color .22s ease}
    @media(max-width:860px){
      .section{padding-top:78px;padding-bottom:78px}
      .head{gap:18px;margin-bottom:42px}
      .title p{font-size:16px;line-height:1.9}
      .proposal-card{padding-right:74px}
      .proposal-wrap{padding:16px 12px 54px}
      .proposal-document{min-height:calc(100svh - 86px)}
      .proposal-hero{grid-template-columns:1fr;min-height:0}
      .proposal-visual{min-height:58svh}
      .proposal-visual-in{left:28px;right:26px;bottom:34px}
      .proposal-summary{padding:34px 26px}
      .proposal-summary h3{font-size:25px}
      .proposal-section{padding:42px 24px}
      .proposal-head{grid-template-columns:1fr;gap:12px}
      .proposal-grid.two,.proposal-image-grid{grid-template-columns:1fr}
      .proposal-image,.proposal-image:nth-child(5n+2),.proposal-image:nth-child(7n+5),.proposal-image:nth-child(6n+4){grid-column:auto}
      .proposal-image img,.proposal-image:nth-child(5n+2) img,.proposal-image:nth-child(7n+5) img,.proposal-image:nth-child(6n+4) img{aspect-ratio:auto;max-height:none}
      .proposal-controls{padding:20px 24px 32px}
    }
    @media(max-width:700px){
      .navbox{z-index:1100}
      .menu{position:relative;z-index:2;display:grid;place-items:center;width:44px;height:44px;margin-left:auto;cursor:pointer;pointer-events:auto}
      .links{z-index:1;pointer-events:none}
      .links.open{pointer-events:auto}
      body.menu-lock{overflow:hidden}
      .principle,.ops,.gov-card,.finance-copy{box-shadow:none}
      .proposal-visual h2{font-size:42px}
      .proposal-image-grid{gap:14px}
    }
    @media(max-width:767px){
      .section{padding:64px 22px}
      .wrap{max-width:100%}
      .head{display:grid;grid-template-columns:1fr;gap:14px;margin-bottom:30px}
      .no{padding-top:0;font-size:10px;line-height:1.4;letter-spacing:.16em}
      .title h2{font-size:clamp(32px,9vw,44px);line-height:1.16;letter-spacing:.01em;text-wrap:balance}
      .title p{margin-top:16px;font-size:16px;line-height:1.82;max-width:none}
      .split,.route,.finance{grid-template-columns:1fr;gap:20px}
      .principles,.portfolio,.ops-grid,.gov,.roadmap,.route-list{grid-template-columns:1fr;gap:12px}
      .statement{padding:26px 22px}
      .statement blockquote{font-size:clamp(24px,7vw,34px);line-height:1.38}
      .statement p{font-size:15px;line-height:1.82}
      .vision-art{min-height:340px;padding:26px}
      .vtext b{font-size:25px;line-height:1.35}
      .vpoints{left:26px;right:26px;bottom:24px}
      .principle,.ops,.gov-card,.phase,.finance-copy{padding:23px 21px;min-height:0}
      .principle h3,.ops h3,.gov-card h3,.phase h3{font-size:21px;line-height:1.35;margin:14px 0 10px}
      .principle p,.ops p,.gov-card p,.phase p,.phase ul{font-size:14px;line-height:1.78}
      .map{min-height:410px;padding:20px}
      .stop{padding:17px 16px}
      .stop b{font-size:16px}
      .stop p{font-size:12px;line-height:1.65}
      .pc-body{padding:22px}
      .pc h3{font-size:22px;line-height:1.35}
      .pc p,.pc ul{font-size:13px;line-height:1.75}
      .experience{grid-template-columns:1fr;grid-auto-rows:auto;gap:12px}
      .exp:nth-child(n){grid-column:1;grid-row:auto}
      .exp{min-height:168px;padding:22px}
      .exp b{font-size:22px;line-height:1.35;margin-top:14px}
      .exp p{font-size:13px;line-height:1.7}
      .ico{width:34px;height:34px;font-size:12px}
      .finance-copy h3{font-size:26px;line-height:1.32}
      .finance-copy p{font-size:15px;line-height:1.82}
      .srow{grid-template-columns:1fr;gap:9px;padding:16px}
      .srow strong{text-align:left;font-size:19px}
      .note{font-size:12px;line-height:1.7}
      .phase{min-height:0}
      .cta{padding:72px 22px}
      .cta h2{font-size:clamp(34px,9vw,44px);line-height:1.18}
      .cta p{font-size:16px;line-height:1.82}
      footer{padding:30px 22px}
      .foot{gap:16px}
      .proposal-nav{padding:0 16px;gap:12px}
      .proposal-nav>div{gap:12px;align-items:center}
      .proposal-nav small{font-size:9px;letter-spacing:.12em}
      .proposal-nav b{font-size:16px;line-height:1.3;letter-spacing:.04em}
      .proposal-grid{gap:11px}
      .proposal-item{min-height:0;padding:18px 18px;background:rgba(255,255,255,.78)}
      .proposal-item b{font-size:17px;line-height:1.55}
    }
  `;
  document.head.appendChild(style);

  const modal = document.getElementById('storeProposal');
  const content = document.getElementById('proposalContent');
  const navNo = document.getElementById('proposalNavNo');
  const navName = document.getElementById('proposalNavName');
  const close = modal && modal.querySelector('.proposal-close');
  if (!modal || !content || !navNo || !navName || !close) return;

  const menuButton = document.querySelector('.menu');
  const links = document.getElementById('links');
  if (menuButton && links) {
    menuButton.type = 'button';
    menuButton.setAttribute('aria-label', menuButton.getAttribute('aria-label') || '打开导航菜单');
    menuButton.setAttribute('aria-controls', 'links');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.onclick = null;

    const setMenu = (open) => {
      links.classList.toggle('open', open);
      menuButton.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('menu-lock', open);
    };

    menuButton.addEventListener('click', (event) => {
      event.stopPropagation();
      setMenu(!links.classList.contains('open'));
    });
    links.addEventListener('click', (event) => {
      const link = event.target.closest('a');
      if (link) setMenu(false);
    });
    document.addEventListener('click', (event) => {
      if (!links.classList.contains('open')) return;
      if (event.target.closest('.navbox')) return;
      setMenu(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && links.classList.contains('open')) {
        setMenu(false);
        menuButton.focus();
      }
    });
  }

  let current = 0;
  let lastTrigger = null;
  const esc = (value) => String(value).replace(/[&<>"]/g, (match) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[match]));
  const listCards = (items) => items.map((item) => `
    <div class="proposal-item">
      <b>${esc(item)}</b>
    </div>
  `).join('');

  function render(index) {
    current = (index + stores.length) % stores.length;
    const store = stores[current];
    navNo.textContent = `${store.n} / 10`;
    navName.textContent = store.name;
    content.innerHTML = `
      <article class="proposal-document" role="document">
        <section class="proposal-hero">
          <div class="proposal-visual">
            <img src="${store.images[0]}" alt="${esc(store.name)}策划主视觉" loading="eager">
            <div class="proposal-visual-in">
              <span class="proposal-kicker">${store.n} · XUNMEI STORE</span>
              <h2>${store.name}</h2>
              <span class="proposal-area">${store.area}</span>
            </div>
          </div>
          <div class="proposal-summary">
            <h3>${esc(store.positioning)}</h3>
            <dl>
              <div><dt>Demand Insight</dt><dd>${esc(store.demand)}</dd></div>
              <div><dt>Commercial Value</dt><dd>${esc(store.value)}</dd></div>
              <div><dt>Strategy</dt><dd>${esc(store.strategy)}</dd></div>
            </dl>
          </div>
        </section>
        <section class="proposal-section">
          <div class="proposal-head"><small>01 · PRODUCT PLANNING</small><h3>产品规划</h3></div>
          <div class="proposal-grid">${listCards(store.products, '产品')}</div>
        </section>
        <section class="proposal-section">
          <div class="proposal-head"><small>02 · FEATURE PLANNING</small><h3>特色策划</h3></div>
          <div class="proposal-grid two">${listCards(store.features, '重点')}</div>
        </section>
        <section class="proposal-section proposal-image-section">
          <div class="proposal-image-grid">
            ${store.images.map((src, imageIndex) => `
              <figure class="proposal-image">
                <img src="${src}" alt="${esc(store.name)}策划参考图片 ${imageIndex + 1}" loading="${imageIndex ? 'lazy' : 'eager'}">
                <figcaption>${esc(store.name)} · ${String(imageIndex + 1).padStart(2, '0')}</figcaption>
              </figure>
            `).join('')}
          </div>
        </section>
        <div class="proposal-controls">
          <button class="proposal-btn" type="button" data-dir="-1">← 上一家</button>
          <button class="proposal-btn" type="button" data-dir="1">下一家 →</button>
        </div>
      </article>
    `;
    content.querySelectorAll('[data-dir]').forEach((button) => {
      button.addEventListener('click', () => {
        render(current + Number(button.dataset.dir));
        modal.scrollTo({ top: 0, behavior: 'smooth' });
        close.focus();
      });
    });
  }

  function openProposal(card) {
    lastTrigger = card;
    render(Number(card.dataset.store));
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('proposal-lock');
    modal.scrollTo({ top: 0 });
    close.focus();
  }

  function closeProposal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('proposal-lock');
    if (lastTrigger) lastTrigger.focus();
  }

  document.querySelectorAll('.proposal-card').forEach((card) => {
    card.onclick = () => openProposal(card);
    card.onkeydown = (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openProposal(card);
      }
    };
  });

  close.onclick = closeProposal;
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeProposal();
  });
  document.addEventListener('keydown', (event) => {
    if (!modal.classList.contains('open')) return;
    if (event.key === 'Escape') closeProposal();
    if (event.key === 'ArrowLeft') render(current - 1);
    if (event.key === 'ArrowRight') render(current + 1);
  });
})();
