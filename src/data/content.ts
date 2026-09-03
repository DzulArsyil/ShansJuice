/* ============================================================
   SHANS JUICE — CONTENT DATA
   Semua konten bisnis terpusat di sini agar mudah diperbarui
   tanpa menyentuh arsitektur UI.
   ============================================================ */

export type DoodleKey =
  | "mango"
  | "avo"
  | "guava"
  | "cup"
  | "bean"
  | "noodles"
  | "toast"
  | "dumpling";

export interface Business {
  name: string;
  tagline: string;
  description: string;
  phoneDisplay: string;
  phoneRaw: string; // format internasional utk wa.me
  instagram: string;
  instagramUrl: string;
  mapsUrl: string;
  mapsEmbed: string;
  addressLines: string[];
  hoursLabel: string;
  openHour: number; // 10.00
}

export const business: Business = {
  name: "Shans Juice",
  tagline: "Segarnya bikin balik lagi.",
  description:
    "Kedai juice, kopi, dan camilan di Karawang Kulon. Buka setiap hari 10.00–00.00 — pas buat nongkrong santai atau bungkus bawa pulang.",
  phoneDisplay: "0858-8888-8252",
  phoneRaw: "6285888888252",
  instagram: "@shansjuice",
  instagramUrl: "https://www.instagram.com/shansjuice",
  mapsUrl: "https://maps.app.goo.gl/bPsjjqBL3RUhVsjSA",
  mapsEmbed:
    "https://maps.google.com/maps?q=Shans%20Juice%20Karawang%20Kulon&t=&z=15&ie=UTF8&iwloc=&output=embed",
  addressLines: ["Jl. Anjun Kanoman, Karawang Kulon", "Kec. Karawang Barat, Karawang", "Jawa Barat 41311"],
  hoursLabel: "Setiap hari · 10.00–00.00 WIB",
  openHour: 10,
};

/* ---------- Kategori ---------- */

export interface Category {
  id: string;
  label: string;
  tagline: string;
  doodle: DoodleKey;
  /** kelas warna utk chip / tile */
  tintBg: string;
  tintText: string;
}

export const categories: Category[] = [
  {
    id: "juice",
    label: "Juice",
    tagline: "Buah beneran, diblender dadakan.",
    doodle: "mango",
    tintBg: "bg-mango/15",
    tintText: "text-mango-deep",
  },
  {
    id: "minuman",
    label: "Minuman",
    tagline: "Yang creamy-manis, andalan nongkrong.",
    doodle: "cup",
    tintBg: "bg-milk",
    tintText: "text-leaf",
  },
  {
    id: "coffee",
    label: "Coffee",
    tagline: "Biar melek sampai tutup.",
    doodle: "bean",
    tintBg: "bg-pine/10",
    tintText: "text-pine",
  },
  {
    id: "indomie",
    label: "Indomie",
    tagline: "Nyemek, kuah, atau goreng — pakai topping.",
    doodle: "noodles",
    tintBg: "bg-berry/10",
    tintText: "text-berry",
  },
  {
    id: "camilan",
    label: "Camilan",
    tagline: "Teman ngobrol yang nggak bikin kenyang duluan.",
    doodle: "dumpling",
    tintBg: "bg-matcha",
    tintText: "text-leaf",
  },
  {
    id: "dessert",
    label: "Dessert",
    tagline: "Manisnya buat nutup hari.",
    doodle: "toast",
    tintBg: "bg-mango/15",
    tintText: "text-mango-deep",
  },
];

/* ---------- Produk ----------
   Catatan integritas data: daftar menu & harga di bawah merupakan
   referensi dari listing publik Shans Juice dan dapat berubah.
   Konfirmasi ketersediaan selalu diarahkan via WhatsApp. */

export interface Product {
  id: string;
  name: string;
  category: string; // category id
  desc: string;
  price: number;
  image?: string;
  doodle: DoodleKey;
  featured?: boolean;
  tag?: string;
}

