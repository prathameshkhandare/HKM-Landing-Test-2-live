// app/yatramritam/sri-lanka-ramayana-yatra/page.jsx
// Next.js 13/14 App Router — server component wrapper

import RamayanaYatraPage from "./RamayanaYatraPage";

// Metadata is exported from layout.jsx
// This is the server entry — client logic lives in RamayanaYatraPage

export default function Page() {
  return <RamayanaYatraPage />;
}
