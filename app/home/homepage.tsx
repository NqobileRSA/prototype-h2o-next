"use client";

import { useEffect, useRef, useState } from "react";

const HERO_SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1553530666-ba11a90bb0ae?w=1800&h=1400&fit=crop&auto=format&q=80",
    alt: "Water pouring into a glass",
  },
  {
    src: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=1800&h=1400&fit=crop&auto=format&q=80",
    alt: "Close-up water droplet on glass",
  },
  {
    src: "https://images.unsplash.com/photo-1560023907-5f339617ea30?w=1800&h=1400&fit=crop&auto=format&q=80",
    alt: "Reusable bottle being refilled",
  },
];

const TICKER_ITEMS = [
  "SANS 241 CERTIFIED",
  "<20 PPM TDS",
  "TESTED DAILY · 7AM",
  "4-STAGE FILTRATION",
  "FILTERED ON-SITE",
  "BRING YOUR OWN BOTTLE",
  "SERVED COLD",
];

function TickerRun() {
  return (
    <div className="flex shrink-0 items-center">
      {TICKER_ITEMS.map((t) => (
        <span key={t} className="flex items-center font-mono text-[12px] tracking-[0.12em]">
          <span className="px-7 text-brass-light">{t}</span>
          <span className="text-brass">&#9670;</span>
        </span>
      ))}
    </div>
  );
}

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [count, setCount] = useState(20);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number; grow: boolean }[]>([]);
  const headerRef = useRef<HTMLElement>(null);
  const lastRippleRef = useRef(0);
  const rippleId = useRef(0);

  // Crossfade hero stills, same 6s interval as index.html
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || HERO_SLIDES.length < 2) return;
    const interval = setInterval(() => {
      setActiveSlide((i) => (i + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Count-up for the "<20 ppm TDS" readout on mount
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setCount(20);
      return;
    }
    const end = 20;
    const dur = 1400;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const t = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(end * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Cursor ripple trail across the hero, throttled like index.html
  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !headerRef.current) return;
    const now = performance.now();
    if (now - lastRippleRef.current < 90) return;
    lastRippleRef.current = now;
    const rect = headerRef.current.getBoundingClientRect();
    const id = rippleId.current++;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRipples((prev) => [...prev, { id, x, y, grow: false }]);
    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        setRipples((prev) => prev.map((r) => (r.id === id ? { ...r, grow: true } : r)));
      }),
    );
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 950);
  };

  // Button click ripple (WhatsApp CTA)
  const handleBtnRipple = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const span = document.createElement("span");
    span.className = "ripple";
    span.style.width = span.style.height = `${size}px`;
    span.style.left = `${e.clientX - rect.left - size / 2}px`;
    span.style.top = `${e.clientY - rect.top - size / 2}px`;
    btn.appendChild(span);
    setTimeout(() => span.remove(), 750);
  };

  return (
    <header ref={headerRef} onPointerMove={handlePointerMove} className="relative flex min-h-[100vh] flex-col overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {HERO_SLIDES.map((slide, i) => (
          <img key={slide.src} src={slide.src} alt={slide.alt} className={`hero-slide ${i === activeSlide ? "active" : ""}`} />
        ))}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(11,31,38,0.86) 0%, rgba(15,61,82,0.46) 30%, rgba(28,108,140,0.26) 56%, rgba(15,61,82,0.58) 80%, rgba(11,31,38,0.92) 100%)",
          }}
        />
      </div>

      {ripples.map((r) => (
        <span key={r.id} className={`ripple-dot ${r.grow ? "grow" : ""}`} style={{ left: r.x, top: r.y }} />
      ))}

      <div className="hero-watermark" aria-hidden="true">
        NATURESIP
      </div>

      {/* Floating stat cards — same role as Soltera's stat modules, with Naturesip's real numbers */}
      <div className="pointer-events-none absolute inset-x-0 top-[26%] z-[2] hidden px-6 sm:px-10 md:block md:px-16 lg:px-24 xl:px-32">
        <div className="pointer-events-auto ml-auto flex max-w-[280px] flex-col items-end gap-4">
          <div className="float-card w-full px-5 py-4 text-right">
            <div className="font-mono text-[22px] leading-none text-white">04</div>
            <div className="mt-1.5 text-[13px] leading-snug text-[#dbe9ee]">Filtration stages — sediment, carbon, membrane &amp; UV-C</div>
          </div>
          <div className="float-card flex w-[86%] items-center gap-3 px-4 py-3.5">
            <div>
              <div className="text-right font-mono text-[13px] text-white">&lt;20 ppm TDS</div>
              <div className="text-right text-[11.5px] text-[#bcd0d6]">Verified this morning</div>
            </div>
            <div className="h-11 w-11 shrink-0 overflow-hidden rounded-full bg-mineral">
              <img
                src="https://images.unsplash.com/photo-1553564552-02656d6a2390?w=120&h=120&fit=crop&auto=format&q=80"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hero-anim relative z-10 mt-auto flex flex-1 flex-col justify-end gap-10 px-6 pb-16 sm:px-10 md:px-16 lg:flex-row lg:items-end lg:justify-between lg:gap-8 lg:px-24 xl:px-32">
        <div className="max-w-2xl">
          <div className="text-[#f4f6f5]">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] opacity-75">Soweto&rsquo;s Refill &amp; Fruit Bar</div>
            <h1 className="font-serif text-[clamp(38px,6vw,64px)] font-normal leading-[1.05] tracking-[-0.01em] text-[#eef7fa]">
              The <em className="font-normal italic text-brass-light">purest pour</em>
              <br className="hidden md:block" />
              in Soweto.
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#dbe9ee]">
              Cold, clean, poured the moment you ask for it. Bring your own bottle or grab ours &mdash; every refill is filtered on-site and
              tested each morning.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/27832226766?text=Hi%20Naturesip%2C%20I%27d%20like%20to%20place%20an%20order"
              target="_blank"
              rel="noopener"
              onClick={handleBtnRipple}
              className="btn-ripple btn-pill inline-flex items-center gap-3 rounded-full bg-white py-1.5 pl-6 pr-1.5 text-sm text-ink transition-opacity duration-300 hover:opacity-90"
            >
              Order on WhatsApp
              <span className="btn-pill-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                {WA_ICON}
              </span>
            </a>
            <a
              href="#purity"
              className="inline-flex items-center gap-2 rounded-full border border-aqua-soft px-7 py-3 text-sm text-white transition-colors duration-300 hover:bg-aqua-soft hover:text-ink"
            >
              View Purity Report <span aria-hidden>&darr;</span>
            </a>
          </div>
          {/* Signature moment: the live purity readout */}
          <div className="mt-7 flex items-center gap-3 border-t border-white/15 pt-5 font-mono text-[12px] tracking-[0.04em] text-[#bcd0d6]">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brass-light">
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-ink">
                <path d="M12 2C12 2 5 11.5 5 16a7 7 0 0014 0c0-4.5-7-14-7-14z" />
              </svg>
            </span>
            <span>
              Municipal tap <span className="text-[#8ea2a8] line-through decoration-1">~185</span> &rarr; Naturesip{" "}
              <span className="text-aqua-soft">&lt;{count}</span> ppm TDS &middot; verified this morning
            </span>
          </div>
        </div>
      </div>

      <div className="marquee-wrap relative z-10 overflow-hidden border-t border-white/15 bg-transparent pb-4 pt-4 text-[#eef4f6]">
        <div className="marquee-track">
          <TickerRun />
          <div aria-hidden="true">
            <TickerRun />
          </div>
        </div>
      </div>
    </header>
  );
}

