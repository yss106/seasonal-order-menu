const dishes = [
  {
    id: "hot-dry-noodles", name: "武汉热干面", category: "武汉过早", season: "全年",
    desc: "碱水面拌芝麻酱、香油、酸豆角和萝卜丁，是武汉最经典的过早。",
    image: "assets/noodles.jpg", featured: true,
    stores: [["蔡林记·户部巷店", "武昌区 · 户部巷", 8], ["常青麦香园·江汉路店", "江汉区 · 江汉路", 7], ["李记热干面", "硚口区 · 崇仁路", 6]]
  },
  {
    id: "doupi", name: "三鲜豆皮", category: "武汉过早", season: "全年",
    desc: "蛋皮金黄酥香，包裹糯米、鲜肉、香菇与笋丁，外脆内糯。",
    image: "assets/dumplings.jpg",
    stores: [["老通城·吉庆街店", "江岸区 · 吉庆街", 15], ["严老幺烧麦", "江汉区 · 前进四路", 12], ["王师傅豆皮馆", "武昌区 · 粮道街", 10]]
  },
  {
    id: "lotus-soup", name: "排骨藕汤", category: "湖北菜", season: "秋冬",
    desc: "粉糯莲藕与排骨用砂锅慢煨，是武汉人秋冬餐桌上的家乡味。",
    image: "assets/soup.jpg", featured: true,
    stores: [["小桃园煨汤", "江岸区 · 兰陵路", 38], ["湖锦酒楼·国宴店", "江汉区 · 新华路", 58], ["亢龙太子酒轩·东湖店", "武昌区 · 东湖路", 68]]
  },
  {
    id: "crayfish", name: "油焖小龙虾", category: "江湖菜", season: "夏季",
    desc: "湖北夏夜主角，虾肉紧实，以香料和酱汁焖至红亮入味。",
    image: "assets/crayfish.jpg", featured: true,
    stores: [["肥肥虾庄·石牌岭总店", "洪山区 · 石牌岭", 128], ["靓靓蒸虾·雪松路总店", "江汉区 · 雪松路", 138], ["巴厘龙虾·万松园店", "江汉区 · 万松园", 148]]
  },
  {
    id: "wuchang-fish", name: "清蒸武昌鱼", category: "湖北菜", season: "春夏",
    desc: "以鲜活团头鲂清蒸，肉质细嫩，是湖北宴席代表菜。",
    image: "assets/chinese.jpg",
    stores: [["湖锦酒楼·国宴店", "江汉区 · 新华路", 88], ["亢龙太子酒轩·东湖店", "武昌区 · 东湖路", 98], ["艳阳天·宝丰路店", "硚口区 · 宝丰路", 78]]
  },
  {
    id: "mianwo", name: "武汉面窝", category: "武汉过早", season: "全年",
    desc: "米浆加黄豆、葱花油炸而成，中间酥脆、边缘松软。",
    image: "assets/fried.jpg",
    stores: [["熊太婆原汤水饺", "武昌区 · 粮道街", 3], ["户部巷汉味小吃", "武昌区 · 户部巷", 4], ["三镇民生甜食馆", "江汉区 · 胜利街", 3]]
  },
  {
    id: "shaomai", name: "重油烧麦", category: "武汉过早", season: "秋冬",
    desc: "薄皮包裹胡椒香浓的糯米与肉丁，武汉人常配热干面一起吃。",
    image: "assets/dumplings.jpg",
    stores: [["严老幺烧麦", "江汉区 · 前进四路", 12], ["德华楼·六渡桥店", "江汉区 · 六渡桥", 16], ["三镇民生甜食馆", "江汉区 · 胜利街", 14]]
  },
  {
    id: "soup-dumpling", name: "四季美汤包", category: "武汉过早", season: "全年",
    desc: "皮薄汤多，传统武汉小吃，趁热轻提慢移、先开窗后喝汤。",
    image: "assets/dumplings.jpg",
    stores: [["四季美·户部巷店", "武昌区 · 户部巷", 28], ["四季美·吉庆街店", "江岸区 · 吉庆街", 32], ["德华楼·六渡桥店", "江汉区 · 六渡桥", 26]]
  },
  {
    id: "pizza", name: "玛格丽特披萨", category: "西餐", season: "全年",
    desc: "番茄、马苏里拉与罗勒构成的经典意式披萨，在武汉多家西餐厅可吃到。",
    image: "assets/pizza.jpg",
    stores: [["必胜客·楚河汉街店", "武昌区 · 楚河汉街", 69], ["萨丁披萨·光谷店", "洪山区 · 光谷", 49], ["尊宝比萨·武汉天地店", "江岸区 · 武汉天地", 56]]
  },
  {
    id: "burger", name: "经典牛肉汉堡", category: "西餐", season: "全年",
    desc: "炙烤牛肉饼搭配芝士和蔬菜，是武汉商圈常见的西式简餐。",
    image: "assets/burger.jpg",
    stores: [["麦当劳·江汉路店", "江汉区 · 江汉路", 28], ["汉堡王·凯德西城店", "硚口区 · 凯德西城", 35], ["蓝蛙·武汉天地店", "江岸区 · 武汉天地", 78]]
  },
  {
    id: "sushi", name: "三文鱼寿司", category: "日韩料理", season: "全年",
    desc: "三文鱼覆盖醋饭的经典握寿司，武汉日料店常见菜品。",
    image: "assets/sushi.jpg",
    stores: [["争鲜回转寿司·群光店", "洪山区 · 群光广场", 18], ["寿司郎·武汉天地店", "江岸区 · 武汉天地", 24], ["元气寿司·国广店", "江汉区 · 武汉国广", 28]]
  },
  {
    id: "hotpot", name: "重庆牛油火锅", category: "火锅", season: "秋冬",
    desc: "牛油红汤麻辣醇厚，在武汉各大商圈都有丰富选择。",
    image: "assets/noodles.jpg",
    stores: [["海底捞·武商梦时代店", "武昌区 · 梦时代", 108], ["朱光玉火锅馆·江汉路店", "江汉区 · 江汉路", 98], ["珮姐重庆火锅·楚河汉街店", "武昌区 · 楚河汉街", 118]]
  },
  {
    id: "steak", name: "西冷牛排", category: "西餐", season: "全年",
    desc: "肉香浓郁、边缘带油脂的经典牛排，适合喜欢扎实口感的人。",
    image: "assets/steak.jpg",
    stores: [["豪客来·江汉路店", "江汉区 · 江汉路", 69], ["王品牛排·武汉国广店", "江汉区 · 武汉国广", 398], ["蓝蛙·武汉天地店", "江岸区 · 武汉天地", 198]]
  }
];

