import { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: "Hera Panchami: When Goddess Lakshmi Goes Looking for Lord Jagannath",
  description:
    "Discover Hera Panchami, the day Goddess Lakshmi visits Lord Jagannath at Gundicha — its story, rituals, and connection to Sri Chaitanya Mahaprabhu.",
  keywords: [
    "Hera Panchami",
    "Hera Panchami meaning",
    "Lakshmi Vijaya Jagannath",
    "why is Nandighosha chariot broken",
    "Hera Panchami Chaitanya Mahaprabhu",
    "Agyan Mala Jagannath Lakshmi",
    "Hera Panchami date fifth day Ratha Yatra",
    "why Lakshmi does not travel on Ratha Yatra chariot",
    "Srila Prabhupada Hera Panchami purport",
    "Subarna Mahalakshmi procession",
    "Gundicha temple Lakshmi Jagannath",
    "Goddess Bimala Mohana Churna",
  ],
  openGraph: {
    title: "Hera Panchami: When Goddess Lakshmi Goes Looking for Lord Jagannath",
    description:
      "The fifth day of Ratha Yatra: Goddess Lakshmi stops waiting and goes to find Lord Jagannath herself — the story, the ritual, and Sri Chaitanya Mahaprabhu's own lila.",
    type: "article",
    siteName: "Srila Prabhupada's ISKCON Thiruvanmiyur | Dakshina Dwaraka Dham, Chennai",
  },
};

export default function HeraPanchamiPage() {
    return <BlogClient />;
}
