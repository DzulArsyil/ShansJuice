import { useEffect, useMemo, useState } from "react";
import {
  business,
  categories,
  galleryItems,
  images,
  openingHours,
  products,
} from "./data/content";
import { generalOrderMessage, href, waLink } from "./lib/core";
import { ProductGrid, CategoryFilter } from "./components/product";
import {
  AboutSection,
  CategorySection,
  FeaturedSection,
  FinalCTA,
  GallerySection,
  Hero,
  HeroTicker,
  LocationSection,
  PageHeader,
  QuickInfo,
  ReviewsSection,
  SocialSection,
} from "./components/sections";
import {
  IconArrowUpRight,
  IconBag,
  IconClock,
  IconCup,
  IconInstagram,
  IconPhone,
  IconPin,
  IconSearch,
  IconSpark,
  IconWhatsApp,
  IconX,
  Reveal,
  SectionHeading,
  SpinBadge,
} from "./components/ui";

/* ============================================================
   HOME
   ============================================================ */

export function HomePage() {
  return (
    <>
      <Hero />
      <HeroTicker />
      <QuickInfo />
      <FeaturedSection />
      <CategorySection />
      <AboutSection />
      <GallerySection />
      <SocialSection />
      <ReviewsSection />
      <LocationSection />
      <FinalCTA />
    </>
  );
}

/* ============================================================
   MENU — filter kategori + pencarian + langkah pesan
   ============================================================ */

