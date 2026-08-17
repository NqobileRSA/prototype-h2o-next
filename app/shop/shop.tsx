"use client";

import { useEffect, useRef, useState } from "react";
import PageHero from "../../components/page-hero";

type Category = "all" | "water" | "slushy" | "fruit" | "set";

type Product = {
  cat: Exclude<Category, "all">;
  name: string;
  sub: string;
  price: string;
  loyalty: string;
  badge?: string;
  purity?: boolean;
  front: string;
  back: string;
  bg: string;
};

const products: Product[] = [
  // Water Refills
  {
    cat: "water",
    name: "Grab & Go",
    sub: "500ml Pure Refill",
    price: "R8.00",
    loyalty: "R7.00 Loyalty",
    purity: true,
    front: "1553564552-02656d6a2390",
    back: "1553530666-ba11a90bb0ae",
    bg: "#eef6f8",
  },
  {
    cat: "water",
    name: "Standard Refill",
    sub: "5L Pure Refill",
    price: "R25.00",
    loyalty: "R22.00 Loyalty",
    badge: "Most Popular",
    purity: true,
    front: "1628767719221-fdf36470b997",
    back: "1560023907-5f339617ea30",
    bg: "#eef6f8",
  },
  {
    cat: "water",
    name: "Bulk Jug",
    sub: "10L Pure Refill",
    price: "R45.00",
    loyalty: "R40.00 Loyalty",
    purity: true,
    front: "1548839140-29a749e1cf4d",
    back: "1663066064005-273e9b669b85",
    bg: "#eef6f8",
  },
  {
    cat: "water",
    name: "Household Jug",
    sub: "20L Pure Refill",
    price: "R80.00",
    loyalty: "R72.00 Loyalty",
    badge: "Best Value",
    purity: true,
    front: "1587800387687-60c1e4d08c9d",
    back: "1584056866693-1f9d42e9feb6",
    bg: "#eef6f8",
  },
  // Slushies
  {
    cat: "slushy",
    name: "Mango Slushy",
    sub: "Fresh Mango Blend · Slushy Station",
    price: "from R20",
    loyalty: "from R18 Loyalty",
    front: "1579722821273-0f6c7d44362f",
    back: "1550728643-f43cda9a0545",
    bg: "#fceef2",
  },
  {
    cat: "slushy",
    name: "Berry Blast",
    sub: "Mixed Berry · Slushy Station",
    price: "from R20",
    loyalty: "from R18 Loyalty",
    front: "1508866210913-70d663ade481",
    back: "1720022477040-685f8c3a01be",
    bg: "#fceef2",
  },
  {
    cat: "slushy",
    name: "Tropical Mix",
    sub: "Pineapple & Guava · Slushy Station",
    price: "from R22",
    loyalty: "from R20 Loyalty",
    badge: "New",
    front: "1762631178352-f7ae732b42c4",
    back: "1493770348161-369560ae357d",
    bg: "#fceef2",
  },
  {
    cat: "slushy",
    name: "Citrus Zing",
    sub: "Lemon & Orange · Slushy Station",
    price: "from R20",
    loyalty: "from R18 Loyalty",
    front: "1650100662715-9e7783f95ba4",
    back: "1617201835021-4681df6ad1b9",
    bg: "#fceef2",
  },
  // Fruit Bar
  {
    cat: "fruit",
    name: "Fruit Tub — Small",
    sub: "Freshly Sliced · Serves 1",
    price: "from R30",
    loyalty: "from R27 Loyalty",
    front: "1774041877283-a3aaad1f2ad2",
    back: "1493770348161-369560ae357d",
    bg: "#f0f6ec",
  },
  {
    cat: "fruit",
    name: "Fruit Tub — Large",
    sub: "Freshly Sliced · Serves 2–3",
    price: "from R50",
    loyalty: "from R45 Loyalty",
    front: "1493770348161-369560ae357d",
    back: "1720022477040-685f8c3a01be",
    bg: "#f0f6ec",
  },
  // Sets
  {
    cat: "set",
    name: "Refill + Fruit Combo",
    sub: "5L Refill + Seasonal Fruit Tub",
    price: "R55.00",
    loyalty: "R50.00 Loyalty",
    front: "1628767719221-fdf36470b997",
    back: "1774041877283-a3aaad1f2ad2",
    bg: "#f5f0ea",
  },
  {
    cat: "set",
    name: "Slushy + Snack Pack",
    sub: "Slushy + Seasonal Fruit Cup",
    price: "R45.00",
    loyalty: "R40.00 Loyalty",
    front: "1650100662715-9e7783f95ba4",
    back: "1493770348161-369560ae357d",
    bg: "#f5f0ea",
  },
];

const CATEGORY_TABS: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Water Refills", value: "water" },
  { label: "Fruit Slushies", value: "slushy" },
  { label: "Fruit Bar", value: "fruit" },
  { label: "Sets & Combos", value: "set" },
];

