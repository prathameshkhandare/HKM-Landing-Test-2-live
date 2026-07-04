import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import FooterSection from '@/components/FooterSection';
import GitaPathashalaHeader from '@/components/GitaPathashalaHeader';
import WhyGitaSection from '@/components/gita-pathashala/WhyGitaSection';
import WhyChooseSection from '@/components/gita-pathashala/WhyChooseSection';
import ProgrammeOverview from '@/components/gita-pathashala/ProgrammeOverview';
import AboutHKMSection from '@/components/gita-pathashala/AboutHKMSection';
import FAQSection from '@/components/gita-pathashala/FAQSection';
import RegistrationSection from '@/components/gita-pathashala/RegistrationSection';
import TestimonialsAndCTA from '@/components/gita-pathashala/TestimonialsAndCTA';
import StickyRegisterButton from '@/components/gita-pathashala/StickyRegisterButton';

export const metadata: Metadata = {
  title: 'Gītā Pathashālā | Free Online Bhagavad-gītā Classes for Children | HKM Chennai',
  description:
    'Join Gītā Pathashālā — a free online Bhagavad-gītā shloka memorisation programme for children aged 7–12. Live Zoom sessions, Mon & Fri, 5–5:30 PM. Starting 17th July. Limited seats. By Hare Krishna Movement Chennai.',
  keywords: [
    'Bhagavad Gita classes for children',
    'Online Gita classes for kids',
    'Bhagavad Gita memorisation',
    'Sanskrit shloka classes',
    'Free Gita classes Chennai',
    'Spiritual education for children',
    'Value education for children',
    'Gita Pathashala',
    'HKM Chennai',
    'ISKCON Bangalore children programme',
  ],
  openGraph: {
    title: 'Gītā Pathashālā — Free Bhagavad-gītā Shloka Classes for Children',
    description:
      'Help your child build concentration, confidence, and character with systematic Bhagavad-gītā shloka learning. Free, live on Zoom. Ages 7–12. Starting 17th July.',
    url: 'https://hkmchennai.org/gita-pathashala',
    siteName: 'Hare Krishna Movement Chennai',
    images: [
      {
        url: '/images/gita-pathashala/og-poster.png',
        width: 1200,
        height: 630,
        alt: 'Gītā Pathashālā — Free Online Bhagavad-gītā Classes for Children by HKM Chennai',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gītā Pathashālā — Free Bhagavad-gītā Classes for Children',
    description:
      'Free online shloka memorisation programme for children aged 7–12. Starting 17th July. By HKM Chennai.',
    images: ['/images/gita-pathashala/og-poster.png'],
  },
  alternates: {
    canonical: 'https://hkmchennai.org/gita-pathashala',
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://hkmchennai.org/gita-pathashala',
      url: 'https://hkmchennai.org/gita-pathashala',
      name: 'Gītā Pathashālā | Free Online Bhagavad-gītā Classes for Children',
      description:
        'Free online Bhagavad-gītā shloka memorisation programme for children aged 7–12 by Hare Krishna Movement Chennai.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://hkmchennai.org' },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Gītā Pathashālā',
            item: 'https://hkmchennai.org/gita-pathashala',
          },
        ],
      },
    },
    {
      '@type': 'Course',
      name: 'Gītā Pathashālā',
      description:
        'A free 10-week online programme teaching children aged 7–12 to memorise and recite Bhagavad-gītā shlokas with correct Sanskrit pronunciation. Live Zoom sessions every Monday and Friday, 5–5:30 PM.',
      provider: {
        '@type': 'Organization',
        name: 'Hare Krishna Movement Chennai — Dakṣiṇa Dwārakā Dhām',
        url: 'https://hkmchennai.org',
      },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'online',
        startDate: '2025-07-17',
        endDate: '2025-09-19',
        courseSchedule: {
          '@type': 'Schedule',
          repeatFrequency: 'P1W',
          byDay: ['Monday', 'Friday'],
          startTime: '17:00',
          endTime: '17:30',
        },
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
          availability: 'https://schema.org/LimitedAvailability',
        },
      },
      educationalLevel: 'Children aged 7–12',
      teaches: [
        'Sanskrit shloka memorisation',
        'Bhagavad-gītā recitation',
        'Correct Sanskrit pronunciation',
        'Concentration and memory techniques',
      ],
    },
    {
      '@type': 'Organization',
      name: 'Hare Krishna Movement Chennai',
      alternateName: 'HKM Chennai',
      url: 'https://hkmchennai.org',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-96008-15108',
        contactType: 'registration',
        availableLanguage: ['Tamil', 'English'],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Who can join Gītā Pathashālā?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Gītā Pathashālā is open to all children between the ages of 7 and 12 years. No prior knowledge of Sanskrit or Bhagavad-gītā is required.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Gītā Pathashālā free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Gītā Pathashālā is offered completely free of cost. There are no registration fees, no monthly fees, and no charges for study materials.',
          },
        },
        {
          '@type': 'Question',
          name: 'When do classes start and what is the schedule?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Classes begin on 17th July. Sessions are held live on Zoom every Monday and Friday from 5:00 PM to 5:30 PM for 10 weeks.',
          },
        },
      ],
    },
  ],
};

export default function GitaPathashalaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#FFF9F0] font-sans selection:bg-[#FBB201] selection:text-white relative">
        <Navbar />
        <GitaPathashalaHeader />
        
        {/* Main Content Sections */}
        <WhyGitaSection />
        <WhyChooseSection />
        <ProgrammeOverview />
        <AboutHKMSection />
        <TestimonialsAndCTA />
        <FAQSection />
        <RegistrationSection />
        
        <FooterSection />
        <StickyRegisterButton />
      </main>
    </>
  );
}
