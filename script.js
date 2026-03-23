const ARTICLES = {
  philosophy: [
    { date: "2024-10-14", titleEn: "Espresso Italy Culture Salon", titleZh: "浓缩意大利文化分享会", descriptionEn: "A salon on Italian food, culture, and everyday philosophy through the lens of espresso.", descriptionZh: "从浓缩咖啡切入，分享意大利饮食文化与日常生活哲学。", href: "/philosophy/2024/1014_Italy_culture/Philocoffee_Rosemary.md" },
    { date: "2024-05-28", titleEn: "Phil206 Reflections", titleZh: "Phil206 结课感想", descriptionEn: "Students reflect on early modern philosophy and the thinkers that stayed with them.", descriptionZh: "同学们回顾早期现代哲学课程，分享最有共鸣的思想与哲学家。", href: "/philosophy/2024/0528_phil206/survey.md" },
    { date: "2024-03-16", titleEn: "Visiting Media Storm Studio", titleZh: "“哲咖”探秘影视飓风", descriptionEn: "A club visit that turned media production into a conversation about aesthetics and storytelling.", descriptionZh: "一次企业走访活动，把影像制作延伸为关于美学与叙事的讨论。", href: "/philosophy/2024/0316_MediaStorm/feedback.md" },
    { date: "2024-03-09", titleEn: "Vietnamese Coffee Culture Salon", titleZh: "越南咖啡文化沙龙", descriptionEn: "A joint salon on coffee, borders, and cultural exchange centered on Vietnam.", descriptionZh: "一场围绕越南、边界与咖啡文化展开的联合沙龙活动。", href: "/philosophy/2024/0309_vietnam_coffee_salon/feedback.md" },
    { date: "2023-10-22", titleEn: "Movie Night: Tenet", titleZh: "电影夜：信条", descriptionEn: "A reflective movie-night review pairing speculative cinema with club discussion.", descriptionZh: "结合社团讨论的一篇观影回顾，从科幻电影走向更深的思考。", href: "/philosophy/2023/1022_Tenet_Review.md" },
    { date: "2023-10-06", titleEn: "Movie Night: Suzume", titleZh: "电影夜：铃芽之旅", descriptionEn: "A shared screening with partner clubs and a response to the film's emotional world.", descriptionZh: "与合作社团共同观影，并回应电影所呈现的情感与想象。", href: "/philosophy/2023/1006_Suzume.md" },
    { date: "2023-10-05", titleEn: "To Be Is To Be Perceived", titleZh: "存在即是被感知", descriptionEn: "A cafe-tour reflection linking place, perception, and philosophical conversation.", descriptionZh: "一篇把空间感受、知觉经验与哲学对话联系起来的探店随笔。", href: "/philosophy/2023/1005_CoffeeShopTour.md" },
    { date: "2023-09-10", titleEn: "Book Rec: Coffee & Philosophy", titleZh: "荐书：咖啡与哲学", descriptionEn: "A reading note on an accessible introduction to philosophical dialogue through coffee.", descriptionZh: "围绕《咖啡与哲学》的一篇阅读札记，适合哲学入门读者。", href: "/philosophy/2023/0910_Book-%E5%92%96%E5%95%A1%E4%B8%8E%E5%93%B2%E5%AD%A6.md" },
    { date: "2023-08-07", titleEn: "Philosophers Who Loved Coffee", titleZh: "爱咖啡的哲学家", descriptionEn: "A look at how coffee appears in the lives and habits of major philosophers.", descriptionZh: "从哲学家的生活习惯切入，观察咖啡与思想史之间的联系。", href: "/philosophy/2023/0807_%E7%88%B1%E5%92%96%E5%95%A1%E7%9A%84%E5%93%B2%E5%AD%A6%E5%AE%B6.md" }
  ],
  coffee: [
    { date: "2024-06-01", titleEn: "Smart Pour-Over Machine Senior Project", titleZh: "智能手冲咖啡机毕设", descriptionEn: "A student engineering project that brings coffee brewing into conversation with design and automation.", descriptionZh: "把咖啡冲煮与工程设计、自动化实践结合起来的学生项目。", href: "/tech/2024/0601_Machine/feedback.md" },
    { date: "2024-02-20", titleEn: "PhiloTrip: Shenzhen", titleZh: "PhiloTrip：深圳", descriptionEn: "A travel diary exploring independent cafes and specialty coffee culture in Shenzhen.", descriptionZh: "前往深圳探访独立咖啡馆与精品咖啡文化的一次城市旅行记录。", href: "/coffee/2024/0220_Shenzhen/feedback.md" },
    { date: "2024-02-14", titleEn: "Cafe Tour: Namphong, Vietnam", titleZh: "探店：越南 Namphong", descriptionEn: "A cafe visit that highlights local atmosphere and the appeal of Vietnamese independent coffee shops.", descriptionZh: "记录越南独立咖啡馆的空间气质与地方风味的一篇探店文章。", href: "/coffee/2024/0214_vietnam_Namphong_cafe.md" },
    { date: "2024-02-02", titleEn: "PhiloTrip: Shanghai", titleZh: "PhiloTrip：上海", descriptionEn: "A trip to X-Verge in Shanghai, reflecting on flavor, design, and urban life.", descriptionZh: "在上海 X-Verge 的一次探访，从风味、设计谈到城市生活方式。", href: "/coffee/2024/0202_x_verge.md" },
    { date: "2023-12-20", titleEn: "Gaokao Support Drip Coffee Event", titleZh: "考研加油挂耳活动", descriptionEn: "A small support event that turned coffee into care during exam season.", descriptionZh: "在备考季用挂耳咖啡传递鼓励与陪伴的一次活动。", href: "/coffee/2023/1220_Coffee_Card.md" },
    { date: "2023-11-26", titleEn: "Club Culture Festival", titleZh: "社团文化节", descriptionEn: "A campus festival recap featuring cold brew, tarot, and club outreach.", descriptionZh: "记录社团文化节上的冷萃、塔罗与面向校园的社团展示。", href: "/coffee/2023/1126_club_festival.md" },
    { date: "2023-11-17", titleEn: "Cafe Tour: ALL-IN, Haining", titleZh: "探店：海宁 ALL-IN", descriptionEn: "A local cafe profile capturing the charm and character of ALL-IN in Haining.", descriptionZh: "一篇关于海宁本地咖啡馆 ALL-IN 气质与风格的探店纪实。", href: "/coffee/2023/1117_ALLIN_HENGTOU.md" },
    { date: "2023-11-04", titleEn: "Hangzhou Tianmuli Coffee Festival", titleZh: "杭州天目里咖啡节", descriptionEn: "A festival field note from one of Hangzhou's lively coffee events.", descriptionZh: "记录杭州咖啡节现场氛围与观察的一篇活动随记。", href: "/coffee/2023/%E6%9D%AD%E5%B7%9E%E5%A4%A9%E7%9B%AE%E9%87%8C%E5%92%96%E5%95%A1%E8%8A%82.md" },
    { date: "2023-10-20", titleEn: "Cafe Tour: Aristotle, Wuhan", titleZh: "探店：武汉 Aristotle", descriptionEn: "A visit to a philosophy-themed cafe that resonates strongly with the club's identity.", descriptionZh: "走进一家哲学主题咖啡馆，观察它如何与社团精神产生共鸣。", href: "/coffee/2023/1020_Aristotle.md" },
    { date: "2023-08-07", titleEn: "The Historical Origins of Coffee", titleZh: "咖啡的历史起源", descriptionEn: "An introduction to the history of coffee and the cultural routes behind it.", descriptionZh: "一篇介绍咖啡历史起源与文化传播路径的入门文章。", href: "/coffee/2023/0807_%E5%92%96%E5%95%A1%E7%9A%84%E5%8E%86%E5%8F%B2%E8%B5%B7%E6%BA%90.md" }
  ],
  tech: [
    { date: "2024-05-05", titleEn: "PhiloTech Salon: History of AGI", titleZh: "PhiloTech 沙龙：AGI 史", descriptionEn: "A salon recap on the history and future of artificial general intelligence.", descriptionZh: "一场关于通用人工智能历史与未来的技术沙龙回顾。", href: "/tech/2024/0505_PhiloTech_AGI/AGI.md" },
    { date: "2024-04-27", titleEn: "GitHub Copilot & Personal Website", titleZh: "GitHub Copilot 与个人网站", descriptionEn: "A workshop article on using AI tools to improve coding workflow and web building.", descriptionZh: "一篇关于如何用 AI 工具提升编程效率与建站体验的工作坊文章。", href: "/tech/2024/0427_PhiloTech_Copilot/blog.md" },
    { date: "2023-11-07", titleEn: "Generating Club Posters with DALL-E 3", titleZh: "用 DALL-E 3 生成社团海报", descriptionEn: "A practical demo of AI-assisted poster making for student club communications.", descriptionZh: "展示如何利用 AI 图像生成工具制作社团宣传海报。", href: "/tech/2023/1107_Poster_with_Dalle3.md" },
    { date: "2023-11-05", titleEn: "Club Email Management Best Practices", titleZh: "社团邮箱管理最佳实践", descriptionEn: "A guide to organizing club email, communication habits, and lightweight infrastructure.", descriptionZh: "围绕社团邮箱、协作习惯与轻量化基础设施的经验分享。", href: "/tech/2023/1105_Best%20Practice%20for%20Club%20Email%20Management.md" },
    { date: "2023-08-07", titleEn: "How to Build a Club Website with GitHub", titleZh: "如何用 GitHub 搭建社团网站", descriptionEn: "A starter guide to building and hosting a student club website with GitHub Pages.", descriptionZh: "介绍如何使用 GitHub Pages 搭建与托管社团网站的入门指南。", href: "/tech/2023/0807_%E5%A6%82%E4%BD%95%E6%90%AD%E5%BB%BA%E8%87%AA%E5%B7%B1%E7%9A%84%E7%A4%BE%E5%9B%A2%E7%BD%91%E7%AB%99.md" }
  ]
};