const sizes = [
  {
    id: "500ml",
    label: "500ml",
    name: "Grab & Go",
    price: 8,
    note: "Chilled, ready at the counter",
    recommend: "Solo, on the move",
    image: "https://images.unsplash.com/photo-1553564552-02656d6a2390?w=900&h=1100&fit=crop&auto=format&q=80",
  },
  {
    id: "2l",
    label: "2L",
    name: "Family Top-Up",
    price: 14,
    note: "Fits in the door of any fridge",
    recommend: "1–2 people, a few days",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=900&h=1100&fit=crop&auto=format&q=80",
  },
  {
    id: "5l",
    label: "5L",
    name: "Standard Refill",
    price: 25,
    note: "Our most popular size",
    recommend: "1–2 people, a few days",
    image: "https://images.unsplash.com/photo-1628767719221-fdf36470b997?w=900&h=1100&fit=crop&auto=format&q=80",
    popular: true,
  },
  {
    id: "20l",
    label: "20L",
    name: "Home Dispenser",
    price: 80,
    note: "Best value, weekly top-up",
    recommend: "Family, weekly top-up",
    image: "https://images.unsplash.com/photo-1560023907-5f339617ea30?w=900&h=1100&fit=crop&auto=format&q=80",
    highlight: true,
  },
];

const bestSellers = [
  {
    name: "Pure Refill 5L",
    category: "Refill Station",
    price: "R25.00",
    image: "https://images.unsplash.com/photo-1628767719221-fdf36470b997?w=1200&h=900&fit=crop&auto=format&q=80",
  },
  {
    name: "Mango Slushy",
    category: "Slushy Station",
    price: "from R20",
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=1200&h=900&fit=crop&auto=format&q=80",
  },
  {
    name: "Fruit Tub",
    category: "Slicing Bar",
    price: "from R30",
    badge: "New",
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=1200&h=900&fit=crop&auto=format&q=80",
  },
];

const sets = [
  {
    name: "Hydrate + Slice",
    category: "2L Refill + Fruit Tub",
    price: "R38.00",
    image: "https://images.unsplash.com/photo-1550728643-f43cda9a0545?w=1200&h=900&fit=crop&auto=format&q=80",
  },
  {
    name: "Family Chill Set",
    category: "5L Refill + 2 Slushies",
    price: "R58.00",
    image: "https://images.unsplash.com/photo-1553530666-ba11a90bb0ae?w=1200&h=900&fit=crop&auto=format&q=80",
  },
];

const stories = [
  {
    initials: "TM",
    name: "Thandi M.",
    rating: 5.0,
    quote: "The water tastes cleaner than bottled and I refill my 5L for a fraction of the price. Game changer for my household.",
  },
  {
    initials: "LK",
    name: "Lerato K.",
    rating: 4.9,
    quote: "My kids beg to stop for the mango slushy after school — and I love that they are getting fresh fruit, not junk.",
  },
  {
    initials: "SD",
    name: "Sipho D.",
    rating: 4.7,
    quote: "Fast, friendly, and spotless. The fruit tubs are sliced fresh in front of you. Best value in Soweto.",
  },
];

const journal = [
  {
    tag: "Water Quality",
    headline: "Why We Filter in 4 Stages",
    large: true,
    image: "https://images.unsplash.com/photo-1663066064005-273e9b669b85?w=900&h=1000&fit=crop&auto=format&q=80",
  },
  {
    tag: "Our Story",
    headline: "Why We Built This in Soweto",
    anchor: "#founder",
    image: "https://images.unsplash.com/photo-1628767719221-fdf36470b997?w=900&h=700&fit=crop&auto=format&q=80",
  },
  {
    tag: "Menu",
    headline: "Fruit Slushy Flavors, Ranked",
    image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=900&h=700&fit=crop&auto=format&q=80",
  },
];

const instagramShots = [
  "https://images.unsplash.com/photo-1720022477040-685f8c3a01be?w=800&h=800&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1553564552-02656d6a2390?w=800&h=800&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1508866210913-70d663ade481?w=800&h=800&fit=crop&auto=format&q=80",
  "https://images.unsplash.com/photo-1550728643-f43cda9a0545?w=800&h=800&fit=crop&auto=format&q=80",
];

