/* ============================================================
   Lyoran Lee · Portfolio 2026
   作品数据 + 图片上传自动识别 + 筛选 + 灯箱 + 滚动交互
   ============================================================ */

/* ---------- 作品数据 ----------
   文件名与 images 文件夹中的实际文件一致。
   图片存在即自动显示，画幅按原图比例；不存在则保留黑白占位框。
   中文 / 空格文件名的 URL 编码由 bindImageFrame 与灯箱自动处理。
   调整标题 / 描述 / 分类，只改这里即可。
*/

const workList = [
{ id: 1,  category: "illustration", title: "人物插画系列", desc: "手绘氛围感人物插画",         src: "images/work-1.jpg" },
{ id: 26, category: "garden",       title: "庭院设计 · 夏日晚晴", desc: "庭院景观设计方案",      src: "images/庭院设计·夏日晚晴.jpg" },
{ id: 23, category: "garden",       title: "园林别墅设计图", desc: "别墅庭院园林景观设计",       src: "images/园林别墅设计图.jpg" },
{ id: 39, category: "graphic",      title: "入侵物种科普手册", desc: "科普信息视觉化与版式设计",    src: "images/科普手册制作.jpg" },
{ id: 3,  category: "ip",           title: "卡通 IP 形象设计", desc: "品牌吉祥物视图",        src: "images/work-3.jpg" },
{ id: 2,  category: "garden",       title: "别墅庭院方案", desc: "私家庭院园林景观效果图",     src: "images/work-2.jpg" },
{ id: 4,  category: "illustration", title: "人物插画系列", desc: "氛围感人物插画",             src: "images/work-4.jpg" },
{ id: 6,  category: "illustration", title: "人物插画系列", desc: "板绘人物插画",               src: "images/work-6.jpg" },
{ id: 7,  category: "illustration", title: "人物插画系列", desc: "板绘人物插画",               src: "images/work-7.jpg" },
{ id: 13, category: "illustration", title: "人物插画系列", desc: "板绘人物插画",               src: "images/work-13.jpg" },
{ id: 5,  category: "illustration", title: "制品系列",     desc: "板绘 PS 人物插画",           src: "images/work-5.jpg" },
{ id: 8,  category: "illustration", title: "制品系列",     desc: "黑胶唱片包装",               src: "images/work-8.jpg" },
{ id: 9,  category: "illustration", title: "人物插画系列", desc: "板绘人物插画",               src: "images/work-9.jpg" },
{ id: 10, category: "illustration", title: "人物插画系列", desc: "板绘人物插画",               src: "images/work-10.jpg" },
{ id: 11, category: "illustration", title: "人物插画系列", desc: "板绘人物插画",               src: "images/work-11.jpg" },
{ id: 12, category: "illustration", title: "人物插画系列", desc: "板绘人物插画",               src: "images/work-12.jpg" },
{ id: 14, category: "garden",       title: "明信片包装",   desc: "金沙湾实地写生板绘效果图",   src: "images/work-14.jpg" },
{ id: 15, category: "garden",       title: "明信片包装",   desc: "金沙湾实地写生板绘效果图",   src: "images/work-15.jpg" },
{ id: 17, category: "garden",       title: "板绘写生",     desc: "金沙湾实地写生板绘效果图",   src: "images/work-17.jpg" },
{ id: 18, category: "garden",       title: "板绘写生",     desc: "实地写生板绘效果图",         src: "images/work-18.jpg" },
{ id: 19, category: "garden",       title: "板绘写生",     desc: "实地写生黑白墨线 + 板绘上色", src: "images/work-19.jpg" },
{ id: 20, category: "garden",       title: "板绘写生",     desc: "实地写生黑白墨线 + 板绘上色", src: "images/work-20.jpg" },
{ id: 21, category: "garden",       title: "板绘写生",     desc: "实地写生黑白墨线 + 板绘上色", src: "images/work-21.jpg" },
{ id: 22, category: "garden",       title: "金沙湾线稿",   desc: "海滨建筑黑白线稿写生",       src: "images/work-22.jpg" },
{ id: 24, category: "garden",       title: "施工图设计",   desc: "园林景观施工图设计",           src: "images/施工图设计.jpg" },
{ id: 16, category: "garden",       title: "平面图植被方案", desc: "园林景观植物汇总图",        src: "images/work-16.jpg" },
{ id: 25, category: "garden",       title: "别墅植物平面图设计", desc: "别墅植物配置平面图",     src: "images/别墅植物平面图设计.jpg" },
{ id: 27, category: "garden",       title: "古代园林平面图", desc: "古典园林平面布局设计",       src: "images/古代园林平面图.jpg" },
{ id: 28, category: "garden",       title: "剖面图设计",   desc: "园林景观剖面图设计",           src: "images/剖面图设计.jpg" },
{ id: 29, category: "garden",       title: "剖面图设计 II", desc: "园林景观剖面图设计",          src: "images/剖面图设计 (2).jpg" },
{ id: 30, category: "garden",       title: "园林手绘植物色彩练习", desc: "园林植物手绘上色练习", src: "images/园林手绘植物色彩练习.jpg" },
{ id: 33, category: "illustration", title: "手绘线条练习", desc: "手绘线条基础练习",             src: "images/手绘线条练习.jpg" },
{ id: 34, category: "illustration", title: "人物插画板绘",   desc: "板绘人物插画习作",             src: "images/人物插画板绘.jpg" },
{ id: 35, category: "illustration", title: "人物半身插画板绘", desc: "板绘人物半身像",            src: "images/人物半身插画板绘.jpg" },
{ id: 36, category: "illustration", title: "人物头像插画板绘", desc: "黑白板绘人物头像",          src: "images/人物头像插画板绘.jpg" },
{ id: 38, category: "illustration", title: "黑白漫画短图",   desc: "黑白分镜漫画创作",             src: "images/黑白漫画短图.png" },
{ id: 37, category: "illustration", title: "板绘越野车",     desc: "人物与场景主题板绘",           src: "images/板绘越野车.png" },
{ id: 31, category: "illustration", title: "手绘水彩",     desc: "水彩手绘习作",                 src: "images/手绘水彩.jpg" },
{ id: 32, category: "illustration", title: "手绘水彩花卉", desc: "花卉主题水彩手绘",             src: "images/手绘水彩花卉.jpg" },
{ id: 40, category: "garden",       title: "星露谷主题设计",   desc: "主题景观设计排版展板",        src: "images/星露谷设计.jpg" },
{ id: 41, category: "garden",       title: "星露谷平面图",     desc: "主题景观平面手绘方案",        src: "images/星露谷设计 (1).jpg" },
{ id: 42, category: "garden",       title: "星露谷鸟瞰图",     desc: "主题景观鸟瞰效果图",          src: "images/星露谷设计 (2).jpg" },
{ id: 43, category: "graphic",      title: "城市文旅小程序设计", desc: "文旅小程序 UI 与策划概念",   src: "images/城市文旅小程序与设计以及策划概念.jpg" },
{ id: 44, category: "ip",           title: "木呱呱 IP 形象设计", desc: "原创 IP 形象与小程序 UI 应用", src: "images/IP木呱呱小程序设计.jpg" },
];

