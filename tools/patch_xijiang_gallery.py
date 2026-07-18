from pathlib import Path
import json, re

INDEX = Path('xijiang-xunmei/index.html')
MARK = 'data-xijiang-gallery-ready'
if not INDEX.exists():
    raise SystemExit('index.html not found')
html = INDEX.read_text(encoding='utf-8')
if MARK in html:
    print('Gallery already installed')
    raise SystemExit(0)

stores = [
    ('01-shuying','树影茶歇站','启程补给 · 地标首购 · 第一打卡点'),
    ('02-shenshan','深山茶室','登高静坐 · 贵州抹茶 · 山景茶歇'),
    ('03-wanwuyouling','万物有灵','旗舰文创 · 非遗生活化 · 限定首发'),
    ('04-zhongzi','种子暗光','苗族神话 · 暗光咖啡 · 祈福记忆'),
    ('05-yunshang','云上咖啡','全景窗口 · 日咖夜酒 · 高峰夜游'),
    ('06-miaojiacha','苗家的茶','药食同源 · 草本饮品 · 在地生活'),
    ('07-feiyi','非遗工坊','银饰刺绣蜡染 · 手作体验 · 共创销售'),
    ('08-diequan','蝶泉蜜语','蜂蜜食品 · 蜂蜡日化 · 伴手礼'),
    ('09-miaojing','苗境幻影','苗疆美学 · 山系户外 · 青年时尚'),
    ('10-shiju','诗句的灯小厨','风景收尾 · 轻餐慢酒 · 夜间停留'),
]
manifest = json.loads(Path('xijiang-xunmei/gallery/manifest.json').read_text(encoding='utf-8'))

# Upgrade the first ten route cards into accessible gallery launchers.
idx = 0
def repl(match):
    global idx
    if idx >= len(stores):
        return match.group(0)
    key, title, desc = stores[idx]
    count = len(manifest.get(key, []))
    idx += 1
    return f'<div class="stop store-gallery-card" role="button" tabindex="0" data-gallery="{key}" data-title="{title}" data-desc="{desc}" data-count="{count}">'
html = re.sub(r'<div class="stop">', repl, html, count=10)
if idx != 10:
    raise SystemExit(f'Expected 10 stop cards, patched {idx}')

css = r'''
/* Xijiang store galleries */
.store-gallery-card{position:relative;cursor:pointer;padding-right:88px;transition:.25s ease;overflow:hidden}
.store-gallery-card:after{content:"查看图片  ·  " attr(data-count);position:absolute;right:16px;top:16px;color:var(--cu);font:9px var(--mono);letter-spacing:.08em;white-space:nowrap}
.store-gallery-card:before{content:"↗";position:absolute;right:18px;bottom:15px;width:27px;height:27px;border:1px solid #d7c8bc;border-radius:50%;display:grid;place-items:center;color:var(--cu);font-size:13px;transition:.25s ease}
.store-gallery-card:hover,.store-gallery-card:focus-visible{transform:translateY(-3px);border-color:#cdb7a6;box-shadow:0 14px 34px rgba(28,32,36,.08);outline:none}
.store-gallery-card:hover:before,.store-gallery-card:focus-visible:before{background:var(--cu);border-color:var(--cu);color:white;transform:rotate(45deg)}
.gallery-modal{position:fixed;inset:0;z-index:1000;display:none;background:rgba(12,15,17,.94);backdrop-filter:blur(15px);color:white;overflow:auto}
.gallery-modal.open{display:block}
.gallery-shell{min-height:100%;max-width:1380px;margin:auto;padding:30px 26px 54px}
.gallery-top{position:sticky;top:0;z-index:3;display:flex;align-items:flex-start;gap:28px;padding:17px 0 22px;background:linear-gradient(#111416 72%,transparent);border-bottom:1px solid rgba(255,255,255,.12)}
.gallery-heading{flex:1}.gallery-heading small{display:block;color:var(--cu2);font:10px var(--mono);letter-spacing:.18em;margin-bottom:10px}.gallery-heading h2{font:500 clamp(30px,5vw,58px)/1.1 var(--serif)}.gallery-heading p{color:#bfc5c9;font:14px/1.8 var(--serif);margin-top:10px}
.gallery-close{flex:none;width:44px;height:44px;border:1px solid rgba(255,255,255,.25);border-radius:50%;background:none;color:white;font-size:25px;cursor:pointer}.gallery-close:hover{background:white;color:#111416}
.gallery-grid{display:grid;grid-template-columns:1.35fr .65fr;grid-auto-rows:minmax(230px,42vh);gap:14px;margin-top:26px}
.gallery-item{margin:0;overflow:hidden;background:#202428;position:relative}.gallery-item:first-child{grid-row:span 2}.gallery-item img{width:100%;height:100%;display:block;object-fit:cover;transition:.5s ease}.gallery-item:hover img{transform:scale(1.025)}
.gallery-index{position:absolute;left:14px;bottom:13px;padding:6px 9px;background:rgba(17,20,22,.72);font:9px var(--mono);letter-spacing:.1em;color:#e4c0a5}
body.gallery-lock{overflow:hidden}
@media(max-width:760px){.store-gallery-card{padding-right:70px}.gallery-shell{padding:18px 14px 34px}.gallery-top{gap:15px}.gallery-grid{grid-template-columns:1fr;grid-auto-rows:55vw}.gallery-item:first-child{grid-row:auto}.gallery-heading h2{font-size:34px}}
'''
html = html.replace('</style>', css + '</style>', 1)

modal = '''
<div class="gallery-modal" id="storeGallery" aria-hidden="true" data-xijiang-gallery-ready>
  <div class="gallery-shell">
    <div class="gallery-top">
      <div class="gallery-heading"><small id="galleryKicker">STORE GALLERY</small><h2 id="galleryTitle"></h2><p id="galleryDesc"></p></div>
      <button class="gallery-close" type="button" aria-label="关闭图片浏览">×</button>
    </div>
    <div class="gallery-grid" id="galleryGrid"></div>
  </div>
</div>
'''

js_data = {k: {'title':t,'desc':d,'images':[x['file'] for x in manifest.get(k,[])]} for k,t,d in stores}
script = '''<script>
(()=>{const data=__DATA__;const modal=document.getElementById('storeGallery');const grid=document.getElementById('galleryGrid');const title=document.getElementById('galleryTitle');const desc=document.getElementById('galleryDesc');const close=modal.querySelector('.gallery-close');let last=null;function openGallery(card){const d=data[card.dataset.gallery];if(!d)return;last=card;title.textContent=d.title;desc.textContent=d.desc;grid.innerHTML=d.images.map((src,i)=>`<figure class="gallery-item"><img src="gallery/${src}" alt="${d.title} 图片 ${i+1}" loading="${i?'lazy':'eager'}"><span class="gallery-index">${String(i+1).padStart(2,'0')} / ${String(d.images.length).padStart(2,'0')}</span></figure>`).join('');modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.classList.add('gallery-lock');close.focus()}function shut(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('gallery-lock');grid.innerHTML='';if(last)last.focus()}document.querySelectorAll('.store-gallery-card').forEach(c=>{c.addEventListener('click',()=>openGallery(c));c.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openGallery(c)}})});close.addEventListener('click',shut);modal.addEventListener('click',e=>{if(e.target===modal)shut()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))shut()})})();
</script>'''.replace('__DATA__', json.dumps(js_data, ensure_ascii=False))
html = html.replace('</body>', modal + script + '</body>', 1)
INDEX.write_text(html, encoding='utf-8')
print('Installed ten interactive store galleries')
