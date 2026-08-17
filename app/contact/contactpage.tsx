"use client";

import { useRef, useState } from "react";
import PageHero from "../../components/page-hero";

const faqItems = [
  {
    question: "What should I bring for a water refill?",
    answer:
      "Any clean, food-safe container works — bottle, jerry can, or jug. We also sell Naturesip-branded bottles at the kiosk if you need one. No minimum size required.",
  },
  {
    question: "Do you accept card payments?",
    answer:
      "Yes — tap-and-go (Visa, Mastercard, Samsung Pay, Apple Pay) is our primary payment method. We do not accept cash. No queues, no change.",
  },
  {
    question: "How does the loyalty programme work?",
    answer:
      "Scan the QR code on your bottle, cup, or the kiosk counter — it opens WhatsApp with a message pre-written. Send it, and you're in. Every purchase adds a stamp; your 5th refill is on us. No app, no card to lose.",
  },
  {
    question: "Where exactly are you in Maponya Mall?",
    answer:
      "Lower Level, near the Food Court entrance. Look for the LED-lit kiosk — the clear filtration display is hard to miss. Parking is available on the ground level directly below.",
  },
  {
    question: "What happens during load shedding?",
    answer:
      "We run on backup power — load shedding does not affect our operating hours or filtration system. The kiosk is open 9AM–8PM every day, regardless of the Eskom schedule.",
  },
  {
    question: "Can I see the water purity reading?",
    answer:
      "Yes — the TDS meter is mounted on the counter and visible to every customer. We test every morning at 7AM and the reading stays live. We're SANS 241 compliant at <20 ppm TDS, compared to a Soweto municipal tap average of ~185 ppm.",
  },
];

function NewsletterForm({ inputClassName }: { inputClassName?: string }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <span className="flex items-center gap-2 px-4 py-2 text-sm text-teal-deep">
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-teal-deep">
          <path d="M12 2C12 2 5 11.5 5 16a7 7 0 0014 0c0-4.5-7-14-7-14z" />
        </svg>
        Thanks — we&rsquo;ll be in touch.
      </span>
    );
  }

  return (
    <form
      className="newsletter inline-flex items-center gap-2.5 rounded-full border border-line bg-white py-1.5 pl-6 pr-1.5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <input
        type="email"
        required
        placeholder="Email"
        className={inputClassName ?? "w-52 bg-transparent text-sm text-ink outline-none placeholder:text-stone"}
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-ink text-white transition-opacity hover:opacity-85"
      >
        &rarr;
      </button>
    </form>
  );
}