/* ---------- 显示顺序 ----------
   只改这一行数字就能调整作品顺序，workList 不用动。
   数字 = 上面作品的 id；调换数字位置即可换顺序；删掉某数字则暂不显示该作品。
   也可以用「排序工具.html」拖拽后生成这一行。
*/
const order = [35,36,38,1,26,23,39,3,2,4,6,7,8,5,34,13,9,10,11,12,37,14,15,17,18,19,20,21,22,24,16,25,27,28,29,33,30,31,32,40,41,42,43,44];

/* 按 order 排出实际显示的作品 */
function orderedWorks() {
    return order.map(id => workList.find(w => w.id === id)).filter(Boolean);
}

const categoryLabel = {
    illustration: "ILLUSTRATION / 插画",
    garden: "GARDEN / 园林",
    ip: "IP DESIGN / 形象",
    graphic: "GRAPHIC / 视觉"
};

/* 路径编码：兼容中文文件名与空格（如「剖面图设计 (2).jpg」） */
function encPath(path) {
    return path.split("/").map(encodeURIComponent).join("/");
}

/* ---------- 图片探测：上传后自动显示 ----------
   浏览器先尝试加载图片；存在则淡入，不存在则保留黑白占位框。
*/
function bindImageFrame(frame, src) {
    const img = new Image();
    img.alt = frame.dataset.label || "作品图片";
    img.onload = () => {
        frame.appendChild(img);
        frame.classList.add("loaded");
        frame.dataset.ready = "true";
    };
    img.onerror = () => {
        frame.dataset.ready = "false";
    };
    img.src = encPath(src);
}

