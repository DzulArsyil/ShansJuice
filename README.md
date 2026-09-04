# 🥭 Shans Juice — Karawang

<p align="center">
  <strong>Segarnya bikin balik lagi.</strong><br/>
  A modern digital experience for discovering the menu, exploring the shop, and ordering from Shans Juice.
</p>

<p align="center">
  <a href="https://github.com/DzulArsyil/ShansJuice">
    <img src="https://img.shields.io/badge/Status-Active-17352A?style=for-the-badge" alt="Project status" />
  </a>
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=111827" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

<p align="center">
  <a href="https://github.com/DzulArsyil/ShansJuice">Repository</a> ·
  <a href="https://shansjuice.id/">Live Website</a>
</p>

---

## ✦ About the Project

**Shans Juice** is a responsive web experience designed for a local beverage and snack business in **Karawang Kulon, Karawang**.

The project goes beyond a simple restaurant landing page: visitors can browse products, filter menu categories, search for items, open product details, manage an order, and continue the ordering flow through WhatsApp.

The interface is built around a warm, approachable visual direction that reflects the character of a casual juice, coffee, and snack shop.

> **Design goal:** make finding something to drink, eat, or order feel fast, friendly, and effortless.

---

## 🍹 What You Can Do

| Experience | Description |
|---|---|
| 🏠 **Home** | Discover featured products, categories, gallery, reviews, and location. |
| 🍹 **Menu** | Browse the complete menu by category. |
| 🔎 **Search** | Find menu items quickly with client-side search. |
| 🏷️ **Category Filter** | Explore Juice, Minuman, Coffee, Indomie, Camilan, and Dessert. |
| 🛍️ **Cart** | Add products and review the current order before checkout. |
| 💬 **WhatsApp Ordering** | Continue the order through WhatsApp with a prepared message. |
| 📸 **Gallery** | Explore the visual identity and atmosphere of the business. |
| 📍 **Location** | Find the shop through Google Maps. |
| ℹ️ **About** | Learn more about the business and its offering. |
| 📱 **Responsive UI** | Optimized for mobile, tablet, and desktop experiences. |

---

## 🎨 Design & UX

The experience focuses on:

- **Clear visual hierarchy** for fast menu discovery
- **Mobile-first interaction** for customers browsing from their phones
- **Low-friction ordering** with WhatsApp as the final conversion point
- **Reusable UI components** instead of duplicated page patterns
- **Motion and micro-interactions** to make the interface feel responsive without overwhelming the user
- **Friendly local-business personality** rather than a generic food template

### User Flow

```text
Discover
   ↓
Explore Menu
   ↓
Search / Filter
   ↓
Product Details
   ↓
Add to Cart
   ↓
Review Order
   ↓
WhatsApp
   ↓
Order
```

---

## 🧩 Tech Stack

### Front-End

- **React 18** — component-based UI
- **TypeScript** — typed application logic
- **Vite** — development and production build tooling
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations and transitions
- **React Router** — client-side navigation

### Supporting Libraries

- **Lucide React** — interface icons
- **Recharts** — data visualization support
- **date-fns** — date utilities
- **UUID** — unique identifiers
- **dnd-kit** — drag-and-drop interactions
- **canvas-confetti** — celebratory feedback
- **Supabase JS** — backend/data integration capability

The current dependency setup is defined in `package.json`. fileciteturn40file0L2-L6

---

## 🏗️ Architecture

The application is organized around reusable components, shared context, data, pages, and utility logic.

```text
src/
├── components/     # Reusable UI and feature components
├── context/        # Shared application state
├── data/           # Business and product content
├── lib/            # Core utilities and routing helpers
├── App.tsx         # Application shell and route handling
├── pages.tsx       # Main page experiences
├── index.css       # Global styling
└── main.tsx        # Application entry point
```

The application shell uses a shared store/context and separates the main experiences into Home, Menu, About, Gallery, and Location pages. fileciteturn44file0L2-L6

Business information and menu content are centralized in the data layer, making content changes easier without restructuring the UI. fileciteturn47file0L2-L6

---

## 📂 Project Structure

```text
ShansJuice/
├── public/
├── src/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── lib/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── pages.tsx
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/DzulArsyil/ShansJuice.git
cd ShansJuice
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

### 5. Type-check the project

```bash
npm run typecheck
```

---

## 🔐 Configuration

If backend or environment-specific features are enabled, configure the required environment variables in a local `.env` file.

Do **not** commit API keys, service-role keys, or other private credentials.

---

## 📍 Business Context

Shans Juice is positioned as a casual local spot in **Karawang Kulon** offering drinks, coffee, noodles, snacks, and desserts. The website's business information includes the shop address, daily operating hours, Instagram presence, Google Maps location, and WhatsApp ordering flow. fileciteturn47file0L2-L6

> Menu availability and prices can change. The website therefore keeps the ordering flow connected to WhatsApp for confirmation.

---

## 🧠 What This Project Demonstrates

This project demonstrates the combination of **UI/UX thinking and front-end engineering** in a realistic local-business use case.

### Product Thinking

- Turning business needs into a digital customer journey
- Designing around a clear conversion goal
- Reducing friction between discovery and ordering

### UI/UX

- Responsive information architecture
- Menu discovery patterns
- Search and filtering
- Product detail interactions
- Cart and checkout flow
- Mobile ordering experience

### Front-End

- React component architecture
- Type-safe application development
- Shared state management
- Client-side routing
- Responsive styling
- Animation and interaction design

---

## 📈 Future Improvements

Potential next iterations include:

- [ ] Online availability synchronization
- [ ] More robust order management
- [ ] Customer order history
- [ ] Analytics dashboard
- [ ] Better SEO monitoring and structured data expansion
- [ ] Performance optimization and Core Web Vitals monitoring
- [ ] Automated deployment pipeline

---

## 👨‍💻 Developer

**M. Dzul'Arsyil Aziz**

UI/UX Designer × Front-End Developer

<p>
  <a href="https://github.com/DzulArsyil">GitHub</a> ·
  <a href="https://www.linkedin.com/in/mdzularsyilaziz">LinkedIn</a> ·
  <a href="https://www.instagram.com/designwithdzul">Instagram</a>
</p>

---

<p align="center">
  <i>Designed with intention. Built for real users.</i>
  <br/><br/>
  <strong>🥭 Shans Juice — Segarnya bikin balik lagi.</strong>
</p>
