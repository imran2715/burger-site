/* ---------- data ---------- */

/** Unsplash CDN — real food photos from the internet */
const pic = (id, w = 800) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const CATEGORIES = [
  { id: "all", label: "Everything" },
  { id: "burgers", label: "Burgers" },
  { id: "pizza", label: "Pizza" },
  { id: "subs", label: "Submarines" },
  { id: "sides", label: "Sides" },
  { id: "drinks", label: "Drinks" },
  { id: "sweets", label: "Sweets" }
];

const MENU = [
  {
    id: "big-wave",
    name: "The Big Wave",
    cat: "burgers",
    price: 12.5,
    signature: true,
    rank: "No.1 bestseller",
    tag: "Our signature",
    desc: "Double smash patty, aged cheddar, house wave sauce, pickles and shaved onion in a toasted brioche bun.",
    pic: pic("photo-1568901346375-23c9450c58cd")
  },
  {
    id: "bacon-stack",
    name: "Bacon Smoke Stack",
    cat: "burgers",
    price: 13.5,
    signature: true,
    rank: "No.2 bestseller",
    tag: "Our signature",
    desc: "Two patties, double-smoked bacon, maple BBQ, crispy onions and smoked gouda.",
    pic: pic("photo-1553979459-d2229ba7433b")
  },
  {
    id: "nashville",
    name: "Nashville Hot Chicken",
    cat: "burgers",
    price: 12,
    signature: true,
    rank: "No.3 bestseller",
    tag: "Our signature",
    desc: "Buttermilk fried chicken thigh, hot honey glaze, sea-green slaw and dill pickles.",
    pic: pic("photo-1606755962773-d324e0a13086")
  },
  {
    id: "mushroom-swiss",
    name: "Mushroom Swiss",
    cat: "burgers",
    price: 11,
    signature: true,
    rank: "Guest favourite",
    desc: "Single patty, butter-sauteed mushrooms, melted swiss and garlic aioli.",
    pic: pic("photo-1594212699903-ec8a3eca50f5")
  },
  {
    id: "classic-cheese",
    name: "Classic Cheeseburger",
    cat: "burgers",
    price: 9,
    signature: true,
    rank: "The original",
    desc: "One patty, American cheese, lettuce, tomato, onion and house sauce. The one that started it.",
    pic: pic("photo-1572802419224-296b0aeee0d9")
  },
  {
    id: "green-chile-veg",
    name: "Green Chile Veggie",
    cat: "burgers",
    price: 10.5,
    signature: true,
    rank: "Meat-free",
    tags: ["veg"],
    desc: "Charred veggie patty, roasted green chile, avocado and sea-green herb mayo.",
    pic: pic("photo-1520072959219-c595dc870360")
  },
  {
    id: "margherita",
    name: "Wood-Fired Margherita",
    cat: "pizza",
    price: 11.5,
    desc: "San Marzano tomato, fior di latte and basil, blistered in the wood oven.",
    pic: pic("photo-1565299507177-b0ac66763828")
  },
  {
    id: "pepperoni-heat",
    name: "Pepperoni & Hot Honey",
    cat: "pizza",
    price: 13,
    tags: ["new"],
    desc: "Double pepperoni, mozzarella and a drizzle of chilli honey.",
    pic: pic("photo-1628840042765-356cda07504e")
  },
  {
    id: "garlic-mushroom-pizza",
    name: "Garlic Mushroom Pie",
    cat: "pizza",
    price: 12.5,
    tags: ["veg"],
    desc: "Garlic cream base, mixed mushrooms, thyme and parmesan.",
    pic: pic("photo-1513104890138-7c749659a591")
  },
  {
    id: "italian-sub",
    name: "Italian Classic Sub",
    cat: "subs",
    price: 10.5,
    desc: "12-inch: salami, capicola, ham, provolone, lettuce, tomato and Italian dressing.",
    pic: pic("photo-1509722747041-616f39b57569")
  },
  {
    id: "philly-sub",
    name: "Philly Cheesesteak",
    cat: "subs",
    price: 12.5,
    tag: "Most ordered sub",
    desc: "12-inch: shaved ribeye, peppers, onions and molten cheese sauce.",
    pic: pic("photo-1528735602780-2552fd46c7af")
  },
  {
    id: "chicken-parm-sub",
    name: "Chicken Parm Sub",
    cat: "subs",
    price: 11.5,
    desc: "12-inch: crispy chicken cutlet, marinara and melted mozzarella.",
    pic: pic("photo-1619096252214-ef06c45683e3")
  },
  {
    id: "loaded-fries",
    name: "Loaded Wave Fries",
    cat: "sides",
    price: 6.5,
    desc: "Hand-cut fries, cheese sauce, bacon crumb and scallions.",
    pic: pic("photo-1573080496219-bb080dd4f877")
  },
  {
    id: "onion-rings",
    name: "Golden Onion Rings",
    cat: "sides",
    price: 5.5,
    desc: "Beer-battered rings with house ranch for dunking.",
    pic: pic("photo-1626082927389-6cd097cdc6ec")
  },
  {
    id: "sea-salt-fries",
    name: "Sea Salt Fries",
    cat: "sides",
    price: 4,
    tags: ["veg"],
    desc: "Hand-cut, twice-fried and finished with flaked sea salt.",
    pic: pic("photo-1576107232684-1279f390859f")
  },
  {
    id: "vanilla-shake",
    name: "Vanilla Bean Shake",
    cat: "drinks",
    price: 6,
    desc: "Thick, real vanilla bean ice cream and whipped cream. Spoon required.",
    pic: pic("photo-1572490122747-3968b75cc699")
  },
  {
    id: "mint-lemonade",
    name: "Mint Sea Breeze",
    cat: "drinks",
    price: 3.5,
    tags: ["veg"],
    desc: "House lemonade, crushed ice and torn mint.",
    pic: pic("photo-1621263764928-df1444c5e859")
  },
  {
    id: "cold-brew",
    name: "Slow Cold Brew",
    cat: "drinks",
    price: 4,
    tags: ["veg"],
    desc: "Eighteen-hour steep, served over ice. Café side of the house.",
    pic: pic("photo-1517701604599-bb29b565090c")
  },
  {
    id: "molten-brownie",
    name: "Molten Brownie",
    cat: "sweets",
    price: 6.5,
    desc: "Warm fudge brownie, vanilla ice cream and salted caramel.",
    pic: pic("photo-1606313564200-e75d5e30476c")
  },
  {
    id: "sea-salt-cookie",
    name: "Sea Salt Cookie",
    cat: "sweets",
    price: 3,
    tags: ["veg"],
    desc: "Brown butter cookie with dark chocolate and flaked sea salt.",
    pic: pic("photo-1499636136210-6f4ee915583e")
  }
];