/* 初始化首屏 / 关于页静态图片框 */
document.querySelectorAll(".img-frame[data-img]").forEach(frame => {
    bindImageFrame(frame, frame.dataset.img);
});

/* ---------- 渲染作品网格 ---------- */
const workContainer = document.getElementById("workContainer");

function frameMarkup(item, index) {
    const no = String(index + 1).padStart(2, "0");
    return `
        <div class="img-frame" data-ready="pending">
            <div class="frame-inner">
                <span class="frame-mark">${no}</span>
                <span class="frame-label">${categoryLabel[item.category].split(" / ")[0]}</span>
                <span class="frame-file">${item.src}</span>
            </div>
        </div>
        <div class="work-meta">
            <h3 class="work-title">${item.title}</h3>
            <span class="work-no">${no}</span>
        </div>
        <p class="work-desc">${item.desc}</p>
        <p class="work-cat">${categoryLabel[item.category]}</p>
    `;
}

function renderWorks(data) {
    workContainer.innerHTML = "";
    const fragment = document.createDocumentFragment();

    data.forEach((item) => {
        const card = document.createElement("article");
        card.className = "work-card reveal";
        card.dataset.src = item.src;
        card.dataset.title = item.title;
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");
        card.setAttribute("aria-label", `查看作品：${item.title}`);
        card.innerHTML = frameMarkup(item, data.indexOf(item));

        const frame = card.querySelector(".img-frame");
        bindImageFrame(frame, item.src);

        const open = () => openLightbox(card);
        card.addEventListener("click", open);
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
        });

        fragment.appendChild(card);
    });

    workContainer.appendChild(fragment);
    observeReveals();
}

/* ---------- 分类筛选 ---------- */
const filterButtons = document.getElementById("filterButtons");
filterButtons.addEventListener("click", (e) => {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filterButtons.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const type = btn.dataset.filter;
    const list = orderedWorks();
    renderWorks(type === "all" ? list : list.filter(item => item.category === type));
});

/* ---------- 灯箱 ---------- */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");

function openLightbox(card) {
    const src = card.dataset.src;
    const frame = card.querySelector(".img-frame");
    if (frame.dataset.ready !== "true") {
        lightboxImg.removeAttribute("src");
        lightboxImg.style.display = "none";
        lightboxCaption.textContent = `尚未上传图片：${src}`;
    } else {
        lightboxImg.style.display = "block";
        lightboxImg.src = encPath(src);
        lightboxImg.alt = card.dataset.title;
        lightboxCaption.textContent = card.dataset.title;
    }
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.removeAttribute("src");
    document.body.style.overflow = "";
}

document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !lightbox.hidden) closeLightbox(); });

/* ---------- 导航滚动状态 / 当前栏目 ---------- */
const navbar = document.getElementById("navbar");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const sections = ["home", "about", "works", "contact"].map(id => document.getElementById(id));

function onScroll() {
    navbar.classList.toggle("scrolled", window.scrollY > 30);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            navLinks.forEach(link => {
                link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
            });
        });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(section => section && sectionObserver.observe(section));
}

