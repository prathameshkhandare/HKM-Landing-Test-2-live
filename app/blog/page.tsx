import { supabase } from "@/lib/supabase"
import BlogListingClient, { type BlogPost } from "./BlogListingClient"

export const revalidate = 60

function formatDate(dateStr: string | null): string {
    if (!dateStr) return "HKM Team"
    return new Date(dateStr).toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    })
}

const STATIC_POSTS: BlogPost[] = [
    {
        id: 36,
        title: "Sri Srivasa Thakura: Heart of the Sankirtana Movement",
        excerpt: "Discover Sri Srivasa Thakura, the Panca-tattva devotee in whose courtyard Lord Chaitanya first held nightly sankirtana that grew into a worldwide movement.",
        image: "/images/blogs/sri-srivasa-thakura/srivasa-angan.jpg",
        imagePosition: "object-top",
        category: "Vaishnava Acharya",
        date: "Jul 22, 2026",
        author: "HKM Team",
        link: "/blog/sri-srivasa-thakura"
    },
    {
        id: 35,
        title: "Hera Panchami: When the Goddess of Fortune Marches on Her Lord",
        excerpt: "The story of Hera Panchami (Lakshmi Vijaya) — Srimati Lakshmidevi's proud procession to Jagannath's temple, five days after Ratha Yatra, as narrated in Sri Chaitanya Charitamrita.",
        image: "/assets/blog/hera-panchami/hera_panchami_ritual.png",
        imagePosition: "object-top",
        category: "Festival",
        date: "Jul 21, 2026",
        author: "HKM Team",
        link: "/blog/hera-panchami"
    },
    {
        id: 34,
        title: "Sri Sivananda Sena: The Guide of the Pilgrims",
        excerpt: "Discover Sri Sivananda Sena, the devotee who guided and financed the annual Bengal-to-Puri pilgrimage for Sri Chaitanya Mahaprabhu's devotees.",
        image: "/assets/blog/sivananda-sena/Nityananda_Prabhu_Kicks_Shivananda_Sena.png",
        imagePosition: "object-top",
        category: "Vaishnava Acharya",
        date: "Jul 17, 2026",
        author: "HKM Team",
        link: "/blog/sivananda-sena"
    },
    {
        id: 33,
        title: "Sri Svarupa Damodara Gosvami: Secretary and Confidant of Sri Chaitanya Mahaprabhu",
        excerpt: "The life of Sri Svarupa Damodara Gosvami — secretary, singer, and most intimate confidant of Sri Chaitanya Mahaprabhu's final twelve years in Jagannatha Puri.",
        image: "/assets/blog/svarupa-damodara-gosvami/hero.jpg",
        imagePosition: "object-top",
        category: "Vaishnava Acharya",
        date: "Jul 16, 2026",
        author: "HKM Team",
        link: "/blog/svarupa-damodara-gosvami"
    },
    {
        id: 32,
        title: "Vyasa Puja: Understanding the Festival & Writing Your Offering",
        excerpt: "A complete devotee's guide to Vyasa Puja — its meaning, significance, and how to write a heartfelt offering to Srila Prabhupada.",
        image: "/images/vyasa-puja-guide-offering/hero.png",
        imagePosition: "object-top",
        category: "Festival",
        date: "Jul 13, 2026",
        author: "HKM Team",
        link: "/blog/vyasa-puja-guide-offering"
    },
    {
        id: 31,
        title: "Sri Bhaktivinoda Thakura: The Seventh Gosvami",
        excerpt: "Discover Sri Bhaktivinoda Thakura's life — the magistrate-acharya who found Mayapur, wrote 100 books, and foretold the worldwide Hare Krishna movement.",
        image: "/images/sri-bhaktivinoda-thakura/hero.png",
        imagePosition: "object-top",
        category: "Great Acharyas",
        date: "Jul 13, 2026",
        author: "HKM Team",
        link: "/blog/sri-bhaktivinoda-thakura-life-teachings-legacy"
    },
    {
        id: 30,
        title: "Chhera Pahara and Jagannath Ratha Yatra: Why the King of Puri Sweeps the Chariots",
        excerpt: "Discover Chhera Pahara, the ritual where the King of Puri sweeps Lord Jagannath's chariots, and its account in Chaitanya-charitamrita, Madhya-lila 13.",
        image: "/images/chhera-pahara/King_Prataparudra_sweeping_the_chariot_path_during_Chhera_Pahara.png",
        imagePosition: "object-top",
        category: "Festival",
        date: "Jul 09, 2026",
        author: "HKM Team",
        link: "/blog/chhera-pahara-jagannath-ratha-yatra"
    },
    {
        id: 29,
        title: "Pahandi Bije: How Lord Jagannath Is Carried to His Chariot at Ratha Yatra",
        excerpt: "Discover Pahandi Bije, the sacred procession that carries Lord Jagannath to His chariot at Ratha Yatra, and its detailed account in Chaitanya-charitamrita.",
        image: "/images/pahandi-bije/Temple_servitors_carrying_Lord_Jagannath_in_the_Pahandi_procession_at_Puri.jfif",
        imagePosition: "object-top",
        category: "Festival",
        date: "Jul 07, 2026",
        author: "HKM Team",
        link: "/blog/pahandi-bije-jagannath-ratha-yatra"
    },
    {
        id: 28,
        title: "Gundicha Marjana: The Sacred Cleaning That Begins the Jagannath Ratha Yatra",
        excerpt: "Discover Gundicha Marjana, the sacred cleaning pastime of Sri Chaitanya Mahaprabhu before Jagannath Ratha Yatra, and its deep teaching on cleansing the heart.",
        image: "/assets/blog/gundicha-marjana/mahaprabhu-cleaning.png",
        imagePosition: "object-top",
        category: "Festival",
        date: "Jul 06, 2026",
        author: "HKM Team",
        link: "/blog/gundicha-marjana"
    },
    {
        id: 27,
        title: "Sri Vakreshvara Pandita: The One Wing of Lord Chaitanya",
        excerpt: "Discover Sri Vakreshvara Pandita, the ecstatic dancer of Lord Chaitanya who danced 72 hours in sankirtana, his life, the 'wing' pastime, and lila sthalis.",
        image: "/assets/blog/vakreshvara-pandita/sri-vakreshvara-pandita.jpg",
        imagePosition: "object-top",
        category: "Vaishnava Acharya",
        date: "Jul 05, 2026",
        author: "HKM Team",
        link: "/blog/vakreshvara-pandita"
    },
    {
        id: 26,
        title: "Snana Yatra: The Sacred Bathing Festival of Lord Jagannath",
        excerpt: "Discover the deep meaning of Snana Yatra, Lord Jagannath's sacred bathing festival, and its moving connection to Sri Chaitanya Mahaprabhu's pastimes at Alarnath.",
        image: "/assets/blog/snana-yatra/bathing.jpg.jpeg",
        imagePosition: "object-center",
        category: "Festival",
        date: "Jul 04, 2026",
        author: "HKM Team",
        link: "/blog/snana-yatra"
    },
    {
        id: 25,
        title: "Sri Mukunda Datta — The Eternal Singer Whose Voice Made the Lord Dance",
        excerpt: "Discover Sri Mukunda Datta — Lord Chaitanya's class friend, beloved singer, and devoted associate whose kirtana made the Lord Himself rise and dance in ecstasy.",
        image: "/assets/blog/mukunda-datta/cover.png",
        imagePosition: "object-top",
        category: "Vaishnava Acharya",
        date: "Jun 29, 2026",
        author: "HKM Team",
        link: "/blog/mukunda-datta"
    },
    {
        id: 24,
        title: "Sri Shyamananda Prabhu — The Torchbearer of the Six Goswamis",
        excerpt: "The complete life, pastimes, and teachings of Sri Shyamananda Prabhu — foremost Gaudiya Vaishnava preacher in Odisha, recipient of Srimati Radharani's direct mercy.",
        image: "/assets/blog/sri-shyamananda-prabhu/Sri_Shyamananda_Prabhu_The_Torchbearer_of_Gaura-Nityananda_s_Message_in_Odisha.png",
        imagePosition: "object-top",
        category: "Vaishnava Acharya",
        date: "Jun 28, 2026",
        author: "HKM Team",
        link: "/blog/sri-shyamananda-prabhu"
    },
    {
        id: 23,
        title: "Caste System Truth: What Srila Prabhupada Actually Taught",
        excerpt: "Discover what Srila Prabhupada teaches about caste: the divine varnasrama system vs. birth-based caste, how it corrupted society, and why Krishna consciousness is the solution.",
        image: "/assets/blog/caste-system-varnashrama.png",
        category: "Philosophy",
        date: "May 29, 2026",
        author: "HKM Team",
        link: "/blog/what-srila-prabhupada-teaches-caste-system-varnasrama"
    },
    {
        id: 0,
        title: "Complete Visitor Guide - ISKCON Thiruvanmiyur",
        excerpt: "Everything a visitor needs to know before coming to Dakshina Dwaraka Dham - timings, darshan, dress code, festivals, prasadam, directions, and FAQs.",
        image: "/assets/dakshina-dwaraka-dham.webp",
        category: "Article",
        date: "Mar 30, 2026",
        author: "HKM Team",
        link: "/blog/visitor-guide"
    },
    {
        id: 7,
        title: "Bhagavad Gita - Applying Eternal Wisdom in Daily Life",
        excerpt: "A reflective blog article on the main teachings of the Bhagavad Gita and how they guide modern life, duty, devotion, and inner peace.",
        image: "/assets/lessons-from-gita-image-1.png",
        category: "Article",
        date: "Mar 30, 2026",
        author: "HKM Team",
        link: "/blog/bhagavad-gita"
    },
    {
        id: 8,
        title: "Rama Navami - The Appearance Day of Lord Ramacandra",
        excerpt: "Discover the spiritual significance of Rama Navami — the appearance day of Lord Ramachandra — through the timeless teachings of Srila Prabhupada.",
        image: "/assets/ramanavami-blog-image.png",
        imagePosition: "object-top",
        category: "Festival",
        date: "Mar 30, 2026",
        author: "HKM Team",
        link: "/blog/ramanavami"
    },
    {
        id: 9,
        title: "Rukmini Dwadashi - The Appearance Day of Srimati Rukmini Devi",
        excerpt: "Rukmini Dwadashi is the divine appearance day of Srimati Rukmini Devi — Krishna's eternal queen and the Goddess of Fortune. Read her full story and glories.",
        image: "/assets/TA_987_sudama_and_krishna.png",
        imagePosition: "object-top",
        category: "Festival",
        date: "Apr 13, 2026",
        author: "HKM Team",
        link: "/blog/rukmini-dwadashi"
    },
    {
        id: 11,
        title: "Sri Gadadhara Pandita: The Foremost Among the Internal Potencies",
        excerpt: "Gadadhara Pandita is the foremost internal potency of Lord Caitanya — an incarnation of Srimati Radharani Herself. Discover his life, his devotion, and the miracle of the sitting Tota Gopinatha deity.",
        image: "/assets/blog/gadadhara-pandita/panchtattva.jpg",
        imagePosition: "object-center",
        category: "Vaishnava Acharya",
        date: "Apr 17, 2026",
        author: "HKM Team",
        link: "/blog/gadadhara-pandita"
    },
    {
        id: 10,
        title: "Narasimha Jayanti - The Divine Appearance of Lord Nrsimhadeva",
        excerpt: "Narasimha Jayanti celebrates the divine appearance of Lord Nrsimhadeva — the half-man, half-lion incarnation of Visnu who appeared from a pillar to protect His devotee Prahlada Maharaja.",
        image: "/assets/blog/narasimha-jayanti/narasimha_poster_2.png",
        imagePosition: "object-top",
        category: "Festival",
        date: "Apr 17, 2026",
        author: "HKM Team",
        link: "/blog/narasimha-jayanti"
    },
    {
        id: 12,
        title: "Akshaya Tritiya – The Inexhaustible Day of Eternal Blessings",
        excerpt: "Discover the true meaning of Akshaya Tritiya — 9 sacred events across cosmic history, the pastimes of Sudama & Rukmini Devi, and how to observe this auspicious day with devotion to Lord Krsna.",
        image: "/assets/blog/akshaya-tritiya/sudama_krishna.png",
        imagePosition: "object-top",
        category: "Festival",
        date: "Apr 20, 2026",
        author: "Sampati Dasa",
        link: "/blog/akshaya-tritiya"
    },
    {
        id: 13,
        title: "Srimati Sita Devi Appearance Day — Sita Navami",
        excerpt: "Celebrate Sita Navami — the appearance of Srimati Sita Devi, the eternal consort of Lord Ramacandra — through sastra, Sanskrit shlokas, and the teachings of Srila Prabhupada.",
        image: "/assets/blog/sita-devi-appearance-day/Sita_Rama_and_Lakshman_in_the_Forest.png",
        imagePosition: "object-top",
        category: "Festival",
        date: "Apr 24, 2026",
        author: "HKM Team",
        link: "/blog/sita-devi-appearance-day"
    },
    {
        id: 14,
        title: "Sri Madhu Pandita Gosvami — The Devoted Servant of Gopinatha",
        excerpt: "A disciple of Sri Gadadhara Pandita, founder of the Gopinatha Temple in Vrndavana, forty years of Deity service, the blessing of Srinivasa Acarya, and how to remember this great soul.",
        image: "/assets/blog/sri-madhu-pandita-gosvami/Madhu_Pandita_Goswami.png",
        imagePosition: "object-top",
        category: "Vaishnava Acharya",
        date: "Apr 24, 2026",
        author: "HKM Team",
        link: "/blog/sri-madhu-pandita-gosvami"
    },
    {
        id: 15,
        title: "Srimati Jahnava Devi — The Pleasure Potency of Lord Nityananda",
        excerpt: "Srila Prabhupada on Srimati Jahnava Devi: Ananga-manjari, acarya of the Gaudiya Vaisnava world, the mercy of Lord Nityananda — from books, purports, and conversations.",
        image: "/assets/blog/srimati-jahnava-devi/orgradhikai2.png",
        imagePosition: "object-center",
        category: "Vaishnava Acharya",
        date: "Apr 25, 2026",
        author: "HKM Team",
        link: "/blog/srimati-jahnava-devi-appearance-disappearance-day"
    },
    {
        id: 16,
        title: "Sri Jayananda Prabhu — A Glorious Life, a Glorious Departure",
        excerpt: "Discover the inspiring life and glorious departure of Sri Jayananda Prabhu — the beloved disciple of Srila Prabhupada who lived and died in pure devotional service to Lord Krsna.",
        image: "/assets/blog/jayananda-prabhu/Sri_Jayananda_Prabhu.png",
        imagePosition: "object-top",
        category: "Vaishnava Acharya",
        date: "May 01, 2026",
        author: "HKM Team",
        link: "/blog/jayananda-prabhu-disappearance-day"
    },
    {
        id: 17,
        title: "Sri Madhavendra Puri — The Root from Which the Tree of Pure Devotion Grew",
        excerpt: "The grand-spiritual-master of Lord Caitanya, the first to plant the seed of love of Godhead — discover the Gopala pastimes, Ksira-cora Gopinatha, the verse ayi dina-dayardra natha, and the lesson of the two disciples.",
        image: "/assets/blog/madhavendra-puri/Madhavendra_Puri_Worships_Gopala.png",
        imagePosition: "object-top",
        category: "Vaishnava Acharya",
        date: "May 01, 2026",
        author: "HKM Team",
        link: "/blog/sri-madhavendra-puri-appearance-disappearance-day"
    },
    {
        id: 18,
        title: "Sri Srinivasa Acarya — The Link Between the Gosvamis and All of Us",
        excerpt: "Sri Srinivasa Acarya is the direct link between the Six Gosvamis of Vrndavana and all subsequent acaryas — including Srila Prabhupada. Learn about his life, his mission to Bengal, the Sad-gosvamy-astaka, and why every devotee owes him an eternal debt.",
        image: "https://hkmchennai.org/assets/blog/srinivasa-acharya/srinivasa_acharya.png",
        imagePosition: "object-top",
        category: "Vaishnava Acharya",
        date: "May 02, 2026",
        author: "HKM Team",
        link: "/blog/srinivasa-acharya"
    },
    {
        id: 19,
        title: "Glories of Sri Ramananda Raya — The Most Confidential Associate",
        excerpt: "The most confidential associate of Lord Caitanya Mahaprabhu — the devotee who saw Lord Caitanya's combined form of Radha and Krsna, and conducted the greatest conversation in all of Gaudiya Vaisnava literature.",
        image: "https://hkmchennai.org/assets/blog/ramananda-raya/ramananda-talks-with-chaitanya.png",
        imagePosition: "object-top",
        category: "Vaishnava Acharya",
        date: "May 02, 2026",
        author: "HKM Team",
        link: "/blog/glories-of-sri-ramananda-raya"
    },
    {
        id: 20,
        title: "Sri Vrndavana Dasa Thakura — The Vyasa of the Chaitanya-lila",
        excerpt: "The disciple of Sri Nityananda Prabhu who received the mercy of Lord Caitanya at birth, authored the Chaitanya Bhagavata, and is venerated as the Vyasa incarnation of the Gaudiya tradition — his life, sacred places, and glories.",
        image: "/assets/blog/sri-vrindavan-das-thakur/Sri_Vrindavan_Das_Thakur.png",
        imagePosition: "object-top",
        category: "Vaishnava Acharya",
        date: "May 03, 2026",
        author: "HKM Team",
        link: "/blog/sri-vrindavan-das-thakur"
    },
    {
        id: 21,
        title: "Srila Baladeva Vidyabhushana — The Gaudiya Acharya Who Defended a Sampradaya",
        excerpt: "The acharya who prostrated before Govindaji for three days, composed the Govinda-bhashya, and secured the victory of the Gaudiya sampradaya at Galta, Jaipur in 1718 CE — and why Srila Prabhupada dedicated the Bhagavad-gita As It Is to him.",
        image: "/assets/blog/srila-baladeva-vidyabhushana/Srila_Baladeva_Vidyabhushana.png",
        imagePosition: "object-top",
        category: "Vaishnava Acharya",
        date: "May 10, 2026",
        author: "HKM Team",
        link: "/blog/srila-baladeva-vidyabhushana"
    },
    {
        id: 22,
        title: "Panihati Chida Dadhi Mahotsava — The Blissful Festival of Chipped Rice and Nityananda's Mercy",
        excerpt: "The day Lord Nityananda 'punished' Raghunatha Dasa Goswami with a feast that fed thousands on the banks of the Ganges — and opened the door to Sri Chaitanya Mahaprabhu's mercy for all future generations.",
        image: "/assets/blog/panihati-chida-dadhi-mahotsava/Lord_Chaitanya_Mahaprabhu_and_Lord_Nityananda_Prabhu_joyfully_participate_in_the_Panihati_Chida-Dadhi_Mahotsava..png",
        imagePosition: "object-top",
        category: "Festival",
        date: "May 2026",
        author: "HKM Team",
        link: "/blog/panihati-chida-dadhi-mahotsava"
    }
]

export default async function BlogPage() {
    let dbPosts: BlogPost[] = []

    try {
        const { data, error } = await supabase
            .from("blogs")
            .select("id, title, excerpt, hero_image, published_at, author, slug, categories(name)")
            .eq("status", "published")
            .order("published_at", { ascending: false })

        if (!error && data) {
            dbPosts = (data as any[]).map(b => ({
                id: b.id,
                title: b.title,
                excerpt: b.excerpt || "",
                image: b.hero_image || "/assets/hkm-hero-new.jpg",
                category: (b.categories as any)?.name || "Article",
                date: formatDate(b.published_at),
                author: b.author || "HKM Team",
                link: `/blog/${b.slug}`,
            }))
        }
    } catch {
        // Fall back to static posts only
    }

    // DB posts first (newest first), then static posts that don't share a link
    const dbLinks = new Set(dbPosts.map(p => p.link))
    const staticPosts = STATIC_POSTS.filter(p => !dbLinks.has(p.link))
    const allPosts = [...dbPosts, ...staticPosts]

    return <BlogListingClient posts={allPosts} />
}