const ANNOUNCEMENTS = [
  <>
    SANS 241 Certified &nbsp;&middot;&nbsp; &lt;20 ppm TDS &nbsp;&middot;&nbsp; <a href="/about">View purity process</a>
  </>,
  <>
    Every 5th refill on us &nbsp;&middot;&nbsp;{" "}
    <a
      href="https://wa.me/27832226766?text=Hi%20Naturesip%2C%20I%27d%20like%20to%20join%20the%20loyalty%20club"
      target="_blank"
      rel="noopener"
    >
      Join the loyalty club
    </a>
  </>,
  <>
    Open Daily · 9AM&ndash;8PM &nbsp;&middot;&nbsp; <a href="/contact">Maponya Mall, Lower Level</a>
  </>,
];

function imgUrl(id: string) {
  return `https://images.unsplash.com/photo-${id}?w=600&h=800&fit=crop&auto=format&q=80`;
}

const WA_ICON = (
  <svg viewBox="0 0 24 24" className="h-full w-full fill-current">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.96L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0012.04 2m0 1.67a8.2 8.2 0 018.23 8.24c0 4.54-3.7 8.23-8.24 8.23a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.37c0-4.55 3.7-8.24 8.25-8.24m-4.5 4.28c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.6c.13.18 1.8 2.85 4.44 3.9 2.2.86 2.64.7 3.12.65.48-.04 1.53-.62 1.75-1.22.22-.6.22-1.11.15-1.22-.06-.1-.23-.16-.48-.28-.25-.13-1.53-.75-1.77-.84-.24-.09-.4-.13-.58.13-.17.26-.66.83-.81 1-.15.17-.3.19-.55.06-.26-.13-1.07-.4-2.03-1.26-.75-.67-1.26-1.5-1.4-1.76-.15-.25-.02-.4.11-.52.11-.11.26-.3.38-.44.13-.15.17-.26.26-.43.08-.17.04-.32-.02-.45-.06-.13-.58-1.44-.81-1.96-.2-.5-.42-.44-.58-.45z" />
  </svg>
);

