import { StoreProvider } from "./context/StoreContext";
import { useRoute } from "./lib/core";
import { Navbar, Footer, CartDrawer, MobileOrderBar, Toast } from "./components/chrome";
import { ProductModal } from "./components/product";
import { HomePage, MenuPage, AboutPage, GalleryPage, LocationPage } from "./pages";

function Router() {
  const parts = useRoute();
  const page = parts[0] ?? "";

  switch (page) {
    case "menu":
      return <MenuPage key={`menu-${parts[1] ?? "semua"}`} initialCat={parts[1]} />;
    case "tentang":
      return <AboutPage />;
    case "galeri":
      return <GalleryPage />;
    case "lokasi":
      return <LocationPage />;
    default:
      return <HomePage />;
  }
}

export default function App() {
  return (
    <StoreProvider>
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[120] focus:rounded-full focus:bg-pine focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-cream"
      >
        Langsung ke konten
      </a>
      <div className="noise-layer" aria-hidden="true" />
      <Navbar />
      <main id="konten" className="pb-16 lg:pb-0">
        <Router />
      </main>
      <Footer />
      <ProductModal />
      <CartDrawer />
      <MobileOrderBar />
      <Toast />
    </StoreProvider>
  );
}
