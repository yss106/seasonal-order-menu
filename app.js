const seasons = {
  spring: {
    name: "春日鲜味", icon: "🌱", months: [3, 4, 5],
    description: "春笋、蚕豆与清鲜河味正当时",
    colors: ["#4f8b55", "#76a960", "#e5f1d9"],
    dishes: [
      ["spring-bamboo", "春笋腌笃鲜", "春笋、咸肉、鲜排骨", 58, "热菜", "🎋", true],
      ["broad-bean", "葱油蚕豆", "新鲜蚕豆、香葱", 28, "素菜", "🫛", true],
      ["river-shrimp", "龙井虾仁", "河虾仁、明前龙井", 78, "热菜", "🦐", true],
      ["malantou", "香干马兰头", "马兰头、五香豆干", 26, "凉菜", "🥬", false],
      ["shepherd-purse", "荠菜春卷", "荠菜、猪肉、春卷皮", 32, "小吃", "🥟", false],
      ["osmanthus-rice", "桂花酒酿圆子", "酒酿、糯米圆子、桂花", 22, "甜品", "🍡", false]
    ]
  },
  summer: {
    name: "盛夏清鲜", icon: "☀️", months: [6, 7, 8],
    description: "清爽瓜蔬与鲜活水产，消暑正好",
    colors: ["#c94932", "#ed7351", "#fee1c9"],
    dishes: [
      ["lotus-leaf", "荷香糯米蒸排骨", "新荷叶、糯米、仔排", 56, "热菜", "🍃", true],
      ["crayfish", "十三香小龙虾", "当季小龙虾、十三香", 88, "热菜", "🦞", true],
      ["lotus-root", "脆拌藕带", "嫩藕带、小米椒", 26, "凉菜", "🪷", true],
      ["bitter-melon", "豆豉炒苦瓜", "苦瓜、豆豉、彩椒", 28, "素菜", "🥒", false],
      ["cold-noodle", "鸡丝凉面", "手工面、鸡丝、麻酱", 25, "主食", "🍜", false],
      ["mung-soup", "陈皮绿豆沙", "绿豆、陈皮、冰糖", 18, "甜品", "🥣", false],
      ["fish", "紫苏烧黄鱼", "黄鱼、紫苏、姜葱", 68, "热菜", "🐟", false]
    ]
  },
  autumn: {
    name: "金秋丰味", icon: "🍂", months: [9, 10, 11],
    description: "丰腴蟹鲜与香甜根茎，暖胃入秋",
    colors: ["#9d5429", "#d6873c", "#f6dfb5"],
    dishes: [
      ["crab", "熟醉大闸蟹", "当季大闸蟹、花雕", 98, "热菜", "🦀", true],
      ["taro", "葱油芋艿", "本地芋艿、香葱", 30, "素菜", "🍠", true],
      ["chestnut", "板栗烧鸡", "板栗、走地鸡", 62, "热菜", "🌰", true],
      ["lotus", "桂花糖藕", "莲藕、糯米、桂花", 28, "凉菜", "🪷", false],
      ["pumpkin", "南瓜百合羹", "老南瓜、鲜百合", 22, "甜品", "🎃", false]
    ]
  },
  winter: {
    name: "冬藏暖味", icon: "❄️", months: [12, 1, 2],
    description: "慢炖暖汤与冬令鲜蔬，热乎上桌",
    colors: ["#3f5f70", "#67899a", "#dceaf0"],
    dishes: [
      ["lamb", "萝卜羊肉煲", "白萝卜、羊肉、枸杞", 78, "热菜", "🍲", true],
      ["cabbage", "砂锅白菜豆腐", "霜打白菜、手工豆腐", 36, "素菜", "🥘", true],
      ["duck", "笋干老鸭汤", "老鸭、笋干、火腿", 68, "汤羹", "🦆", true],
      ["radish", "桂花糖醋萝卜", "冬萝卜、桂花蜜", 18, "凉菜", "🥕", false],
      ["rice-cake", "酒酿红糖年糕", "手工年糕、酒酿", 25, "甜品", "🍘", false]
    ]
  }
};

const commonDishes = [
  ["pork", "招牌红烧肉", "五花肉、鹌鹑蛋", 58, "热菜", "🥩", false],
  ["tofu", "家烧豆腐", "手工豆腐、菌菇", 32, "素菜", "🍱", false],
  ["rice", "小锅现煮米饭", "东北香米", 5, "主食", "🍚", false],
  ["tea", "茉莉冷泡茶", "茉莉花茶、冰块", 12, "饮品", "🍵", false]
];

const month = new Date().getMonth() + 1;
const seasonKey = Object.keys(seasons).find(key => seasons[key].months.includes(month));
const season = seasons[seasonKey];
const dishes = [...season.dishes, ...commonDishes].map(d => ({
  id: d[0], name: d[1], ingredients: d[2], price: d[3], category: d[4], icon: d[5], featured: d[6]
}));
const categories = ["全部", ...new Set(dishes.map(d => d.category))];
const cart = {};
let activeCategory = "全部";
let query = "";

const $ = selector => document.querySelector(selector);
const money = value => `¥${value}`;