export function MenuPage({ initialCat }: { initialCat?: string }) {
  const validIds = ["semua", ...categories.map((c) => c.id)];
  const [cat, setCat] = useState(() =>
    initialCat && validIds.includes(initialCat) ? initialCat : "semua"
  );
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (initialCat && validIds.includes(initialCat)) setCat(initialCat);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialCat]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const okCat = cat === "semua" || p.category === cat;
      const okQ = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
      return okCat && okQ;
    });
  }, [cat, query]);

  const activeCat = categories.find((c) => c.id === cat);

  return (
    <>
      <PageHeader
        eyebrow="Menu Lengkap"
        title={
          <>
            Pilih, tambah, <span className="squiggle">kirim.</span>
          </>
        }
        desc="Semua menu Shans Juice dalam satu halaman. Tandai yang kamu mau, lalu kirim pesanannya lewat WhatsApp — nggak pakai ribet."
      >
        {/* langkah pesan */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-0">
          {[
            { icon: <IconCup width={17} height={17} />, text: "Pilih menu favoritmu" },
            { icon: <IconBag width={17} height={17} />, text: "Tambah ke pesanan" },
            { icon: <IconWhatsApp width={17} height={17} />, text: "Kirim via WhatsApp" },
          ].map((s, i) => (
            <div key={s.text} className="flex items-center">
              <span className="flex items-center gap-2.5 rounded-full border border-line bg-cream px-4 py-2.5 text-[0.8rem] font-bold shadow-card">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-pine font-display text-[0.68rem] font-extrabold text-mango">
                  {i + 1}
                </span>
                {s.text}
              </span>
              {i < 2 && (
                <span className="mx-3 hidden h-[2px] w-8 border-t-2 border-dashed border-ink/30 sm:block" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6" aria-label="Daftar menu">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <CategoryFilter active={cat} onChange={setCat} />
          <div className="relative lg:w-72">
            <IconSearch
              width={17}
              height={17}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-mute"
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari menu… (mis. mangga)"
              aria-label="Cari menu"
              className="w-full rounded-full border border-line bg-cream py-3 pl-11 pr-4 text-[0.85rem] font-semibold placeholder:text-mute/70 focus:border-pine focus:outline-none"
            />
          </div>
        </div>

        {activeCat && (
          <p className="mt-5 flex items-center gap-2 text-[0.82rem] font-semibold text-mute" aria-live="polite">
            <IconSpark width={13} height={13} className="text-mango-deep" />
            {activeCat.tagline} — {filtered.length} menu
          </p>
        )}

        {filtered.length > 0 ? (
          <div className="mt-6">
            <ProductGrid items={filtered} eagerCount={4} />
          </div>
        ) : (
          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border-2 border-dashed border-line bg-cream/60 px-6 py-16 text-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-matcha text-leaf">
              <IconSearch width={34} height={34} strokeWidth={1.5} />
            </span>
            <div>
              <p className="font-display text-2xl font-extrabold">Nggak ketemu?</p>
              <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-mute">
                Coba kata kunci lain, atau langsung tanya aja — siapa tahu menu yang kamu cari
                lagi tersedia hari ini.
              </p>
            </div>
            <a
              href={waLink(
                `Halo Shans Juice 👋\n\nApakah ${query ? `"${query}"` : "menu yang saya cari"} tersedia hari ini?\nTerima kasih.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-wa px-6 py-3 text-sm font-extrabold text-cream transition-all hover:bg-wa-deep active:scale-[0.98]"
            >
              <IconWhatsApp width={17} height={17} />
              Tanya via WhatsApp
            </a>
            <button
              onClick={() => {
                setQuery("");
                setCat("semua");
              }}
              className="flex items-center gap-1.5 text-[0.78rem] font-bold text-mute underline underline-offset-4 transition-colors hover:text-ink"
            >
              <IconX width={13} height={13} />
              Reset pencarian
            </button>
          </div>
        )}

        <p className="mt-10 rounded-xl border border-line bg-cream/70 px-5 py-4 text-[0.75rem] leading-relaxed text-mute">
          <strong className="font-bold text-ink">Catatan:</strong> daftar menu & harga di atas
          merupakan referensi dari listing publik Shans Juice dan dapat berubah sewaktu-waktu.
          Ketersediaan dan total final selalu dikonfirmasi via WhatsApp sebelum pesanan diproses.
        </p>
      </section>

      <FinalCTA />
    </>
  );
}

/* ============================================================
   TENTANG
   ============================================================ */

export function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tentang Kami"
        title={
          <>
            Kedai kecil, <span className="squiggle">niatnya besar.</span>
          </>
        }
        desc="Shans Juice adalah kedai juice & camilan lokal di Karawang Kulon — tempat orang datang buat yang segar-segar, dan pulang bawa cerita."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Cerita Kami"
              title={
                <>
                  Semua dimulai dari hal simpel: <span className="text-mango-deep">bikin yang seger.</span>
                </>
              }
            />
            <Reveal delay={120}>
              <div className="mt-6 max-w-xl space-y-4 text-[0.95rem] leading-relaxed text-mute">
                <p>
                  Kami percaya minuman enak itu nggak perlu ribet — buah yang beneran buah, susu
                  yang beneran susu, dan gula yang takarannya pas. Makanya juice di sini{" "}
                  <strong className="font-bold text-ink">diblender pas kamu pesan</strong>, bukan
                  dari stok yang dibuat pagi-pagi.
                </p>
                <p>
                  Karena yang datang nggak cuma cari minum, menunya pelan-pelan nambah: kopi buat
                  yang butuh melek, <strong className="font-bold text-ink">indomie nyemek</strong>{" "}
                  buat yang laper beneran, sampai{" "}
                  <strong className="font-bold text-ink">dimsum mentai</strong> buat yang mau
                  nyemil agak mewah.
                </p>
                <p>
                  Sisanya biar suasana yang bicara: meja yang nyaman, musik yang nggak maksa, dan
                  jam buka sampai tengah malam — karena ngobrol seru jarang selesai jam sembilan.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="relative">
              <div className="kb-frame -rotate-1 overflow-hidden rounded-2xl border-[3px] border-ink shadow-lift">
                <img
                  src={images.interior}
                  alt="Suasana hangat di dalam Shans Juice"
                  width={1280}
                  height={1024}
                  className="aspect-[5/4] w-full object-cover"
                />
              </div>
              <SpinBadge
                className="absolute -right-6 -top-9 h-28 w-28 text-leaf sm:h-36 sm:w-36"
                text="JUICE • KOPI • INDOMIE • CAMILAN • DESSERT • "
                center={
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-berry text-cream sm:h-14 sm:w-14">
                    <IconSpark width={22} height={22} />
                  </span>
                }
              />
            </div>
          </Reveal>
        </div>

        {/* nilai — editorial list, bukan kartu seragam */}
        <div className="mt-20 grid gap-0 lg:grid-cols-3">
          {[
            {
              n: "01",
              t: "Buah & bahan beneran",
              d: "Mangga ya mangga, stroberi ya stroberi. Diblender dadakan, rasanya jujur.",
            },
            {
              n: "02",
              t: "Harga masih temenan",
              d: "Mulai dari 10 ribuan. Nongkrong lama tanpa bikin dompet kaget.",
            },
            {
              n: "03",
              t: "Tempatnya bikin betah",
              d: "Santai, nggak buru-buru, buka sampai jam 12 malam. Pulangnya pasti balik lagi.",
            },
          ].map((v, i) => (
            <Reveal key={v.n} delay={i * 100}>
              <div className="group border-t-2 border-ink px-0 py-7 transition-colors lg:border-t-0 lg:border-l-2 lg:px-8 lg:first:border-l-0 lg:first:pl-0">
                <p className="font-display text-5xl font-extrabold text-mango transition-transform duration-300 group-hover:-translate-y-1">
                  {v.n}
                </p>
                <h3 className="font-display mt-4 text-2xl font-extrabold tracking-tight">{v.t}</h3>
                <p className="mt-2 max-w-xs text-[0.9rem] leading-relaxed text-mute">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* cocok buat */}
        <Reveal>
          <div className="mt-16 rounded-2xl border-[3px] border-ink bg-mango p-8 shadow-lift sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-ink/60">
                  Paling pas buat
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {["Nongkrong santai", "Ngerjain tugas", "Ngobrol panjang", "Bungkus takeaway", "Pesanan rame-rame"].map(
                    (t) => (
                      <span
                        key={t}
                        className="rounded-full border-2 border-ink bg-cream px-4 py-2 text-[0.8rem] font-extrabold transition-transform hover:-rotate-2 hover:scale-105"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </div>
              <a
                href={href("menu")}
                className="group flex items-center gap-2.5 rounded-full bg-pine px-7 py-4 text-[0.95rem] font-extrabold text-cream transition-all hover:-translate-y-1 hover:shadow-lift active:scale-[0.98]"
              >
                Intip menunya
                <IconArrowUpRight width={17} height={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <FinalCTA />
    </>
  );
}

/* ============================================================
   GALERI — masonry + filter grup
   ============================================================ */

export function GalleryPage() {
  const groups = [
    { id: "semua", label: "Semua" },
    { id: "minuman", label: "Minuman" },
    { id: "makanan", label: "Makanan" },
    { id: "suasana", label: "Suasana" },
  ];
  const [group, setGroup] = useState("semua");
  const items = galleryItems.filter((g) => group === "semua" || g.group === group);

  return (
    <>
      <PageHeader
        eyebrow="Galeri"
        title={
          <>
            Bukti, bukan <span className="squiggle">janji.</span>
          </>
        }
        desc="Minuman, makanan, dan suasana Shans Juice. Postingan lengkap & terbaru ada di Instagram @shansjuice."
      >
        <div className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-1">
          {groups.map((g) => (
            <button
              key={g.id}
              onClick={() => setGroup(g.id)}
              aria-pressed={group === g.id}
              className={`shrink-0 rounded-full border px-4 py-2.5 text-[0.82rem] font-bold transition-all duration-200 ${
                group === g.id
                  ? "border-pine bg-pine text-cream shadow-lift"
                  : "border-line bg-cream hover:-translate-y-0.5 hover:border-pine/40"
              }`}
            >
              {g.label}
            </button>
          ))}
        </div>
      </PageHeader>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6" aria-label="Galeri foto">
        <div className="columns-2 gap-3.5 md:columns-3 lg:columns-4">
          {items.map((g, i) => (
            <Reveal key={`${g.src}-${i}`} delay={(i % 4) * 60} className="mb-3.5 break-inside-avoid">
              <figure
                className={`kb-frame group relative overflow-hidden rounded-xl border border-line ${
                  g.tall ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <img
                  src={g.src}
                  alt={g.caption}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-pine/90 to-transparent px-4 pb-3.5 pt-12 text-[0.78rem] font-bold text-cream opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {g.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border-[3px] border-ink bg-pine p-8 text-cream shadow-lift sm:flex-row sm:p-10">
            <div>
              <p className="flex items-center gap-2 text-[0.72rem] font-extrabold uppercase tracking-[0.22em] text-mango">
                <IconInstagram width={16} height={16} />
                {business.instagram}
              </p>
              <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Foto terbaru? Adanya di Instagram.
              </h2>
              <p className="mt-2 max-w-md text-[0.88rem] text-cream/70">
                Menu baru, promo dadakan, sampai repost momen pelanggan — semua mampir di feed
                duluan.
              </p>
            </div>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex shrink-0 items-center gap-2.5 rounded-full bg-mango px-7 py-4 text-[0.95rem] font-extrabold text-ink transition-all hover:-translate-y-1 hover:shadow-lift"
            >
              Follow {business.instagram}
              <IconArrowUpRight width={17} height={17} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        <p className="mt-8 text-center text-[0.72rem] text-mute">
          Foto di galeri ini bersifat ilustratif-representatif untuk menggambarkan menu & suasana.
        </p>
      </section>

      <FinalCTA />
    </>
  );
}

/* ============================================================
   LOKASI
   ============================================================ */

export function LocationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Lokasi & Kontak"
        title={
          <>
            Mampir, yuk — <span className="squiggle">alamatnya gampang.</span>
          </>
        }
        desc="Shans Juice ada di Karawang Kulon, gampang dijangkau dari pusat Karawang. Klik tombolnya, Google Maps yang sisanya."
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
          {/* info */}
          <div className="flex flex-col gap-4">
            <Reveal>
              <div className="rounded-2xl border-[3px] border-ink bg-cream p-6 shadow-card">
                <p className="flex items-center gap-2 text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-leaf">
                  <IconPin width={15} height={15} />
                  Alamat
                </p>
                <address className="font-display mt-3 text-2xl font-extrabold not-italic leading-snug">
                  Jl. Anjun Kanoman,
                  <br />
                  Karawang Kulon
                </address>
                <p className="mt-2 text-[0.88rem] leading-relaxed text-mute">
                  Kec. Karawang Barat, Karawang,
                  <br />
                  Jawa Barat 41311
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="rounded-2xl border-[3px] border-ink bg-pine p-6 text-cream shadow-card">
                <p className="flex items-center gap-2 text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-mango">
                  <IconClock width={15} height={15} />
                  Jam Buka
                </p>
                <ul className="mt-4 space-y-2.5">
                  {openingHours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between border-b border-dashed border-cream/15 pb-2.5 text-[0.88rem] last:border-0 last:pb-0">
                      <span className="font-semibold text-cream/70">{h.day}</span>
                      <span className="font-display text-lg font-extrabold text-mango">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[0.7rem] text-cream/50">Waktu Indonesia Barat</p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={`tel:+${business.phoneRaw}`}
                  className="group flex items-center gap-3 rounded-2xl border-[3px] border-ink bg-cream p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-matcha text-leaf transition-transform duration-300 group-hover:scale-110">
                    <IconPhone width={19} height={19} />
                  </span>
                  <span>
                    <span className="block text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-mute">Telepon</span>
                    <span className="font-display text-[0.95rem] font-extrabold">{business.phoneDisplay}</span>
                  </span>
                </a>
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border-[3px] border-ink bg-cream p-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-berry/15 text-berry transition-transform duration-300 group-hover:scale-110">
                    <IconInstagram width={19} height={19} />
                  </span>
                  <span>
                    <span className="block text-[0.65rem] font-extrabold uppercase tracking-[0.14em] text-mute">Instagram</span>
                    <span className="font-display text-[0.95rem] font-extrabold">{business.instagram}</span>
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <a
                href={waLink(generalOrderMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl bg-wa p-6 text-cream shadow-lift transition-all hover:-translate-y-1 hover:bg-wa-deep"
              >
                <span>
                  <span className="font-display block text-xl font-extrabold">Mau pesan dulu sebelum sampai?</span>
                  <span className="text-[0.8rem] text-cream/80">Chat WhatsApp — pesanan siap pas kamu datang.</span>
                </span>
                <IconWhatsApp width={30} height={30} className="shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6" />
              </a>
            </Reveal>
          </div>

          {/* peta */}
          <Reveal delay={120} className="min-h-[26rem]">
            <div className="relative h-full min-h-[26rem] overflow-hidden rounded-2xl border-[3px] border-ink shadow-lift">
              <iframe
                src={business.mapsEmbed}
                title="Peta Google Maps lokasi Shans Juice"
                loading="lazy"
                className="absolute inset-0 h-full w-full"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="pointer-events-none absolute left-4 top-4 rounded-lg border-2 border-ink bg-mango px-3.5 py-2 shadow-card">
                <p className="font-display text-[0.75rem] font-extrabold uppercase tracking-[0.12em]">Shans Juice</p>
                <p className="text-[0.68rem] font-semibold">Karawang Kulon, Jawa Barat</p>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-between gap-2">
                <a
                  href={business.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-full bg-pine px-5 py-3 text-[0.82rem] font-extrabold text-cream shadow-lift transition-all hover:bg-leaf"
                >
                  <IconPin width={16} height={16} className="text-mango" />
                  Buka di Google Maps
                  <IconArrowUpRight width={14} height={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
