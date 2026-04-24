'use client';

import { useState } from 'react';
import styles from './SitaDeviBlog.module.css';

interface FaqItem {
  question: string;
  answer: React.ReactNode;
}

const faqItems: FaqItem[] = [
  {
    question: 'Who is Srimati Sita Devi according to Vaishnava scripture?',
    answer: (
      <p>
        According to Śrīla Prabhupāda&apos;s purport to <em>Śrīmad-Bhāgavatam</em> 9.10.4, Srimati
        Sita Devi is the goddess of fortune who resides on the chest of the Lord — non-different
        from Lakṣmī Devī and the eternal consort of Lord Rāmacandra. She is the internal pleasure
        energy (<em>hlādinī-śakti</em>) of the Supreme Lord, not an ordinary woman but an eternally
        liberated divine personality. The <em>Kūrma Purāṇa</em> (quoted in{' '}
        <em>Śrī Caitanya-caritāmṛta</em>, Madhya-līlā 9.201) further declares her the mother of
        the three worlds and the supreme among all chaste women.
      </p>
    ),
  },
  {
    question: 'When is Sita Navami?',
    answer: (
      <p>
        Sita Navami — also known as Janaki Navami or Srimati Sita Devi&apos;s Appearance Day — is
        observed annually on Vaiśākha Śukla Navamī, the ninth day of the bright fortnight in the
        month of Vaiśākha.
      </p>
    ),
  },
  {
    question: 'What is the significance of Sita Navami?',
    answer: (
      <p>
        Sita Navami commemorates the divine appearance of Srimati Sita Devi, who emerged from the
        earth as King Janaka ploughed a field in preparation for a yajña. Devotees observe this day
        by chanting the Hare Kṛṣṇa mahā-mantra with the mood of complete surrender, reading
        Śrīmad-Bhāgavatam Canto 9 Chapter 10, offering flowers at the altar, and observing a
        partial fast until noon.
      </p>
    ),
  },
  {
    question: 'What is the difference between Sita Devi and Radha Rani?',
    answer: (
      <p>
        According to Śrīla Prabhupāda&apos;s purport to <em>Śrīmad-Bhāgavatam</em> 10.47.60, both
        Srimati Sita Devi and Srimati Radharāṇī are expansions of the Lord&apos;s pleasure potency (
        <em>hlādinī-śakti</em>). Sita Devi is the eternal consort of Lord Rāmacandra in the
        Vaikuṇṭha mood of <em>aiśvarya</em> (divine opulence). Radharāṇī is the consort of Lord
        Kṛṣṇa in the Vraja mood of <em>mādhurya</em> (sweet intimacy). Even Lakṣmī Devī — of whom
        Sita is an expansion — yearns for the platform of the Vraja gopīs, as Śukadeva Gosvāmī
        explains in that same verse.
      </p>
    ),
  },
  {
    question: 'How is Sita Devi connected to Sri Chaitanya Mahaprabhu?',
    answer: (
      <p>
        According to the Navadvīpa-dhāma Māhātmya, when Lord Rāmacandra passed through Navadvīpa
        in Tretā-yuga, He revealed to Sita Devī that He would return in Kali-yuga as Śrī Caitanya
        Mahāprabhu, and that She would appear as Srimati Viṣṇupriyā Devī — Mahāprabhu&apos;s
        devoted wife who accepted the profound separation of His <em>sannyāsa</em> with perfect,
        unbroken surrender.
      </p>
    ),
  },
  {
    question: 'What does Srila Prabhupada say about Sita Devi?',
    answer: (
      <p>
        Śrīla Prabhupāda describes Sita Devi as the personification of the Lord&apos;s{' '}
        <em>hlādinī-śakti</em> — the divine pleasure potency. He explains that her{' '}
        <em>pātivratya-dharma</em> (complete fidelity to Lord Rāma) gave her supernatural
        protection even against the powerful demon Rāvaṇa, and cites Śrīmad-Bhāgavatam 9.10.27 to
        illustrate how chastity and devotion become the greatest spiritual armour.
      </p>
    ),
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className={styles.faqSection}>
      <h2 id="faq">Frequently Asked Questions</h2>
      <p className={styles.faqIntro}>
        Common questions about Srimati Sita Devi, Sita Navami, and Dakshina Dwārakā Dhām —
        answered through the Vaiṣṇava lens.
      </p>

      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className={styles.faqItem}>
            <button
              className={`${styles.faqQuestion} ${isOpen ? styles.faqQuestionOpen : ''}`}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              {item.question}
              <svg
                className={`${styles.faqChevron} ${isOpen ? styles.faqChevronOpen : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className={`${styles.faqAnswer} ${isOpen ? styles.faqAnswerOpen : ''}`}>
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