function initSeason() {
  document.documentElement.style.setProperty("--accent-dark", season.colors[0]);
  document.documentElement.style.setProperty("--accent", season.colors[1]);
  document.documentElement.style.setProperty("--season-bg", season.colors[2]);
  $("#seasonIcon").textContent = season.icon;
  $("#seasonTitle").textContent = season.name;
  $("#seasonDescription").textContent = season.description;
  $("#dateText").textContent = new Intl.DateTimeFormat("zh-CN", { month: "long", day: "numeric", weekday: "short" }).format(new Date());
}

function renderFeatured() {
  $("#featuredList").innerHTML = dishes.filter(d => d.featured).map(d => `
    <article class="featured-card">
      <div class="featured-copy">
        <small>当季主厨推荐</small>
        <h3>${d.name}</h3>
        <p>${d.ingredients}</p>
        <strong>${money(d.price)}</strong>
      </div>
      <div class="dish-art">${d.icon}</div>
      <button class="quick-add" data-add="${d.id}" aria-label="添加${d.name}">+</button>
    </article>`).join("");
}

function renderCategories() {
  $("#categoryTabs").innerHTML = categories.map(c =>
    `<button class="category-tab ${c === activeCategory ? "active" : ""}" data-category="${c}">${c}</button>`
  ).join("");
}

function filteredDishes() {
  return dishes.filter(d =>
    (activeCategory === "全部" || d.category === activeCategory) &&
    (!query || `${d.name}${d.ingredients}`.toLowerCase().includes(query))
  );
}

function controls(d) {
  const count = cart[d.id] || 0;
  return `<div class="add-control">
    ${count ? `<button class="minus" data-remove="${d.id}" aria-label="减少${d.name}">−</button><span>${count}</span>` : ""}
    <button data-add="${d.id}" aria-label="添加${d.name}">+</button>
  </div>`;
}

function renderMenu() {
  const visible = filteredDishes();
  $("#menuTitle").textContent = activeCategory === "全部" ? "全部菜品" : activeCategory;
  $("#dishCount").textContent = `${visible.length} 道`;
  $("#dishList").innerHTML = visible.map(d => `
    <article class="dish-row">
      <div class="dish-thumb">${d.icon}</div>
      <div class="dish-info">
        <h3>${d.name}${d.featured ? " · 时令" : ""}</h3>
        <p>${d.ingredients}</p>
        <strong>${money(d.price)}</strong>
      </div>
      ${controls(d)}
    </article>`).join("");
  $("#emptyState").classList.toggle("hidden", visible.length > 0);
}

function renderCart() {
  const selected = dishes.filter(d => cart[d.id]);
  const count = selected.reduce((sum, d) => sum + cart[d.id], 0);
  const total = selected.reduce((sum, d) => sum + cart[d.id] * d.price, 0);
  $("#cartBar").classList.toggle("hidden", count === 0);
  $("#cartCount").textContent = count;
  $("#cartTotal").textContent = money(total);
  $("#sheetTotal").textContent = money(total);
  $("#cartItems").innerHTML = selected.map(d => `
    <div class="cart-line">
      <div><h3>${d.icon} ${d.name}</h3><p>${money(d.price)} × ${cart[d.id]}</p></div>
      ${controls(d)}
    </div>`).join("");
}

function changeItem(id, delta) {
  cart[id] = Math.max(0, (cart[id] || 0) + delta);
  if (!cart[id]) delete cart[id];
  renderMenu();
  renderCart();
}

document.addEventListener("click", event => {
  const add = event.target.closest("[data-add]");
  const remove = event.target.closest("[data-remove]");
  const category = event.target.closest("[data-category]");
  if (add) changeItem(add.dataset.add, 1);
  if (remove) changeItem(remove.dataset.remove, -1);
  if (category) {
    activeCategory = category.dataset.category;
    renderCategories();
    renderMenu();
  }
});

$("#searchInput").addEventListener("input", event => {
  query = event.target.value.trim().toLowerCase();
  renderMenu();
});
$("#cartButton").addEventListener("click", () => $("#cartModal").classList.remove("hidden"));
$("#checkoutButton").addEventListener("click", () => $("#cartModal").classList.remove("hidden"));
$("#closeCart").addEventListener("click", () => $("#cartModal").classList.add("hidden"));
$("#cartModal").addEventListener("click", event => {
  if (event.target.id === "cartModal") $("#cartModal").classList.add("hidden");
});
$("#confirmOrder").addEventListener("click", () => {
  Object.keys(cart).forEach(key => delete cart[key]);
  $("#cartModal").classList.add("hidden");
  $("#toast").classList.remove("hidden");
  renderMenu();
  renderCart();
  setTimeout(() => $("#toast").classList.add("hidden"), 2600);
});
$("#tableButton").addEventListener("click", () => {
  $("#toast").textContent = "当前为堂食 08 桌";
  $("#toast").classList.remove("hidden");
  setTimeout(() => {
    $("#toast").classList.add("hidden");
    $("#toast").textContent = "下单成功，后厨正在准备";
  }, 1800);
});

initSeason();
renderFeatured();
renderCategories();
renderMenu();
renderCart();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("service-worker.js");
}
