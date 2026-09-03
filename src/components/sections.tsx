import type { ReactNode } from "react";
import {
  business,
  categories,
  featuredProducts,
  galleryItems,
  images,
  openingHours,
  products,
} from "../data/content";
import { formatIDR, generalOrderMessage, href, useOpenNow, waLink } from "../lib/core";
import { ProductGrid } from "./product";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconClock,
  IconCup,
  IconInstagram,
  IconLeaf,
  IconPhone,
  IconPin,
  IconSpark,
  IconStar,
  IconWhatsApp,
  Reveal,
  SectionHeading,
  SpinBadge,
  Ticker,
} from "./ui";

/* ============================================================
   HERO — kolase editorial, bukan trio centered
   ============================================================ */

export function Hero() {
  const { open, label } = useOpenNow();

  return (
    <section className="dot-grid relative overflow-hidden pb-14 pt-28 sm:pt-32 lg:pb-20 lg:pt-36">
      {/* lingkaran dekoratif */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-28 -top-28 h-[30rem] w-[30rem] rounded-full border-[28px] border-mango/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-matcha/40 blur-2xl"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-6">
        {/* — kiri: pernyataan — */}
        <div className="relative z-10 lg:col-span-7">
          <p className="mask-line">
            <span style={{ ["--d" as string]: "60ms" }} className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-cream px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-leaf">
                <IconPin width={13} height={13} />
                Karawang Kulon · Jawa Barat
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-cream px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em]">
                <span
                  className={`h-2 w-2 rounded-full ${open ? "bg-wa animate-pulse-dot" : "bg-berry"}`}
                  aria-hidden="true"
                />
                {label}
              </span>
            </span>
          </p>

          <h1 className="font-display mt-6 text-[clamp(2.75rem,11.5vw,4.9rem)] font-extrabold leading-[0.98] tracking-tight sm:text-7xl lg:text-[5.4rem]">
            <span className="mask-line">
              <span style={{ ["--d" as string]: "140ms" }}>Segarnya</span>
            </span>
            <span className="mask-line">
              <span style={{ ["--d" as string]: "260ms" }} className="text-hollow">
                bikin
              </span>
            </span>
            <span className="mask-line">
              <span style={{ ["--d" as string]: "380ms" }}>
                <span className="squiggle">balik</span>{" "}
                <span className="text-mango-deep">lagi.</span>
              </span>
            </span>
          </h1>

          <p className="mask-line mt-6 max-w-lg">
            <span style={{ ["--d" as string]: "500ms" }} className="text-[1rem] leading-relaxed text-mute sm:text-lg">
              <strong className="font-bold text-ink">Shans Juice</strong> — juice buah beneran, kopi
              susu, indomie nyemek, sampai dimsum mentai. Nongkrong santai di tempat atau bungkus,
              sama-sama enak.
            </span>
          </p>

          <div className="mask-line mt-8">
            <span style={{ ["--d" as string]: "620ms" }} className="flex flex-wrap items-center gap-3">
              <a
                href={waLink(generalOrderMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 rounded-full bg-pine py-4 pl-6 pr-5 text-[0.95rem] font-extrabold text-cream shadow-lift transition-all duration-200 hover:-translate-y-1 hover:bg-leaf active:scale-[0.98]"
              >
                <IconWhatsApp width={19} height={19} className="text-mango" />
                Pesan Sekarang
                <IconArrowRight
                  width={17}
                  height={17}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
              <a
                href={href("menu")}
                className="flex items-center gap-2 rounded-full border-2 border-ink bg-cream px-6 py-[0.9rem] text-[0.95rem] font-extrabold transition-all duration-200 hover:-translate-y-1 hover:bg-mango hover:shadow-lift active:scale-[0.98]"
              >
                Lihat Menu
              </a>
            </span>
          </div>

          <div className="mask-line mt-9">
            <span style={{ ["--d" as string]: "720ms" }} className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.78rem] font-semibold text-mute">
              <span className="flex items-center gap-1.5">
                <IconCup width={15} height={15} className="text-leaf" />
                {products.length} menu &amp; terus bertambah
              </span>
              <span className="flex items-center gap-1.5">
                <IconClock width={15} height={15} className="text-leaf" />
                Buka sampai tengah malam
              </span>
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-ink"
              >
                <IconInstagram width={15} height={15} className="text-berry" />
                {business.instagram}
              </a>
            </span>
          </div>
        </div>

        {/* — kanan: kolase foto — */}
        <div className="relative lg:col-span-5">
          <Reveal delay={150}>
            <div className="relative mx-auto max-w-[26rem]">
              {/* frame utama */}
              <div
                className="kb-frame relative rotate-2 overflow-hidden rounded-2xl border-[3px] border-ink bg-cream shadow-lift"
                style={{ ["--tilt" as string]: "2deg" }}
              >
                <img
                  src={images.mangoThai}
                  alt="Mango Thai — smoothie mangga creamy andalan Shans Juice"
                  width={1024}
                  height={1280}
                  fetchPriority="high"
                  className="aspect-[4/5] w-full object-cover"
                />
                <span className="absolute bottom-4 left-4 rounded-md border-2 border-ink bg-mango px-3 py-1.5 font-display text-[0.72rem] font-extrabold uppercase tracking-[0.14em]">
                  Mango Thai · {formatIDR(18000)}
                </span>
              </div>

              {/* frame sekunder */}
              <div className="animate-bob absolute -bottom-10 -left-6 w-40 -rotate-6 overflow-hidden rounded-xl border-[3px] border-ink bg-cream shadow-lift sm:w-48 lg:-left-14">
                <img
                  src={images.strawberryThai}
                  alt="Strawberry Thai segar"
                  width={1024}
                  height={1024}
                  loading="eager"
                  className="aspect-square w-full object-cover"
                />
                <span className="block bg-cream px-3 py-2 text-center font-display text-[0.68rem] font-extrabold uppercase tracking-[0.1em]">
                  Strawberry Thai
                </span>
              </div>

              {/* stiker putar */}
              <SpinBadge
                className="absolute -right-6 -top-8 h-28 w-28 text-pine sm:-right-10 sm:h-36 sm:w-36"
                text="SEGAR • ASLI • HARGA TEMAN • SHANS JUICE • "
                center={
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mango text-ink sm:h-16 sm:w-16">
                    <IconCup width={30} height={30} strokeWidth={2} />
                  </span>
                }
              />

              {/* stiker jam buka */}
              <div className="absolute -right-2 bottom-16 rotate-6 rounded-lg border-2 border-ink bg-berry px-3 py-2 text-cream shadow-card sm:-right-8">
                <p className="font-display text-[0.7rem] font-extrabold uppercase tracking-[0.12em]">
                  Buka tiap hari
                </p>
                <p className="font-display text-xl font-extrabold leading-none">10.00–00.00</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function HeroTicker() {
  return (
    <Ticker
      items={[
        "Mango Thai",
        "Aren Milk Regal",
        "Strawberry Thai",
        "Indomie Nyemek",
        "Dimsum Mentai",
        "Es Kopi Susu Shan",
        "Green Tea Latte",
        "French Fries",
        "Silky Pudding",
        "Buka 10.00–00.00",
      ]}
    />
  );
}

/* ============================================================
   QUICK INFO — info penting ringkas
   ============================================================ */

export function QuickInfo() {
  const { open, label } = useOpenNow();
  const items = [
    {
      icon: <IconPin width={19} height={19} />,
      title: "Lokasi gampang dicari",
      value: "Jl. Anjun Kanoman, Karawang Kulon",
      href: business.mapsUrl,
      cta: "Lihat peta",
    },
    {
      icon: <IconClock width={19} height={19} />,
      title: label,
      value: "Setiap hari · 10.00–00.00 WIB",
      href: undefined,
      cta: undefined,
      badge: open ? "buka" : "tutup",
    },
    {
      icon: <IconPhone width={19} height={19} />,
      title: "Pesan cepat via WhatsApp",
      value: business.phoneDisplay,
      href: waLink(generalOrderMessage()),
      cta: "Chat sekarang",
    },
  ];

  return (
    <section aria-label="Informasi cepat" className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="grid gap-3 sm:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.title} delay={i * 80}>
            <div className="group flex h-full items-start gap-3.5 rounded-xl border border-line bg-cream p-4 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-lift">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pine text-mango transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                {it.icon}
              </span>
              <div className="min-w-0">
                <p className="flex flex-wrap items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-mute">
                  {it.title}
                  {it.badge && (
                    <span
                      className={`rounded-full px-2 py-0.5 text-[0.6rem] font-extrabold uppercase tracking-[0.1em] ${
                        it.badge === "buka" ? "bg-wa/15 text-wa-deep" : "bg-berry/15 text-berry"
                      }`}
                    >
                      {it.badge}
                    </span>
                  )}
                </p>
                <p className="mt-1 font-display text-[1.02rem] font-bold leading-snug">{it.value}</p>
                {it.href && it.cta && (
                  <a
                    href={it.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-flex items-center gap-1 text-[0.78rem] font-bold text-leaf transition-colors hover:text-mango-deep"
                  >
                    {it.cta}
                    <IconArrowUpRight width={13} height={13} />
                  </a>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   FEATURED MENU
   ============================================================ */

export function FeaturedSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6" aria-labelledby="featured-h">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Menu Andalan"
          title={
            <span id="featured-h">
              Yang paling sering <span className="text-mango-deep">balik dipesan.</span>
            </span>
          }
          desc="Nggak perlu mikir lama — mulai dari sini. Semua dibuat dadakan pas kamu pesan."
        />
        <Reveal delay={120}>
          <a
            href={href("menu")}
            className="group flex items-center gap-2 rounded-full border-2 border-ink bg-cream px-5 py-3 text-[0.85rem] font-extrabold transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-cream"
          >
            Semua menu ({products.length})
            <IconArrowRight width={16} height={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </Reveal>
      </div>

      <div className="mt-10">
        <ProductGrid items={featuredProducts} eagerCount={3} />
      </div>
    </section>
  );
}

/* ============================================================
   CATEGORY SHOWCASE
   ============================================================ */

export function CategorySection() {
  return (
    <section className="border-y border-line bg-cream py-20" aria-labelledby="cat-h">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Kategori"
          title={
            <span id="cat-h">
              Hari ini lagi <span className="squiggle">pengen</span> yang mana?
            </span>
          }
          desc="Enam rak menu, dari yang seger-seger sampai yang anget-anget."
        />
        <div className="mt-10 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c, i) => {
            const count = products.filter((p) => p.category === c.id).length;
            return (
              <Reveal key={c.id} delay={i * 60}>
                <a
                  href={href(`menu/${c.id}`)}
                  className="group flex h-full flex-col rounded-xl border border-line bg-paper p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-pine/40 hover:shadow-lift"
                >
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-full ${c.tintBg} ${c.tintText} transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}
                  >
                    <DoodleMini doodle={c.doodle} />
                  </span>
                  <span className="font-display mt-3 text-lg font-extrabold leading-tight">{c.label}</span>
                  <span className="mt-1 line-clamp-2 text-[0.72rem] leading-snug text-mute">{c.tagline}</span>
                  <span className="mt-auto flex items-center justify-between pt-3 text-[0.7rem] font-bold uppercase tracking-[0.12em] text-leaf">
                    {count} menu
                    <IconArrowUpRight
                      width={14}
                      height={14}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* doodle mini dipakai di tile kategori */
function DoodleMini({ doodle }: { doodle: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth={4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {doodle === "mango" && <path d="M26 20c-10 4-14 14-10 24 4 10 16 14 24 8 10-7 10-22 2-30M50 18c2-4 6-6 10-5" />}
      {doodle === "cup" && <path d="M24 26h32l-4 32H28l-4-32ZM22 26h36M34 26l8-12" />}
      {doodle === "bean" && <><ellipse cx="36" cy="40" rx="13" ry="18" transform="rotate(-18 36 40)" /><path d="M31 26c7 7 7 21-1 27" /></>}
      {doodle === "noodles" && <path d="M18 36h44c0 12-9 20-22 20S18 48 18 36ZM24 36c4-8 10-8 14 0M38 36c4-8 10-8 14 0" />}
      {doodle === "dumpling" && <path d="M20 44c0-13 9-22 20-22s20 9 20 22v3H20v-3ZM30 26l4 6M40 22v7M50 26l-4 6" />}
      {doodle === "toast" && <path d="M24 34a8 8 0 0 1 4-13c3 0 6 1 8 4h8c2-3 5-4 8-4a8 8 0 0 1 4 13v20H24V34ZM32 42l16 8M48 42l-16 8" />}
    </svg>
  );
}

/* ============================================================
   ABOUT (versi home) — sticky dua kolom
   ============================================================ */

export function AboutSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6" aria-labelledby="about-h">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Tentang Shans Juice"
            title={
              <span id="about-h">
                Bukan cuma tempat beli minum — <span className="text-hollow">tapi tempat balik.</span>
              </span>
            }
          />
          <Reveal delay={120}>
            <div className="mt-6 max-w-xl space-y-4 text-[0.95rem] leading-relaxed text-mute">
              <p>
                Di Shans Juice, juice diblender <strong className="font-bold text-ink">dadakan dari buah asli</strong>,
                kopi diseduh pas dipesan, dan indomie nyemek diangkat selagi panas. Nggak ada yang
                dibuat buru-buru, karena rasanya kerasa bedanya.
              </p>
              <p>
                Tempatnya santai — pas buat <strong className="font-bold text-ink">nongkrong, ngerjain tugas, atau
                sekadar ngobrol panjang</strong> sampai malam. Buka sampai jam 12, jadi nggak ada cerita
                diusir karena kelamaan.
              </p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {["Buah diblender dadakan", "Harga bersahabat", "Buka sampai tengah malam", "Asyik buat nongkrong"].map(
                (t) => (
                  <li
                    key={t}
                    className="flex items-center gap-1.5 rounded-full border border-line bg-cream px-3.5 py-2 text-[0.75rem] font-bold text-leaf transition-colors hover:border-leaf"
                  >
                    <IconLeaf width={14} height={14} className="text-mango-deep" />
                    {t}
                  </li>
                )
              )}
            </ul>
            <a
              href={href("tentang")}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-pine px-6 py-3.5 text-[0.88rem] font-extrabold text-cream transition-all hover:-translate-y-0.5 hover:bg-leaf hover:shadow-lift"
            >
              Kenalan lebih dekat
              <IconArrowRight width={16} height={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="relative">
            <div className="kb-frame rotate-1 overflow-hidden rounded-2xl border-[3px] border-ink shadow-lift">
              <img
                src={images.interior}
                alt="Suasana santai di dalam Shans Juice"
                width={1280}
                height={1024}
                loading="lazy"
                className="aspect-[5/4] w-full object-cover"
              />
            </div>
            <SpinBadge
              className="absolute -left-7 -top-8 h-28 w-28 text-berry sm:h-32 sm:w-32"
              text="NONGKRONG • NGOBROL • SANTAI • SAMPAI MALAM • "
              center={
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream shadow-card">
                  <IconSpark width={20} height={20} className="text-berry" />
                </span>
              }
            />
            <div className="absolute -bottom-6 right-4 -rotate-2 rounded-xl border-2 border-ink bg-mango px-4 py-3 shadow-card sm:right-8">
              <p className="font-display text-[0.68rem] font-extrabold uppercase tracking-[0.14em]">
                Spot favorit
              </p>
              <p className="font-display text-lg font-extrabold leading-tight">
                Meja sudut dekat jendela
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   GALLERY (versi home) — mosaik + zoom pelan
   ============================================================ */

export function GallerySection() {
  const picks = [galleryItems[0], galleryItems[2], galleryItems[3], galleryItems[4], galleryItems[10]];
  return (
    <section className="border-y border-line bg-cream py-20" aria-labelledby="gallery-h">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Suasana & Rasa"
            title={
              <span id="gallery-h">
                Liatin dulu, <span className="text-mango-deep">ngiler belakangan.</span>
              </span>
            }
          />
          <Reveal delay={120}>
            <a
              href={href("galeri")}
              className="group flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-5 py-3 text-[0.85rem] font-extrabold transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-cream"
            >
              Buka galeri
              <IconArrowRight width={16} height={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3.5 sm:grid-cols-4">
          {picks.map((g, i) => (
            <Reveal key={i} delay={i * 70} className={i === 0 ? "col-span-2 row-span-2" : ""}>
              <figure className={`kb-frame group relative overflow-hidden rounded-xl border border-line ${i === 0 ? "h-full min-h-[16rem]" : "aspect-square"}`}>
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-pine/85 to-transparent px-4 pb-3 pt-10 text-[0.75rem] font-bold text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {g.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SOCIAL / INSTAGRAM
   ============================================================ */

export function SocialSection() {
  const tiles = [images.strawberryThai, images.dimsum, images.arenRegal, images.fries];
  return (
    <section className="dot-grid-light relative overflow-hidden bg-pine py-20 text-cream" aria-labelledby="social-h">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading
              light
              eyebrow="Ikuti Kami"
              title={
                <span id="social-h">
                  Menu baru & promo <br />
                  nongol duluan di{" "}
                  <a
                    href={business.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mango underline decoration-wavy decoration-2 underline-offset-4 transition-colors hover:text-cream"
                  >
                    Instagram.
                  </a>
                </span>
              }
              desc={
                <>
                  Follow <strong className="font-bold text-cream">{business.instagram}</strong> buat lihat menu
                  hari ini, promo dadakan, dan momen nongkrong pelanggan. Jangan sampai kelewatan.
                </>
              }
            />
            <Reveal delay={140}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 rounded-full bg-mango px-6 py-3.5 text-[0.9rem] font-extrabold text-ink transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <IconInstagram width={19} height={19} />
                  Lihat Instagram
                  <IconArrowUpRight width={16} height={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-full border-2 border-cream/30 px-6 py-3.5 text-[0.9rem] font-extrabold transition-all hover:-translate-y-1 hover:border-mango hover:text-mango"
                >
                  <IconStar width={17} height={17} />
                  Ulasan Google
                </a>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {tiles.map((src, i) => (
              <Reveal key={src} delay={i * 70}>
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Lihat postingan di Instagram Shans Juice"
                  className={`kb-frame group relative block overflow-hidden rounded-xl border border-cream/15 ${
                    i === 1 ? "translate-y-4" : i === 3 ? "-translate-y-2" : ""
                  }`}
                >
                  <img src={src} alt="" loading="lazy" width={1024} height={1024} className="aspect-square w-full object-cover" />
                  <span className="absolute inset-0 flex items-center justify-center bg-pine/0 transition-all duration-300 group-hover:bg-pine/45">
                    <IconInstagram width={28} height={28} className="scale-50 text-cream opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   REVIEWS — jujur: placeholder sampai ulasan asli tersedia
   ============================================================ */

export function ReviewsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6" aria-labelledby="reviews-h">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
        <SectionHeading
          eyebrow="Ulasan Pengunjung"
          title={
            <span id="reviews-h">
              Kami nggak mau <span className="squiggle">ngarang</span> pujian.
            </span>
          }
          desc={
            <>
              Slot di samping kami simpan untuk <strong className="font-bold text-ink">ulasan asli dari Google Maps</strong>.
              Kalau sudah pernah mampir, ceritain pengalamanmu — review kamu bantu tetangga Karawang
              nemu tempat ini.
            </>
          }
        />
        <Reveal delay={120}>
          <div className="grid gap-3.5 sm:grid-cols-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`rounded-xl border-2 border-dashed border-line bg-cream/60 p-5 transition-colors hover:border-mango ${
                  i === 0 ? "sm:row-span-2 sm:flex sm:flex-col sm:justify-center" : ""
                }`}
              >
                <div className="flex gap-1 text-mango/45" aria-hidden="true">
                  {[...Array(5)].map((_, s) => (
                    <IconStar key={s} width={15} height={15} />
                  ))}
                </div>
                <p className={`font-display mt-3 font-bold leading-snug text-mute ${i === 0 ? "text-xl" : "text-[0.95rem]"}`}>
                  “Ulasan asli pelanggan akan tampil di sini.”
                </p>
                <p className="mt-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-mute/70">
                  — Segera dari Google Maps
                </p>
              </div>
            ))}
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-xl bg-pine p-5 text-cream transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              <span>
                <span className="font-display block text-lg font-extrabold">Habis mampir?</span>
                <span className="text-[0.78rem] text-cream/70">Beri ulasan di Google Maps</span>
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mango text-ink transition-transform duration-300 group-hover:rotate-45">
                <IconArrowUpRight width={18} height={18} />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   LOCATION (versi home)
   ============================================================ */

export function LocationSection() {
  return (
    <section className="border-t border-line bg-cream py-20" aria-labelledby="loc-h">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-stretch">
        <div className="flex flex-col">
          <SectionHeading
            eyebrow="Lokasi"
            title={
              <span id="loc-h">
                Mampir? Gampang, <span className="text-mango-deep">deket kok.</span>
              </span>
            }
            desc="Di Karawang Kulon — tinggal klik, Google Maps langsung anterin ke depan pintu."
          />
          <Reveal delay={120}>
            <address className="mt-7 not-italic">
              <p className="font-display text-xl font-extrabold">Shans Juice</p>
              <p className="mt-1.5 text-[0.92rem] leading-relaxed text-mute">
                {business.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </p>
            </address>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 rounded-full bg-pine px-6 py-3.5 text-[0.9rem] font-extrabold text-cream transition-all hover:-translate-y-1 hover:bg-leaf hover:shadow-lift"
              >
                <IconPin width={18} height={18} className="text-mango" />
                Buka di Google Maps
                <IconArrowUpRight width={15} height={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={waLink(generalOrderMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border-2 border-ink bg-paper px-6 py-3.5 text-[0.9rem] font-extrabold transition-all hover:-translate-y-1 hover:bg-mango hover:shadow-lift"
              >
                <IconWhatsApp width={18} height={18} />
                {business.phoneDisplay}
              </a>
            </div>
            <div className="mt-7 rounded-xl border border-line bg-paper p-4">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.14em] text-mute">Jam buka</p>
              <ul className="mt-2 space-y-1.5">
                {openingHours.map((h) => (
                  <li key={h.day} className="flex items-center justify-between text-[0.85rem] font-semibold">
                    <span className="text-mute">{h.day}</span>
                    <span className="font-display font-bold">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={160} className="min-h-[22rem]">
          <div className="relative h-full overflow-hidden rounded-2xl border-[3px] border-ink shadow-lift">
            <iframe
              src={business.mapsEmbed}
              title="Peta lokasi Shans Juice di Google Maps"
              loading="lazy"
              className="absolute inset-0 h-full w-full"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="pointer-events-none absolute left-4 top-4 rounded-lg border-2 border-ink bg-mango px-3 py-2 shadow-card">
              <p className="font-display text-[0.72rem] font-extrabold uppercase tracking-[0.12em]">
                Shans Juice
              </p>
              <p className="text-[0.68rem] font-semibold">Karawang Kulon</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   FINAL CTA — energi terakhir sebelum footer
   ============================================================ */

export function FinalCTA() {
  return (
    <section className="dot-grid relative overflow-hidden bg-mango py-20" aria-labelledby="cta-h">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full border-[20px] border-ink/10"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
          <Reveal>
            <p className="flex items-center gap-2 text-[0.72rem] font-extrabold uppercase tracking-[0.24em] text-ink/70">
              <IconSpark width={14} height={14} />
              Nggak usah mikir kelamaan
            </p>
            <h2 id="cta-h" className="font-display mt-4 text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Haus? Laper? <br />
              Atau cuma <span className="text-hollow">pengen nongkrong?</span>
            </h2>
            <p className="mt-5 max-w-md text-[0.95rem] font-semibold leading-relaxed text-ink/75">
              Semua alasannya valid. Chat aja dulu — bilang mau pesan apa, atau langsung gas ke
              Karawang Kulon.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="flex flex-col gap-3.5 sm:flex-row lg:flex-col">
              <a
                href={waLink(generalOrderMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 rounded-full bg-pine px-8 py-5 text-[1rem] font-extrabold text-cream shadow-lift transition-all hover:-translate-y-1 hover:bg-ink active:scale-[0.98]"
              >
                <IconWhatsApp width={20} height={20} className="text-mango" />
                Pesan Sekarang
                <IconArrowRight width={17} height={17} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border-[2.5px] border-ink px-8 py-5 text-[1rem] font-extrabold transition-all hover:-translate-y-1 hover:bg-cream hover:shadow-lift active:scale-[0.98]"
              >
                <IconPin width={19} height={19} />
                Arahkan ke Lokasi
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PAGE HEADER — utk halaman sub
   ============================================================ */

export function PageHeader({
  eyebrow,
  title,
  desc,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  desc?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="dot-grid border-b border-line pb-12 pt-28 sm:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="mask-line">
          <span className="flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-leaf">
            <IconSpark width={14} height={14} />
            {eyebrow}
          </span>
        </p>
        <h1 className="font-display mask-line mt-3">
          <span style={{ ["--d" as string]: "120ms" }} className="text-5xl font-extrabold leading-[1] tracking-tight sm:text-6xl">
            {title}
          </span>
        </h1>
        {desc && (
          <p className="mask-line mt-4 max-w-2xl">
            <span style={{ ["--d" as string]: "240ms" }} className="text-[0.95rem] leading-relaxed text-mute sm:text-lg">
              {desc}
            </span>
          </p>
        )}
        {children}
      </div>
    </header>
  );
}
