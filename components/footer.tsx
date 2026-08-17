type FooterLink = {
  href: string;
  label: string;
  external?: boolean;
};

const footerLinks: [FooterLink[], FooterLink[]] = [
  [
    { href: "/", label: "Home" },
    { href: "/#menu", label: "Menu" },
    { href: "/#purity", label: "Purity" },
    { href: "/#locations", label: "Locations" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/shop", label: "Shop" },
  ],
  [
    {
      href: "https://wa.me/27832226766?text=Hi%20Naturesip%2C%20I%27d%20like%20to%20know%20more",
      label: "WhatsApp",
      external: true,
    },
    { href: "#", label: "Instagram" },
    { href: "#", label: "TikTok" },
  ],
];

function BrandMark() {
  return (
    <svg viewBox="0 0 24 30" fill="none" className="h-5 w-4" aria-hidden="true">
      <path d="M12 0C12 0 2 14 2 20a10 10 0 0020 0C22 14 12 0 12 0z" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function Footer({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <section className="bg-mineral">
        <footer className="px-6 py-14 sm:px-10 md:px-16 md:py-16 lg:px-24 xl:px-32">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div className="max-w-xs">
              <div className="mb-4 flex items-center gap-2">
                <BrandMark />
                <span className="text-[20px] font-semibold tracking-[0.2em]">NATURESIP</span>
              </div>
              <p className="mb-4 text-[13px] text-stone">Pure refills, fruit slushies, and fresh-cut fruit in Soweto.</p>
            </div>
            <div className="flex gap-14">
              <div>
                <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-stone">Navigate</h4>
                {footerLinks[0].map((link) => (
                  <a key={link.label} href={link.href} className="mb-2.5 block text-sm transition-colors hover:text-teal">
                    {link.label}
                  </a>
                ))}
              </div>
              <div>
                <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-stone">Social</h4>
                {footerLinks[1].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener" } : {})}
                    className="mb-2.5 block text-sm transition-colors hover:text-teal"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap justify-between gap-2.5 border-t border-line pt-6 font-mono text-xs text-stone">
            <span>Naturesip Water &amp; Fruit Bar — Lower Level, Maponya Mall, Soweto, Johannesburg</span>
            <span>&copy; 2026 Naturesip All rights reserved.</span>
          </div>
        </footer>
      </section>
    );
  }

  return (
    <section className="bg-mineral px-4 pb-4 pt-16 sm:px-6 sm:pb-6 md:px-8 md:pb-8">
      <div className="overflow-hidden rounded-[28px] bg-white">
        <footer className="border-t border-line pb-7 pt-16">
          <div className="px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32">
            <div className="flex flex-wrap justify-between gap-10">
              <div className="max-w-xs">
                <div className="mb-4 flex items-center gap-2">
                  <BrandMark />
                  <span className="text-[20px] font-semibold tracking-[0.2em]">NATURESIP</span>
                </div>
                <p className="text-[13px] text-stone">Pure refills, fruit slushies, and fresh-cut fruit in Soweto.</p>
              </div>

              <div className="flex gap-16">
                <div>
                  <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-stone">Navigate</h4>
                  <div>
                    {footerLinks[0].map((link) => (
                      <a key={link.label} href={link.href} className="mb-2.5 block text-sm transition-colors hover:text-teal">
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mb-4 font-mono text-xs uppercase tracking-[0.08em] text-stone">Social</h4>
                  <div>
                    {footerLinks[1].map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        {...(link.external ? { target: "_blank", rel: "noopener" } : {})}
                        className="mb-2.5 block text-sm transition-colors hover:text-teal"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 flex flex-wrap justify-between gap-2.5 border-t border-line pt-6 font-mono text-xs text-stone">
              <span>Naturesip Water &amp; Fruit Bar — Lower Level, Maponya Mall, Soweto, Johannesburg</span>
              <span>&copy; 2026 Naturesip All rights reserved.</span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
