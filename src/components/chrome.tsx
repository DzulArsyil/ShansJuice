import { useEffect, useRef, useState } from "react";
import { business, navLinks, productById } from "../data/content";
import { formatIDR, href, useRoute, waLink, generalOrderMessage } from "../lib/core";
import { cartWhatsAppUrl, useStore } from "../context/StoreContext";
import {
  IconArrowUpRight,
  IconBag,
  IconClock,
  IconCup,
  IconInstagram,
  IconMenu,
  IconMinus,
  IconPhone,
  IconPin,
  IconPlus,
  IconTrash,
  IconWhatsApp,
  IconX,
  Logo,
} from "./ui";

/* ============================================================
   NAVBAR
   ============================================================ */

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const { count, setCartOpen } = useStore();
  const route = useRoute();
  const current = route[0] ?? "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = sheetOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [sheetOpen]);

  useEffect(() => setSheetOpen(false), [current]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-line bg-paper/95 shadow-[0_6px_24px_-16px_rgb(31_43_33/0.35)] backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6">
          <a href={href("")} aria-label="Shans Juice — beranda" className="transition-transform hover:scale-[1.02]">
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
            {navLinks.map((l) => {
              const active = current === l.to;
              return (
                <a
                  key={l.to}
                  href={href(l.to)}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-full px-4 py-2 text-[0.85rem] font-bold transition-all duration-200 ${
                    active
                      ? "bg-pine text-cream"
                      : "text-ink/80 hover:bg-ink/5 hover:text-ink"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCartOpen(true)}
              aria-label={`Buka pesanan, ${count} item`}
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-line bg-cream text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-pine hover:shadow-card"
            >
              <IconBag />
              {count > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-berry px-1 text-[0.65rem] font-extrabold text-cream animate-pop">
                  {count}
                </span>
              )}
            </button>

            <a
              href={waLink(generalOrderMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-mango px-5 py-2.5 text-[0.85rem] font-extrabold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:bg-mango-deep hover:text-cream hover:shadow-lift active:scale-95 sm:flex"
            >
              <IconWhatsApp width={17} height={17} />
              Pesan Sekarang
            </a>

            <button
              onClick={() => setSheetOpen(true)}
              aria-label="Buka menu navigasi"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-cream lg:hidden"
            >
              <IconMenu />
            </button>
          </div>
        </div>
      </header>

      {/* ——— Mobile nav sheet ——— */}
      <div
        className={`fixed inset-0 z-[70] transition-all duration-300 lg:hidden ${
          sheetOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!sheetOpen}
      >
        <div className="absolute inset-0 bg-pine/60 backdrop-blur-[2px]" onClick={() => setSheetOpen(false)} />
        <div
          className={`absolute right-0 top-0 flex h-full w-[19rem] max-w-[85vw] flex-col bg-paper shadow-lift transition-transform duration-300 ${
            sheetOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Menu navigasi"
        >
          <div className="flex items-center justify-between border-b border-line p-4">
            <Logo />
            <button
              onClick={() => setSheetOpen(false)}
              aria-label="Tutup menu navigasi"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-cream"
            >
              <IconX />
            </button>
          </div>
          <nav className="flex flex-col gap-1 p-4" aria-label="Navigasi mobile">
            {navLinks.map((l, i) => {
              const active = current === l.to;
              return (
                <a
                  key={l.to}
                  href={href(l.to)}
                  aria-current={active ? "page" : undefined}
                  style={{ transitionDelay: `${i * 30}ms` }}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 font-display text-xl font-bold tracking-tight transition-all ${
                    active ? "bg-pine text-cream" : "text-ink hover:bg-ink/5"
                  }`}
                >
                  {l.label}
                  <IconArrowUpRight width={18} height={18} className={active ? "text-mango" : "text-mute"} />
                </a>
              );
            })}
          </nav>
          <div className="mt-auto space-y-3 border-t border-line p-4">
            <a
              href={waLink(generalOrderMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-mango px-5 py-3.5 text-[0.9rem] font-extrabold text-ink"
            >
              <IconWhatsApp width={18} height={18} />
              Pesan Sekarang
            </a>
            <p className="flex items-center justify-center gap-1.5 text-[0.72rem] font-semibold text-mute">
              <IconClock width={14} height={14} />
              {business.hoursLabel}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ============================================================
   CART DRAWER — review pesanan + kirim via WhatsApp
   ============================================================ */

export function CartDrawer() {
  const { cartOpen, setCartOpen, lines, inc, dec, remove, clear, orderLines, total, count } =
    useStore();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setCartOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [cartOpen, setCartOpen]);

  return (
    <div
      className={`fixed inset-0 z-[85] transition-all duration-300 ${
        cartOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
      aria-hidden={!cartOpen}
    >
      <div className="absolute inset-0 bg-pine/60 backdrop-blur-[2px]" onClick={() => setCartOpen(false)} />
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-paper shadow-lift transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Pesanan kamu"
      >
        <div className="flex items-center justify-between border-b border-line bg-cream px-5 py-4">
          <h2 className="font-display flex items-center gap-2.5 text-2xl font-extrabold tracking-tight">
            <IconBag />
            Pesanan Kamu
            {count > 0 && (
              <span className="rounded-full bg-pine px-2.5 py-0.5 text-[0.7rem] font-bold text-cream">
                {count} item
              </span>
            )}
          </h2>
          <button
            ref={closeRef}
            onClick={() => setCartOpen(false)}
            aria-label="Tutup pesanan"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-paper transition-all hover:rotate-90 hover:border-berry hover:text-berry"
          >
            <IconX />
          </button>
        </div>

        {orderLines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <span className="flex h-24 w-24 items-center justify-center rounded-full bg-matcha text-leaf">
              <IconCup width={44} height={44} strokeWidth={1.4} />
            </span>
            <div>
              <p className="font-display text-2xl font-extrabold">Masih kosong nih</p>
              <p className="mt-2 text-sm leading-relaxed text-mute">
                Pilih menu favoritmu dulu, nanti pesannya gampang — tinggal kirim lewat WhatsApp.
              </p>
            </div>
            <a
              href={href("menu")}
              onClick={() => setCartOpen(false)}
              className="rounded-full bg-pine px-6 py-3 text-sm font-bold text-cream transition-colors hover:bg-leaf"
            >
              Lihat Menu
            </a>
          </div>
        ) : (
          <>
            <ul className="flex-1 space-y-3 overflow-y-auto px-5 py-4">
              {lines.map((l) => {
                const p = productById(l.id);
                if (!p) return null;
                return (
                  <li
                    key={l.id}
                    className="flex items-center gap-3 rounded-xl border border-line bg-cream p-3 shadow-card animate-pop"
                  >
                    <div className="kb-frame h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                      {p.image ? (
                        <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover" />
                      ) : (
                        <span className="flex h-full w-full items-center justify-center bg-matcha font-display text-xl font-extrabold text-leaf">
                          {p.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold">{p.name}</p>
                      <p className="text-xs font-semibold text-mute">{formatIDR(p.price * l.qty)}</p>
                      <div className="mt-1.5 flex items-center gap-2">
                        <button
                          onClick={() => dec(l.id)}
                          aria-label={`Kurangi ${p.name}`}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-line bg-paper transition-colors hover:border-berry hover:text-berry"
                        >
                          <IconMinus width={12} height={12} strokeWidth={2.6} />
                        </button>
                        <span className="w-5 text-center text-sm font-extrabold" aria-live="polite">
                          {l.qty}
                        </span>
                        <button
                          onClick={() => inc(l.id)}
                          aria-label={`Tambah ${p.name}`}
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-line bg-paper transition-colors hover:border-leaf hover:text-leaf"
                        >
                          <IconPlus width={12} height={12} strokeWidth={2.6} />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => remove(l.id)}
                      aria-label={`Hapus ${p.name} dari pesanan`}
                      className="text-mute transition-colors hover:text-berry"
                    >
                      <IconTrash width={17} height={17} />
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="space-y-3 border-t border-line bg-cream px-5 py-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-mute">Estimasi total</span>
                <span className="font-display text-2xl font-extrabold text-leaf">{formatIDR(total)}</span>
              </div>
              <p className="text-[0.7rem] leading-relaxed text-mute">
                Total final dikonfirmasi Shans Juice via WhatsApp. Ambil di tempat (Karawang Kulon) — gratis.
              </p>
              <a
                href={cartWhatsAppUrl(orderLines)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={clear}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-wa px-6 py-4 text-[0.95rem] font-extrabold text-cream transition-all hover:bg-wa-deep active:scale-[0.98]"
              >
                <IconWhatsApp width={20} height={20} />
                Kirim Pesanan via WhatsApp
              </a>
              <button
                onClick={clear}
                className="w-full rounded-full border border-line px-6 py-2.5 text-[0.78rem] font-bold text-mute transition-colors hover:border-berry hover:text-berry"
              >
                Kosongkan pesanan
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

/* ============================================================
   MOBILE ORDER BAR — sticky CTA bawah
   ============================================================ */

export function MobileOrderBar() {
  const { count, total, orderNow, setCartOpen } = useStore();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur-md lg:hidden">
      <div className="mx-auto flex max-w-md items-center gap-2.5">
        {count > 0 && (
          <button
            onClick={() => setCartOpen(true)}
            aria-label={`Lihat pesanan, ${count} item, ${formatIDR(total)}`}
            className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-paper"
          >
            <IconBag />
            <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-berry px-1 text-[0.62rem] font-extrabold text-cream">
              {count}
            </span>
          </button>
        )}
        <button
          onClick={orderNow}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-pine text-[0.9rem] font-extrabold text-cream shadow-lift transition-all active:scale-[0.98]"
        >
          <IconWhatsApp width={18} height={18} className="text-mango" />
          {count > 0 ? `Pesan · ${formatIDR(total)}` : "Pesan Sekarang"}
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   TOAST
   ============================================================ */

export function Toast() {
  const { toast } = useStore();
  if (!toast) return null;
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-24 z-[90] flex justify-center px-4 lg:bottom-8"
      role="status"
      aria-live="polite"
    >
      <span className="animate-pop flex items-center gap-2 rounded-full border border-line bg-pine px-5 py-3 text-sm font-bold text-cream shadow-lift">
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-mango text-[0.65rem] text-ink">✓</span>
        {toast}
      </span>
    </div>
  );
}

/* ============================================================
   FOOTER
   ============================================================ */

export function Footer() {
  return (
    <footer className="dot-grid-light relative overflow-hidden bg-pine pb-28 text-cream lg:pb-10">
      <div className="mx-auto max-w-7xl px-4 pt-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr] lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-[0.85rem] leading-relaxed text-cream/70">
              {business.description}
            </p>
            <div className="mt-5 flex gap-2.5">
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Shans Juice"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-all hover:-translate-y-1 hover:border-mango hover:text-mango"
              >
                <IconInstagram />
              </a>
              <a
                href={waLink(generalOrderMessage())}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Shans Juice"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-all hover:-translate-y-1 hover:border-mango hover:text-mango"
              >
                <IconWhatsApp />
              </a>
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps Shans Juice"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/20 transition-all hover:-translate-y-1 hover:border-mango hover:text-mango"
              >
                <IconPin />
              </a>
            </div>
          </div>

          <nav aria-label="Navigasi footer">
            <p className="font-display text-[0.72rem] font-bold uppercase tracking-[0.22em] text-mango">
              Jelajah
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <a
                    href={href(l.to)}
                    className="text-[0.88rem] font-semibold text-cream/80 transition-colors hover:text-mango"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-display text-[0.72rem] font-bold uppercase tracking-[0.22em] text-mango">
              Kontak
            </p>
            <ul className="mt-4 space-y-3 text-[0.85rem] text-cream/80">
              <li>
                <a href={`tel:+${business.phoneRaw}`} className="flex items-start gap-2 transition-colors hover:text-mango">
                  <IconPhone width={16} height={16} className="mt-0.5 shrink-0" />
                  {business.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={business.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 transition-colors hover:text-mango"
                >
                  <IconInstagram width={16} height={16} className="mt-0.5 shrink-0" />
                  {business.instagram}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <IconPin width={16} height={16} className="mt-0.5 shrink-0" />
                <span>
                  {business.addressLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-[0.72rem] font-bold uppercase tracking-[0.22em] text-mango">
              Jam Buka
            </p>
            <div className="mt-4 rounded-xl border border-cream/15 bg-cream/5 p-4">
              <p className="flex items-center gap-2 text-[0.95rem] font-bold">
                <IconClock width={16} height={16} className="text-mango" />
                Setiap hari
              </p>
              <p className="font-display mt-1 text-2xl font-extrabold text-mango">10.00 – 00.00</p>
              <p className="mt-1 text-[0.72rem] text-cream/60">Waktu Indonesia Barat</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-[0.72rem] text-cream/50 md:flex-row">
          <p>© {new Date().getFullYear()} Shans Juice · Karawang, Jawa Barat</p>
          <p className="max-w-md text-center md:text-right">
            Menu, harga & foto bersifat referensi dari listing publik dan dapat berubah. Konfirmasi
            ketersediaan via WhatsApp.
          </p>
        </div>
      </div>
    </footer>
  );
}
