import { useEffect, useRef, useState } from "react";
import {
  categories,
  categoryOf,
  type Product,
} from "../data/content";
import { formatIDR, priceK, singleOrderMessage, waLink } from "../lib/core";
import { useStore } from "../context/StoreContext";
import {
  CategoryChip,
  DoodleTile,
  IconMinus,
  IconPlus,
  IconWhatsApp,
  IconX,
  Reveal,
} from "./ui";

/* ============================================================
   CATEGORY FILTER — chips (scrollable di mobile)
   ============================================================ */

export function CategoryFilter({
  active,
  onChange,
}: {
  active: string;
  onChange: (id: string) => void;
}) {
  const chips = [{ id: "semua", label: "Semua" }, ...categories];
  return (
    <div
      className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
      role="tablist"
      aria-label="Filter kategori menu"
    >
      {chips.map((c) => {
        const isActive = active === c.id;
        return (
          <button
            key={c.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(c.id)}
            className={`shrink-0 rounded-full border px-4 py-2.5 text-[0.82rem] font-bold transition-all duration-200 ${
              isActive
                ? "border-pine bg-pine text-cream shadow-lift"
                : "border-line bg-cream text-ink hover:-translate-y-0.5 hover:border-pine/40 hover:shadow-card"
            }`}
          >
            {c.label}
          </button>
        );
      })}
    </div>
  );
}

/* ============================================================
   PRODUCT CARD
   ============================================================ */

export function ProductCard({
  product,
  delay = 0,
  eager = false,
}: {
  product: Product;
  delay?: number;
  eager?: boolean;
}) {
  const { openProduct, add } = useStore();
  const cat = categoryOf(product.category);

  return (
    <Reveal delay={delay} className="h-full">
      <article
        className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-line bg-cream shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-pine/30 hover:shadow-lift"
        onClick={() => openProduct(product)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openProduct(product);
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`Lihat detail ${product.name}`}
      >
        <div className="kb-frame relative aspect-[4/3] overflow-hidden">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              loading={eager ? "eager" : "lazy"}
              decoding="async"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          ) : (
            <DoodleTile
              doodle={product.doodle}
              label="Foto segera hadir"
              tintBg={cat?.tintBg}
              tintText={cat?.tintText}
              className="h-full w-full"
            />
          )}
          {product.tag && (
            <span className="absolute left-3 top-3 -rotate-3 rounded-md border-2 border-ink/80 bg-mango px-2 py-0.5 font-display text-[0.65rem] font-extrabold uppercase tracking-[0.12em] text-ink shadow-sm transition-transform duration-300 group-hover:rotate-2 group-hover:scale-105">
              {product.tag}
            </span>
          )}
          <span className="absolute bottom-3 right-3 rounded-full border-2 border-ink bg-cream px-2.5 py-1 font-display text-[0.8rem] font-extrabold tracking-tight text-ink shadow-sm">
            {priceK(product.price)}
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-2 p-4">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-lg font-bold leading-tight tracking-tight">
              {product.name}
            </h3>
          </div>
          {cat && (
            <CategoryChip label={cat.label} tintBg={cat.tintBg} tintText={cat.tintText} />
          )}
          <p className="line-clamp-2 text-[0.82rem] leading-relaxed text-mute">{product.desc}</p>

          <div className="mt-auto flex items-center justify-between gap-2 pt-2">
            <span className="text-[0.85rem] font-bold text-leaf">{formatIDR(product.price)}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                add(product.id);
              }}
              aria-label={`Tambah ${product.name} ke pesanan`}
              className="flex items-center gap-1.5 rounded-full bg-pine px-3.5 py-2 text-[0.75rem] font-bold text-cream transition-all duration-200 hover:bg-leaf active:scale-95"
            >
              <IconPlus width={14} height={14} strokeWidth={2.4} />
              Tambah
            </button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/* ============================================================
   PRODUCT GRID
   ============================================================ */

export function ProductGrid({
  items,
  eagerCount = 0,
}: {
  items: Product[];
  eagerCount?: number;
}) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {items.map((p, i) => (
        <ProductCard key={p.id} product={p} delay={(i % 4) * 70} eager={i < eagerCount} />
      ))}
    </div>
  );
}

