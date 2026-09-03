import { useCallback, useEffect, useState } from "react";
import { business } from "../data/content";

/* ---------- format harga ---------- */

export const formatIDR = (n: number) => "Rp " + n.toLocaleString("id-ID");

/** 18000 -> "18K" — format cepat utk kartu menu */
export const priceK = (n: number) =>
  n % 1000 === 0 ? `${n / 1000}K` : (n / 1000).toFixed(1).replace(".", ",") + "K";

/* ---------- WhatsApp ---------- */

export const waLink = (message: string) =>
  `https://wa.me/${business.phoneRaw}?text=${encodeURIComponent(message)}`;

export interface OrderLine {
  name: string;
  qty: number;
  price: number;
}

export const orderMessage = (lines: OrderLine[]): string => {
  const items = lines
    .map((l) => `• ${l.name} x${l.qty} — ${formatIDR(l.price * l.qty)}`)
    .join("\n");
  const total = lines.reduce((s, l) => s + l.price * l.qty, 0);
  return (
    `Halo Shans Juice 👋\n\nSaya ingin memesan:\n${items}\n\n` +
    `Total estimasi: ${formatIDR(total)}\n\n` +
    `Mohon konfirmasi total dan ketersediaannya.\nTerima kasih.`
  );
};

export const singleOrderMessage = (line: OrderLine): string =>
  `Halo Shans Juice 👋\n\nSaya ingin memesan:\n• ${line.name} x${line.qty} — ${formatIDR(
    line.price * line.qty
  )}\n\nMohon informasi ketersediaannya.\nTerima kasih.`;

export const generalOrderMessage = (): string =>
  `Halo Shans Juice 👋\n\nSaya ingin memesan. Mohon info menu yang tersedia hari ini.\nTerima kasih.`;

/* ---------- hash router ---------- */

const parseHash = (): string[] =>
  window.location.hash
    .replace(/^#\/?/, "")
    .split("/")
    .filter(Boolean);

export function useRoute(): string[] {
  const [parts, setParts] = useState<string[]>(parseHash);
  useEffect(() => {
    const onChange = () => {
      setParts(parseHash());
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return parts;
}

export const href = (to: string) => `#/${to}`.replace(/\/$/, "");

export const navigate = (to: string) => {
  window.location.hash = href(to).slice(1);
};

/* ---------- status buka / tutup ---------- */

export function useOpenNow() {
  const compute = useCallback(() => {
    const h = new Date().getHours();
    const open = h >= business.openHour; // 10.00 – 00.00
    return {
      open,
      label: open ? "Buka sekarang · sampai 00.00" : "Tutup · buka lagi 10.00",
    };
  }, []);
  const [state, setState] = useState(compute);
  useEffect(() => {
    const t = setInterval(() => setState(compute()), 60_000);
    return () => clearInterval(t);
  }, [compute]);
  return state;
}

/* ---------- prefers-reduced-motion ---------- */

export function usePrefersReducedMotion(): boolean {
  const [prm, setPrm] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setPrm(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return prm;
}