const DELIVERY_FEE = 3.99;
const FREE_DELIVERY_FROM = 30;

const money = (n) => `$${n.toFixed(2)}`;
const byId = (id) => MENU.find((item) => item.id === id);

/* ---------- state ---------- */

const STORAGE_KEY = "bigwave-order";
let cart = loadCart();
let activeCat = "all";
let mode = "delivery";

function loadCart() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(raw)) return [];
    return raw.filter((line) => byId(line.id) && line.qty > 0).map((line) => ({ id: line.id, qty: Math.min(20, Math.round(line.qty)) }));
  } catch {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch {
    /* storage unavailable — cart still works for this session */
  }
}

/* ---------- helpers ---------- */

const el = (tag, className, text) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
};

const cartCount = () => cart.reduce((sum, line) => sum + line.qty, 0);
const subtotal = () => cart.reduce((sum, line) => sum + byId(line.id).price * line.qty, 0);
const deliveryFee = () => (mode === "delivery" && subtotal() > 0 && subtotal() < FREE_DELIVERY_FROM ? DELIVERY_FEE : 0);
const orderTotal = () => subtotal() + deliveryFee();

let toastTimer;
function toast(message) {
  let node = document.querySelector(".toast");
  if (!node) {
    node = el("div", "toast");
    document.body.appendChild(node);
  }
  node.textContent = message;
  node.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => node.classList.remove("is-visible"), 2200);
}

