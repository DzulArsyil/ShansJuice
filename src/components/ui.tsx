import { useEffect, useRef, useState, type ReactNode, type SVGProps } from "react";
import type { DoodleKey } from "../data/content";

/* ============================================================
   IKON — digambar inline, konsisten stroke 1.8
   ============================================================ */

type P = SVGProps<SVGSVGElement>;
const base = (props: P) => ({
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const IconWhatsApp = (props: P) => (
  <svg {...base(props)} strokeWidth={1.6}>
    <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5Z" />
    <path d="M8.8 9.2c.2 2.6 3.4 5.8 6 6l1.4-1.2-1.9-1.4-.9.7c-1-.4-2.2-1.6-2.6-2.6l.7-.9-1.4-1.9-1.3 1.3Z" fill="currentColor" stroke="none" />
  </svg>
);

export const IconPin = (props: P) => (
  <svg {...base(props)}>
    <path d="M12 21s-6.5-5.4-6.5-10a6.5 6.5 0 1 1 13 0c0 4.6-6.5 10-6.5 10Z" />
    <circle cx="12" cy="10.6" r="2.3" />
  </svg>
);

export const IconClock = (props: P) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);

export const IconPhone = (props: P) => (
  <svg {...base(props)}>
    <path d="M5 4.5h3l1.5 4-2 1.5a12 12 0 0 0 6.5 6.5l1.5-2 4 1.5v3a1.5 1.5 0 0 1-1.6 1.5A16.5 16.5 0 0 1 3.5 6.1 1.5 1.5 0 0 1 5 4.5Z" />
  </svg>
);

export const IconInstagram = (props: P) => (
  <svg {...base(props)}>
    <rect x="4" y="4" width="16" height="16" rx="4.5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" stroke="none" />
  </svg>
);

export const IconArrowRight = (props: P) => (
  <svg {...base(props)}>
    <path d="M4 12h15M13.5 5.5 20 12l-6.5 6.5" />
  </svg>
);

export const IconArrowUpRight = (props: P) => (
  <svg {...base(props)}>
    <path d="M6.5 17.5 17.5 6.5M8.5 6.5h9v9" />
  </svg>
);

export const IconPlus = (props: P) => (
  <svg {...base(props)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const IconMinus = (props: P) => (
  <svg {...base(props)}>
    <path d="M5 12h14" />
  </svg>
);

export const IconX = (props: P) => (
  <svg {...base(props)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconSearch = (props: P) => (
  <svg {...base(props)}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m16 16 4.5 4.5" />
  </svg>
);

export const IconStar = (props: P) => (
  <svg {...base(props)}>
    <path d="m12 3.5 2.6 5.3 5.9.9-4.2 4.1 1 5.8L12 16.9l-5.3 2.7 1-5.8-4.2-4.1 5.9-.9L12 3.5Z" />
  </svg>
);

export const IconSpark = (props: P) => (
  <svg {...base(props)}>
    <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" />
  </svg>
);

export const IconBag = (props: P) => (
  <svg {...base(props)}>
    <path d="M5.5 8h13l-1 12.5h-11L5.5 8Z" />
    <path d="M8.8 8V6.7a3.2 3.2 0 0 1 6.4 0V8" />
  </svg>
);

export const IconCup = (props: P) => (
  <svg {...base(props)}>
    <path d="M6.5 7.5h11L16 20.5H8L6.5 7.5Z" />
    <path d="M6 7.5h12M9.5 7.5 13 3" />
    <path d="M7.5 12c1.5 1.2 3 1.2 4.5 0s3-1.2 4.5 0" />
  </svg>
);

export const IconLeaf = (props: P) => (
  <svg {...base(props)}>
    <path d="M19 5c-8 0-13 4-13 10 0 2.5 1.5 4 4 4 6 0 9-6 9-14Z" />
    <path d="M6.5 18.5C9 14 12 10.5 16 8" />
  </svg>
);

export const IconBike = (props: P) => (
  <svg {...base(props)}>
    <circle cx="6" cy="16.5" r="3.2" />
    <circle cx="18" cy="16.5" r="3.2" />
    <path d="M6 16.5 9.5 9h4l3 7.5M13.5 9H16M9.5 9 12 16.5h-6" />
  </svg>
);

export const IconMenu = (props: P) => (
  <svg {...base(props)}>
    <path d="M4 7h16M4 12h16M4 17h10" />
  </svg>
);

export const IconTrash = (props: P) => (
  <svg {...base(props)}>
    <path d="M5 7h14M10 7V5h4v2M7 7l1 13h8l1-13M10.5 11v5M13.5 11v5" />
  </svg>
);

/* ============================================================
   LOGO — cup mark + wordmark
   ============================================================ */

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect x="1" y="1" width="46" height="46" rx="14" fill="var(--color-pine)" />
      <path
        d="M13 15h22l-3 24H16l-3-24Z"
        fill="var(--color-mango)"
        stroke="var(--color-cream)"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M12 15h24" stroke="var(--color-cream)" strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M19 15l6-8"
        stroke="var(--color-cream)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M15.5 24c2.5 2 5 2 7.5 0s5-2 7.5 0"
        stroke="var(--color-pine)"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="34.5" cy="12.5" r="4" fill="var(--color-berry)" />
      <path d="M34.5 10v2.5l1.8 1" stroke="var(--color-cream)" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark className="h-10 w-10 shrink-0" />
      <span className="leading-none">
        <span
          className={`font-display block text-[1.35rem] font-extrabold tracking-tight ${
            light ? "text-cream" : "text-ink"
          }`}
        >
          Shans<span className="text-mango"> Juice</span>
        </span>
        <span
          className={`mt-0.5 block text-[0.62rem] font-semibold uppercase tracking-[0.22em] ${
            light ? "text-cream/60" : "text-mute"
          }`}
        >
          Karawang Kulon
        </span>
      </span>
    </span>
  );
}

/* ============================================================
   SECTION HEADING — eyebrow + judul besar editorial
   ============================================================ */

export function SectionHeading({
  eyebrow,
  title,
  desc,
  light = false,
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  desc?: ReactNode;
  light?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={className}>
      <p
        className={`flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.24em] ${
          light ? "text-mango" : "text-leaf"
        }`}
      >
        <IconSpark width={14} height={14} />
        {eyebrow}
      </p>
      <h2
        className={`font-display mt-3 max-w-2xl text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl ${
          light ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {desc && (
        <p className={`mt-4 max-w-xl text-[0.95rem] leading-relaxed ${light ? "text-cream/70" : "text-mute"}`}>
          {desc}
        </p>
      )}
    </Reveal>
  );
}

/* ============================================================
   REVEAL — scroll reveal via IntersectionObserver
   ============================================================ */

export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ ["--rd" as string]: `${delay}ms` }}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

/* ============================================================
   SPIN BADGE — stiker teks melingkar berputar (signature)
   ============================================================ */

export function SpinBadge({
  text = "SEGAR • ASLI • KARAWANG • SHANS JUICE • ",
  className = "",
  center,
}: {
  text?: string;
  className?: string;
  center?: ReactNode;
}) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <svg viewBox="0 0 120 120" className="h-full w-full animate-spin-slow">
        <defs>
          <path id="spin-circle" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
        </defs>
        <text className="fill-current" style={{ fontSize: 11.5, letterSpacing: 2.6, fontWeight: 700 }}>
          <textPath href="#spin-circle">{text}</textPath>
        </text>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">{center}</div>
    </div>
  );
}

/* ============================================================
   TICKER — marquee menu board
   ============================================================ */

export function Ticker({
  items,
  dark = false,
  className = "",
}: {
  items: string[];
  dark?: boolean;
  className?: string;
}) {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {items.map((it, i) => (
        <span key={i} className="flex items-center">
          <span className="font-display px-5 text-sm font-bold uppercase tracking-[0.18em] sm:text-base">
            {it}
          </span>
          <IconSpark width={14} height={14} className={dark ? "text-mango" : "text-berry"} />
        </span>
      ))}
    </div>
  );
  return (
    <div
      className={`marquee border-y ${
        dark ? "border-cream/15 bg-pine text-cream" : "border-line bg-cream text-ink"
      } py-3 ${className}`}
      role="presentation"
    >
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}

/* ============================================================
   DOODLE TILE — placeholder ilustratif utk produk tanpa foto
   ============================================================ */

const doodles: Record<DoodleKey, ReactNode> = {
  mango: (
    <>
      <path d="M32 20c-14 2-22 12-20 24 2 12 14 18 24 14 12-5 16-20 10-30" />
      <path d="M46 18c2-4 6-6 10-6-1 5-4 9-9 10M32 20c3-2 8-3 14-2" />
    </>
  ),
  avo: (
    <>
      <path d="M40 14c-10 0-18 10-18 22 0 12 8 20 18 20s18-8 18-20c0-12-8-22-18-22Z" />
      <ellipse cx="40" cy="40" rx="8" ry="10" />
    </>
  ),
  guava: (
    <>
      <circle cx="40" cy="38" r="20" />
      <circle cx="40" cy="38" r="9" />
      <path d="M40 18c0-4 2-7 6-8M36 30v16M44 30v16M32 38h16" />
    </>
  ),
  cup: (
    <>
      <path d="M24 26h32l-4 32H28l-4-32Z" />
      <path d="M22 26h36M34 26l8-12" />
      <path d="M27 40c4 3 8 3 13 0s9-3 13 0" />
    </>
  ),
  bean: (
    <>
      <ellipse cx="32" cy="38" rx="11" ry="15" transform="rotate(-20 32 38)" />
      <path d="M28 26c6 6 6 18-1 24" />
      <ellipse cx="52" cy="30" rx="8" ry="11" transform="rotate(24 52 30)" />
      <path d="M50 21c4 5 4 13-1 17" />
    </>
  ),
  noodles: (
    <>
      <path d="M18 34h44c0 12-9 20-22 20S18 46 18 34Z" />
      <path d="M24 34c4-8 10-8 14 0M38 34c4-8 10-8 14 0M22 42h36" />
      <path d="M40 20l14-6" />
    </>
  ),
  toast: (
    <>
      <path d="M22 34a8 8 0 0 1 4-14c3 0 6 1 8 4h12c2-3 5-4 8-4a8 8 0 0 1 4 14v20H22V34Z" transform="scale(0.78) translate(10 8)" />
      <path d="M30 40l20 10M50 40 30 50" />
    </>
  ),
  dumpling: (
    <>
      <path d="M20 42c0-12 9-20 20-20s20 8 20 20v4H20v-4Z" />
      <path d="M28 26l4 6M40 22v7M52 26l-4 6M18 46h44" />
    </>
  ),
};

export function DoodleTile({
  doodle,
  label,
  tintBg = "bg-matcha",
  tintText = "text-leaf",
  className = "",
}: {
  doodle: DoodleKey;
  label?: string;
  tintBg?: string;
  tintText?: string;
  className?: string;
}) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${tintBg} ${className}`}>
      <div className="dot-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <svg
        viewBox="0 0 80 80"
        className={`relative h-1/2 w-1/2 ${tintText}`}
        fill="none"
        stroke="currentColor"
        strokeWidth={2.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {doodles[doodle]}
      </svg>
      {label && (
        <span className={`absolute bottom-2.5 left-0 right-0 text-center text-[0.62rem] font-bold uppercase tracking-[0.18em] ${tintText} opacity-70`}>
          {label}
        </span>
      )}
    </div>
  );
}

/* ============================================================
   CHIP kecil utk kategori
   ============================================================ */

export function CategoryChip({
  label,
  tintBg,
  tintText,
}: {
  label: string;
  tintBg?: string;
  tintText?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] ${
        tintBg ?? "bg-matcha"
      } ${tintText ?? "text-leaf"}`}
    >
      {label}
    </span>
  );
}
