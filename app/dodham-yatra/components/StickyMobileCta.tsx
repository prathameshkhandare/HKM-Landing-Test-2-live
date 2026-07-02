// app/yatramritam/kedarnath-badrinath/components/StickyMobileCta.tsx
import { YATRA_META } from "../data";
export default function StickyMobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex gap-3 border-t border-gold-200 bg-white p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] sm:hidden">
      <a href={`tel:${YATRA_META.phoneHref}`} className="flex-1 rounded-full border border-maroon-600 py-3 text-center text-sm font-semibold text-maroon-600">Call Now</a>
      <a href="#register" className="flex-1 rounded-full bg-terracotta-600 py-3 text-center text-sm font-semibold text-white">Book Seat</a>
    </div>
  );
}