/* ---------- render: signature ---------- */

function renderSignatures() {
  const grid = document.querySelector("#signature-grid");
  if (!grid) return;
  const list = MENU.filter((item) => item.signature).slice(0, 6);

  grid.innerHTML = "";
  list.forEach((item) => {
    const card = el("article", "sig-card");

    const media = el("div", "sig-media");
    const img = new Image();
    img.src = item.pic;
    img.alt = `${item.name} — ${item.desc}`;
    img.loading = "lazy";
    media.appendChild(img);
    media.appendChild(el("span", "sig-rank", item.rank));
    media.appendChild(el("span", "sig-price", money(item.price)));

    const body = el("div", "sig-body");
    if (item.tag) body.appendChild(el("span", "sig-tag", item.tag));
    body.appendChild(el("h3", null, item.name));
    body.appendChild(el("p", null, item.desc));

    const btn = el("button", "btn btn-orange", "Add to order");
    btn.type = "button";
    btn.dataset.add = item.id;
    btn.insertAdjacentHTML("beforeend", " <span aria-hidden=\"true\">+</span>");
    body.appendChild(btn);

    card.appendChild(media);
    card.appendChild(body);
    grid.appendChild(card);
  });
}

/* ---------- render: menu ---------- */

function renderTabs() {
  const tabs = document.querySelector("#menu-tabs");
  if (!tabs || tabs.childElementCount) return;

  CATEGORIES.forEach((cat) => {
    const btn = el("button", "menu-tab", cat.label);
    btn.type = "button";
    btn.role = "tab";
    btn.dataset.cat = cat.id;
    btn.setAttribute("aria-selected", String(cat.id === activeCat));
    tabs.appendChild(btn);
  });

  tabs.addEventListener("click", (event) => {
    const btn = event.target.closest(".menu-tab");
    if (!btn) return;
    activeCat = btn.dataset.cat;
    tabs.querySelectorAll(".menu-tab").forEach((tab) => tab.setAttribute("aria-selected", String(tab === btn)));
    renderMenu();
  });
}

function renderMenu() {
  const grid = document.querySelector("#menu-grid");
  if (!grid) return;

  const list = activeCat === "all" ? MENU : MENU.filter((item) => item.cat === activeCat);
  grid.innerHTML = "";

  list.forEach((item) => {
    const card = el("article", "dish");

    const media = el("div", "dish-media");
    const img = new Image();
    img.src = item.pic;
    img.alt = item.name;
    img.loading = "lazy";
    media.appendChild(img);

    const body = el("div", "dish-body");

    const top = el("div", "dish-top");
    top.appendChild(el("h3", null, item.name));
    top.appendChild(el("span", "dish-price", money(item.price)));
    body.appendChild(top);
    body.appendChild(el("p", "dish-desc", item.desc));

    const badges = el("div", "dish-badges");
    if (item.signature) badges.appendChild(el("span", "badge badge-sig", "Signature"));
    (item.tags || []).forEach((tag) => {
      if (tag === "new") badges.appendChild(el("span", "badge badge-new", "New"));
      if (tag === "veg") badges.appendChild(el("span", "badge badge-veg", "Veggie"));
    });
    if (badges.childElementCount) body.appendChild(badges);

    const foot = el("div", "dish-foot");
    foot.appendChild(el("span", "dish-cat", categoryLabel(item.cat)));
    const btn = el("button", "add-btn", "Add");
    btn.type = "button";
    btn.dataset.add = item.id;
    btn.insertAdjacentHTML("beforeend", " <span aria-hidden=\"true\">+</span>");
    foot.appendChild(btn);
    body.appendChild(foot);

    card.appendChild(media);
    card.appendChild(body);
    grid.appendChild(card);
  });

  syncAddButtons();
}