export default function ContactPage() {
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [franchiseSubmitted, setFranchiseSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const inquiryTypeRef = useRef<HTMLSelectElement>(null);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleInquirySubmit = () => {
    const type = inquiryTypeRef.current?.value ?? "";
    const name = fullNameRef.current?.value.trim() ?? "";
    const email = emailRef.current?.value.trim() ?? "";
    const msg = messageRef.current?.value.trim() ?? "";

    if (type === "order") {
      const text = encodeURIComponent("Hi Naturesip, I have a question: " + (msg || ""));
      window.open("https://wa.me/27832226766?text=" + text, "_blank");
      return;
    }
    if (!name || !email || !msg) {
      alert("Please fill in your name, email, and message.");
      return;
    }
    setInquirySubmitted(true);
  };

  const darkInputStyle = {
    background: "rgba(255, 255, 255, 0.07)",
    borderColor: "rgba(255, 255, 255, 0.14)",
    color: "white",
  };

  return (
    <main>
      {/* ══════════════════════════════════════════════════════
           PAGE HERO
      ═══════════════════════════════════════════════════════════ */}
      <div className="pt-24 md:pt-28">
        <PageHero
          sectionNumber="06"
          sectionLabel="Get In Touch"
          title="We'd love to hear"
          accentText="from you."
          description="For orders and day-to-day questions, WhatsApp is the fastest path — we respond within minutes during operating hours. For partnerships, franchise inquiries, and press, use the form below."
          watermark="CONTACT"
        >
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://wa.me/27832226766?text=Hi%20Naturesip%2C%20I%27d%20like%20to%20get%20in%20touch"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] text-white transition-opacity hover:opacity-85"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.96L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0012.04 2m0 1.67a8.2 8.2 0 018.23 8.24c0 4.54-3.7 8.23-8.24 8.23a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.37c0-4.55 3.7-8.24 8.25-8.24m-4.5 4.28c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.6c.13.18 1.8 2.85 4.44 3.9 2.2.86 2.64.7 3.12.65.48-.04 1.53-.62 1.75-1.22.22-.6.22-1.11.15-1.22-.06-.1-.23-.16-.48-.28-.25-.13-1.53-.75-1.77-.84-.24-.09-.4-.13-.58.13-.17.26-.66.83-.81 1-.15.17-.3.19-.55.06-.26-.13-1.07-.4-2.03-1.26-.75-.67-1.26-1.5-1.4-1.76-.15-.25-.02-.4.11-.52.11-.11.26-.3.38-.44.13-.15.17-.26.26-.43.08-.17.04-.32-.02-.45-.06-.13-.58-1.44-.81-1.96-.2-.5-.42-.44-.58-.45z" />
              </svg>
              Chat on WhatsApp
            </a>
            <a
              href="tel:+27832226766"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-[13px] text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current opacity-60">
                <path d="M6.6 10.8a15.3 15.3 0 006.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.57 21 3 13.43 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57-.11.36-.03.76-.27 1.03L6.6 10.8z" />
              </svg>
              Call Us
            </a>
            <a
              href="#inquiry"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-[13px] text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-none stroke-current" strokeWidth="1.6">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Send a Message
            </a>
          </div>
        </PageHero>
      </div>

      {/* ══════════════════════════════════════════════════════
           CHANNELS + INQUIRY FORM
      ═══════════════════════════════════════════════════════════ */}
      <section id="inquiry" className="px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-24 xl:px-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20">
          {/* Left: contact channels */}
          <div className="reveal in">
            {/* WhatsApp — primary channel */}
            <a
              href="https://wa.me/27832226766?text=Hi%20Naturesip%2C%20I%27d%20like%20to%20get%20in%20touch"
              target="_blank"
              rel="noopener"
              className="channel-card mb-5 block flex items-start gap-5 rounded-[20px] bg-teal-deep p-7 text-white transition-transform duration-300 hover:-translate-y-1"
              style={{ textDecoration: "none" }}
            >
              <div className="mt-0.5 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.96L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0012.04 2m0 1.67a8.2 8.2 0 018.23 8.24c0 4.54-3.7 8.23-8.24 8.23a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.37c0-4.55 3.7-8.24 8.25-8.24m-4.5 4.28c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.6c.13.18 1.8 2.85 4.44 3.9 2.2.86 2.64.7 3.12.65.48-.04 1.53-.62 1.75-1.22.22-.6.22-1.11.15-1.22-.06-.1-.23-.16-.48-.28-.25-.13-1.53-.75-1.77-.84-.24-.09-.4-.13-.58.13-.17.26-.66.83-.81 1-.15.17-.3.19-.55.06-.26-.13-1.07-.4-2.03-1.26-.75-.67-1.26-1.5-1.4-1.76-.15-.25-.02-.4.11-.52.11-.11.26-.3.38-.44.13-.15.17-.26.26-.43.08-.17.04-.32-.02-.45-.06-.13-.58-1.44-.81-1.96-.2-.5-.42-.44-.58-.45z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="mb-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-white/55">Fastest response</div>
                <div className="mb-2 font-serif text-xl">WhatsApp Us</div>
                <p className="text-[13px] leading-relaxed text-white/70">
                  Orders, menu questions, purity readings, loyalty stamps — all handled directly on WhatsApp. We respond within minutes
                  during kiosk hours.
                </p>
                <div className="mt-4 flex items-center gap-2 font-mono text-xs text-brass">
                  Chat now <span aria-hidden>→</span>
                </div>
              </div>
            </a>

            {/* Call */}
            <a
              href="tel:+27832226766"
              className="channel-card mb-5 block flex items-center gap-5 rounded-[20px] p-6"
              style={{ textDecoration: "none" }}
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-mineral">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-ink">
                  <path d="M6.6 10.8a15.3 15.3 0 006.6 6.6l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.57 21 3 13.43 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57-.11.36-.03.76-.27 1.03L6.6 10.8z" />
                </svg>
              </div>
              <div>
                <div className="mb-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-stone">Call the kiosk</div>
                <div className="font-serif text-lg">+27 83 222 6766</div>
                <div className="mt-0.5 text-[12.5px] text-stone">Available daily · 9AM–8PM</div>
              </div>
            </a>

            {/* Visit us */}
            <div className="channel-card mb-5 flex items-start gap-5 rounded-[20px] p-6">
              <div className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-mineral">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-ink">
                  <path d="M12 2C7.5 6 4 11.4 4 15a8 8 0 0016 0c0-3.6-3.5-9-8-13z" />
                </svg>
              </div>
              <div>
                <div className="mb-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-stone">Come find us</div>
                <div className="mb-1 font-serif text-lg">Maponya Mall</div>
                <p className="text-[13px] leading-relaxed text-stone">
                  Lower Level, near the Food Court entrance
                  <br />
                  Chris Hani Road, Soweto, Johannesburg
                  <br />
                  Open daily · 9AM–8PM
                </p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Maponya+Mall%2C+Chris+Hani+Rd%2C+Soweto%2C+Johannesburg"
                  target="_blank"
                  rel="noopener"
                  className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs text-accent transition-opacity hover:opacity-70"
                >
                  Get Directions <span aria-hidden>↗</span>
                </a>
              </div>
            </div>

            {/* Instagram / Social */}
            <div className="channel-card flex items-start gap-5 rounded-[20px] p-6">
              <div className="mt-0.5 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-mineral">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-ink" strokeWidth="1.7">
                  <rect x="3" y="3" width="18" height="18" rx="5.5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div>
                <div className="mb-0.5 font-mono text-[11px] uppercase tracking-[0.1em] text-stone">Social</div>
                <div className="mb-1 font-serif text-lg">@Naturesip</div>
                <p className="text-[13px] text-stone">Follow for daily purity readings, new fruit drops, and kiosk updates.</p>
                <div className="mt-3 flex gap-4">
                  <a href="#" className="font-mono text-xs text-accent transition-opacity hover:opacity-70">
                    Instagram ↗
                  </a>
                  <a href="#" className="font-mono text-xs text-accent transition-opacity hover:opacity-70">
                    TikTok ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: General inquiry form */}
          <div className="reveal in">
            <div className="mb-2 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-stone">
              <span className="text-accent">01</span>
              <span className="h-px w-5 bg-current opacity-40" />
              <span>General Inquiry</span>
            </div>
            <h2 className="mb-2 font-serif text-[clamp(22px,3vw,30px)] font-normal">Send us a message</h2>
            <p className="mb-8 text-[14px] leading-relaxed text-stone">
              We&apos;ll get back to you within one business day. For faster responses, use WhatsApp above.
            </p>

            <div className="space-y-4">
              <div>
                <label htmlFor="inquiry-type" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.08em] text-stone">
                  Inquiry type
                </label>
                <div className="relative">
                  <select id="inquiry-type" ref={inquiryTypeRef} defaultValue="" className="field-input pr-10">
                    <option value="">Select a category</option>
                    <option value="general">General question</option>
                    <option value="order">Order &amp; menu</option>
                    <option value="franchise">Partnership / franchise</option>
                    <option value="press">Media &amp; press</option>
                    <option value="other">Other</option>
                  </select>
                  <svg
                    viewBox="0 0 24 24"
                    className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 fill-none stroke-stone"
                    strokeWidth="1.8"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              <div>
                <label htmlFor="full-name" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.08em] text-stone">
                  Full name
                </label>
                <input type="text" id="full-name" ref={fullNameRef} placeholder="e.g. Thandi Mokoena" className="field-input" />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.08em] text-stone">
                    Email address
                  </label>
                  <input type="email" id="email" ref={emailRef} placeholder="you@example.com" className="field-input" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.08em] text-stone">
                    Phone <span className="normal-case text-stone/60">(optional)</span>
                  </label>
                  <input type="tel" id="phone" placeholder="+27 82 000 0000" className="field-input" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.08em] text-stone">
                  Message
                </label>
                <textarea id="message" ref={messageRef} placeholder="Tell us how we can help…" className="field-input" />
              </div>

              {!inquirySubmitted && (
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <button
                    type="button"
                    onClick={handleInquirySubmit}
                    className="btn-ripple btn-pill inline-flex items-center gap-3 rounded-full bg-ink py-1.5 pl-6 pr-1.5 text-sm text-white transition-opacity hover:opacity-88"
                  >
                    Send message
                    <span className="btn-pill-icon flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white text-ink">
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
                  </button>
                  <p className="text-[12px] text-stone">
                    Or chat instantly on{" "}
                    <a href="https://wa.me/27832226766" target="_blank" rel="noopener" className="text-accent underline underline-offset-2">
                      WhatsApp →
                    </a>
                  </p>
                </div>
              )}

              {inquirySubmitted && (
                <div className="rounded-[14px] border border-line bg-mineral px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-white">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4 fill-none stroke-current"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-[14px] font-medium">Message received</div>
                      <div className="text-[13px] text-stone">
                        We&apos;ll be in touch within one business day. For something urgent, WhatsApp us directly.
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           B2B / FRANCHISE INQUIRY
      ═══════════════════════════════════════════════════════════ */}
      <section className="bg-teal-deep px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-24 xl:px-32">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20">
          {/* Left: pitch */}
          <div className="reveal in">
            <div className="mb-4 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-brass/70">
              <span className="text-brass">02</span>
              <span className="h-px w-5 bg-current opacity-40" />
              <span>B2B &amp; Expansion</span>
            </div>
            <h2 className="mb-5 font-serif text-[clamp(26px,4vw,40px)] font-normal leading-tight text-white">
              Bring a Naturesip
              <br />
              <em className="font-normal italic text-brass-light">kiosk to your mall.</em>
            </h2>
            <p className="mb-8 max-w-md text-[14.5px] leading-relaxed text-white/65">
              Naturesip is built as a turnkey franchise model — optimised for high-footfall retail environments across Gauteng and beyond.
              If you manage a commercial property or are interested in a licensed location, we&apos;d like to talk.
            </p>
            <ul className="mb-8 max-w-sm space-y-3.5">
              <li className="flex items-baseline gap-3 text-[14px] text-white/80">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brass" />
                Turnkey setup — R107,100 per site
              </li>
              <li className="flex items-baseline gap-3 text-[14px] text-white/80">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brass" />
                Load-shedding proof — runs on backup power
              </li>
              <li className="flex items-baseline gap-3 text-[14px] text-white/80">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brass" />
                SANS 241 certified, full branding supplied
              </li>
              <li className="flex items-baseline gap-3 text-[14px] text-white/80">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brass" />
                Digital loyalty &amp; WhatsApp CRM included
              </li>
            </ul>
            <a
              href="https://wa.me/27832226766?text=Hi%20Naturesip%2C%20I%27m%20interested%20in%20a%20franchise%20or%20partnership%20opportunity"
              target="_blank"
              rel="noopener"
              className="btn-ripple btn-pill inline-flex items-center gap-3 rounded-full bg-brass py-1.5 pl-6 pr-1.5 text-sm text-ink transition-opacity hover:opacity-88"
            >
              Discuss on WhatsApp
              <span className="btn-pill-icon flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-ink text-brass">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.33 4.96L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.87 9.87 0 0012.04 2m0 1.67a8.2 8.2 0 018.23 8.24c0 4.54-3.7 8.23-8.24 8.23a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 01-1.26-4.37c0-4.55 3.7-8.24 8.25-8.24m-4.5 4.28c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.1s.9 2.44 1.02 2.6c.13.18 1.8 2.85 4.44 3.9 2.2.86 2.64.7 3.12.65.48-.04 1.53-.62 1.75-1.22.22-.6.22-1.11.15-1.22-.06-.1-.23-.16-.48-.28-.25-.13-1.53-.75-1.77-.84-.24-.09-.4-.13-.58.13-.17.26-.66.83-.81 1-.15.17-.3.19-.55.06-.26-.13-1.07-.4-2.03-1.26-.75-.67-1.26-1.5-1.4-1.76-.15-.25-.02-.4.11-.52.11-.11.26-.3.38-.44.13-.15.17-.26.26-.43.08-.17.04-.32-.02-.45-.06-.13-.58-1.44-.81-1.96-.2-.5-.42-.44-.58-.45z" />
                </svg>
              </span>
            </a>
          </div>

          {/* Right: franchise form */}
          <div className="reveal in">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.06] p-8">
              <h3 className="mb-6 font-serif text-xl font-normal text-white">Franchise &amp; property inquiry</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.08em] text-white/50">Full name</label>
                    <input type="text" placeholder="Your name" className="field-input" style={darkInputStyle} />
                  </div>
                  <div>
                    <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.08em] text-white/50">
                      Company / organisation
                    </label>
                    <input type="text" placeholder="e.g. Atterbury Property" className="field-input" style={darkInputStyle} />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.08em] text-white/50">Your role</label>
                  <input type="text" placeholder="e.g. Property Manager, Investor" className="field-input" style={darkInputStyle} />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.08em] text-white/50">Email</label>
                    <input type="email" placeholder="you@company.co.za" className="field-input" style={darkInputStyle} />
                  </div>
                  <div>
                    <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.08em] text-white/50">City / Province</label>
                    <input type="text" placeholder="e.g. Pretoria, Gauteng" className="field-input" style={darkInputStyle} />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.08em] text-white/50">Brief overview</label>
                  <textarea
                    placeholder="Tell us about the opportunity — venue size, footfall, target location…"
                    className="field-input"
                    style={{ ...darkInputStyle, minHeight: "110px" }}
                  />
                </div>

                {!franchiseSubmitted && (
                  <button
                    type="button"
                    onClick={() => setFranchiseSubmitted(true)}
                    className="btn-ripple btn-pill inline-flex items-center gap-3 rounded-full border border-brass/50 py-1.5 pl-6 pr-1.5 text-sm text-brass transition-colors hover:border-brass hover:bg-brass hover:text-ink"
                  >
                    Submit inquiry
                    <span className="btn-pill-icon flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brass/15 text-brass">
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
                  </button>
                )}

                {franchiseSubmitted && (
                  <div className="rounded-[14px] border border-brass/20 bg-brass/10 px-4 py-3.5 text-sm text-brass">
                    ✓ Received — we&apos;ll follow up within 2 business days.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           FAQ
      ═══════════════════════════════════════════════════════════ */}
      <section className="px-6 py-20 sm:px-10 md:px-16 md:py-24 lg:px-24 xl:px-32">
        <div className="mx-auto max-w-2xl">
          <div className="reveal in mb-10">
            <div className="mb-3 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.14em] text-stone">
              <span className="text-accent">03</span>
              <span className="h-px w-5 bg-current opacity-40" />
              <span>Common questions</span>
            </div>
            <h2 className="font-serif text-[clamp(24px,3.5vw,34px)] font-normal">Quick answers</h2>
          </div>

          <div className="reveal in divide-y divide-line border-y border-line">
            {faqItems.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={item.question} className={`accordion-item py-1 ${isOpen ? "open" : ""}`}>
                  <button
                    className="flex w-full items-center justify-between gap-4 py-5 text-left text-[15px] font-medium"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                  >
                    {item.question}
                    <span className="accordion-icon flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-line text-lg leading-none text-stone">
                      +
                    </span>
                  </button>
                  <div className="accordion-body" style={isOpen ? { gridTemplateRows: "1fr" } : undefined}>
                    <div>
                      <p className="pb-5 text-[14px] leading-relaxed text-stone">{item.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
           NOTIFY
      ═══════════════════════════════════════════════════════════ */}
      <section className="border-t border-line bg-mineral">
        <div className="px-6 py-16 text-center sm:px-10 md:px-16 lg:px-24 xl:px-32">
          <div className="reveal in mx-auto max-w-lg">
            <h2 className="mb-2.5 font-serif text-[clamp(22px,3vw,28px)] font-normal">Get Notified When We Open Near You</h2>
            <p className="mb-7 text-sm text-stone">Be first to know about new kiosks and menu drops:</p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </main>
  );
}