const DEPARTMENT_META = {
  philosophy: { nameEn: "Philosophy", nameZh: "哲学部", href: "/philosophy/", tagClass: "tag-philosophy" },
  coffee: { nameEn: "Coffee", nameZh: "咖啡部", href: "/coffee/", tagClass: "tag-coffee" },
  tech: { nameEn: "Tech", nameZh: "技术部", href: "/tech/", tagClass: "tag-tech" }
};

let currentLanguage = "en";
let activeTab = "philosophy";

function buildArticleHref(sourcePath) {
  return `/article/?src=${encodeURIComponent(sourcePath)}`;
}

function getInitialLanguage() {
  const saved = localStorage.getItem("philocoffee-lang");
  if (saved === "en" || saved === "zh") return saved;
  return navigator.language && navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function formatDate(dateString, lang) {
  const locale = lang === "zh" ? "zh-CN" : "en-US";
  return new Intl.DateTimeFormat(locale, { year: "numeric", month: "short", day: "numeric" }).format(new Date(dateString));
}

function sortByDate(items) {
  return [...items].sort((a, b) => new Date(b.date) - new Date(a.date));
}

function createArticleCard(article, department) {
  const meta = DEPARTMENT_META[department];
  const title = currentLanguage === "zh" ? article.titleZh : article.titleEn;
  const description = currentLanguage === "zh" ? article.descriptionZh : article.descriptionEn;
  const departmentName = currentLanguage === "zh" ? meta.nameZh : meta.nameEn;
  const readLabel = currentLanguage === "zh" ? "阅读全文" : "Read article";

  return `
    <article class="article-card">
      <div class="article-top">
        <span class="article-tag ${meta.tagClass}">${departmentName}</span>
        <span class="article-meta">${formatDate(article.date, currentLanguage)}</span>
      </div>
      <h3>${title}</h3>
      <p class="article-desc">${description}</p>
      <a class="text-link" href="${buildArticleHref(article.href)}">${readLabel}</a>
    </article>
  `;
}

function renderHomeArticles() {
  const grid = document.getElementById("home-article-grid");
  const allLink = document.getElementById("home-article-link");
  if (!grid || !allLink) return;
  const featured = sortByDate(ARTICLES[activeTab]).slice(0, 4);
  grid.innerHTML = featured.map((article) => createArticleCard(article, activeTab)).join("");
  allLink.href = DEPARTMENT_META[activeTab].href;
}

function renderDepartmentArticles() {
  const grid = document.getElementById("department-article-grid");
  const department = document.body.dataset.department;
  if (!grid || !department || !ARTICLES[department]) return;
  grid.innerHTML = sortByDate(ARTICLES[department]).map((article) => createArticleCard(article, department)).join("");
}

function renderPageSpecificContent() {
  if (document.body.dataset.page === "home") renderHomeArticles();
  if (document.body.dataset.page === "department") renderDepartmentArticles();
  if (document.body.dataset.page === "article") renderArticlePage();
}

async function renderArticlePage() {
  const params = new URLSearchParams(window.location.search);
  const source = params.get("src");
  const article = document.getElementById("article-content");
  const sourceLabel = document.getElementById("article-source");
  const backLink = document.getElementById("article-back-link");
  if (!article || !sourceLabel || !source) return;

  sourceLabel.textContent = source;
  if (source.includes("/philosophy/")) backLink.href = "/philosophy/";
  if (source.includes("/coffee/")) backLink.href = "/coffee/";
  if (source.includes("/tech/")) backLink.href = "/tech/";

  try {
    const response = await fetch(source);
    if (!response.ok) throw new Error(`Failed to fetch ${source}`);
    const markdown = await response.text();
    const normalized = markdown.replace(/\]\((?!https?:\/\/|mailto:|#|\/)([^)]+)\)/g, (_match, relativePath) => {
      const baseDir = source.slice(0, source.lastIndexOf("/") + 1);
      return `](${baseDir}${relativePath})`;
    });
    const html = window.marked ? window.marked.parse(normalized) : `<pre>${markdown}</pre>`;
    article.innerHTML = html;
    const firstHeading = article.querySelector("h1");
    if (firstHeading) document.title = `${firstHeading.textContent.trim()} | PhiloCoffee`;
  } catch (_error) {
    article.innerHTML = currentLanguage === "zh"
      ? "<p>文章加载失败。请确认你正在通过本地服务器或 GitHub Pages 访问本站。</p>"
      : "<p>Failed to load the article. Please open the site through a local server or GitHub Pages.</p>";
  }
}

function setLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang === "zh" ? "zh" : "en";
  document.querySelectorAll(".lang").forEach((element) => {
    const value = lang === "zh" ? element.dataset.zh : element.dataset.en;
    if (value) element.textContent = value;
  });
  document.querySelectorAll(".lang-toggle-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
  localStorage.setItem("philocoffee-lang", lang);
  renderPageSpecificContent();
}

function setupLanguageToggle() {
  document.querySelectorAll(".lang-toggle-btn").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.lang));
  });
}

function setupTabs() {
  const buttons = document.querySelectorAll(".tab-button");
  if (!buttons.length) return;
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      activeTab = button.dataset.tab;
      buttons.forEach((other) => {
        const isActive = other === button;
        other.classList.toggle("is-active", isActive);
        other.setAttribute("aria-selected", String(isActive));
      });
      renderHomeArticles();
    });
  });
}

function setupNav() {
  const toggle = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav-menu");
  if (!toggle || !menu) return;
  toggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function setupHeaderState() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
  update();
  window.addEventListener("scroll", update, { passive: true });
}

function setYear() {
  document.querySelectorAll("#year").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupNav();
  setupTabs();
  setupLanguageToggle();
  setupHeaderState();
  setYear();
  setLanguage(getInitialLanguage());
});