function categoryLabel(id) {
  const cat = CATEGORIES.find((item) => item.id === id);
  return cat ? cat.label : "";
}

function syncAddButtons() {
  document.querySelectorAll("[data-add]").forEach((btn) => {
    const added = cart.some((line) => line.id === btn.dataset.add);
    if (btn.classList.contains("add-btn")) {
      btn.classList.toggle("is-added", added);
      btn.innerHTML = added ? "In order ✓" : "Add <span aria-hidden=\"true\">+</span>";
    }
  });
}

/* ---------- cart ---------- */

function addToCart(id) {
  const item = byId(id);
  if (!item) return;
  const line = cart.find((entry) => entry.id === id);
  if (line) {
    line.qty = Math.min(20, line.qty + 1);
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart();
  renderCart();
  toast(`${item.name} added to your order`);
}

function setQty(id, qty) {
  if (qty <= 0) {
    cart = cart.filter((line) => line.id !== id);
  } else {
    const line = cart.find((entry) => entry.id === id);
    if (line) line.qty = Math.min(20, qty);
  }
  saveCart();
  renderCart();
}

function renderCart() {
  const body = document.querySelector("#cart-items");
  const count = document.querySelector("#cart-count");
  const checkout = document.querySelector("#cart-checkout");
  if (!body) return;

  if (count) count.textContent = String(cartCount());
  body.innerHTML = "";

  if (!cart.length) {
    const empty = el("p", "cart-empty", "Your order is empty. Add a burger — that's what we're known for.");
    body.appendChild(empty);
  } else {
    cart.forEach((line) => {
      const item = byId(line.id);
      const row = el("div", "cart-item");

      const img = new Image();
      img.src = item.pic;
      img.alt = item.name;
      img.width = 62;
      img.height = 62;
      row.appendChild(img);

      const info = el("div");
      info.appendChild(el("p", "cart-item-name", item.name));
      info.appendChild(el("p", "cart-item-price", `${money(item.price)} each`));
      row.appendChild(info);

      const side = el("div", "cart-item-side");
      const qty = el("div", "qty");
      const minus = el("button", null, "−");
      minus.type = "button";
      minus.dataset.qty = `${item.id}:${line.qty - 1}`;
      minus.setAttribute("aria-label", `Remove one ${item.name}`);
      const value = el("span", null, String(line.qty));
      const plus = el("button", null, "+");
      plus.type = "button";
      plus.dataset.qty = `${item.id}:${line.qty + 1}`;
      plus.setAttribute("aria-label", `Add one more ${item.name}`);
      qty.append(minus, value, plus);

      const remove = el("button", "remove-btn", "Remove");
      remove.type = "button";
      remove.dataset.qty = `${item.id}:0`;

      side.append(qty, remove);
      row.appendChild(side);
      body.appendChild(row);
    });
  }

  const sub = document.querySelector("#cart-subtotal");
  const fee = document.querySelector("#cart-delivery");
  const total = document.querySelector("#cart-total");
  if (sub) sub.textContent = money(subtotal());
  if (fee) fee.textContent = mode === "delivery" ? (deliveryFee() === 0 && subtotal() > 0 ? "Free" : money(deliveryFee())) : "Pickup";
  if (total) total.textContent = money(orderTotal());
  if (checkout) checkout.disabled = cart.length === 0;

  syncAddButtons();
  renderSummary();
}

function renderSummary() {
  const list = document.querySelector("#summary-list");
  if (!list) return;
  list.innerHTML = "";

  cart.forEach((line) => {
    const item = byId(line.id);
    const row = el("li");
    row.appendChild(el("span", null, `${line.qty} × ${item.name}`));
    row.appendChild(el("span", "line-price", money(item.price * line.qty)));
    list.appendChild(row);
  });

  if (!cart.length) {
    const row = el("li");
    row.appendChild(el("span", null, "Nothing yet"));
    row.appendChild(el("span", "line-price", money(0)));
    list.appendChild(row);
  }

  const sub = document.querySelector("#summary-subtotal");
  const fee = document.querySelector("#summary-delivery");
  const total = document.querySelector("#summary-total");
  const feeRow = document.querySelector("#summary-delivery-row");
  const place = document.querySelector("#place-order");

  if (sub) sub.textContent = money(subtotal());
  if (feeRow) feeRow.hidden = mode !== "delivery";
  if (fee) fee.textContent = deliveryFee() === 0 && subtotal() > 0 ? "Free" : money(deliveryFee());
  if (total) total.textContent = money(orderTotal());
  if (place) place.innerHTML = `Place order — ${money(orderTotal())} <span aria-hidden="true">→</span>`;
}

/* ---------- drawer ---------- */

function openDrawer() {
  const drawer = document.querySelector("#cart-drawer");
  const backdrop = document.querySelector("#drawer-backdrop");
  if (!drawer) return;
  drawer.classList.add("is-open");
  drawer.setAttribute("aria-hidden", "false");
  if (backdrop) backdrop.hidden = false;
  document.body.classList.add("is-locked");
  document.querySelector("#cart-close")?.focus();
}

function closeDrawer() {
  const drawer = document.querySelector("#cart-drawer");
  const backdrop = document.querySelector("#drawer-backdrop");
  if (!drawer) return;
  drawer.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  if (backdrop) backdrop.hidden = true;
  document.body.classList.remove("is-locked");
}

/* ---------- checkout ---------- */

function syncMode(next) {
  mode = next;
  document.querySelectorAll(".field-group[data-mode]").forEach((group) => {
    group.hidden = group.dataset.mode !== mode;
  });
  const payment = document.querySelector("select[name='payment']");
  if (payment) payment.selectedIndex = mode === "delivery" ? 0 : 2;
  renderCart();
}

function openCheckout() {
  if (!cart.length) return;
  const dialog = document.querySelector("#checkout-dialog");
  const error = document.querySelector("#checkout-error");
  if (error) error.hidden = true;
  closeDrawer();
  renderCart();
  dialog.showModal();
}

function buildOrderNumber() {
  const n = Math.floor(1000 + Math.random() * 9000);
  return `BW-${n}`;
}

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const error = document.querySelector("#checkout-error");
  const data = new FormData(form);

  const required = ["name", "phone", "email"];
  if (mode === "delivery") required.push("address", "city");

  const missing = required.filter((field) => !String(data.get(field) || "").trim());
  if (missing.length) {
    if (error) {
      error.textContent = "Please fill in your name, phone, email and delivery address so we can get this to you.";
      error.hidden = false;
    }
    form.querySelector(`[name="${missing[0]}"]`)?.focus();
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(data.get("email")).trim())) {
    if (error) {
      error.textContent = "That email address doesn't look right — check it and try again.";
      error.hidden = false;
    }
    form.querySelector("[name='email']")?.focus();
    return;
  }

  if (error) error.hidden = true;

  const number = buildOrderNumber();
  const lines = cart.map((line) => {
    const item = byId(line.id);
    return { name: item.name, qty: line.qty, price: item.price * line.qty };
  });

  const order = {
    number,
    mode,
    name: String(data.get("name")).trim(),
    phone: String(data.get("phone")).trim(),
    email: String(data.get("email")).trim(),
    address: mode === "delivery" ? `${data.get("address")}, ${data.get("city")}` : String(data.get("shop")),
    when: String(data.get("when")),
    payment: String(data.get("payment")),
    notes: String(data.get("notes") || "").trim(),
    lines,
    subtotal: subtotal(),
    delivery: deliveryFee(),
    total: orderTotal()
  };

  cart = [];
  saveCart();
  renderCart();
  form.reset();
  form.querySelector("input[name='mode'][value='delivery']").checked = true;
  syncMode("delivery");
  document.querySelector("#checkout-dialog").close();
  showConfirmation(order);
}

