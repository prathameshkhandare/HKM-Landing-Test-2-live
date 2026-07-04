'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Who can join Gītā Pathashālā?',
    a: 'Gītā Pathashālā is open to all children between the ages of 7 and 12 years. No prior knowledge of Sanskrit, Bhagavad-gītā, or any religious background is required. The programme is welcoming to children from all families who wish to give their child a grounding in this timeless wisdom.',
  },
  {
    q: 'Is this programme really free of charge?',
    a: 'Yes, Gītā Pathashālā is offered completely free of cost. There are no registration fees, no monthly fees, and no charges for study materials. This is a seva (service) offering from Hare Krishna Movement Chennai to the community.',
  },
  {
    q: 'How long is each class, and how many classes are there per week?',
    a: 'Each class is 30 minutes long. Classes are held twice a week — on Mondays and Fridays — from 5:00 PM to 5:30 PM. The total programme runs for 10 weeks, giving children a structured and manageable learning experience without overloading their schedules.',
  },
  {
    q: 'How are the classes conducted?',
    a: 'All classes are conducted live on Zoom. Children and parents can join from the comfort of their home. The live format allows teachers to interact directly with each child, provide real-time pronunciation feedback, and conduct interactive revision activities.',
  },
  {
    q: 'Does my child need to know Sanskrit to join?',
    a: 'No prior Sanskrit knowledge is needed at all. One of the key goals of the programme is to teach children correct Sanskrit pronunciation from scratch. Teachers guide children step by step, beginning with the sounds of each syllable before moving to full verses.',
  },
  {
    q: 'What exactly will my child learn during the 10 weeks?',
    a: 'Children will learn to correctly pronounce, memorise, and recite prescribed shlokas from the Bhagavad-gītā. Beyond the verses themselves, they will develop memorisation techniques, improve concentration, build confidence in recitation, and gain an appreciation for the depth and beauty of this scripture.',
  },
  {
    q: 'How much time does my child need to practise at home?',
    a: 'We recommend about 5 to 10 minutes of daily home practice — listening to the verse, repeating it aloud, and reviewing what was covered in class. This small daily habit, sustained over 10 weeks, makes a significant difference in retention and confidence.',
  },
  {
    q: 'Do parents need to attend the classes too?',
    a: 'Parents are not required to attend, but we warmly encourage it — especially for younger children aged 7–8. A parent\'s presence during class and gentle encouragement at home makes a remarkable difference to a child\'s progress and enjoyment of the programme.',
  },
  {
    q: 'What is the language of instruction?',
    a: 'Classes are conducted in Tamil and English. The shlokas are in Sanskrit, and teachers explain the meaning and pronunciation in both Tamil and English so that all children can follow comfortably.',
  },
  {
    q: 'Will classes be recorded for children who miss a session?',
    a: 'We aim to accommodate children who occasionally miss a session. Please contact us on WhatsApp at 96008 15108 if your child misses a class, and we will guide you on how to help them catch up.',
  },
  {
    q: 'Are seats limited? How do I secure a spot?',
    a: 'Yes, seats are limited to ensure each child receives adequate attention from the teachers. We strongly recommend registering early to avoid disappointment. You can register using the form on this page or by contacting us on WhatsApp at 96008 15108.',
  },
  {
    q: 'What device does my child need for the online classes?',
    a: 'Any device with a working camera, microphone, and internet connection will work — a smartphone, tablet, or laptop. The Zoom application can be downloaded free of charge from the App Store or Google Play. A stable internet connection is important for uninterrupted learning.',
  },
  {
    q: 'Is this programme only for Hindu children?',
    a: 'Gītā Pathashālā warmly welcomes children from all backgrounds. The Bhagavad-gītā contains universal teachings about duty, character, and wisdom that are relevant to every human being regardless of religion or culture. We believe every child can benefit from its study.',
  },
  {
    q: 'What if my child is shy or struggles to recite in class?',
    a: 'Our teachers are trained to work with children of varying confidence levels. The classroom environment is warm and encouraging — there is no pressure, and children are never made to feel embarrassed. Progress is celebrated at every stage, however small, building confidence gradually.',
  },
  {
    q: 'Will my child receive a certificate on completion?',
    a: 'Details regarding completion recognition will be shared with registered participants. Please check with us closer to the end of the programme for the latest information.',
  },
  {
    q: 'How can I help my child at home between classes?',
    a: 'The most effective thing a parent can do is listen along during the live class, practise the verse together each morning or evening, and show genuine interest in what your child is learning. Children who feel their parents value what they are doing tend to stay motivated and focused throughout the programme.',
  },
  {
    q: 'Is this programme connected to any specific religion?',
    a: 'The programme is conducted by Hare Krishna Movement Chennai, which is part of the ISKCON tradition founded by A.C. Bhaktivedanta Swami Prabhupāda. The content is rooted in Gauḍīya Vaiṣṇava tradition. Families of all backgrounds are welcome, and the teaching focuses on the text and values of the Bhagavad-gītā itself.',
  },
  {
    q: 'What happens after the 10-week programme ends?',
    a: 'We will share information about continuation opportunities — including further batches, advanced programmes, and community events — as the programme progresses. Our goal is to make Bhagavad-gītā learning a lifelong journey for every child who begins with us.',
  },
  {
    q: 'How do I contact the organisers for more information?',
    a: 'You can reach us on WhatsApp or call us at 96008 15108. Our team is happy to answer any questions about the programme, the registration process, or anything else you would like to know before your child joins.',
  },
  {
    q: 'Can siblings join the same batch?',
    a: 'Yes, siblings within the 7–12 age group can join the same batch. Please register each child separately using the registration form so we have their individual details. Learning together as siblings often strengthens motivation and makes home practice more enjoyable.',
  },
  {
    q: 'What is the batch start date and how many sessions are there in total?',
    a: 'The batch begins on 17th July. With two sessions per week over 10 weeks, there are 20 live sessions in total. The structured pace ensures thorough learning without overwhelming children\'s existing school and activity schedules.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#FFF9F0] py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#FBB201]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ea580c]/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#ea580c] font-sans font-bold text-xs tracking-[0.2em] uppercase mb-3">
            Questions & Answers
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#2D0A0A] mb-4">
            Frequently Asked Questions
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-[#FBB201] to-[#ea580c] rounded-full" />
          </div>
          <p className="text-gray-700 text-xl font-sans">
            Everything parents need to know before registering their child.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-2xl bg-white overflow-hidden transition-all duration-300 shadow-sm ${openIndex === i ? 'border-[#ea580c]/30 shadow-md' : 'border-orange-100'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-orange-50/50 transition-colors"
                aria-expanded={openIndex === i}
              >
                <span className="font-serif text-[#2D0A0A] font-bold text-xl pr-4">
                  {faq.q}
                </span>
                <span className={`text-[#ea580c] text-2xl shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-5">
                  <div className="h-px bg-orange-100 mb-4" />
                  <p className="text-gray-700 text-lg leading-relaxed font-sans">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact nudge */}
        <div className="mt-16 text-center bg-white border border-orange-100 rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <p className="text-[#2D0A0A] font-serif font-bold text-xl mb-4">
            Have a question not answered here?
          </p>
          <a
            href="https://wa.me/919600815108"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#25d366] to-[#1eb354] text-white font-sans text-lg font-bold rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <span className="text-2xl">💬</span> WhatsApp Us: 96008 15108
          </a>
        </div>
      </div>
    </section>
  );
}
