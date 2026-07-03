// app/yatramritam/kailash-manasarovar/fonts.ts
// Using next/font/google self-hosts the fonts at build time — no external
// request at runtime, zero layout shift, and works inside your existing
// Next.js 13/14 App Router project. Import the exported variables into the
// page's top-level element (see page.tsx).

import { Cormorant_Garamond, Cinzel, Inter, Poppins } from "next/font/google";

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});