function showConfirmation(order) {
  const dialog = document.querySelector("#confirm-dialog");
  const list = document.querySelector("#confirm-list");
  if (!dialog) return;

  document.querySelector("#confirm-number").textContent = order.number;
  document.querySelector("#confirm-eta").textContent =
    order.mode === "delivery"
      ? `Arriving in 25–35 minutes to ${order.address}`
      : `Ready for pickup in about 15 minutes at ${order.address}`;
  document.querySelector("#confirm-total").textContent = money(order.total);

  list.innerHTML = "";
  order.lines.forEach((line) => {
    const row = el("li");
    row.appendChild(el("span", null, `${line.qty} × ${line.name}`));
    row.appendChild(el("span", "line-price", money(line.price)));
    list.appendChild(row);
  });
  if (order.delivery > 0) {
    const row = el("li");
    row.appendChild(el("span", null, "Delivery"));
    row.appendChild(el("span", "line-price", money(order.delivery)));
    list.appendChild(row);
  }

  const body = [
    `Order ${order.number} — Big Wave Burgers`,
    `${order.mode === "delivery" ? "Delivery" : "Pickup"}: ${order.address}`,
    `When: ${order.when}`,
    `Payment: ${order.payment}`,
    "",
    ...order.lines.map((line) => `${line.qty} × ${line.name} — ${money(line.price)}`),
    order.delivery > 0 ? `Delivery — ${money(order.delivery)}` : null,
    `Total — ${money(order.total)}`,
    "",
    `Name: ${order.name}`,
    `Phone: ${order.phone}`,
    order.notes ? `Notes: ${order.notes}` : null
  ]
    .filter(Boolean)
    .join("\n");

  document.querySelector("#confirm-mail").href =
    `mailto:order@bigwaveburgers.com?subject=${encodeURIComponent(`Order ${order.number}`)}&body=${encodeURIComponent(body)}`;

  dialog.showModal();
}

