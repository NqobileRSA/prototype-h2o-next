import PageHero from "../../components/page-hero";

export default function AboutPage() {
  return (
    <main>
      <div className="pt-24 md:pt-28">
        <PageHero
          sectionNumber="01"
          sectionLabel="Our Story"
          title="Purity is not a"
          accentText="luxury — it's a right."
          description="Born in Soweto. Built for everyone. We set out to make hospital-grade purified water and vibrant fresh-fruit nutrition accessible, affordable, and beautiful — at the heart of the communities that need it most."
          watermark="ABOUT"
        >
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#our-pillars"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-[13px] text-ink transition-colors hover:border-accent hover:text-accent"
            >
              What we offer <span aria-hidden>↓</span>
            </a>
            <a
              href="#founder"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-medium text-white transition-opacity hover:opacity-90"
            >
              Meet the founder
            </a>
          </div>
        </PageHero>
      </div>

      {/* ══════════════════════════════════════════════════════
           02  MISSION — clean flat dark, no gradient blobs
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-teal-deep px-6 py-20 sm:px-10 md:px-16 md:py-24 lg:px-24 xl:px-32">
        <div className="reveal in">
          <div className="mb-6 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-brass/50">
            <span className="text-brass">02</span>
            <span className="h-px w-5 bg-brass opacity-30" />
            <span>Mission</span>
          </div>
          <blockquote className="max-w-4xl font-serif text-[clamp(22px,4vw,48px)] font-normal leading-[1.18] tracking-[-0.01em] text-white">
            &quot;To make <em className="italic text-brass">premium hydration and fresh nutrition</em> accessible, transparent, and
            community-rooted — one refill, one slice, one slushy at a time.&quot;
          </blockquote>
          <div className="mt-10 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/15 px-4 py-1.5 font-mono text-xs text-white/70">Transparent</span>
            <span className="rounded-full border border-white/15 px-4 py-1.5 font-mono text-xs text-white/70">Refreshing</span>
            <span className="rounded-full border border-white/15 px-4 py-1.5 font-mono text-xs text-white/70">Innovative</span>
            <span className="rounded-full border border-white/15 px-4 py-1.5 font-mono text-xs text-white/70">Community-first</span>
            <span className="rounded-full border border-white/15 px-4 py-1.5 font-mono text-xs text-white/70">Eco-conscious</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           03  PEOPLE SPLIT — large image left, text right
      ═══════════════════════════════════════════════════════════ */}
      <section className="grid min-h-[560px] grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[340px] overflow-hidden lg:min-h-0">
          <img
            src="https://images.unsplash.com/photo-1544145945-f90425340c7e?w=1000&h=800&fit=crop&auto=format&q=80"
            alt="Person enjoying a refreshing drink"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="reveal in flex flex-col justify-center bg-mineral px-8 py-16 sm:px-12 md:px-16 lg:px-14 xl:px-20">
          <div className="mb-3 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-stone">
            <span className="text-accent">03</span>
            <span className="h-px w-5 bg-current opacity-40" />
            <span>Why We Exist</span>
          </div>
          <h2 className="mb-6 font-serif text-[clamp(26px,3.5vw,42px)] font-normal leading-[1.12] tracking-[-0.01em]">
            The gap was obvious.
            <br />
            <em className="italic text-accent">Nobody was filling it.</em>
          </h2>
          <p className="mb-5 text-[15px] leading-relaxed text-stone">
            Traditional water depots are cold and transactional. Supermarket water is trapped in single-use plastic at inflated prices.
            Fresh fruit is either inaccessible or expensive. Naturesip collapses all three problems into one beautiful solution.
          </p>
          <p className="mb-8 text-[15px] leading-relaxed text-stone">
            We placed our flagship at Maponya Mall, Soweto — not because it was easiest, but because it&apos;s where this kind of access
            matters most. This is community infrastructure, dressed in premium design.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <div>
              <div className="font-serif text-[32px] leading-none text-ink">R5</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.08em] text-stone">Per litre refill</div>
            </div>
            <div>
              <div className="font-serif text-[32px] leading-none text-ink">&lt;20</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.08em] text-stone">ppm TDS daily</div>
            </div>
            <div>
              <div className="font-serif text-[32px] leading-none text-ink">5th</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.08em] text-stone">Refill always free</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           04  PILLARS — cards with top images
      ═══════════════════════════════════════════════════════════ */}
      <section id="our-pillars" className="px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-24 xl:px-32">
        <div className="mb-12 reveal in">
          <div className="mb-3 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-stone">
            <span className="text-accent">04</span>
            <span className="h-px w-5 bg-current opacity-40" />
            <span>What We Do</span>
          </div>
          <h2 className="font-serif text-[clamp(28px,4vw,48px)] font-normal leading-[1.1] tracking-[-0.01em]">
            Three pillars. One destination.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-stone">
            Every element of our kiosk is designed to serve a distinct need — and together, they create an experience you can&apos;t find
            anywhere else in Soweto.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article className="pillar-card reveal in">
            <div className="pillar-img">
              <img
                src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=800&h=450&fit=crop&auto=format&q=80"
                alt="Pure water being poured"
                loading="lazy"
              />
            </div>
            <div className="p-7">
              <div className="mb-1 font-mono text-[11px] uppercase tracking-[0.1em] text-accent">Pillar 01</div>
              <h3 className="mb-3 font-serif text-2xl font-normal">Pure Refills</h3>
              <p className="text-[14px] leading-relaxed text-stone">
                SANS 241-grade water through 4 purification stages, verified to under 20 ppm TDS every morning. Bring your bottle — or grab
                one of ours. No single-use plastic, no inflated supermarket price.
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                <span className="font-mono text-xs text-stone">From R5 / litre</span>
                <a href="#menu" className="font-mono text-xs text-accent hover:underline">
                  See sizes →
                </a>
              </div>
            </div>
          </article>
          <article className="pillar-card reveal in">
            <div className="pillar-img">
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=450&fit=crop&auto=format&q=80"
                alt="Fresh fruit bowls and slices"
                loading="lazy"
              />
            </div>
            <div className="p-7">
              <div className="mb-1 font-mono text-[11px] uppercase tracking-[0.1em] text-accent">Pillar 02</div>
              <h3 className="mb-3 font-serif text-2xl font-normal">Fresh Slicing Bar</h3>
              <p className="text-[14px] leading-relaxed text-stone">
                Locally sourced fruit, sliced fresh to order and served in clear eco-friendly packaging. The kind of healthy snack urban
                shoppers have always wanted, finally at a fair price.
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                <span className="font-mono text-xs text-stone">Seasonal selection</span>
                <a href="#menu" className="font-mono text-xs text-accent hover:underline">
                  See the menu →
                </a>
              </div>
            </div>
          </article>
          <article className="pillar-card reveal in">
            <div className="pillar-img">
              <img
                src="https://images.unsplash.com/photo-1553530666-ba11a90bb0ae?w=800&h=450&fit=crop&auto=format&q=80"
                alt="Vibrant coloured slushy drinks"
                loading="lazy"
              />
            </div>
            <div className="p-7">
              <div className="mb-1 font-mono text-[11px] uppercase tracking-[0.1em] text-accent">Pillar 03</div>
              <h3 className="mb-3 font-serif text-2xl font-normal">Premium Slushies</h3>
              <p className="text-[14px] leading-relaxed text-stone">
                Made with our own purified water base and real fruit. Custom flavours, vibrant colours — the highest-margin product and the
                one that keeps people coming back every single day.
              </p>
              <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                <span className="font-mono text-xs text-stone">Custom blends</span>
                <a href="#menu" className="font-mono text-xs text-accent hover:underline">
                  See flavours →
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           05  PHOTO MOSAIC — people staying hydrated
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-mineral px-6 pb-0 pt-4 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <div className="mb-8 reveal in">
          <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-stone">
            <span className="text-accent">05</span>
            <span className="h-px w-5 bg-current opacity-40" />
            <span>The Naturesip Life</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-2">
          <div className="mosaic-img col-span-1 row-span-2" style={{ aspectRatio: "3/4" }}>
            <img
              src="https://images.unsplash.com/photo-1613412446312-e775dfc022bc?w=600&h=800&fit=crop&auto=format&q=80"
              alt="Woman smiling with a healthy drink"
              loading="lazy"
            />
          </div>
          <div className="mosaic-img col-span-1 md:col-span-2" style={{ aspectRatio: "16/9" }}>
            <img
              src="https://images.unsplash.com/photo-1611178240324-ce6859180a5e?w=900&h=500&fit=crop&auto=format&q=80"
              alt="Fresh citrus fruit being sliced"
              loading="lazy"
            />
          </div>
          <div className="mosaic-img col-span-1" style={{ aspectRatio: "1/1" }}>
            <img
              src="https://images.unsplash.com/photo-1712248804934-5a2906fb1a34?w=500&h=500&fit=crop&auto=format&q=80"
              alt="Person drinking water outdoors"
              loading="lazy"
            />
          </div>
          <div className="mosaic-img col-span-1 hidden md:block" style={{ aspectRatio: "4/3" }}>
            <img
              src="https://images.unsplash.com/photo-1746635732312-0083b7f9423f?w=700&h=520&fit=crop&auto=format&q=80"
              alt="Family sharing healthy snacks"
              loading="lazy"
            />
          </div>
          <div className="mosaic-img col-span-1 hidden md:col-span-2 md:block" style={{ aspectRatio: "16/9" }}>
            <img
              src="https://images.unsplash.com/photo-1762631178352-f7ae732b42c4?w=900&h=500&fit=crop&auto=format&q=80"
              alt="Colourful slushy drinks in clear cups"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3 pb-12">
          <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-stone">Real customers. Real refreshment.</span>
          <span className="h-px flex-1 bg-line" />
          <a
            href="https://wa.me/27832226766?text=Hi%20Naturesip%2C%20I%27d%20like%20to%20visit"
            target="_blank"
            rel="noopener"
            className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent hover:underline"
          >
            Visit us at Maponya Mall →
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           06  PURITY PROCESS — white bg, no blobs
      ═══════════════════════════════════════════════════════════ */}
      <section id="process" className="px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-24 xl:px-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="reveal-left in">
            <div className="mb-3 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-stone">
              <span className="text-accent">06</span>
              <span className="h-px w-5 bg-current opacity-40" />
              <span>Our Process</span>
            </div>
            <h2 className="mb-4 font-serif text-[clamp(26px,3.8vw,44px)] font-normal leading-[1.1] tracking-[-0.01em]">
              Four stages between
              <br />
              <em className="italic text-accent">tap and trust.</em>
            </h2>
            <p className="mb-10 max-w-md text-[15px] leading-relaxed text-stone">
              Every litre passes our full in-line filtration stack. We publish the day&apos;s TDS reading on WhatsApp every morning — no
              guesswork, no fine print.
            </p>
            <ol className="relative space-y-0 pl-0">
              <li className="relative flex gap-5 pb-7">
                <div className="flex flex-shrink-0 flex-col items-center">
                  <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink font-mono text-[12px] text-white">
                    01
                  </div>
                  <div className="mt-2 w-px flex-1 bg-line" />
                </div>
                <div className="pt-1.5">
                  <div className="mb-0.5 text-[14px] font-semibold">Sediment Pre-Filter</div>
                  <p className="text-[13px] leading-relaxed text-stone">
                    Removes suspended particles — sand, rust, fine debris — down to 5 microns before anything enters the main filter train.
                  </p>
                </div>
              </li>
              <li className="relative flex gap-5 pb-7">
                <div className="flex flex-shrink-0 flex-col items-center">
                  <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink font-mono text-[12px] text-white">
                    02
                  </div>
                  <div className="mt-2 w-px flex-1 bg-line" />
                </div>
                <div className="pt-1.5">
                  <div className="mb-0.5 text-[14px] font-semibold">Activated Carbon Block</div>
                  <p className="text-[13px] leading-relaxed text-stone">
                    Adsorbs chlorine, chloramines, VOCs, and odour compounds — the step that eliminates that municipal-water taste entirely.
                  </p>
                </div>
              </li>
              <li className="relative flex gap-5 pb-7">
                <div className="flex flex-shrink-0 flex-col items-center">
                  <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink font-mono text-[12px] text-white">
                    03
                  </div>
                  <div className="mt-2 w-px flex-1 bg-line" />
                </div>
                <div className="pt-1.5">
                  <div className="mb-0.5 text-[14px] font-semibold">Reverse Osmosis Membrane</div>
                  <p className="text-[13px] leading-relaxed text-stone">
                    A 0.0001-micron barrier that rejects dissolved salts, heavy metals, nitrates, and microplastics — driving TDS below 20
                    ppm.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex flex-shrink-0 flex-col items-center">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent font-mono text-[12px] text-white">04</div>
                </div>
                <div className="pt-1.5">
                  <div className="mb-0.5 text-[14px] font-semibold">UV-C Sterilisation</div>
                  <p className="text-[13px] leading-relaxed text-stone">
                    Ultraviolet light at 254 nm deactivates 99.99% of remaining bacteria and viruses before water reaches the dispense
                    point.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="reveal in flex flex-col gap-4">
            <div className="rounded-[22px] bg-teal-deep p-8 text-white">
              <div className="mb-2 font-mono text-xs uppercase tracking-[0.1em] text-brass/50">Live purity standard</div>
              <div className="font-serif text-[64px] font-normal leading-none tracking-tight text-brass">&lt;20</div>
              <div className="mb-5 mt-1 font-mono text-sm text-white/50">ppm TDS — verified daily</div>
              <p className="text-[13px] leading-relaxed text-white/60">
                SANS 241 permits water up to 300 ppm TDS. Our water consistently tests under 20 ppm — the same benchmark as premium bottled
                brands, served fresh at a fraction of the cost.
              </p>
              <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brass/15">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-brass">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                  </svg>
                </div>
                <span className="font-mono text-xs text-white/50">Updated every morning before opening</span>
              </div>
            </div>

            <div className="mosaic-img rounded-[22px]" style={{ aspectRatio: "16/8" }}>
              <img
                src="https://images.unsplash.com/photo-1560023907-5f339617ea30?w=900&h=450&fit=crop&auto=format&q=80"
                alt="Clear water being dispensed into a reusable bottle"
                loading="lazy"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[16px] border border-line bg-white p-5">
                <div className="font-serif text-[36px] leading-none text-ink">4</div>
                <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-stone">Filtration stages</div>
              </div>
              <div className="rounded-[16px] border border-line bg-white p-5">
                <div className="font-serif text-[36px] leading-none text-ink">
                  99<span className="text-[20px]">%</span>
                </div>
                <div className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-stone">Pathogen elimination</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           07  WHY NATURESIP — value chips + side image
      ═══════════════════════════════════════════════════════════ */}
      <section id="why" className="bg-mineral">
        <div className="relative h-52 overflow-hidden md:h-72">
          <img
            src="https://images.unsplash.com/photo-1528825871115-3581a5387919?w=1800&h=600&fit=crop&auto=format&q=80"
            alt="Group of people drinking water and laughing together"
            className="h-full w-full object-cover object-center"
            loading="lazy"
          />
          <div
            className="absolute inset-0 flex items-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32"
            style={{ background: "rgba(11, 31, 38, 0.52)" }}
          >
            <div>
              <div className="mb-2 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-brass/70">
                <span className="text-brass">07</span>
                <span className="h-px w-5 bg-brass opacity-40" />
                <span>Why Us</span>
              </div>
              <h2 className="font-serif text-[clamp(24px,4vw,48px)] font-normal leading-tight text-white">The Naturesip difference.</h2>
            </div>
          </div>
        </div>

        <div className="px-6 py-16 sm:px-10 md:px-16 md:py-20 lg:px-24 xl:px-32">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="value-chip reveal in p-7">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-accent" strokeWidth="1.6">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 className="mb-2 text-[15px] font-semibold">Radical Transparency</h3>
              <p className="text-[13px] leading-relaxed text-stone">
                We publish our water&apos;s TDS reading every morning on WhatsApp. We celebrate our numbers — competitors hide theirs.
              </p>
            </div>
            <div className="value-chip reveal in p-7">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-accent" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="mb-2 text-[15px] font-semibold">Minutes, Not Days</h3>
              <p className="text-[13px] leading-relaxed text-stone">
                WhatsApp-first service means most questions get answered within minutes during kiosk hours. No email queues.
              </p>
            </div>
            <div className="value-chip reveal in p-7">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-accent" strokeWidth="1.6">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path d="M9 22V12h6v10" />
                </svg>
              </div>
              <h3 className="mb-2 text-[15px] font-semibold">Community-First Pricing</h3>
              <p className="text-[13px] leading-relaxed text-stone">
                Our pricing is set deliberately below supermarket water cost — without cutting corners on purity.
              </p>
            </div>
            <div className="value-chip reveal in p-7">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-accent" strokeWidth="1.6">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                </svg>
              </div>
              <h3 className="mb-2 text-[15px] font-semibold">Loyalty That Pays Back</h3>
              <p className="text-[13px] leading-relaxed text-stone">
                Your 5th refill is always free. Track stamps digitally via WhatsApp — no paper card to lose.
              </p>
            </div>
            <div className="value-chip reveal in p-7">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-accent" strokeWidth="1.6">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                  <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
                </svg>
              </div>
              <h3 className="mb-2 text-[15px] font-semibold">Zero Single-Use Plastic</h3>
              <p className="text-[13px] leading-relaxed text-stone">
                Refill culture over throwaway culture. Every visit is one less plastic bottle entering the Soweto waste stream.
              </p>
            </div>
            <div className="value-chip reveal in p-7">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-accent" strokeWidth="1.6">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="mb-2 text-[15px] font-semibold">Phygital Experience</h3>
              <p className="text-[13px] leading-relaxed text-stone">
                QR codes on cups and packaging link directly into our WhatsApp CRM — bridging the physical kiosk and digital loyalty loop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           08  STATS — flat dark, marquee + grid
      ═══════════════════════════════════════════════════════════ */}
      <section className="overflow-hidden bg-teal-deep py-20 md:py-28">
        <div className="marquee-wrap mb-14 overflow-hidden border-y border-white/10 py-3.5" aria-hidden="true">
          <div className="marquee-track">
            {Array.from({ length: 2 }).map((_, i) => (
              <span key={i} className="contents">
                <span className="mr-10 font-mono text-xs uppercase tracking-[0.14em] text-brass/50">Purified Daily</span>
                <span className="mr-10 font-mono text-xs text-white/20">·</span>
                <span className="mr-10 font-mono text-xs uppercase tracking-[0.14em] text-brass/50">SANS 241</span>
                <span className="mr-10 font-mono text-xs text-white/20">·</span>
                <span className="mr-10 font-mono text-xs uppercase tracking-[0.14em] text-brass/50">&lt;20 ppm TDS</span>
                <span className="mr-10 font-mono text-xs text-white/20">·</span>
                <span className="mr-10 font-mono text-xs uppercase tracking-[0.14em] text-brass/50">UV-C Sterilised</span>
                <span className="mr-10 font-mono text-xs text-white/20">·</span>
                <span className="mr-10 font-mono text-xs uppercase tracking-[0.14em] text-brass/50">Zero Single-Use Plastic</span>
                <span className="mr-10 font-mono text-xs text-white/20">·</span>
                <span className="mr-10 font-mono text-xs uppercase tracking-[0.14em] text-brass/50">5th Refill Free</span>
                <span className="mr-10 font-mono text-xs text-white/20">·</span>
              </span>
            ))}
          </div>
        </div>
        <div className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
          <div className="mb-8 reveal in">
            <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-brass/50">
              <span className="text-brass">08</span>
              <span className="h-px w-5 bg-brass opacity-30" />
              <span>By the Numbers</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="reveal in">
              <div className="stat-val">&lt;20</div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.08em] text-white/40">ppm TDS daily verified</div>
            </div>
            <div className="reveal in">
              <div className="stat-val">4</div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.08em] text-white/40">Purification stages</div>
            </div>
            <div className="reveal in">
              <div className="stat-val">5th</div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.08em] text-white/40">Refill always free</div>
            </div>
            <div className="reveal in">
              <div className="stat-val">1</div>
              <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.08em] text-white/40">Flagship — more to come</div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           09  FOUNDER — two images side by side
      ═══════════════════════════════════════════════════════════ */}
      <section id="founder" className="px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-24 xl:px-32">
        <div className="mb-10 reveal in">
          <div className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-stone">
            <span className="text-accent">09</span>
            <span className="h-px w-5 bg-current opacity-40" />
            <span>The Founder</span>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="reveal-left in grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <div className="founder-frame" style={{ aspectRatio: "3/2" }}>
                <img
                  src="https://images.unsplash.com/photo-1590650046871-92c887180603?w=900&h=600&fit=crop&auto=format&q=80"
                  alt="Stephinah Mmakobo Kgasi, Founder of Naturesip"
                />
              </div>
            </div>
            <div className="founder-frame" style={{ aspectRatio: "4/5" }}>
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=500&h=620&fit=crop&auto=format&q=80"
                alt="Inside a fresh food kiosk"
                loading="lazy"
              />
            </div>
            <div className="founder-frame" style={{ aspectRatio: "4/5" }}>
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500&h=620&fit=crop&auto=format&q=80"
                alt="Fresh healthy food being prepared"
                loading="lazy"
              />
            </div>
            <div className="col-span-2 flex items-center gap-3 rounded-2xl border border-line bg-mineral px-5 py-4">
              <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-teal-deep">
                <svg viewBox="0 0 24 30" fill="none" className="h-4 w-3">
                  <path d="M12 0C12 0 2 14 2 20a10 10 0 0020 0C22 14 12 0 12 0z" stroke="white" strokeWidth="1.4" />
                </svg>
              </div>
              <div>
                <div className="text-[14px] font-semibold">Stephinah Mmakobo Kgasi</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-stone">
                  Founder &amp; Director, Naturesip (Pty) Ltd
                </div>
              </div>
            </div>
          </div>

          <div className="reveal in">
            <h2 className="mb-6 font-serif text-[clamp(26px,3.8vw,44px)] font-normal leading-[1.1] tracking-[-0.01em]">
              Built from conviction,
              <br />
              <em className="italic text-accent">not convenience.</em>
            </h2>
            <div className="space-y-4 text-[15px] leading-relaxed text-stone">
              <p>
                Stephinah Mmakobo Kgasi founded Naturesip after identifying a gap that too many people were living inside: the cost of clean
                water in South Africa&apos;s urban townships is quietly unaffordable — driven up by packaging, retail margins, and
                single-use plastic that adds nothing to the quality of the water itself.
              </p>
              <p>
                She designed Naturesip as a <span className="font-medium text-ink">phygital hydration ecosystem</span> — a kiosk model that
                combines clinical-grade water purity with a vibrant, community-facing retail identity. The result is a business that
                doesn&apos;t choose between profitable and purposeful; it insists on being both.
              </p>
              <p>
                The Soweto flagship at Maponya Mall is the first node in a planned urban rollout across Gauteng&apos;s major retail centres
                — a turnkey model built to be replicated at speed without compromising the purity, the experience, or the community
                commitment that defines the brand.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://wa.me/27832226766?text=Hi%20Naturesip%2C%20I%27d%20like%20to%20speak%20to%20the%20founder"
                target="_blank"
                rel="noopener"
                className="btn-ripple inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] text-white transition-opacity hover:opacity-85"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.96L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0012.04 2m0 1.67a8.2 8.2 0 018.23 8.24c0 4.54-3.7 8.23-8.24 8.23a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.37c0-4.55 3.7-8.24 8.25-8.24m-4.5 4.28c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.6c.13.18 1.8 2.85 4.44 3.9 2.2.86 2.64.7 3.12.65.48-.04 1.53-.62 1.75-1.22.22-.6.22-1.11.15-1.22-.06-.1-.23-.16-.48-.28-.25-.13-1.53-.75-1.77-.84-.24-.09-.4-.13-.58.13-.17.26-.66.83-.81 1-.15.17-.3.19-.55.06-.26-.13-1.07-.4-2.03-1.26-.75-.67-1.26-1.5-1.4-1.76-.15-.25-.02-.4.11-.52.11-.11.26-.3.38-.44.13-.15.17-.26.26-.43.08-.17.04-.32-.02-.45-.06-.13-.58-1.44-.81-1.96-.2-.5-.42-.44-.58-.45z" />
                </svg>
                Send a message
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-[13px] text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Partnership enquiries
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           10  EXPANSION CTA — clean dark, no blobs
      ═══════════════════════════════════════════════════════════ */}
      <section id="expand" className="bg-teal-deep px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-24 xl:px-32">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="reveal in">
            <div className="mb-4 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-brass/50">
              <span className="text-brass">10</span>
              <span className="h-px w-5 bg-brass opacity-30" />
              <span>B2B &amp; Expansion</span>
            </div>
            <h2 className="mb-5 font-serif text-[clamp(26px,4vw,50px)] font-normal leading-[1.1] tracking-[-0.01em] text-white">
              Bring a Naturesip
              <br />
              <em className="italic text-brass">kiosk to your mall.</em>
            </h2>
            <p className="mb-8 max-w-lg text-[15px] leading-relaxed text-white/60">
              Naturesip is built as a turnkey franchise model — optimised for high-footfall retail environments across Gauteng and beyond.
              If you manage a commercial property or are interested in a licensed location, we&apos;d like to talk.
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center gap-3 text-[14px] text-white/75">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brass" />
                Turnkey setup — R107,100 per site
              </li>
              <li className="flex items-center gap-3 text-[14px] text-white/75">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brass" />
                Load-shedding proof — runs on backup power
              </li>
              <li className="flex items-center gap-3 text-[14px] text-white/75">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brass" />
                SANS 241 certified, full branding supplied
              </li>
              <li className="flex items-center gap-3 text-[14px] text-white/75">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brass" />
                Digital loyalty &amp; WhatsApp CRM included
              </li>
              <li className="flex items-center gap-3 text-[14px] text-white/75">
                <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brass" />
                3-in-1 revenue streams per kiosk
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/27832226766?text=Hi%20Naturesip%2C%20I%27m%20interested%20in%20expansion%20or%20franchising"
                target="_blank"
                rel="noopener"
                className="btn-ripple inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-[13px] font-medium text-ink transition-opacity hover:opacity-90"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.96L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0012.04 2m0 1.67a8.2 8.2 0 018.23 8.24c0 4.54-3.7 8.23-8.24 8.23a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.37c0-4.55 3.7-8.24 8.25-8.24m-4.5 4.28c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.6c.13.18 1.8 2.85 4.44 3.9 2.2.86 2.64.7 3.12.65.48-.04 1.53-.62 1.75-1.22.22-.6.22-1.11.15-1.22-.06-.1-.23-.16-.48-.28-.25-.13-1.53-.75-1.77-.84-.24-.09-.4-.13-.58.13-.17.26-.66.83-.81 1-.15.17-.3.19-.55.06-.26-.13-1.07-.4-2.03-1.26-.75-.67-1.26-1.5-1.4-1.76-.15-.25-.02-.4.11-.52.11-.11.26-.3.38-.44.13-.15.17-.26.26-.43.08-.17.04-.32-.02-.45-.06-.13-.58-1.44-.81-1.96-.2-.5-.42-.44-.58-.45z" />
                </svg>
                Discuss on WhatsApp
              </a>
              <a
                href="/contact#franchise"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-[13px] text-white transition-colors hover:border-brass hover:text-brass"
              >
                Franchise enquiry form →
              </a>
            </div>
          </div>

          <div className="reveal in grid grid-cols-2 gap-4">
            <div className="founder-frame col-span-2" style={{ aspectRatio: "16/9" }}>
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&h=500&fit=crop&auto=format&q=80"
                alt="Modern retail kiosk in a shopping mall"
                loading="lazy"
              />
            </div>
            <div className="founder-frame" style={{ aspectRatio: "1/1" }}>
              <img
                src="https://images.unsplash.com/photo-1526367790999-0150786686a2?w=500&h=500&fit=crop&auto=format&q=80"
                alt="Person holding a fresh drink"
                loading="lazy"
              />
            </div>
            <div className="founder-frame" style={{ aspectRatio: "1/1" }}>
              <img
                src="https://images.unsplash.com/photo-1553564552-02656d6a2390?w=500&h=500&fit=crop&auto=format&q=80"
                alt="Clear bottles and water station"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