const seasonData = {
  spring: ["春日尝鲜", "春菜与鲜鱼正当时", "#4f8b55", "#76a960", "#e5f1d9", "🌱"],
  summer: ["江城盛夏", "小龙虾与清鲜湖北菜正当时", "#c94932", "#ed7351", "#fee1c9", "☀️"],
  autumn: ["金秋寻味", "莲藕与暖汤开始登场", "#9d5429", "#d6873c", "#f6dfb5", "🍂"],
  winter: ["冬日暖味", "藕汤、火锅与烧麦最暖胃", "#3f5f70", "#67899a", "#dceaf0", "❄️"]
};
const month = new Date().getMonth() + 1;
const seasonKey = month <= 2 || month === 12 ? "winter" : month <= 5 ? "spring" : month <= 8 ? "summer" : "autumn";
const season = seasonData[seasonKey];
const categories = ["全部", ...new Set(dishes.map(d => d.category))];
let activeCategory = "全部";
let query = "";
let userLocation = null;
const $ = s => document.querySelector(s);
const money = n => `¥${n}`;
const minPrice = d => Math.min(...d.stores.map(s => s[2]));

function initSeason() {
  ["--accent-dark", "--accent", "--season-bg"].forEach((key, i) => document.documentElement.style.setProperty(key, season[i + 2]));
  $("#seasonTitle").textContent = season[0];
  $("#seasonDescription").textContent = season[1];
  $("#seasonIcon").textContent = season[5];
  $("#dateText").textContent = new Intl.DateTimeFormat("zh-CN", { month: "long", day: "numeric", weekday: "short" }).format(new Date());
}

const picture = d => `<img src="${d.image}" alt="${d.name}" loading="lazy" onerror="this.parentElement.classList.add('image-fallback');this.remove()">`;

function renderFeatured() {
  const featured = dishes.filter(d => d.featured || d.season.includes(season[0].slice(0, 1)));
  $("#featuredList").innerHTML = featured.slice(0, 4).map(d => `
    <article class="featured-card clickable" data-detail="${d.id}">
      <div class="featured-photo">${picture(d)}</div>
      <div class="featured-overlay">
        <small>${d.season} · ${d.stores.length} 家门店</small>
        <h3>${d.name}</h3>
        <strong>${money(minPrice(d))} 起</strong>
      </div>
    </article>`).join("");
}

function renderCategories() {
  $("#categoryTabs").innerHTML = categories.map(c => `<button class="category-tab ${c === activeCategory ? "active" : ""}" data-category="${c}">${c}</button>`).join("");
}