/* ---------- wiring ---------- */

document.addEventListener("click", (event) => {
  const scroll = event.target.closest("[data-scroll]");
  if (scroll) {
    document.querySelector(scroll.dataset.scroll)?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  const add = event.target.closest("[data-add]");
  if (add) {
    addToCart(add.dataset.add);
    return;
  }

  const qty = event.target.closest("[data-qty]");
  if (qty) {
    const [id, value] = qty.dataset.qty.split(":");
    setQty(id, Number(value));
  }
});

const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.querySelector(".sr-only").textContent = open ? "Close menu" : "Open menu";
  });

  links.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.querySelector(".sr-only").textContent = "Open menu";
  });
}

document.querySelector("#cart-open")?.addEventListener("click", openDrawer);
document.querySelector("#cart-close")?.addEventListener("click", closeDrawer);
document.querySelector("#drawer-backdrop")?.addEventListener("click", closeDrawer);
document.querySelector("#cart-checkout")?.addEventListener("click", openCheckout);

document.querySelector("#checkout-close")?.addEventListener("click", () => {
  document.querySelector("#checkout-dialog").close();
});

document.querySelector("#checkout-form")?.addEventListener("submit", handleSubmit);
document.querySelector("#checkout-form")?.addEventListener("change", (event) => {
  if (event.target.name === "mode") syncMode(event.target.value);
});

document.querySelector("#confirm-done")?.addEventListener("click", () => {
  document.querySelector("#confirm-dialog").close();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.querySelector("#cart-drawer")?.classList.contains("is-open")) {
    closeDrawer();
  }
});

/* ---------- boot ---------- */

renderSignatures();
renderTabs();
renderMenu();
syncMode("delivery");
renderCart();
