import { MetadataRoute } from 'next'

const BASE_URL = 'https://hkmchennai.org'
const now = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // ── Home & About ─────────────────────────────────────────────────────────
    { url: BASE_URL,                    lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/about-hkm`,     lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

    // ── Srila Prabhupada ─────────────────────────────────────────────────────
    { url: `${BASE_URL}/srila-prabhupada`,                        lastModified: now, changeFrequency: 'yearly',  priority: 0.8 },
    { url: `${BASE_URL}/srila-prabhupada/the-guru`,               lastModified: now, changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${BASE_URL}/srila-prabhupada/achievements`,           lastModified: now, changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${BASE_URL}/srila-prabhupada/books`,                  lastModified: now, changeFrequency: 'yearly',  priority: 0.7 },
    { url: `${BASE_URL}/srila-prabhupada/bhajans-kirtans`,        lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${BASE_URL}/srila-prabhupada/sampradaya-parampara`,   lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },

    // ── Activities ───────────────────────────────────────────────────────────
    { url: `${BASE_URL}/activities`,                                     lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/activities/gita-life`,                           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/activities/folk`,                                lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/activities/cultural-festivals`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/activities/sunday-retreats`,                     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/activities/spiritual-discourses`,                lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/activities/yuga-dharma`,                         lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/activities/tirtha-yatra`,                        lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/activities/soulful-sangam`,                      lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/activities/kala-madhuryam`,                      lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/activities/atmarpanam`,                          lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/activities/distribution-of-spiritual-knowledge`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/activities/icvk`,                                lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/activities/icvk/activities`,                     lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/activities/icvk/register-for-icvk`,             lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/activities/icvk/enquiry`,                        lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/activities/icvk/summer-camp-registration`,       lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/activities/icvk/winter-camp-registration`,       lastModified: now, changeFrequency: 'monthly', priority: 0.6 },

    // ── Philosophy ───────────────────────────────────────────────────────────
    { url: `${BASE_URL}/philosophy`,                           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/philosophy/bhagavad-gita`,             lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/philosophy/krishna-consciousness`,     lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/philosophy/lord-krishna`,              lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/philosophy/sri-chaitanya-mahaprabhu`,  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/philosophy/yugadharma`,                lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/philosophy/ask-any-question`,          lastModified: now, changeFrequency: 'weekly',  priority: 0.6 },

    // ── Donate ───────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/donate`,                         lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/donate/make-donation`,           lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/donate/deity-seva`,              lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/donate/gopala-seva`,             lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/donate/pandava-seva`,            lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/donate/sudama-seva`,             lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/donate/how-to-donate`,           lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },

    // ── Blog ─────────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/blog`,                                                    lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/blog/bhagavad-gita`,                                      lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/blog/ramanavami`,                                         lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${BASE_URL}/blog/rukmini-dwadashi`,                                   lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${BASE_URL}/blog/akshaya-tritiya`,                                    lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${BASE_URL}/blog/narasimha-jayanti`,                                  lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${BASE_URL}/blog/gadadhara-pandita`,                                  lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${BASE_URL}/blog/jayananda-prabhu-disappearance-day`,                 lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${BASE_URL}/blog/sita-devi-appearance-day`,                           lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${BASE_URL}/blog/sri-madhavendra-puri-appearance-disappearance-day`,  lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${BASE_URL}/blog/sri-madhu-pandita-gosvami`,                          lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${BASE_URL}/blog/srimati-jahnava-devi-appearance-disappearance-day`,  lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${BASE_URL}/blog/srinivasa-acharya`,                                  lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${BASE_URL}/blog/glories-of-sri-ramananda-raya`,                     lastModified: now, changeFrequency: 'yearly',  priority: 0.6 },

    // ── Lectures ─────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/activities/gita-life`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },

    // ── Gallery ───────────────────────────────────────────────────────────────
    { url: `${BASE_URL}/gallery`,                  lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${BASE_URL}/gallery/daily-darshan`,    lastModified: now, changeFrequency: 'daily',   priority: 0.8 },
    { url: `${BASE_URL}/gallery/festival-photos`,  lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/gallery/videos`,           lastModified: now, changeFrequency: 'weekly',  priority: 0.6 },
    { url: `${BASE_URL}/gallery/media`,            lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ]
}
