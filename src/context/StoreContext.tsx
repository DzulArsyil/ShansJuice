import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { productById, type Product } from "../data/content";
import {
  generalOrderMessage,
  orderMessage,
  waLink,
  type OrderLine,
} from "../lib/core";

interface CartLine {
  id: string;
  qty: number;
}

interface StoreValue {
  lines: CartLine[];
  count: number;
  total: number;
  orderLines: OrderLine[];
  add: (id: string, qty?: number) => void;
  inc: (id: string) => void;
  dec: (id: string) => void;
  remove: (id: string) => void;
  clear: () => void;
  cartOpen: boolean;
  setCartOpen: (v: boolean) => void;
  activeProduct: Product | null;
  openProduct: (p: Product) => void;
  closeProduct: () => void;
  toast: string | null;
  orderNow: () => void;
}

const StoreContext = createContext<StoreValue | null>(null);
const STORAGE_KEY = "shans-juice-cart";

export function StoreProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as CartLine[]) : [];
    } catch {
      return [];
    }
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* penyimpanan penuh / private mode — abaikan */
    }
  }, [lines]);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 2000);
  }, []);

  const add = useCallback(
    (id: string, qty = 1) => {
      setLines((prev) => {
        const found = prev.find((l) => l.id === id);
        if (found)
          return prev.map((l) => (l.id === id ? { ...l, qty: l.qty + qty } : l));
        return [...prev, { id, qty }];
      });
      const p = productById(id);
      if (p) showToast(`${p.name} masuk pesanan ✓`);
    },
    [showToast]
  );

  const inc = useCallback((id: string) => {
    setLines((prev) => prev.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l)));
  }, []);

  const dec = useCallback((id: string) => {
    setLines((prev) =>
      prev
        .map((l) => (l.id === id ? { ...l, qty: l.qty - 1 } : l))
        .filter((l) => l.qty > 0)
    );
  }, []);

  const remove = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.id !== id));
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const orderLines = useMemo<OrderLine[]>(
    () =>
      lines
        .map((l) => {
          const p = productById(l.id);
          return p ? { name: p.name, qty: l.qty, price: p.price } : null;
        })
        .filter((x): x is OrderLine => x !== null),
    [lines]
  );

  const count = useMemo(() => lines.reduce((s, l) => s + l.qty, 0), [lines]);
  const total = useMemo(
    () => orderLines.reduce((s, l) => s + l.price * l.qty, 0),
    [orderLines]
  );

  /** Pesan Sekarang: kalau keranjang terisi → buka review pesanan,
      kalau kosong → langsung WhatsApp dengan pesan umum. */
  const orderNow = useCallback(() => {
    if (orderLines.length > 0) {
      setCartOpen(true);
    } else {
      window.open(waLink(generalOrderMessage()), "_blank", "noopener,noreferrer");
    }
  }, [orderLines]);

  const openProduct = useCallback((p: Product) => setActiveProduct(p), []);
  const closeProduct = useCallback(() => setActiveProduct(null), []);

  const value: StoreValue = {
    lines,
    count,
    total,
    orderLines,
    add,
    inc,
    dec,
    remove,
    clear,
    cartOpen,
    setCartOpen,
    activeProduct,
    openProduct,
    closeProduct,
    toast,
    orderNow,
  };

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function useStore(): StoreValue {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("useStore harus dipakai di dalam StoreProvider");
  return ctx;
}

/* helper utk tombol kirim pesanan WhatsApp dari keranjang */
export const cartWhatsAppUrl = (orderLines: OrderLine[]) =>
  waLink(orderMessage(orderLines));