const IMG = {
  mangoThai:
    "https://image.qwenlm.ai/generated-images/3857bb4c-c1c1-4d3c-a8f5-5f28978493c5/_result.png",
  strawberryThai:
    "https://image.qwenlm.ai/generated-images/631be482-5f52-45ac-8ee9-67ac0e1ec839/_result.png",
  arenRegal:
    "https://image.qwenlm.ai/generated-images/1996916a-6d45-423e-bc77-edf8f168d4ca/_result.png",
  greenTea:
    "https://image.qwenlm.ai/generated-images/f07a3945-aec2-46f0-a80c-67f18277a088/_result.png",
  kopiSusu:
    "https://image.qwenlm.ai/generated-images/b57cdaf2-bd47-40c6-b43c-f995e7cf44fe/_result.png",
  indomie:
    "https://image.qwenlm.ai/generated-images/1f2796a3-f954-44f8-94ab-c53e6c0394b0/_result.png",
  dimsum:
    "https://image.qwenlm.ai/generated-images/430b2612-5e1e-4700-84fe-25b322f410a3/_result.png",
  fries:
    "https://image.qwenlm.ai/generated-images/4c7fc094-5067-4953-84ca-04a9b170daa5/_result.png",
  pudding:
    "https://image.qwenlm.ai/generated-images/c8ea6c37-bdf6-4379-a22d-28e8524e118b/_result.png",
  interior:
    "https://image.qwenlm.ai/generated-images/25a3103e-b343-4c30-a91d-6703d8e225fa/_result.png",
};

export const images = IMG;