function ProductCard({ p }: { p: Product }) {
  const waText = encodeURIComponent(`Hi Naturesip, I'd like to order the ${p.name}`);
  return (
    <div className="product-card">
      <div className="card-image" style={{ background: p.bg }}>
        <img className="img-front" src={imgUrl(p.front)} alt={p.name} loading="lazy" />
        <img className="img-back" src={imgUrl(p.back)} alt={`${p.name} detail`} loading="lazy" />
        {p.purity && <div className="badge-purity">SANS 241 &middot; &lt;20 ppm</div>}
        {p.badge && <div className="badge-label">{p.badge}</div>}
        <div className="add-to-wa">
          <a href={`https://wa.me/27832226766?text=${waText}`} target="_blank" rel="noopener" className="wa-order-btn">
            <span style={{ width: 12, height: 12, display: "inline-flex", flexShrink: 0 }}>{WA_ICON}</span>
            Order on WhatsApp
          </a>
        </div>
      </div>
      <div className="card-info">
        <p className="card-name">{p.name}</p>
        <p className="card-subtitle">{p.sub}</p>
        <p className="card-price">
          <span className="price-main">{p.price}</span>
          <span className="price-sep">/</span>
          <span className="price-loyalty">{p.loyalty}</span>
        </p>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const [activeCat, setActiveCat] = useState<Category>("all");
  const [cols, setCols] = useState<4 | 6>(4);
  const [announceIdx, setAnnounceIdx] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnnounceIdx((i) => (i + 1) % ANNOUNCEMENTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Close the filter dropdown on outside click or Escape
  useEffect(() => {
    if (!filterOpen) return;
    const onPointerDown = (e: PointerEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
        setFilterOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFilterOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [filterOpen]);

  const prevAnnounce = () => setAnnounceIdx((i) => (i - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length);
  const nextAnnounce = () => setAnnounceIdx((i) => (i + 1) % ANNOUNCEMENTS.length);

  const activeCatLabel = CATEGORY_TABS.find((t) => t.value === activeCat)?.label ?? "All";
  const filtered = activeCat === "all" ? products : products.filter((p) => p.cat === activeCat);

  return (
    <main>
      <div className="pt-24 md:pt-28">
        <PageHero
          sectionNumber="01"
          sectionLabel="The Menu"
          title="Purified water."
          accentText="Fresh fruit. Daily."
          description="Pick up a pure refill, fresh fruit tub, or a custom slushy — all built around clear pricing, real nutrition, and a better way to stay refreshed."
          watermark="SHOP"
        >
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] text-white transition-opacity hover:opacity-85"
            >
              Browse menu
            </a>
            <a
              href="/about#process"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-[13px] text-ink transition-colors hover:border-accent hover:text-accent"
            >
              See purity process
            </a>
          </div>
        </PageHero>
      </div>

      <div className="announce-bar">
        <button className="arr" onClick={prevAnnounce} aria-label="Previous announcement">
          &#8592;
        </button>
        <span>{ANNOUNCEMENTS[announceIdx]}</span>
        <button className="arr" onClick={nextAnnounce} aria-label="Next announcement">
          &#8594;
        </button>
      </div>

      <div className="toolbar">
        <span className="count">
          {filtered.length} product{filtered.length !== 1 ? "s" : ""}
        </span>
        <div className="toolbar-right">
          <button className={`view-btn ${cols !== 4 ? "dim" : ""}`} onClick={() => setCols(4)} aria-label="4 column view">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <rect x="0" y="0" width="7" height="7" />
              <rect x="9" y="0" width="7" height="7" />
              <rect x="0" y="9" width="7" height="7" />
              <rect x="9" y="9" width="7" height="7" />
            </svg>
          </button>
          <button className={`view-btn ${cols !== 6 ? "dim" : ""}`} onClick={() => setCols(6)} aria-label="6 column view">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <rect x="0" y="0" width="4" height="4" />
              <rect x="6" y="0" width="4" height="4" />
              <rect x="12" y="0" width="4" height="4" />
              <rect x="0" y="6" width="4" height="4" />
              <rect x="6" y="6" width="4" height="4" />
              <rect x="12" y="6" width="4" height="4" />
              <rect x="0" y="12" width="4" height="4" />
              <rect x="6" y="12" width="4" height="4" />
              <rect x="12" y="12" width="4" height="4" />
            </svg>
          </button>
          <div className="t-divider" />
          <div ref={filterRef} className="filter-wrap">
            <button
              className={`sort-btn ${filterOpen ? "open" : ""}`}
              onClick={() => setFilterOpen((o) => !o)}
              aria-expanded={filterOpen}
              aria-haspopup="listbox"
            >
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.5}>
                <line x1="2" y1="5" x2="18" y2="5" />
                <line x1="5" y1="10" x2="15" y2="10" />
                <line x1="8" y1="15" x2="12" y2="15" />
              </svg>
              Filter &amp; sort
              {activeCat !== "all" && <span className="filter-active-dot" aria-hidden="true" />}
            </button>

            {filterOpen && (
              <div className="filter-dropdown" role="listbox" aria-label="Filter by category">
                <div className="filter-dropdown-label">Category</div>
                {CATEGORY_TABS.map((tab) => (
                  <button
                    key={tab.value}
                    role="option"
                    aria-selected={activeCat === tab.value}
                    className={`filter-option ${activeCat === tab.value ? "active" : ""}`}
                    onClick={() => {
                      setActiveCat(tab.value);
                      setFilterOpen(false);
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {activeCat !== "all" && (
        <div className="active-filter-row">
          <span className="active-filter-chip">
            {activeCatLabel}
            <button aria-label={`Clear ${activeCatLabel} filter`} onClick={() => setActiveCat("all")} className="active-filter-clear">
              &times;
            </button>
          </span>
        </div>
      )}

      <section id="menu" className="grid-wrapper">
        <div className="product-grid" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
          {filtered.length === 0 ? (
            <div className="empty-state" style={{ gridColumn: "1/-1" }}>
              <p>Nothing here yet — check back soon.</p>
            </div>
          ) : (
            filtered.map((p) => <ProductCard key={p.name} p={p} />)
          )}
        </div>
      </section>

      <div className="purity-strip">
        <div>
          <div className="purity-strip-text">SANS 241 · Tested Every Morning</div>
          <div style={{ marginTop: "6px", fontSize: "13px", color: "#8fd8ee", maxWidth: "320px", lineHeight: "1.6" }}>
            Every water refill passes four filtration stages — verified on-site, daily.
          </div>
        </div>
        <div className="purity-strip-stat">
          <div className="big">&lt;20 ppm TDS</div>
          <div className="small">Naturesip output vs ~185 ppm municipal tap</div>
        </div>
        <a href="/about#process" className="purity-strip-cta">
          See the process &rarr;
        </a>
      </div>

      <a
        id="wa-float"
        href="https://wa.me/27832226766?text=Hi%20Naturesip%2C%20I%27d%20like%20to%20place%20an%20order"
        target="_blank"
        rel="noopener"
        aria-label="Order on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 22, height: 22 }}>
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.96L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0012.04 2m0 1.67a8.2 8.2 0 018.23 8.24c0 4.54-3.7 8.23-8.24 8.23a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.37c0-4.55 3.7-8.24 8.25-8.24m-4.5 4.28c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.6c.13.18 1.8 2.85 4.44 3.9 2.2.86 2.64.7 3.12.65.48-.04 1.53-.62 1.75-1.22.22-.6.22-1.11.15-1.22-.06-.1-.23-.16-.48-.28-.25-.13-1.53-.75-1.77-.84-.24-.09-.4-.13-.58.13-.17.26-.66.83-.81 1-.15.17-.3.19-.55.06-.26-.13-1.07-.4-2.03-1.26-.75-.67-1.26-1.5-1.4-1.76-.15-.25-.02-.4.11-.52.11-.11.26-.3.38-.44.13-.15.17-.26.26-.43.08-.17.04-.32-.02-.45-.06-.13-.58-1.44-.81-1.96-.2-.5-.42-.44-.58-.45z" />
        </svg>
      </a>
    </main>
  );
}