function filteredDishes() {
  return dishes.filter(d => (activeCategory === "全部" || d.category === activeCategory) && (!query || `${d.name}${d.desc}${d.category}${d.stores.flat().join("")}`.toLowerCase().includes(query)));
}

function renderMenu() {
  const visible = filteredDishes();
  $("#menuTitle").textContent = activeCategory === "全部" ? "武汉可吃到" : activeCategory;
  $("#dishCount").textContent = `${visible.length} 道`;
  $("#dishList").innerHTML = visible.map(d => `
    <article class="dish-row clickable" data-detail="${d.id}">
      <div class="dish-thumb">${picture(d)}</div>
      <div class="dish-info">
        <h3>${d.name}</h3>
        <p>${d.category} · ${d.season} · ${d.stores.length} 家可比价</p>
        <strong>${money(minPrice(d))} 起</strong>
      </div>
      <button class="compare-button" data-detail="${d.id}">比价</button>
    </article>`).join("");
  $("#emptyState").classList.toggle("hidden", visible.length > 0);
}

function updateLiveSearch() {
  const panel = $("#liveSearch");
  panel.classList.toggle("hidden", !query);
  if (!query) return;
  const encoded = encodeURIComponent(query);
  const locationLabel = userLocation ? "已使用当前位置" : "武汉市范围";
  $("#locationStatus").textContent = locationLabel;
  $("#liveSearchText").textContent = `正在查找“${query}”附近门店。站内已收录的结果会显示在下方，也可打开地图或美团查看实时营业状态。`;
  const center = userLocation ? `&center=${userLocation.lng},${userLocation.lat}` : "";
  $("#amapSearch").href = `https://uri.amap.com/search?keyword=${encoded}&city=武汉${center}&view=map&src=wuhan-food-guide`;
  $("#baiduSearch").href = `https://map.baidu.com/search/${encoded}/@12737286,3558573,12z`;
  $("#meituanSearch").href = `https://www.meituan.com/s/武汉-${encoded}/`;
}

function requestLocation() {
  if (!navigator.geolocation) {
    $("#locationStatus").textContent = "浏览器不支持定位";
    return;
  }
  $("#locationStatus").textContent = "正在定位…";
  navigator.geolocation.getCurrentPosition(position => {
    userLocation = { lat: position.coords.latitude, lng: position.coords.longitude };
    $("#locateButton").textContent = "已定位";
    updateLiveSearch();
  }, () => {
    $("#locationStatus").textContent = "定位未授权";
    $("#toast").textContent = "请在 Safari 网站设置中允许位置权限";
    $("#toast").classList.remove("hidden");
    setTimeout(() => $("#toast").classList.add("hidden"), 2800);
  }, { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 });
}

function openDetail(id) {
  const d = dishes.find(item => item.id === id);
  const lowest = minPrice(d);
  $("#detailTitle").textContent = d.name;
  $("#detailContent").innerHTML = `
    <div class="detail-hero">${picture(d)}<span>${d.category} · ${d.season}</span></div>
    <p class="detail-description">${d.desc}</p>
    <div class="price-note">以下为公开菜单整理的参考价，实际价格、规格及营业状态请以门店当日信息为准。</div>
    <h3 class="store-title">武汉门店价格对比</h3>
    <div class="store-list">${d.stores.sort((a,b) => a[2] - b[2]).map(s => `
      <div class="store-row">
        <div><h4>${s[0]} ${s[2] === lowest ? '<b>最低价</b>' : ""}</h4><p>📍 ${s[1]}</p></div>
        <strong>${money(s[2])}</strong>
      </div>`).join("")}</div>`;
  $("#detailModal").classList.remove("hidden");
}

document.addEventListener("click", event => {
  const detail = event.target.closest("[data-detail]");
  const category = event.target.closest("[data-category]");
  if (detail) openDetail(detail.dataset.detail);
  if (category) {
    activeCategory = category.dataset.category;
    renderCategories(); renderMenu();
  }
});
$("#searchInput").addEventListener("input", e => {
  query = e.target.value.trim().toLowerCase();
  renderMenu();
  updateLiveSearch();
});
$("#locateButton").addEventListener("click", requestLocation);
$("#closeDetail").addEventListener("click", () => $("#detailModal").classList.add("hidden"));
$("#detailModal").addEventListener("click", e => { if (e.target.id === "detailModal") $("#detailModal").classList.add("hidden"); });
$("#tableButton").addEventListener("click", () => {
  $("#toast").classList.remove("hidden");
  setTimeout(() => $("#toast").classList.add("hidden"), 2800);
});

initSeason(); renderFeatured(); renderCategories(); renderMenu();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("service-worker.js");