export const products: Product[] = [
  /* — Juice — */
  {
    id: "mango-thai",
    name: "Mango Thai",
    category: "juice",
    desc: "Smoothie mangga kental ala Thai, creamy, manisnya dari buah asli. Best seller sepanjang masa.",
    price: 18000,
    image: IMG.mangoThai,
    doodle: "mango",
    featured: true,
    tag: "Best Seller",
  },
  {
    id: "strawberry-thai",
    name: "Strawberry Thai",
    category: "juice",
    desc: "Stroberi segar diblender creamy, asam-manis seimbang. Warnanya aja udah bikin laper.",
    price: 18000,
    image: IMG.strawberryThai,
    doodle: "mango",
    featured: true,
  },
  {
    id: "jus-mangga",
    name: "Jus Mangga",
    category: "juice",
    desc: "Mangga manis diblender murni tanpa campuran aneh-aneh. Segarnya jujur.",
    price: 15000,
    doodle: "mango",
  },
  {
    id: "jus-alpukat",
    name: "Jus Alpukat",
    category: "juice",
    desc: "Alpukat mentega diblender lembut, ditambah susu dan sedikit cokelat. Kentalnya pas.",
    price: 17000,
    doodle: "avo",
  },
  {
    id: "jus-jambu",
    name: "Jus Jambu Merah",
    category: "juice",
    desc: "Jambu merah segar, tinggi vitamin C. Pilihan paling seger buat siang panas.",
    price: 13000,
    doodle: "guava",
  },

  /* — Minuman — */
  {
    id: "aren-milk-regal",
    name: "Aren Milk Regal",
    category: "minuman",
    desc: "Susu segar berlayer gula aren, ditutup remahan biskuit regal. Manisnya kalem, creamy-nya juara.",
    price: 20000,
    image: IMG.arenRegal,
    doodle: "cup",
    featured: true,
    tag: "Favorit",
  },
  {
    id: "green-tea-latte",
    name: "Green Tea Latte",
    category: "minuman",
    desc: "Matcha premium dikocok dengan susu segar. Earthy, creamy, nggak bikin eneg.",
    price: 17000,
    image: IMG.greenTea,
    doodle: "cup",
  },
  {
    id: "thai-tea",
    name: "Thai Tea",
    category: "minuman",
    desc: "Teh Thailand yang harum dan creamy, manisnya khas. Klasik yang nggak pernah salah.",
    price: 15000,
    doodle: "cup",
  },

  /* — Coffee — */
  {
    id: "es-kopi-susu-shan",
    name: "Es Kopi Susu Shan",
    category: "coffee",
    desc: "Racikan kopi susu signature: espresso, susu segar, dan gula aren. Pas buat yang suka balance.",
    price: 15000,
    image: IMG.kopiSusu,
    doodle: "bean",
    featured: true,
    tag: "Signature",
  },
  {
    id: "kopi-susu-aren",
    name: "Kopi Susu Aren",
    category: "coffee",
    desc: "Kopi susu dengan gula aren asli — legitnya beda dari yang sirup-sirupan.",
    price: 17000,
    doodle: "bean",
  },
  {
    id: "americano",
    name: "Americano",
    category: "coffee",
    desc: "Espresso dobel, tanpa gula. Buat yang butuh kopi beneran, bukan yang manis-manis.",
    price: 13000,
    doodle: "bean",
  },

  /* — Indomie — */
  {
    id: "indomie-nyemek",
    name: "Indomie Nyemek Spesial",
    category: "indomie",
    desc: "Indomie kuah kental dengan telur, sawi, sosis, dan cabai. Dimakan panas-panas pas hujan: sempurna.",
    price: 15000,
    image: IMG.indomie,
    doodle: "noodles",
    featured: true,
    tag: "Paling Dipesan",
  },
  {
    id: "indomie-goreng-telur",
    name: "Indomie Goreng + Telur",
    category: "indomie",
    desc: "Indomie goreng klasik plus telur mata sapi setengah matang. Nggak perlu dijelaskan lagi.",
    price: 13000,
    doodle: "noodles",
  },
  {
    id: "indomie-kuah-soto",
    name: "Indomie Kuah Soto",
    category: "indomie",
    desc: "Kuah soto yang gurih segar, plus telur dan sayuran. Comfort food paling aman.",
    price: 12000,
    doodle: "noodles",
  },

  /* — Camilan — */
  {
    id: "dimsum-mentai",
    name: "Dimsum Mentai",
    category: "camilan",
    desc: "Dimsum ayam juicy disiram saus mentai yang di-torch sampai harum. Creamy, gurih, nagih.",
    price: 15000,
    image: IMG.dimsum,
    doodle: "dumpling",
    featured: true,
    tag: "Wajib Coba",
  },
  {
    id: "dimsum-ayam",
    name: "Dimsum Ayam (isi 4)",
    category: "camilan",
    desc: "Siomay ayam dikukus fresh, disajikan dengan saus chili oil. Empat nggak pernah cukup.",
    price: 12000,
    doodle: "dumpling",
  },
  {
    id: "french-fries",
    name: "French Fries",
    category: "camilan",
    desc: "Kentang goreng crispy dengan taburan bumbu. Teman paling setia buat ngobrol panjang.",
    price: 12000,
    image: IMG.fries,
    doodle: "toast",
  },

  /* — Dessert — */
  {
    id: "silky-pudding",
    name: "Silky Pudding",
    category: "dessert",
    desc: "Puding super lembut rasa cokelat dan mangga. Goyang-goyang pas disendok, lumer di mulut.",
    price: 10000,
    image: IMG.pudding,
    doodle: "toast",
  },
  {
    id: "roti-bakar",
    name: "Roti Bakar Coklat Keju",
    category: "dessert",
    desc: "Roti bakar renyah di luar, lumer coklat dan keju di dalam. Manis-gurih dalam satu gigitan.",
    price: 15000,
    doodle: "toast",
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export const categoryOf = (id: string) => categories.find((c) => c.id === id);
export const productById = (id: string) => products.find((p) => p.id === id);

/* ---------- Galeri ---------- */

export interface GalleryItem {
  src: string;
  caption: string;
  group: "minuman" | "makanan" | "suasana";
  tall?: boolean;
}

export const galleryItems: GalleryItem[] = [
  { src: IMG.mangoThai, caption: "Mango Thai — juara satu", group: "minuman", tall: true },
  { src: IMG.indomie, caption: "Indomie nyemek, anget-anget", group: "makanan" },
  { src: IMG.interior, caption: "Sudut favorit buat nongkrong", group: "suasana", tall: true },
  { src: IMG.dimsum, caption: "Dimsum mentai di-torch dadakan", group: "makanan" },
  { src: IMG.strawberryThai, caption: "Strawberry Thai seger banget", group: "minuman" },
  { src: IMG.arenRegal, caption: "Layer aren + regal", group: "minuman" },
  { src: IMG.fries, caption: "Fries: teman ngobrol", group: "makanan" },
  { src: IMG.interior, caption: "Sore-sore di Shans Juice", group: "suasana" },
  { src: IMG.kopiSusu, caption: "Es kopi susu Shan", group: "minuman" },
  { src: IMG.greenTea, caption: "Green tea latte", group: "minuman" },
  { src: IMG.pudding, caption: "Silky pudding goyang-goyang", group: "makanan" },
];

/* ---------- Navigasi ---------- */

export const navLinks = [
  { to: "", label: "Beranda" },
  { to: "menu", label: "Menu" },
  { to: "tentang", label: "Tentang" },
  { to: "galeri", label: "Galeri" },
  { to: "lokasi", label: "Lokasi" },
];

/* ---------- Jam buka (referensi listing publik) ---------- */

export const openingHours = [
  { day: "Senin – Jumat", time: "10.00 – 00.00" },
  { day: "Sabtu", time: "10.00 – 00.00" },
  { day: "Minggu", time: "10.00 – 00.00" },
];