const STAR_PATH = "M12 2.6l2.75 5.86 6.35.62-4.75 4.4 1.33 6.32L12 16.62 6.32 19.8l1.33-6.32-4.75-4.4 6.35-.62L12 2.6z";

const WA_ICON = (
  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.96L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0012.04 2m0 1.67a8.2 8.2 0 018.23 8.24c0 4.54-3.7 8.23-8.24 8.23a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.37c0-4.55 3.7-8.24 8.25-8.24m-4.5 4.28c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.6c.13.18 1.8 2.85 4.44 3.9 2.2.86 2.64.7 3.12.65.48-.04 1.53-.62 1.75-1.22.22-.6.22-1.11.15-1.22-.06-.1-.23-.16-.48-.28-.25-.13-1.53-.75-1.77-.84-.24-.09-.4-.13-.58.13-.17.26-.66.83-.81 1-.15.17-.3.19-.55.06-.26-.13-1.07-.4-2.03-1.26-.75-.67-1.26-1.5-1.4-1.76-.15-.25-.02-.4.11-.52.11-.11.26-.3.38-.44.13-.15.17-.26.26-.43.08-.17.04-.32-.02-.45-.06-.13-.58-1.44-.81-1.96-.2-.5-.42-.44-.58-.45z" />
  </svg>
);

function StarRow({ rating }: { rating: number }) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));
  return (
    <span className="relative inline-flex" role="img" aria-label={`${rating} out of 5 stars`}>
      <span className="flex gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-stone/35" strokeWidth={1.4}>
            <path d={STAR_PATH} />
          </svg>
        ))}
      </span>
      <span className="absolute inset-0 flex gap-0.5 overflow-hidden" style={{ width: `${pct}%` }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg key={i} viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-accent">
            <path d={STAR_PATH} />
          </svg>
        ))}
      </span>
    </span>
  );
}