/* ---------- 滚动淡入 ---------- */
let revealObserver;
if ("IntersectionObserver" in window) {
    revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const delay = Number(entry.target.dataset.delay || 0);
            entry.target.style.transitionDelay = `${delay * 0.12}s`;
            entry.target.classList.add("in");
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.08 });
}

function observeReveals() {
    if (!revealObserver) {
        document.querySelectorAll(".reveal").forEach(el => el.classList.add("in"));
        return;
    }
    document.querySelectorAll(".reveal:not(.in)").forEach(el => revealObserver.observe(el));
}
/* 首屏渲染（放在 observeReveals 定义之后） */
renderWorks(orderedWorks());
observeReveals();

/* ---------- 移动端菜单 ---------- */
const menuBtn = document.getElementById("menuBtn");
const navLinksWrap = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => {
    const open = navLinksWrap.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
});
navLinksWrap.addEventListener("click", (e) => {
    if (e.target.closest(".nav-link")) {
        navLinksWrap.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
    }
});

/* ---------- 首屏擦拭显影 ----------
   上层 canvas 铺满绿色图，鼠标 / 手指移动时用 destination-out 擦出圆形，
   露出下层 <img> 的黑白线稿。擦过的痕迹保留，点头像按钮可重置。
*/
(function initWipe() {
    const frame = document.getElementById("wipeFrame");
    if (!frame) return;
    const canvas = frame.querySelector(".wipe-cover");
    const baseImg = frame.querySelector(".wipe-base");
    const resetBtn = document.getElementById("wipeReset");
    const ctx = canvas.getContext("2d");
    const baseSrc = frame.dataset.base;
    const coverSrc = frame.dataset.cover;
    const BRUSH = 46;          // 擦拭笔刷半径（CSS像素）
    let coverImg = null;
    let drawing = false;
    let last = null;

    baseImg.src = encPath(baseSrc);
    coverImg = new Image();
    coverImg.onload = paintCover;
    coverImg.src = encPath(coverSrc);

    // 按 object-fit:cover 把覆盖图画满 canvas（含高清屏缩放）
    function paintCover() {
        const rect = frame.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        const w = Math.max(1, Math.round(rect.width));
        const h = Math.max(1, Math.round(rect.height));
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.globalCompositeOperation = "source-over";
        ctx.clearRect(0, 0, w, h);
        if (!coverImg || !coverImg.naturalWidth) return;
        const scale = Math.max(w / coverImg.naturalWidth, h / coverImg.naturalHeight);
        const dw = coverImg.naturalWidth * scale;
        const dh = coverImg.naturalHeight * scale;
        ctx.drawImage(coverImg, (w - dw) / 2, (h - dh) / 2, dw, dh);
        frame.classList.remove("touched");
    }

    function point(e) {
        const rect = canvas.getBoundingClientRect();
        const src = e.touches ? e.touches[0] : e;
        return { x: src.clientX - rect.left, y: src.clientY - rect.top };
    }

    function wipe(p) {
        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        if (last) {
            ctx.moveTo(last.x, last.y);
            ctx.lineTo(p.x, p.y);
            ctx.lineCap = "round";
            ctx.lineJoin = "round";
            ctx.lineWidth = BRUSH * 2;
            ctx.stroke();
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, BRUSH, 0, Math.PI * 2);
        ctx.fill();
        last = p;
    }

    function start(e) {
        if (!coverImg || !coverImg.naturalWidth) return;
        drawing = true;
        last = null;
        frame.classList.add("touched");
        wipe(point(e));
        e.preventDefault();
    }
    function move(e) {
        if (!drawing) return;
        wipe(point(e));
        e.preventDefault();
    }
    function end() { drawing = false; last = null; }

    canvas.addEventListener("mousedown", start);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", end);
    canvas.addEventListener("touchstart", start, { passive: false });
    canvas.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("touchend", end);

    if (resetBtn) resetBtn.addEventListener("click", (e) => { e.stopPropagation(); paintCover(); });

    // 容器尺寸变化（窗口缩放）时重绘覆盖层
    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(paintCover, 200);
    });
})();
