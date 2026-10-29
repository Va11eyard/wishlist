const ICONS = {
  all: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5"/><rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5"/><rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5"/></svg>',
  home: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11.5 12 5l8 6.5"/><path d="M6.5 11v7.5h11V11"/><path d="M10 18.5v-4.5h4v4.5"/></svg>',
  tech: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 2.5v3M14 2.5v3M10 18.5v3M14 18.5v3M2.5 10h3M2.5 14h3M18.5 10h3M18.5 14h3"/></svg>',
  audio: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13a8 8 0 0 1 16 0"/><rect x="3" y="13" width="4.5" height="7" rx="2"/><rect x="16.5" y="13" width="4.5" height="7" rx="2"/></svg>',
  software: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/></svg>',
  business: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="7.5" width="17" height="12" rx="2"/><path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5M3.5 12.5h17"/></svg>',
  grooming: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5c3.5 4.2 6 7.6 6 10.5a6 6 0 0 1-12 0c0-2.9 2.5-6.3 6-10.5Z"/></svg>',
  health: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7.5-4.6-7.5-10A4.4 4.4 0 0 1 12 7a4.4 4.4 0 0 1 7.5 3c0 5.4-7.5 10-7.5 10Z"/></svg>',
  games: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7.5 7h9a5.5 5.5 0 0 1 5.4 6.6l-.6 3a3 3 0 0 1-5.2 1.4L14.5 16h-5l-1.6 2a3 3 0 0 1-5.2-1.4l-.6-3A5.5 5.5 0 0 1 7.5 7Z"/><path d="M8 10.5v3M6.5 12h3M16 11h.01M18 13h.01"/></svg>',
  collectibles: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="9.5" cy="9.5" r="1.6"/><path d="m4.5 17 4.5-4.5 3 3 3.5-3.5 4 4"/></svg>',
  heartOutline: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7.5-4.6-7.5-10A4.4 4.4 0 0 1 12 7a4.4 4.4 0 0 1 7.5 3c0 5.4-7.5 10-7.5 10Z"/></svg>',
  heartFilled: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20s-7.5-4.6-7.5-10A4.4 4.4 0 0 1 12 7a4.4 4.4 0 0 1 7.5 3c0 5.4-7.5 10-7.5 10Z"/></svg>'
};

const CATEGORIES = [
  { id: "all", name: "All" },
  { id: "home", name: "Home" },
  { id: "tech", name: "Tech" },
  { id: "audio", name: "Audio" },
  { id: "software", name: "Software" },
  { id: "business", name: "Business" },
  { id: "grooming", name: "Grooming" },
  { id: "health", name: "Health" },
  { id: "games", name: "Games" },
  { id: "collectibles", name: "Collectibles" }
];

const STATUS = {
  wish: { label: "On the list", cls: "status-wish" },
  after: { label: "After the house", cls: "status-after" },
  goal: { label: "Main goal", cls: "status-goal" }
};

const ITEMS = [
  {
    id: "ram",
    title: "Kingston Fury Impact 32 GB DDR5 Kit",
    cat: "tech",
    status: "wish",
    notes: "SO-DIMM, 5600 MHz, 1.1 V, KIT of 2, for the laptop.",
    link: "https://forcecom.kz/catalog/ram/model/318920/",
    linkLabel: "Open in shop",
    meta: "KF556S40IBK2-32"
  },
  {
    id: "nas",
    title: "Build a NAS",
    cat: "tech",
    status: "after",
    notes: "Home storage server for backups and media."
  },
  {
    id: "aimodel",
    title: "Deploy my own AI model",
    cat: "tech",
    status: "after",
    notes: "Serve my own model on hardware I own."
  },
  {
    id: "printer",
    title: "Printer",
    cat: "tech",
    status: "wish",
    notes: "For the home office."
  },
  {
    id: "htc",
    title: "HTC NE32 ear-clip earphones",
    cat: "audio",
    status: "wish",
    notes: "Bluetooth V6.0, AI features, LCD touch screen, OWS design."
  },
  {
    id: "tracker",
    title: "Portable task tracker",
    cat: "software",
    status: "wish",
    notes: "A pocket task tracker I build for myself, Plane style."
  },
  {
    id: "ecosystem",
    title: "Own ecosystem and AI RAG",
    cat: "software",
    status: "wish",
    notes: "One connected ecosystem with a RAG layer over my own data, wired to GitHub."
  },
  {
    id: "knowledge",
    title: "A home for everything I know",
    cat: "software",
    status: "wish",
    notes: "Like Obsidian, but it holds all of it: projects, notes, everything I learn."
  },
  {
    id: "tenders",
    title: "Work with tenders",
    cat: "business",
    status: "wish",
    notes: "Learn the tender market and start bidding."
  },
  {
    id: "tomford",
    title: "Tom Ford shower gel",
    cat: "grooming",
    status: "wish",
    notes: "The best scents from the Tom Ford line."
  },
  {
    id: "kegel",
    title: "Kegel exercise routine",
    cat: "health",
    status: "wish",
    notes: "A daily routine, tracked properly."
  },
  {
    id: "sperm",
    title: "Sperm tester",
    cat: "health",
    status: "wish",
    notes: "An at-home test kit."
  },
  {
    id: "games",
    title: "Hidden object games",
    cat: "games",
    status: "wish",
    notes: "Download a stack of them and actually play."
  },
  {
    id: "print",
    title: "Collectible print",
    cat: "collectibles",
    status: "wish",
    notes: "A print for the collection, spotted on TikTok.",
    link: "https://vt.tiktok.com/ZSm4pctRJ",
    linkLabel: "View on TikTok"
  }
];

