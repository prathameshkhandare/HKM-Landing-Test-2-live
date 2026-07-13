import { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
    title: 'Sri Bhaktivinoda Thakura: Life, Teachings & Legacy | HKM Chennai',
    description: 'Discover Sri Bhaktivinoda Thakura\'s life — the magistrate-acharya who found Mayapur, wrote 100 books, and foretold the worldwide Hare Krishna movement.',
    keywords: 'Sri Bhaktivinoda Thakura, Bhaktivinoda Thakura biography, discovery of Mayapur birthplace, Bhaktisiddhanta Sarasvati Thakura father, Gaudiya Vaishnava acharya, Srila Prabhupada disciplic succession, Jaiva Dharma, Saranagati, Seventh Gosvami, ISKCON Thiruvanmiyur blog',
    openGraph: {
        title: 'Sri Bhaktivinoda Thakura: Life, Teachings & Legacy | HKM Chennai',
        description: 'Discover Sri Bhaktivinoda Thakura\'s life — the magistrate-acharya who found Mayapur, wrote 100 books, and foretold the worldwide Hare Krishna movement.',
        images: [
            {
                url: '/images/sri-bhaktivinoda-thakura/hero.png',
                width: 1200,
                height: 630,
                alt: 'Sri Bhaktivinoda Thakura, Gaudiya Vaishnava acharya and father of Srila Bhaktisiddhanta Sarasvati Thakura.',
            },
        ],
        type: 'article',
    },
};

export default function SriBhaktivinodaThakuraBlog() {
    return <BlogClient />;
}