function ProductOverlayCard({
  name,
  category,
  price,
  image,
  badge,
}: {
  name: string;
  category: string;
  price: string;
  image: string;
  badge?: string;
}) {
  const waText = encodeURIComponent(`Hi Naturesip, I'd like to order the ${name}`);
  return (
    <div className="product-card group relative aspect-square overflow-hidden rounded-[18px]">
      <img
        src={image}
        alt={`${name}, ${category}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
      <a
        href={`https://wa.me/27832226766?text=${waText}`}
        target="_blank"
        rel="noopener"
        aria-label={`Order ${name} via WhatsApp`}
        className="btn-pill absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-white/95 py-1 pl-3.5 pr-1 text-[12px] text-ink backdrop-blur transition-transform duration-300 hover:scale-105"
      >
        Order on WhatsApp
        <span className="btn-pill-icon flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-ink text-white">{WA_ICON}</span>
      </a>
      <div className="absolute inset-x-0 bottom-0 flex items-start justify-between gap-2 px-5 pb-5 pt-8 text-white">
        <div>
          <span className="block font-serif text-base">{name}</span>
          <div className="mt-0.5 flex items-center gap-2">
            <span className="text-[13px] text-white/75">{category}</span>
            {badge && <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-white/55">&middot; {badge}</span>}
          </div>
        </div>
        <span className="whitespace-nowrap font-mono text-sm">{price}</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  const initialIndex = Math.max(
    sizes.findIndex((s) => s.popular),
    0,
  );
  const [selectedSize, setSelectedSize] = useState(initialIndex);
  const [qty, setQty] = useState(1);

  const selectSize = (i: number) => {
    if (i === selectedSize) return;
    setSelectedSize(i);
    setQty(1);
  };

  const current = sizes[selectedSize];
  const total = (current.price * qty).toFixed(2);
  const waText = encodeURIComponent(`Hi Naturesip, I'd like to order ${qty} x ${current.label} ${current.name} (approx. R${total})`);

  return (
    <main>
      <Hero />

      <section id="purity" className="px-6 py-24 sm:px-10 md:px-16 md:py-28 lg:px-24 xl:px-32">
        <div className="reveal in mb-12 max-w-2xl">
          <div className="mb-2 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-teal">
            <span className="text-accent">01</span>
            <span className="h-px w-5 bg-current opacity-40" />
            <span>The Assay - SANS 241 Compliant</span>
          </div>
          <h2 className="font-serif text-[clamp(28px,4vw,36px)] font-normal tracking-[-0.01em]">
            Purity isn&apos;t a claim. It&apos;s a number.
          </h2>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[minmax(0,420px)_1fr] md:gap-14 lg:gap-20">
          <div className="reveal in">
            <p className="mb-8 max-w-md text-[15px] leading-relaxed text-stone">
              Every refill passes through four deliberate stages before it reaches your bottle - the same standard as imported bottled
              water, filtered a few metres from where you&apos;re standing.
            </p>
            <ol className="mb-9 max-w-md divide-y divide-line border-y border-line">
              <li className="flex items-baseline gap-4 py-3.5">
                <span className="font-mono text-sm text-accent">01</span>
                <div>
                  <div className="text-[14px]">Sediment filtration</div>
                  <div className="text-[12.5px] text-stone">Removes silt, sand &amp; micro-plastics</div>
                </div>
              </li>
              <li className="flex items-baseline gap-4 py-3.5">
                <span className="font-mono text-sm text-accent">02</span>
                <div>
                  <div className="text-[14px]">Activated carbon block</div>
                  <div className="text-[12.5px] text-stone">Strips chlorine, odour &amp; taste</div>
                </div>
              </li>
              <li className="flex items-baseline gap-4 py-3.5">
                <span className="font-mono text-sm text-accent">03</span>
                <div>
                  <div className="text-[14px]">Reverse osmosis membrane</div>
                  <div className="text-[12.5px] text-stone">Removes heavy metals &amp; nitrates</div>
                </div>
              </li>
              <li className="flex items-baseline gap-4 py-3.5">
                <span className="font-mono text-sm text-accent">04</span>
                <div>
                  <div className="text-[14px]">UV-C disinfection</div>
                  <div className="text-[12.5px] text-stone">Neutralises bacteria &amp; viruses</div>
                </div>
              </li>
            </ol>
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#founder"
                className="inline-flex items-center gap-2 rounded-full border border-ink px-7 py-3 text-sm text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
              >
                About Naturesip
              </a>
              <a
                href="https://wa.me/27832226766?text=Hi%20Naturesip%2C%20could%20I%20get%20a%20copy%20of%20this%20month%27s%20SANS%20241%20lab%20report%3F"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 text-sm text-teal transition-colors hover:text-ink"
              >
                Request this month&apos;s lab report <span aria-hidden>&darr;</span>
              </a>
            </div>
          </div>

          <div className="reveal in">
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className="relative h-[300px] w-full overflow-hidden rounded-[18px] bg-mineral sm:h-[460px] sm:w-[58%] lg:h-[520px]">
                <img
                  src="https://images.unsplash.com/photo-1628767719221-fdf36470b997?w=1200&h=900&fit=crop&auto=format&q=80"
                  alt="A hand holding a stainless steel refill tap, filling a reusable bottle"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-6 left-6 text-[19px] leading-snug text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
                  Multi-Stage Filtered
                  <br />
                  Tested Daily for Purity
                </div>
              </div>

              <div className="flex flex-col gap-5 sm:w-[42%]">
                <div className="relative h-[170px] overflow-hidden rounded-[18px] bg-mineral sm:h-[230px] lg:h-[260px]">
                  <img
                    src="https://images.unsplash.com/photo-1550728643-f43cda9a0545?w=800&h=800&fit=crop&auto=format&q=80"
                    alt="Fresh citrus fruit, sliced on a cutting board"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-5 rounded-[18px] border border-line bg-mineral px-6 py-6">
                  <div>
                    <div className="font-mono text-3xl text-teal-deep">04</div>
                    <div className="mt-1 text-[13px] text-stone">Filtration stages, every refill</div>
                  </div>
                  <div className="h-px w-full bg-line" />
                  <div>
                    <div className="font-mono text-3xl text-teal-deep">7AM</div>
                    <div className="mt-1 text-[13px] text-stone">TDS tested each morning, on-site</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="reveal in relative mt-16 overflow-hidden rounded-2xl px-7 py-7 md:px-10 md:py-8">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink to-teal-deep" />
          <div className="fluid-layer -z-10" aria-hidden="true">
            <div className="fluid-blob b1" />
            <div className="fluid-blob b2" />
            <div className="fluid-blob b3" />
          </div>
          <div className="glass-panel absolute inset-0 -z-0 rounded-2xl" />

          <div className="relative mb-6 flex flex-wrap items-center justify-between gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.1em] text-[#bcd0d6]">Today&apos;s Purity Readout</span>
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-aqua-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-aqua" />
              Logged this morning at the Maponya Mall kiosk
            </span>
          </div>

          <div className="relative flex max-w-xl flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
            <div className="tds-figure">
              <div className="text-[13px] text-[#a9bcc2]">Municipal tap (Soweto avg.)</div>
              <div className="mt-1 font-mono text-4xl text-[#7c9199]">
                ~185 <span className="text-base">ppm TDS</span>
              </div>
              <span className="tds-tooltip">Soweto municipal average, last surveyed</span>
            </div>
            <div className="hidden text-[#a9bcc2] sm:block">&rarr;</div>
            <div className="tds-figure sm:text-right">
              <div className="text-[13px] text-[#a9bcc2]">Naturesip purified output</div>
              <div className="mt-1 font-mono text-4xl text-aqua-soft">
                &lt;20 <span className="text-base">ppm TDS</span>
              </div>
              <span className="tds-tooltip sm:left-auto sm:right-0">Measured this morning at the kiosk</span>
            </div>
          </div>

          <div className="relative mt-5 h-1.5 w-full max-w-xl overflow-hidden rounded-full bg-white/15">
            <div className="purity-bar-fill relative h-full overflow-hidden rounded-full bg-gradient-to-r from-aqua to-aqua-soft">
              <div className="shimmer-sweep" />
            </div>
          </div>

          <p className="relative mt-4 max-w-2xl text-[12.5px] leading-relaxed text-[#a9bcc2]">
            A 90%+ purity gain over municipal supply - measured on-site daily and backed by monthly SANS 241 lab reports.
          </p>
        </div>

        <div className="reveal in mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[18px] border border-line bg-line sm:grid-cols-3">
          <div className="bg-white px-7 py-7">
            <div className="font-mono text-2xl text-teal-deep">1 &rarr; 10</div>
            <div className="mt-2 text-[13.5px] text-ink">One 5L refill replaces up to ten 500ml bottles</div>
          </div>
          <div className="bg-white px-7 py-7">
            <div className="font-mono text-2xl text-teal-deep">0km</div>
            <div className="mt-2 text-[13.5px] text-ink">Filtered on-site, not trucked in</div>
          </div>
          <div className="bg-white px-7 py-7">
            <div className="font-mono text-2xl text-teal-deep">R0</div>
            <div className="mt-2 text-[13.5px] text-ink">Surcharge for bringing your own bottle</div>
          </div>
        </div>
      </section>

      {/* ── Choose your size: poster-style overlay cards + live quantity summary, matching index.html ── */}
      <section id="sizes" className="bg-mineral px-6 py-24 sm:px-10 md:px-16 md:py-28 lg:px-24 xl:px-32">
        <div className="reveal in mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-lg">
            <div className="mb-2 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-teal">
              <span className="text-accent">02</span>
              <span className="h-px w-5 bg-current opacity-40" />
              <span>Bulk, Done Properly</span>
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,36px)] font-normal tracking-[-0.01em]">Choose your size.</h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-stone">
              The bigger the jug, the deeper the saving - and the colder it stays. Tap a size, set your quantity, and send it straight to
              the kiosk on WhatsApp.
            </p>
          </div>
        </div>

        <div className="reveal in relative" role="radiogroup" aria-label="Choose your refill size">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {sizes.map((s, i) => {
              const isSelected = i === selectedSize;
              const tag = s.highlight ? "Best value" : s.popular ? "Most popular" : "";
              return (
                <button
                  key={s.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  aria-label={`${s.label} ${s.name}, R${s.price.toFixed(2)}`}
                  onClick={() => selectSize(i)}
                  className={`size-card group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-[20px] border text-left transition-all duration-300 ${
                    isSelected ? "border-ink shadow-[0_18px_40px_-26px_rgba(11,31,38,0.3)]" : "border-transparent hover:border-line"
                  }`}
                >
                  <img
                    src={s.image}
                    alt={`${s.label} ${s.name}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-8 text-white">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-serif text-base leading-snug">{s.name}</span>
                      <span className="whitespace-nowrap font-mono text-sm">R{s.price.toFixed(2)}</span>
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-aqua-soft">{s.label}</span>
                      {tag && <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-white/60">&middot; {tag}</span>}
                    </div>
                    <span className="mt-1 block text-[12px] text-white/70">{s.note}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-col gap-6 rounded-[18px] border border-line bg-white px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-line bg-mineral">
                <img src={current.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-stone">Your order</div>
                <div className="font-serif text-lg leading-snug">
                  {qty} &times; {current.label} {current.name}
                </div>
                <div className="mt-0.5 text-[12.5px] text-stone">Best for: {current.recommend}</div>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-3 rounded-full border border-line bg-mineral px-2 py-2">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-lg text-ink transition-colors duration-200 hover:bg-white"
                >
                  &minus;
                </button>
                <span className="w-6 text-center font-mono text-sm" aria-live="polite">
                  {qty}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQty((q) => Math.min(20, q + 1))}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-lg text-ink transition-colors duration-200 hover:bg-white"
                >
                  +
                </button>
              </div>
              <div className="text-right">
                <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-stone">Total</div>
                <div className="font-mono text-2xl text-ink">R{total}</div>
              </div>
              <a
                href={`https://wa.me/27832226766?text=${waText}`}
                target="_blank"
                rel="noopener"
                className="btn-ripple btn-pill inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-ink py-1.5 pl-6 pr-1.5 text-sm text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                Order via WhatsApp
                <span className="btn-pill-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-ink">
                  {WA_ICON}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Menu: full-bleed overlay product cards, matching index.html productCard() ── */}
      <section id="menu" className="px-6 py-24 sm:px-10 md:px-16 md:py-28 lg:px-24 xl:px-32">
        <div className="reveal in mb-[3.25rem] flex items-end justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-teal">
              <span className="text-accent">03</span>
              <span className="h-px w-5 bg-current opacity-40" />
              <span>Kiosk Favourites</span>
            </div>
            <h2 className="font-serif text-[clamp(28px,4vw,36px)] font-normal tracking-[-0.01em]">Best Sellers</h2>
          </div>
          <a
            href="https://wa.me/27832226766?text=Hi%20Naturesip%2C%20could%20I%20see%20today%27s%20full%20menu%3F"
            target="_blank"
            rel="noopener"
            className="border-b border-teal pb-px text-sm text-teal transition-colors hover:border-ink hover:text-ink"
          >
            Ask for the full menu
          </a>
        </div>
        <div className="reveal in grid grid-cols-1 gap-6 md:grid-cols-3">
          {bestSellers.map((item) => (
            <ProductOverlayCard key={item.name} {...item} />
          ))}
        </div>

        <div className="reveal in my-[3.25rem] flex items-end justify-between border-t border-line pt-[3.25rem]">
          <h2 className="font-serif text-[clamp(28px,4vw,36px)] font-normal tracking-[-0.01em]">Sets</h2>
          <a
            href="https://wa.me/27832226766?text=Hi%20Naturesip%2C%20what%20combo%20sets%20do%20you%20have%20today%3F"
            target="_blank"
            rel="noopener"
            className="border-b border-teal pb-px text-sm text-teal transition-colors hover:border-ink hover:text-ink"
          >
            Ask about today&apos;s sets
          </a>
        </div>
        <div className="reveal in grid grid-cols-1 gap-6 md:grid-cols-2">
          {sets.map((item) => (
            <ProductOverlayCard key={item.name} {...item} />
          ))}
        </div>
      </section>

      <section id="loyalty" className="bg-mineral px-6 py-24 sm:px-10 md:px-16 md:py-28 lg:px-24 xl:px-32">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[minmax(0,440px)_1fr] md:gap-14 lg:gap-20">
          <div className="reveal in order-2 md:order-1">
            <div className="mb-2 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-teal">
              <span className="text-accent">04</span>
              <span className="h-px w-5 bg-current opacity-40" />
              <span>The Phygital Loyalty Loop</span>
            </div>
            <h2 className="mb-5 font-serif text-[clamp(26px,3.4vw,32px)] font-normal">Every 5th Refill, On Us</h2>
            <p className="mb-8 max-w-md text-[15px] leading-relaxed text-stone">
              No app to download, no card to lose. Your loyalty stamp card lives inside WhatsApp - updated automatically every time you
              order.
            </p>
            <ol className="mb-8 max-w-md space-y-4 text-[13.5px] text-stone">
              <li className="flex gap-3">
                <span className="font-mono text-accent">01</span>Scan the QR code on your bottle, cup, or kiosk counter
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-accent">02</span>WhatsApp opens with a message already written
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-accent">03</span>You get a digital stamp card and welcome offer instantly
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-accent">04</span>Every purchase adds a stamp - your 5th refill is free
              </li>
            </ol>
            <a
              href="https://wa.me/27832226766?text=Hi%20Naturesip%2C%20I%27d%20like%20to%20join%20the%20loyalty%20club"
              target="_blank"
              rel="noopener"
              className="btn-ripple btn-pill inline-flex items-center gap-3 rounded-full bg-ink py-1.5 pl-7 pr-1.5 text-sm text-white transition-opacity hover:opacity-90"
            >
              Join the Loyalty Club
              <span className="btn-pill-icon flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-ink">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3.5 w-3.5 fill-none stroke-current"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h13M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
          </div>

          <div className="reveal in order-1 md:order-2">
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className="relative h-[300px] w-full overflow-hidden rounded-[18px] bg-white sm:h-[420px] sm:w-[58%] lg:h-[460px]">
                <img
                  src="https://images.unsplash.com/photo-1584056866693-1f9d42e9feb6?w=1200&h=900&fit=crop&auto=format&q=80"
                  alt="Close-up water droplet, symbolising the loyalty reward"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-6 left-6 text-[17px] leading-snug text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.4)]">
                  Loyalty lives
                  <br />
                  inside WhatsApp
                </div>
              </div>
              <div className="flex flex-col gap-5 sm:w-[42%]">
                <div className="relative h-[170px] overflow-hidden rounded-[18px] bg-mineral sm:h-[190px] lg:h-[210px]">
                  <img
                    src="https://images.unsplash.com/photo-1550728643-f43cda9a0545?w=800&h=800&fit=crop&auto=format&q=80"
                    alt="Fresh fruit, part of the loyalty reward"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center gap-4 rounded-[18px] border border-line bg-white px-6 py-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-stone">Loyalty Card</span>
                    <span className="font-mono text-[10px] text-accent">04 / 05</span>
                  </div>
                  <div className="relative flex items-center justify-between" aria-hidden="true">
                    <div className="absolute left-3 right-3 top-1/2 h-px -translate-y-1/2 border-t border-dashed border-line" />
                    {["1", "2", "3", "4"].map((n) => (
                      <span
                        key={n}
                        className="stamp-node relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-teal-deep bg-teal-deep font-mono text-[12px] text-white"
                      >
                        {n}
                      </span>
                    ))}
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-accent bg-mineral text-accent">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                        <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.5 2.5 0 00-2.5-2.5c-1.44 0-2.62 1.36-3.5 2.65-.88-1.29-2.06-2.65-3.5-2.65A2.5 2.5 0 006 5c0 .35.07.69.18 1H4a2 2 0 00-2 2v2a1 1 0 001 1h1v8a2 2 0 002 2h12a2 2 0 002-2v-8h1a1 1 0 001-1V8a2 2 0 00-2-2z" />
                      </svg>
                    </span>
                  </div>
                  <p className="text-[12px] leading-relaxed text-stone">
                    One more refill unlocks your free 5th - already 80% of the way there.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="founder" className="px-6 py-24 sm:px-10 md:px-16 md:py-28 lg:px-24 xl:px-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="reveal in mb-6 font-mono text-xs uppercase tracking-[0.14em] text-teal">Why Naturesip</div>
          <p className="reveal in font-serif text-[clamp(22px,3.6vw,32px)] italic font-normal leading-[1.4] text-ink">
            I built Naturesip because clean water in Soweto shouldn&apos;t cost more than lunch - or come wrapped in someone else&apos;s
            plastic.
          </p>

          <div className="reveal in mt-6 flex items-center justify-center gap-3">
            <svg viewBox="0 0 40 40" className="h-8 w-8 shrink-0" aria-hidden="true">
              <circle cx="20" cy="20" r="18" fill="none" stroke="#8fd8ee" strokeWidth="1.2" />
              <circle cx="20" cy="20" r="12.5" fill="none" stroke="#111315" strokeWidth="0.8" strokeDasharray="1.5 3" />
            </svg>
            <div className="text-left">
              <div className="font-mono text-[13px] tracking-[0.02em] text-ink">Stephinah Mmakobo Kgasi</div>
              <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-stone">Founder, Naturesip</div>
            </div>
          </div>

          <p className="reveal in mx-auto mt-10 max-w-xl text-[14.5px] leading-relaxed text-stone">
            Naturesip started with a simple frustration: erratic municipal supply and supermarket prices for bottled water trucked in from
            somewhere else. Our answer is a flagship refill-and-fruit bar built right into the neighbourhood.
          </p>

          <div className="reveal in mx-auto mt-14 max-w-xl divide-y divide-line border-y border-line text-left">
            {[
              {
                title: "Purity, verified daily",
                body: "Four-stage filtration, tested every morning with a TDS reading you can see for yourself at the counter.",
                open: true,
              },
              {
                title: "Priced for the till, not the trend",
                body: "Bulk refills from R4.00/L - a fraction of supermarket bottled water, no loyalty app required.",
              },
              {
                title: "Reuse costs nothing extra",
                body: "Bring your own bottle any day of the week. It is the default here, not a premium add-on.",
              },
              {
                title: "Built in the neighbourhood",
                body: "Filtered on-site in Soweto, not trucked in from somewhere else.",
              },
            ].map((item) => (
              <div key={item.title} className={`accordion-item ${item.open ? "open" : ""}`}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={Boolean(item.open)}
                >
                  <span className="font-serif text-[16px] text-ink">{item.title}</span>
                  <span className="accordion-icon flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brass font-mono text-sm text-brass">
                    +
                  </span>
                </button>
                <div className="accordion-body">
                  <div className="pb-5 pr-10 text-[13.5px] leading-relaxed text-stone">{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="locations" className="bg-mineral px-6 py-24 sm:px-10 md:px-16 md:py-28 lg:px-24 xl:px-32">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[minmax(0,420px)_1fr] md:gap-14 lg:gap-20">
          <div className="reveal in">
            <div className="mb-2 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-teal">
              <span className="text-accent">05</span>
              <span className="h-px w-5 bg-current opacity-40" />
              <span>Flagship Kiosk</span>
            </div>
            <h2 className="mb-5 font-serif text-[clamp(26px,3.4vw,32px)] font-normal">Find Us at Maponya Mall</h2>
            <p className="mb-6 max-w-md text-[15px] leading-relaxed text-stone">
              Naturesip Water &amp; Fruit Bar sits on the Lower Level, near the Food Court entrance, Maponya Mall, Soweto. Open daily,
              9am-8pm.
            </p>
            <ul className="mb-8 max-w-md space-y-2.5 text-[13.5px] text-stone">
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                Cashless tap-and-go, no queue for refills
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                Load-shedding proof - runs on backup power
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                Scan kiosk QR to join loyalty on WhatsApp
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Maponya+Mall%2C+Chris+Hani+Rd%2C+Soweto%2C+Johannesburg"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-ink px-7 py-3 text-sm text-ink transition-colors duration-300 hover:bg-ink hover:text-white"
              >
                Get Directions
              </a>
              <a
                href="https://wa.me/27832226766?text=Hi%20Naturesip%2C%20I%27m%20at%20Maponya%20Mall%20and%20would%20like%20to%20view%20today%27s%20menu"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full text-sm text-teal transition-colors hover:text-ink"
              >
                Message the kiosk <span aria-hidden>&rarr;</span>
              </a>
            </div>
          </div>

          <div className="reveal in">
            <div className="flex flex-col gap-5 sm:flex-row">
              <div className="relative h-[300px] w-full overflow-hidden rounded-[18px] border border-line bg-white sm:h-[460px] sm:w-[58%] lg:h-[500px]">
                <iframe
                  src="https://maps.google.com/maps?q=Maponya+Mall%2C+Chris+Hani+Rd%2C+Soweto%2C+Johannesburg&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  title="Live map - Naturesip at Maponya Mall, Soweto"
                  className="h-full w-full grayscale-[15%]"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="glass-panel-light pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full px-3.5 py-2 shadow-[0_10px_24px_-14px_rgba(11,31,38,0.4)]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-teal-deep">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-white">
                      <path d="M12 2C7.5 6 4 11.4 4 15a8 8 0 0016 0c0-3.6-3.5-9-8-13z" />
                    </svg>
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.04em] text-ink">NATURESIP &middot; HERE</span>
                </div>
              </div>
              <div className="flex flex-col gap-5 sm:w-[42%]">
                <div className="relative h-[170px] overflow-hidden rounded-[18px] bg-white sm:h-[220px] lg:h-[250px]">
                  <img
                    src="https://images.unsplash.com/photo-1553564552-02656d6a2390?w=800&h=800&fit=crop&auto=format&q=80"
                    alt="A clean glass of purified water, poured at the counter"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-4 left-4 font-mono text-[11px] uppercase tracking-[0.06em] text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
                    At the counter
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-center gap-5 rounded-[18px] border border-line bg-white px-6 py-6">
                  <div>
                    <div className="font-mono text-sm text-teal-deep">MAPONYA MALL</div>
                    <div className="mt-1 text-[13px] text-stone">Lower Level, near the Food Court</div>
                  </div>
                  <div className="h-px w-full bg-line" />
                  <div>
                    <div className="font-mono text-sm text-teal-deep">OPEN DAILY &middot; 9AM-8PM</div>
                    <div className="mt-1 text-[13px] text-stone">Soweto, Johannesburg</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Real Stories: avatar + star rating + quote, with an image "highlight" card mixed in, matching index.html ── */}
      <section id="community" className="px-6 py-24 sm:px-10 md:px-16 md:py-28 lg:px-24 xl:px-32">
        <div className="reveal in mb-[3.25rem] flex items-end justify-between">
          <h2 className="font-serif text-[clamp(28px,4vw,36px)] font-normal tracking-[-0.01em]">Real Stories</h2>
        </div>
        <div className="reveal in grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-[18px] bg-mineral px-6 py-8 text-center">
            <div
              className="mx-auto mb-3.5 flex h-16 w-16 items-center justify-center rounded-full bg-ink font-mono text-[15px] tracking-wide text-white"
              aria-hidden="true"
            >
              {stories[0].initials}
            </div>
            <div className="font-serif text-2xl italic leading-none text-accent">&ldquo;</div>
            <div className="mt-1.5 font-medium">{stories[0].name}</div>
            <div className="mb-3.5 flex items-center justify-center gap-1.5">
              <StarRow rating={stories[0].rating} />
              <span className="font-mono text-[12px] text-stone">{stories[0].rating.toFixed(1)}</span>
            </div>
            <p className="text-sm leading-relaxed text-[#585b58]">{stories[0].quote}</p>
          </div>

          <div className="rounded-[18px] bg-mineral px-6 py-8 text-center">
            <div
              className="mx-auto mb-3.5 flex h-16 w-16 items-center justify-center rounded-full bg-ink font-mono text-[15px] tracking-wide text-white"
              aria-hidden="true"
            >
              {stories[1].initials}
            </div>
            <div className="font-serif text-2xl italic leading-none text-accent">&ldquo;</div>
            <div className="mt-1.5 font-medium">{stories[1].name}</div>
            <div className="mb-3.5 flex items-center justify-center gap-1.5">
              <StarRow rating={stories[1].rating} />
              <span className="font-mono text-[12px] text-stone">{stories[1].rating.toFixed(1)}</span>
            </div>
            <p className="text-sm leading-relaxed text-[#585b58]">{stories[1].quote}</p>
          </div>

          <a
            href="https://wa.me/27832226766?text=Hi%20Naturesip%2C%20I%27d%20like%20to%20order%20the%20Pure%20Refill%205L%20Bottle"
            target="_blank"
            rel="noopener"
            className="product-card group relative block aspect-square overflow-hidden rounded-[18px]"
          >
            <img
              src="https://images.unsplash.com/photo-1587800387687-60c1e4d08c9d?w=700&h=700&fit=crop&auto=format&q=80"
              alt="Naturesip Pure Refill 5L bottle"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 px-5 pb-5 pt-8 text-white">
              <div>
                <strong className="block font-serif text-base font-normal">Pure Refill</strong>
                <span className="mt-0.5 block text-[13px] text-white/75">5L Bottle</span>
              </div>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur">&rarr;</span>
            </div>
          </a>

          <div className="rounded-[18px] bg-mineral px-6 py-8 text-center">
            <div
              className="mx-auto mb-3.5 flex h-16 w-16 items-center justify-center rounded-full bg-ink font-mono text-[15px] tracking-wide text-white"
              aria-hidden="true"
            >
              {stories[2].initials}
            </div>
            <div className="font-serif text-2xl italic leading-none text-accent">&ldquo;</div>
            <div className="mt-1.5 font-medium">{stories[2].name}</div>
            <div className="mb-3.5 flex items-center justify-center gap-1.5">
              <StarRow rating={stories[2].rating} />
              <span className="font-mono text-[12px] text-stone">{stories[2].rating.toFixed(1)}</span>
            </div>
            <p className="text-sm leading-relaxed text-[#585b58]">{stories[2].quote}</p>
          </div>
        </div>

        {/* ── Journal: overlay image cards, first item taller/full-height, matching index.html ── */}
        <div className="reveal in my-[3.25rem] border-t border-line pt-[3.25rem]">
          <h2 className="font-serif text-[clamp(28px,4vw,36px)] font-normal tracking-[-0.01em]">Inside the Journal</h2>
        </div>
        <div className="reveal in grid grid-cols-1 gap-6 md:grid-cols-[1.6fr_1fr_1fr]">
          {journal.map((j) => (
            <a
              key={j.headline}
              href={j.anchor || "#"}
              className={`group relative block overflow-hidden rounded-[18px] bg-mineral ${
                j.large ? "h-[420px]" : "h-[420px] md:h-[340px] md:self-end"
              }`}
            >
              <img
                src={j.image}
                alt={j.headline}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-5 text-white">
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] opacity-80">{j.tag}</div>
                <div className="mt-1.5 max-w-[80%] font-serif text-[17px]">{j.headline}</div>
              </div>
            </a>
          ))}
        </div>

        {/* ── Instagram: masonry offset + hover overlay with brand mark & icons on one tile, matching index.html ── */}
        <div className="reveal in mb-12 mt-[3.25rem] border-t border-line pt-[3.25rem] text-center">
          <div className="mb-1.5 font-mono text-sm text-stone">Follow us on instagram</div>
          <h2 className="font-serif text-[clamp(28px,4vw,36px)] font-normal">@Naturesip</h2>
        </div>
        <div className="reveal in grid grid-cols-2 gap-5 md:grid-cols-4">
          {instagramShots.map((image, i) => (
            <a
              key={image}
              href="#"
              className={`ig-tile group relative aspect-square overflow-hidden rounded-[14px] bg-mineral ${
                i === 1 || i === 3 ? "md:mt-8" : ""
              }`}
            >
              <img
                src={image}
                alt={`Naturesip on Instagram ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
              />
              {i === 1 && (
                <>
                  <div className="absolute left-0 top-0 flex items-center gap-2 p-3.5 text-[13px] font-medium text-white">
                    <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-white">
                      <svg viewBox="0 0 24 30" fill="none" className="h-2.5 w-2 text-ink">
                        <path d="M12 0C12 0 2 14 2 20a10 10 0 0020 0C22 14 12 0 12 0z" stroke="currentColor" strokeWidth="2.2" />
                      </svg>
                    </span>
                    Naturesip
                  </div>
                  <div className="absolute bottom-0 left-0 flex gap-3 p-3.5">
                    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-none stroke-white" strokeWidth={1.8}>
                      <path d="M12 20.5s-7.5-4.6-9.8-9.2C.6 8 2.2 4.5 5.6 3.7c2-.5 4 .3 5.2 2 .3.4.9.4 1.2 0 1.2-1.7 3.2-2.5 5.2-2 3.4.8 5 4.3 3.4 7.6-2.3 4.6-9.8 9.2-9.8 9.2z" />
                    </svg>
                    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-none stroke-white" strokeWidth={1.8}>
                      <path d="M4 12l8-8v5c6 0 9 3 10 9-3-3-6-4-10-4v5z" />
                    </svg>
                    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-none stroke-white" strokeWidth={1.8}>
                      <path d="M21 11.5a8.4 8.4 0 01-8.9 8.4A9 9 0 013 19l-1 2 2.2-.9a8.4 8.4 0 0116.8-8.6z" />
                    </svg>
                  </div>
                </>
              )}
            </a>
          ))}
        </div>
      </section>

      <a
        id="wa-float"
        href="https://wa.me/27832226766?text=Hi%20Naturesip%2C%20I%27d%20like%20to%20place%20an%20order"
        target="_blank"
        rel="noopener"
        aria-label="Chat with Naturesip on WhatsApp"
        className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-teal-deep text-white shadow-[0_14px_34px_-12px_rgba(11,31,38,0.55)] transition-transform duration-300 hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.96L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0012.04 2m0 1.67a8.2 8.2 0 018.23 8.24c0 4.54-3.7 8.23-8.24 8.23a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.37c0-4.55 3.7-8.24 8.25-8.24m-4.5 4.28c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.6c.13.18 1.8 2.85 4.44 3.9 2.2.86 2.64.7 3.12.65.48-.04 1.53-.62 1.75-1.22.22-.6.22-1.11.15-1.22-.06-.1-.23-.16-.48-.28-.25-.13-1.53-.75-1.77-.84-.24-.09-.4-.13-.58.13-.17.26-.66.83-.81 1-.15.17-.3.19-.55.06-.26-.13-1.07-.4-2.03-1.26-.75-.67-1.26-1.5-1.4-1.76-.15-.25-.02-.4.11-.52.11-.11.26-.3.38-.44.13-.15.17-.26.26-.43.08-.17.04-.32-.02-.45-.06-.13-.58-1.44-.81-1.96-.2-.5-.42-.44-.58-.45z" />
        </svg>
      </a>
    </main>
  );
}