const BUILDERS = ["BI Group", "Ulytau Group", "Tumar Group", "Galamat Group"];

const RESIDENCES = [
  { name: "Tumar Residence", best: true },
  { name: "Gauhartas" },
  { name: "Athletic City" },
  { name: "Family Nest" },
  { name: "Urpaq" },
  { name: "BUQAR JYRAU EXCLUSIVE" },
  { name: "ULY DALA AVENUE" }
];

const TOTAL = ITEMS.length + 1;

const state = { cat: "all", status: "all", query: "" };
const saved = new Set(JSON.parse(localStorage.getItem("wishlist-saved") || "[]"));

function saveSaved() {
  localStorage.setItem("wishlist-saved", JSON.stringify([...saved]));
}

function renderCatStrip() {
  const strip = document.getElementById("cat-strip");
  strip.innerHTML = CATEGORIES.map(
    (c) => `
    <button type="button" class="cat-btn${c.id === state.cat ? " active" : ""}" data-cat="${c.id}" aria-pressed="${c.id === state.cat}">
      <span class="cat-icon">${ICONS[c.id]}</span>
      <span class="cat-name">${c.name}</span>
    </button>`
  ).join("");
}

function renderHero() {
  document.getElementById("builders").innerHTML = BUILDERS.map((b) => `<span class="chip">${b}</span>`).join("");
  document.getElementById("residences").innerHTML = RESIDENCES.map(
    (r) => r.best
      ? `<span class="chip best">${r.name}<span class="best-tag">BEST CHOICE</span></span>`
      : `<span class="chip">${r.name}</span>`
  ).join("");
}

function matches(item) {
  if (state.cat !== "all" && item.cat !== state.cat) return false;
  if (state.status !== "all" && item.status !== state.status) return false;
  if (state.query) {
    const haystack = (item.title + " " + item.notes + " " + (item.meta || "")).toLowerCase();
    if (!haystack.includes(state.query)) return false;
  }
  return true;
}

function cardHTML(item) {
  const s = STATUS[item.status];
  const isSaved = saved.has(item.id);
  const foot = [];
  if (item.price) foot.push(`<span class="price">${item.price}</span>`);
  else if (item.meta) foot.push(`<span class="foot-meta">${item.meta}</span>`);
  if (item.link) foot.push(`<a class="btn" href="${item.link}" target="_blank" rel="noopener">${item.linkLabel}</a>`);
  return `
  <article class="card">
    <div class="card-top">
      <span class="cat-chip">${CATEGORIES.find((c) => c.id === item.cat).name}</span>
      <span class="status-pill ${s.cls}">${s.label}</span>
      <button type="button" class="heart${isSaved ? " saved" : ""}" data-heart="${item.id}" aria-pressed="${isSaved}" aria-label="Save ${item.title} for later">
        ${isSaved ? ICONS.heartFilled : ICONS.heartOutline}
      </button>
    </div>
    <h3>${item.title}</h3>
    <p class="notes">${item.notes}</p>
    ${foot.length ? `<div class="card-foot">${foot.join("")}</div>` : ""}
  </article>`;
}

function renderGrid() {
  const list = ITEMS.filter(matches);
  document.getElementById("grid").innerHTML = list.map(cardHTML).join("");
  document.getElementById("empty").hidden = list.length > 0;
  document.getElementById("result-count").textContent = `Showing ${list.length} of ${TOTAL} wishes`;
  document.getElementById("cart-count").textContent = list.length;
}

function resetFilters() {
  state.cat = "all";
  state.status = "all";
  state.query = "";
  document.getElementById("search-input").value = "";
  renderCatStrip();
  renderGrid();
}

document.getElementById("cat-strip").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-cat]");
  if (!btn) return;
  state.cat = btn.dataset.cat;
  renderCatStrip();
  renderGrid();
});

document.getElementById("search-input").addEventListener("input", (e) => {
  state.query = e.target.value.trim().toLowerCase();
  renderGrid();
});

document.getElementById("grid").addEventListener("click", (e) => {
  const btn = e.target.closest("[data-heart]");
  if (!btn) return;
  const id = btn.dataset.heart;
  if (saved.has(id)) saved.delete(id);
  else saved.add(id);
  saveSaved();
  renderGrid();
});

document.getElementById("cart-chip").addEventListener("click", resetFilters);
document.getElementById("empty-reset").addEventListener("click", resetFilters);

document.querySelectorAll(".footer [data-status]").forEach((btn) => {
  btn.addEventListener("click", () => {
    state.status = btn.dataset.status;
    state.cat = "all";
    renderCatStrip();
    renderGrid();
    window.scrollTo({ top: document.querySelector(".catalog").offsetTop - 80, behavior: "smooth" });
  });
});

document.querySelectorAll(".footer [data-cat]").forEach((btn) => {
  btn.addEventListener("click", () => {
    state.cat = btn.dataset.cat;
    state.status = "all";
    renderCatStrip();
    renderGrid();
    window.scrollTo({ top: document.querySelector(".catalog").offsetTop - 80, behavior: "smooth" });
  });
});

document.getElementById("cart-count").textContent = TOTAL;
renderCatStrip();
renderHero();
renderGrid();