/* ============================================================
   PRODUCT DETAIL MODAL
   ============================================================ */

export function ProductModal() {
  const { activeProduct, closeProduct, add } = useStore();
  const [qty, setQty] = useState(1);
  const closeRef = useRef<HTMLButtonElement>(null);
  const product = activeProduct;

  useEffect(() => {
    setQty(1);
    if (product) {
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeProduct();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [product, closeProduct]);

  if (!product) return null;
  const cat = categoryOf(product.category);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-pine/60 backdrop-blur-[3px] sm:items-center sm:p-6"
      onClick={closeProduct}
      role="dialog"
      aria-modal="true"
      aria-label={`Detail ${product.name}`}
    >
      <div
        className="animate-pop relative grid max-h-[92vh] w-full max-w-3xl grid-cols-1 overflow-y-auto rounded-t-2xl bg-cream shadow-lift sm:grid-cols-2 sm:overflow-visible sm:rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          onClick={closeProduct}
          aria-label="Tutup detail produk"
          className="absolute right-3.5 top-3.5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-cream/95 text-ink transition-all hover:rotate-90 hover:border-berry hover:text-berry"
        >
          <IconX />
        </button>

        <div className="relative h-60 sm:h-auto sm:min-h-[420px]">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 h-full w-full object-cover"
              decoding="async"
            />
          ) : (
            <DoodleTile
              doodle={product.doodle}
              label="Foto segera hadir"
              tintBg={cat?.tintBg}
              tintText={cat?.tintText}
              className="h-full w-full"
            />
          )}
          {product.tag && (
            <span className="absolute left-4 top-4 -rotate-3 rounded-md border-2 border-ink/80 bg-mango px-2.5 py-1 font-display text-[0.7rem] font-extrabold uppercase tracking-[0.12em]">
              {product.tag}
            </span>
          )}
        </div>

        <div className="flex flex-col p-6 sm:p-8">
          {cat && (
            <CategoryChip label={cat.label} tintBg={cat.tintBg} tintText={cat.tintText} />
          )}
          <h2 className="font-display mt-3 text-3xl font-extrabold leading-tight tracking-tight">
            {product.name}
          </h2>
          <p className="mt-3 text-[0.92rem] leading-relaxed text-mute">{product.desc}</p>

          <p className="font-display mt-5 text-4xl font-extrabold tracking-tight text-leaf">
            {formatIDR(product.price)}
          </p>
          <p className="mt-1 text-[0.7rem] text-mute">
            Harga referensi — bisa berubah, dikonfirmasi via WhatsApp ya.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center rounded-full border-2 border-ink/80 bg-paper">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Kurangi jumlah"
                className="flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:text-berry disabled:opacity-30"
                disabled={qty <= 1}
              >
                <IconMinus width={16} height={16} strokeWidth={2.4} />
              </button>
              <span className="font-display w-8 text-center text-lg font-extrabold" aria-live="polite">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => Math.min(20, q + 1))}
                aria-label="Tambah jumlah"
                className="flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:text-leaf"
              >
                <IconPlus width={16} height={16} strokeWidth={2.4} />
              </button>
            </div>
            <span className="text-[0.8rem] font-semibold text-mute">
              = {formatIDR(product.price * qty)}
            </span>
          </div>

          <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
            <button
              onClick={() => {
                add(product.id, qty);
                closeProduct();
              }}
              className="flex items-center justify-center gap-2 rounded-full bg-pine px-5 py-3.5 text-[0.85rem] font-bold text-cream transition-all duration-200 hover:bg-leaf active:scale-[0.98]"
            >
              <IconPlus width={16} height={16} strokeWidth={2.4} />
              Tambah ke Pesanan
            </button>
            <a
              href={waLink(
                singleOrderMessage({ name: product.name, qty, price: product.price })
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-wa px-5 py-3.5 text-[0.85rem] font-bold text-cream transition-all duration-200 hover:bg-wa-deep active:scale-[0.98]"
            >
              <IconWhatsApp width={18} height={18} />
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
